import { Router } from "express";
import UserController from "../controller/User";
const userRouter = Router();


userRouter.get("/", UserController.index);
userRouter.post("/", UserController.store);

export default userRouter;