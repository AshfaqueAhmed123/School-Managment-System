import {Router} from "express"
import {

    register,
    login,
    logout

} from "../controllers/teacher.controllers.js"
import { verifyTeacher } from "../middlewares/teacherAuth.middleware.js";

const router = Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(verifyTeacher,logout);
router.route("account-details").get();
router.route("/updateAccount").patch();

// assignment routes
router.route("/assignment").post().patch().delete();

// meeting routes
router.route("/meeting").post();
router.route("/all-meeting").get();
router.route("/meeting/:id").get();
router.route("/meeting/:id").patch();
router.route("/meeting/:id").delete();





export default router
