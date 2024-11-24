import {Router} from "express"
import {
    register,
    login,
    logout,
    updateAccountDetails,
    refreshAccessToken
} from "../controllers/parent.controllers.js"
import {verifyParent} from "../middlewares/parentAuth.middleware.js"

const router = Router();


router.route("/create-account").post(register);
router.route("/login").post(login);
router.route("/logout").post(verifyParent,logout);
router.route("/updateAccount").patch(verifyParent,updateAccountDetails);

// children 
router.route("/children").get();
router.route("/children/:id").get();



export default router