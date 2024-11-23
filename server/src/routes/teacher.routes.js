import {Router} from "express"

const router = Router();


router.route("/create-account").post();
router.route("/login").post();
router.route("/logout").post();
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
