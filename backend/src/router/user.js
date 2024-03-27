import { Router } from "express";
import { getOneUser } from "../controller/user.js";

const user = Router();

// user.route("/").get(getOneUser).post();
user.get("/", getOneUser);

export default user;
