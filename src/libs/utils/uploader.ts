import path from "path";
import multer from "multer";
import { v4 } from "uuid";

function getTargetImageStorage(address: any) {
  return multer.diskStorage({
    destination: function (req: any, file: any, cb: (arg0: null, arg1: string) => void) {
      cb(null, `./uploads/${address}`);
    },
    filename: function (req: any, file: { originalname: string; }, cb: (arg0: null, arg1: string) => void) {
      const extension = path.parse(file.originalname).ext;
      const random_name = v4() + extension;
      cb(null, random_name);
    },
  });
}

const makeUploader = (address: string) => {
  const storage = getTargetImageStorage(address);
  return multer({ storage: storage });
};

export default makeUploader;

/*
const product_storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/products");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const extension = path.parse(file.originalname).ext;
    const random_name = v4() + extension;
    cb(null, random_name);
  },
});
*/

// export const uploadProductImage = multer({ storage: product_storage });
