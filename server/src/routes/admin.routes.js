import {Router} from "express"

const router = Router();


router.route("/create-account").post();
router.route("/login").post();
router.route("/logout").post();
router.route("/update-account").patch();
router.route("/refreshAccessToken").post();


export default router