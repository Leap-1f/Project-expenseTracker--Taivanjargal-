import { Router} from "express";

import { Didi } from "../controller/uset";
 const user = Router()

 user.route('/').get(Didi).post()



 export {user}