import {Router} from "express"
import {getAllUSer} from " ../controller/user.js"

const user = Router()

user.route("/").get(getAllUser)