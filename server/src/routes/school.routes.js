import {Router} from "express"

const router = Router();


router.route("/create").post()
router.route("/delete").delete()
router.route("/update").patch()

router.route("/students/all").get();
router.route("/students/:id").get().patch().delete();

router.route("/teachers/all").get();
router.route("/teachers/:id").get().patch().delete();

export default router;