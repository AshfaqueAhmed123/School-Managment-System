import {Router} from "express"
import {
    getAllClasses
} from "../controllers/class.controllers.js"
const router = Router();


router.route("AllClasses",getAllClasses)

export default Router();