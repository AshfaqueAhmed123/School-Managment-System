import ApiResponse from "../utils/ApiResponse.utils.js";
import ApiError from "../utils/ApiError.utils.js"
import { Meeting } from "../model/meeting.model.js";
import {v4 as uuidV4} from "uuid"

const createMeeting = async (req,res) => {
    try {
        const {meetingID,teacher,parent,scheduleDate,scheduleTime,scheduleStatus} = req.body;
        if(!teacher || !parent){
            return res.status(400).json(
                new ApiError(400,"parent and teacher are required")
            )
        }
        const meeting = await Meeting.create({
            meetingID : uuidV4(),
            parent,
            teacher,
            scheduleStatus:"pending"
        });
        return res.status(200).json(
            new ApiResponse(200,"meeting created",meeting)
        )
    } catch (error) {
        return res.status(500).json(
            new ApiError(500,error?.message || "something went wrong")
        )
    }
}


const getAllMeetings = async (req,res) => {
    try {
        const meetings = await Meeting.find();
        return res.status(200).json(
            new ApiResponse(200,"all meetings fetched",meetings)
        )
    } catch (error) {
        return res.status(500).json(
            new ApiError(500,error?.message || "something went wrong")
        )
    }
}


const deleteMeeting = async (req,res) => {
    try {
        const id = req.params.id;
        if(!id){
            return res.status(400).json(
                new ApiError(400,"id is required")
            )
        }
        const response = await Meeting.deleteOne({_id:id})
        return res.status(200).json(
            new ApiResponse(200, "meeting deleted", response)
        )
    } catch (error) {
        return res.status(500).json(
            new ApiError(500,error?.message || "something went wrong")
        )
    }
}

export {
    createMeeting,
    getAllMeetings,
    deleteMeeting,
}