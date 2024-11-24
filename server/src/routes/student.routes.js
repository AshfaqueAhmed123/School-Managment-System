import {Router} from "express"
import {
    register,
    login,
    logout
} from "../controllers/student.controllers.js"
import {verfityStudent} from "../middlewares/studentAuth.middleware.js"

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(verfityStudent,logout);
router.route("account-details").get();
router.route("/progress").get();
router.route("/assignments").get();
router.route("/updateAccount").patch();


export default router