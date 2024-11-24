import { Student } from "../model/student.model.js";
import ApiResponse from "../utils/ApiResponse.utils.js";
import ApiError from "../utils/ApiError.utils.js";

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const student = await Student.findById(userId);
    const accessToken = student.generateAccessToken();
    const refreshToken = student.generateRefreshToken();

    student.refreshToken = refreshToken;
    await student.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { fullname, email, rollNo, classLetter, password,phone_number, profile_pic } = req.body;

    if (
      [!fullname, !email, !password, !rollNo, !classLetter].some(
        (field) => field === ""
      )
    ) {
      return res.status(400).json(new ApiError(400, "All fields are required"));
    }

    const existedUser = await Student.findOne({
      $or: [{ fullname }, { email }]
    });    

    if (existedUser) {
      return res
        .status(400)
        .json(new ApiError(400, "user already exists with same name or email"));
    }

    const createdStudent = await Student.create({
      fullname,
      email,
      phone_number,
      password,
      rollNo,
      classLetter,
    });

    return res
      .status(200)
      .json(new ApiResponse(200, "user created sucessfully", createdStudent));
  } catch (error) {
    return res.status(500).json(
      new ApiError(500,error?.message)
    );
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

    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(400).json(new ApiError(400, "student not found"));
    }

    const isPasswordValid = await student.isPasswordCorrect(password);

    if (!isPasswordValid) {
      return res.status(401).json(new ApiError("no"));
    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      student._id
    );

    const loggedInUser = await Student.findById(student._id).select(
      "-password -refreshToken"
    );

    console.log(accessToken, refreshToken);
    return res.status(200).json(
      new ApiResponse(200, "student logged in succesfully", {
        accessToken,
        refreshToken,
      })
    );
  } catch (error) {
    return res.status(500).json(
      new ApiError(500,error?.message)
    );
  }
};

const logout = async (req, res) => {
  try {
    await Student.findByIdAndUpdate(
      req.student._id,
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
    );
  }
};

const updateAccountDetails = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json();
  }
};

const refreshAccessToken = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json();
  }
};

export { register, login, logout, updateAccountDetails, refreshAccessToken };
