import {Admin} from "../model/admin.model.js"
import ApiResponse from "../utils/ApiResponse.utils.js"
import ApiError from "../utils/ApiError.utils.js"



const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const admin = await Admin.findById(userId)
        const accessToken = admin.generateAccessToken()
        const refreshToken = admin.generateRefreshToken()

        admin.refreshToken = refreshToken
        await Admin.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        res.status(500).json(
            new ApiError(500,"Something went wrong while generating referesh and access token")
        )
    }
}

const register = async(req,res)=>{
    try {

        const {fullName, email,  phone_number ,password, description } = req.body;

        if (
            [fullName, email, username, password].some((field) => field?.trim() === "")
        ) {
            res.status(400).json(
                new ApiError(400,"All fields are required")
            )
        }

        const existedUser = await Admin.findOne({
            $or: [{ fullName }, { email }]
        })

        if (existedUser) {
            res.status(400).json(
                new ApiError(400,"user already exists with same name or email")
            )
        }

        const admin = await Admin.create({
            fullName,
            email,
            phone_number,
            password,
            description,
        })

        
    } catch (error) {
        res.status(500).json(
            new ApiError(500,"something went wrong")
        )
    }
}

const login = async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json(
            new ApiError(500,error?.message||"something went wrong")
        )
    }
}

const logout = async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json(
            new ApiError(500,error?.message||"something went wrong")
        )
    }
}

const updateAccountDetails = async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json(
            new ApiError(500,error?.message||"something went wrong")
        )
    }
}


export {
    register,
    login,
    logout,
    updateAccountDetails
}