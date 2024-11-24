import {Parent} from "../model/parent.model.js"
import ApiResponse from "../utils/ApiResponse.utils.js";
import ApiError from "../utils/ApiError.utils.js";


const generateAccessAndRefereshTokens = async (userId) => {
    try {
      const parent = await Parent.findById(userId);
      const accessToken = parent.generateAccessToken();
      const refreshToken = parent.generateRefreshToken();
  
      parent.refreshToken = refreshToken;
      await parent.save({ validateBeforeSave: false });
  
      return { accessToken, refreshToken };
    } catch (error) {
      console.log(error);
    }
  };


const register = async (req,res)=>{
    try {
        const { fullname, email, password, phone_number, child, profile_pic } =
        req.body;
  
      if (
        [fullname, email, phone_number, password, child].some(
          (field) => field?.trim() === ""
        )
      ) {
        return res.status(400).json(new ApiError(400, "All fields are required"));
      }
  
      const existedUser = await Parent.findOne({
        $or: [{ fullname }, { email }, { rollNo }],
      });
  
      if (existedUser) {
        return res
          .status(400)
          .json(new ApiError(400, "user already exists with same name or email"));
      }
  
      const parent = await Parent.create({
        fullname,
        email,
        phone_number,
        password,
        child,
      });
  
      return res
        .status(200)
        .json(new ApiResponse(200, "user created sucessfully", parent));
    } catch (error) {
        return res.status(500).json(
        )
    }
}


const login = async (req,res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json(

        )
    }
}


const logout = async (req,res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json(

        )
    }
}


const updateAccountDetails = async (req,res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json(

        )
    }
}


const refreshAccessToken = async (req,res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json(

        )
    }
}

export {
    register,
    login,
    logout,
    updateAccountDetails,
    refreshAccessToken
}