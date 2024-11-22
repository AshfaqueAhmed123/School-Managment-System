import mongoose,{Schema,model} from "mongoose";

const subjectSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class"
    },
    subject_teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher"
    },
    assignments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Assignment"
    },
    students:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    }
},{
    timestamps:true
})

export const Subject = model("Subject",subjectSchema);