import mongoose,{Schema,model} from "mongoose";

const meeting = new Schema({
    meetingID:{
        type:String,
        required:true
    },
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Teacher"
    },
    parent:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Parent"
    },
    scheduleDate:{
        type:String,
        required:true
    },
    scheduleTime:{
        type:String,
        required:true
    },
    scheduleStatus:{
        type:String,
        enum:["pending","compeleted","cancelled"],
        default:"pending",
    },
},{
    timestamps:true,
})

export const Meeting = model("Meeting",meeting);