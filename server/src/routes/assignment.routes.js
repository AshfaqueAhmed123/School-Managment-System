import {Router} from "express"

const router = Router();


router.route("/create")
router.route("/get-all")
router.route("/:id").get().patch().delete();


export default router;