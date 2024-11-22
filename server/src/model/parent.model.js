import mongoose,{Schema,model} from "mongoose";

const parentSchema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    child:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    },
    profile_pic:{
        type:String,
    }
},{
    timestamps : true
})

export const Parent = model("Parent",parentSchema);