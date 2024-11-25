import {Router} from "express"
import {verfityStudent} from "../middlewares/studentAuth.middleware.js"
import {verifyTeacher} from "../middlewares/teacherAuth.middleware.js"
import {verifyParent} from "../middlewares/parentAuth.middleware.js"
import {verfifyAdmin} from "../middlewares/AdminAuth.middleware.js"

const router = Router()

router.route("/student").get(
    verfityStudent,(req,res)=>{
        res.status(200).json({
            success:true,
            message:"congrats student you are authorized!"
        })
    }
);

router.route("/teacher").get(
    verifyTeacher,(req,res)=>{
        res.status(200).json({
            success:true,
            message:"congrats teacher you are authorized!"
        })
    }
);

router.route("/parent").get(
    verifyParent,(req,res)=>{
        res.status(200).json({
            success:true,
            message:"congrats parent you are authorized!"
        })
    }
);

router.route("/admin").get(
    verfifyAdmin,(req,res)=>{
        res.status(200).json({
            success:true,
            message:"congrats admin you are authorized!"
        })
    }
);


export default router