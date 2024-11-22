import mongoose, {Schema,model} from "mongoose";

const progressSchema = new Schema({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject"
    },
    compeleted_assignments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Assignment"
    },
},{
    timestamps : true
})

export const Progress = model("Progress", progressSchema);