import mongoose,{Schema,model} from "mongoose";

const attendenceSchema = new Schema({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    },
    date:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        required:true,
    }
},{
    timestamps:true
})

export const  Attendence = model("Attendence",attendenceSchema)