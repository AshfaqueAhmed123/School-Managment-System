import {Router} from "express"

const router = Router();


router.route("/create-account").post();
router.route("/login").post();
router.route("/logout").post();
router.route("account-details").get();
router.route("/updateAccount").patch();

// children 
router.route("/children").get();
router.route("/children/:id").get();



export default router