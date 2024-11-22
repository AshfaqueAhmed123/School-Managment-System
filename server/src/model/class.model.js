import mongoose, {Schema,model} from "mongoose"

const classSchema = new Schema({

    grade_name:{
        type:String,
        required : true,
    },
    total_students_count:{
        type:Number,
        required:true
    },
    all_students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref : "Student"
        }
    ],
    class_teacher:{
        type:String,
        required:true
    },

},{timestamps : true})

export const Class = model("Class",classSchema); 
