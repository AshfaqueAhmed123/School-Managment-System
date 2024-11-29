import mongoose,{Schema,model} from "mongoose";

const meeting = new Schema({
    meetingID:{
        type:String
    },
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Teacher",
        required:true
    },
    parent:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Parent",
        required:true
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "student",
        // required:true
    },
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "class",
        // required:true
    },
    scheduleDate:{
        type:String,
    },
    scheduleTime:{
        type:String,
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