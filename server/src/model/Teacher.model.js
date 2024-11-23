import mongoose,{Schema,model, mongo} from "mongoose";

const teacherSchema = new Schema({

    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true
    },
    isClassTeacher:{
        type:Boolean,
        required:true,
    },
    classTeacherOfClass:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class"
    },
    job_description:{
        type:String,
        required:true
    },
    meetings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Meeting"
        }
    ],
    profile_pic:{
        type:String
    },
    refreshToken:{
        type:String
    },
},{
    timestamps : true
})

export const Teacher = model("Teacher",teacherSchema);