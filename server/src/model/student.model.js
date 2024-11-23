import {Schema,model} from "mongoose"

const studentSchema = new Schema({
    fullName:{
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
    phone_number : {
        type : String,
    },
    roll_no:{
        type:String,
    },
    class : {
        type : String,
        required:true,
    },
    classAssignments: {
        type : String,
    },
    profile_pic:{
        type:String
    },
    refreshToken:{
        type:String
    },
},{timestamps:true})

export const Student = model("Student",studentSchema); 