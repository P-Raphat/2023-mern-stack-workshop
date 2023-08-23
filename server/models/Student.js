const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name:String,
    email:String,
    rollno:String
    
},{
    collection:"student-list",
    timestamps: true, 
    versionKey: false
}
)

module.exports = mongoose.model('Student',studentSchema)
// module.exports = studentSchema;