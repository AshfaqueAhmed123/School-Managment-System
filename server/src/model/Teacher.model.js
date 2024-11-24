import mongoose,{Schema,model, mongo} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

import dotenv from "dotenv"
dotenv.config()

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
    subject:{
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


teacherSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

teacherSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

teacherSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
teacherSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const Teacher = model("Teacher",teacherSchema);