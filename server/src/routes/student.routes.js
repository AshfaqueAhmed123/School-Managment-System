import {Router} from "express"

const router = Router();

router.route("/create-account").post();
router.route("/login").post();
router.route("/logout").post();
router.route("account-details").get();
router.route("/progress").get();
router.route("/assignments").get();
router.route("/updateAccount").patch();


export default router