import MemberModel from "../schema/Member.model";
import { Member, MemberInput, LoginInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";
import * as bcryptjs from "bcryptjs";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;
  }

  /** SPA */
  public async signup(input: MemberInput): Promise<Member> {
    const salt = await bcryptjs.genSalt();
    input.memberPassword = await bcryptjs.hash(input.memberPassword, salt);

    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = "";
      return result.toJSON() as unknown as Member;
    } catch (err) {
      console.log("Error, model:signup", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    // TODO: Consider member status later
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick }, // filter
        { memberNick: 1, memberPassword: 1 } // projection
      )
      .exec();
    console.log(member);
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

    const isMatch = await bcryptjs.compare(
      input.memberPassword,
      member.memberPassword
    );

    if (!isMatch)
      throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);

    const result = await this.memberModel.findById(member._id).lean().exec();
    return result as unknown as Member;
  }

  /** SSR */
  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

    const salt = await bcryptjs.genSalt();
    input.memberPassword = await bcryptjs.hash(input.memberPassword, salt);

    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = "";
      return result as unknown as Member;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async processLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick }, // filter
        { memberNick: 1, memberPassword: 1 } // projection
      )
      .exec();
    console.log(member);
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

    const isMatch = await bcryptjs.compare(
      input.memberPassword,
      member.memberPassword
    );

    if (!isMatch)
      throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);

    const result = await this.memberModel.findById(member._id).exec();
    return result as unknown as Member;
  }
}

export default MemberService;
