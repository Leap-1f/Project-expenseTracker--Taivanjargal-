import { Router} from "express";

import { Didi } from "../controller/uset";
 const user = Router()

 user.route('/user').get(Didi).post()