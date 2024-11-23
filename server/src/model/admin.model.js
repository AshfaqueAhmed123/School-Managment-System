import mongoose,{ Schema,model } from "mongoose";

const adminSchema = new Schema({
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
    description:{
        type:String,
        required:true
    },
    profile_pic:{
        type:String
    },
    refreshToken:{
        type:String
    },
},{
    timestamps:true
})

export const Admin = model("Admin",adminSchema);