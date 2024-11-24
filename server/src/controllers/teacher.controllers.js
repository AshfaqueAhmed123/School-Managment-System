import {Teacher} from "../model/Teacher.model.js";
import ApiResponse from "../utils/ApiResponse.utils.js";
import ApiError from "../utils/ApiError.utils.js";


const generateAccessAndRefereshTokens = async (userId) => {
    try {
      const teacher = await Teacher.findById(userId);
      const accessToken = teacher.generateAccessToken();
      const refreshToken = teacher.generateRefreshToken();
  
      teacher.refreshToken = refreshToken;
      await teacher.save({ validateBeforeSave: false });
  
      return { accessToken, refreshToken };
    } catch (error) {
      console.log(error);
    }
  };


const register = async (req,res)=>{
    try {
        const { fullname, email,password, phone_number,profile_pic ,classTeacherOfClass ,isClassTeacher,job_description,subject} =
      req.body;

    if (
      [fullname, email, phone_number, password, classTeacherOfClass, isClassTeacher, job_description, subject].some(
        (field) => field === ""
      )
    ) {
      return res.status(400).json(new ApiError(400, "All fields are required"));
    }

    const existedUser = await Teacher.findOne({
      $or: [{ fullname }, { email }],
    });

    if (existedUser) {
      return res
        .status(400)
        .json(new ApiError(400, "user already exists with same name or email"));
    }

    const teacher = await Teacher.create({
      fullname,
      email,
      phone_number,
      password,
      isClassTeacher,
      classTeacherOfClass,
      job_description,
      subject
    });

    return res
      .status(200)
      .json(new ApiResponse(200, "user created sucessfully", teacher));
    } catch (error) {
        return res.status(500).json(
          new ApiError(500,error?.message)
        )
    }
}


const login = async (req,res)=>{
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json(new ApiError(400, "email and password is required"));
      }
  
      const teacher = await Teacher.findOne({ email });
  
      if (!teacher) {
        return res.status(400).json(new ApiError(400, "teacher not found"));
      }
  
      const isPasswordValid = await teacher.isPasswordCorrect(password);
  
      if (!isPasswordValid) {
        return res.status(401).json(new ApiError("no"));
      }
  
      const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
        teacher._id
      );
  
      const loggedInUser = await Teacher.findById(teacher._id).select(
        "-password -refreshToken"
      );
  
      return res.status(200).json(
        new ApiResponse(200, "teacher logged in succesfully", {
          accessToken,
          refreshToken,
        })
      );
    } catch (error) {
        return res.status(500).json(
          new ApiError(500,error?.message)
        )
    }
}


const logout = async (req,res)=>{
    try {
      await Teacher.findByIdAndUpdate(
        req.teacher._id,
        {
          $unset: {
            refreshToken: 1, // this removes the field from document
          },
        },
        {
          new: true,
        }
      );
      return res.status(200).json(new ApiResponse(200, "logged out sucessfully"));
    } catch (error) {
        return res.status(500).json(
          new ApiError(500,error?.message)
        )
    }
}


const updateAccountDetails = async (req,res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json(
          new ApiError(500,error?.message)
        )
    }
}


const refreshAccessToken = async (req,res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json(
          new ApiError(500,error?.message)
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