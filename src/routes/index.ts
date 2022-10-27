import { Router } from "express";
import userRouter from "./User";

const mainRoutes = Router();

mainRoutes.use("/user", userRouter)


export default mainRoutes;