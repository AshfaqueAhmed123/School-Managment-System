import {Router} from "express"
import {
    register,
    login,
    logout,
    updateAccountDetails
} from "../controllers/admin.controllers.js "
import {verfifyAdmin} from "../middlewares/AdminAuth.middleware.js"

const router = Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(verfifyAdmin,logout);
router.route("/update-account").patch();
router.route("/refreshAccessToken").post();


export default router