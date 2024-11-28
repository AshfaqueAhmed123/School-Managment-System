import { Admin } from "../model/admin.model.js";
import ApiResponse from "../utils/ApiResponse.utils.js";
import ApiError from "../utils/ApiError.utils.js";

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const admin = await Admin.findById(userId);
    const accessToken = admin.generateAccessToken();
    const refreshToken = admin.generateRefreshToken();

    admin.refreshToken = refreshToken;
    await admin.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { fullname, email, phone_number, password, description } = req.body;

    if (
      [fullname, email, phone_number, password].some(
        (field) => field?.trim() === ""
      )
    ) {
      return res.status(400).json(new ApiError(400, "All fields are required"));
    }

    const existedUser = await Admin.findOne({
      $or: [{ fullname }, { email }],
    });

    if (existedUser) {
      return res
        .status(400)
        .json(new ApiError(400, "user already exists with same name or email"));
    }

    const admin = await Admin.create({
      fullname,
      email,
      phone_number,
      password,
      description,
    });

    return res
      .status(200)
      .json(new ApiResponse(200, "user created sucessfully", admin));
  } catch (error) {
    return res.status(500).json(new ApiError(500, error.message));
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json(new ApiError(400, "email and password is required"));
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json(new ApiError(400, "admin not found"));
    }

    const isPasswordValid = await admin.isPasswordCorrect(password);

    if (!isPasswordValid) {
      return res.status(401).json(new ApiError({
        statusCode:401,
        message:"incorrect password"
      }));
    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      admin._id
    );

    const loggedInUser = await Admin.findById(admin._id).select(
      "-password -refreshToken"
    );

    return res.status(200).json(
      new ApiResponse(200, "admin logged in succesfully", {
        accessToken,
        refreshToken,
      })
    );
  } catch (error) {
    return res
      .status(500)
      .json(new ApiError(500, error?.message || "something went wrong"));
  }
};

const logout = async (req, res) => {
  try {
    await Admin.findByIdAndUpdate(
      req.admin._id,
      {
        $unset: {
          refreshToken: 1, // this removes the field from document
        },
      },
      {
        new: true,
      }
    );
    return res.status(200).json(
      new ApiResponse(200,"logged out sucessfully")
    )
  } catch (error) {
    return res
      .status(500)
      .json(new ApiError(500, error?.message || "something went wrong"));
  }
};

const updateAccountDetails = async (req, res) => {
  try {
    const {fullname,email,phone_number,description} = req.body;
    if(!fullname || !email || !phone_number || !description){
      return res.status(200).json(
        new ApiError(400,"all fields are required")
      )
    }
    let admin = Admin.findOne({email});
    console.log(admin);
    
    if(admin){
      admin.email = email;
      admin.fullname = fullname;
      admin.phone_number = phone_number;
      admin.description = description;
      await admin.save({validateBeforeSave:false})
        return res.status(200).json(
          new ApiResponse(
            200,
            "updated account details",
            res
          )
        )
      
    } else{
      return res.status(200).json(
        new ApiError(400,"admin not found")
      )
    }
  } catch (error) {
    return res
      .status(500)
      .json(new ApiError(500, error?.message || "something went wrong"));
  }
};

export { register, login, logout, updateAccountDetails };
