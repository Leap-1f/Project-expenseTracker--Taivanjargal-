import { Router} from "express";

import { Didi } from "../controller/user";
 const user = Router()

 user.route('/user').get(getOneUser).post()