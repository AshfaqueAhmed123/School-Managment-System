import {Schema,model} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

import dotenv from "dotenv"
dotenv.config()

const studentSchema = new Schema({
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
    phone_number : {
        type : String,
    },
    rollNo:{
        type:String,
    },
    classLetter : {
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

studentSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

studentSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

studentSchema.methods.generateAccessToken = function(){
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
studentSchema.methods.generateRefreshToken = function(){
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


export const Student = model("Student",studentSchema); 