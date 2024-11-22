import mongoose,{Schema,model} from "mongoose";{}

const assignmentSchema = new Schema({
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Class"
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Subject"
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Teacher"
    },
    students_who_compeleted:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref : "Student"
        }
    ],
},{
    timestamps : true
})

export const Assignment = model("Assignment",assignmentSchema);  