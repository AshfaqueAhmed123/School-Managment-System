import { Teacher } from "../model/Teacher.model.js";
import ApiError from "../utils/ApiError.utils.js";
import ApiResponse from "../utils/ApiResponse.utils.js";
import jwt from "jsonwebtoken";

export const verifyTeacher = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    // console.log(token);
    if (!token) {
      return res.status(401).json(new ApiError(401, "unauthorized request"));
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const teacher = await Teacher.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!teacher) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.teacher = teacher;
    next();
  } catch (error) {
    return res.status(400).json(new ApiError(400, error.message));
  }
};
