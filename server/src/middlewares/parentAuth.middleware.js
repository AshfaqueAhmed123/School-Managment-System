import { Parent } from "../model/parent.model.js";
import ApiError from "../utils/ApiError.utils.js";
import ApiResponse from "../utils/ApiResponse.utils.js";
import jwt from "jsonwebtoken";

export const verifyParent = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    // console.log(token);
    if (!token) {
      return res.status(401).json(new ApiError(401, "unauthorized request"));
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const parent = await Parent.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!parent) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.parent = parent;
    next();
  } catch (error) {
    return res.status(400).json(new ApiError(400, error.message));
  }
};
