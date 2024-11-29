import {Router} from "express"
import {
    createMeeting,
    deleteMeeting,
    getAllMeetings,
} from "../controllers/meeting.controllers.js"

const router = Router();

router.route("/create").post(createMeeting);

router.route("/update/:id").patch();

router.route("/delete/:id").delete(deleteMeeting);

router.route("/getAll").get(getAllMeetings);

router.route("get/:id").get();


export default router