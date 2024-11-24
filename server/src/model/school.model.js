import mongoose,{Schema,model} from "mongoose"

const schoolSchema = new Schema({
    name:{},
    school_id:{},
    student:{},
    teachers:{},
    description:{},
},{
    timestamps:true
})

const School = model("School",schoolSchema);