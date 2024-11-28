import {Class} from "../model/class.model.js"
import ApiResponse from "../utils/ApiResponse.utils.js";
import ApiError from "../utils/ApiError.utils.js";


const getAllClasses = async () => {
    try {
        const classes = await Class.find();
        if (classes) {
            return res.status(200).json(
                new ApiResponse(
                    200,
                    "all classes fetched",
                    classes
                )
            )
        }
    } catch (error) {
        return res
        .status(500)
        .json(new ApiError(500, error?.message || "something went wrong"));
    }
}

export {getAllClasses}