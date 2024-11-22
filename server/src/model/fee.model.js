import mongoose,{ Schema,model } from "mongoose";

const feeSchema = new Schema({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    },
    totalAmountRemaining:{
        type:String,
        required:true
    }
},{ 
    timestamps:true
});

export const Fee = model("Fee",feeSchema);