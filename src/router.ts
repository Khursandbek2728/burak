import express, { Request, Response } from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
import routerAdmin from "./router-admin";

export default router;