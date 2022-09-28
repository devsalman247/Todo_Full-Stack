const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        body : {
            type     : String,
            required : [true, 'todo body cannot be empty']
        },
        done : {
            type    : Boolean,
            default : false
        }
    },
    {timestamps : true}
);

todoSchema.methods.toJSON = function() {
    return {
        id : this.id,
        body : this.body,
        done : this.done
    }
}

module.exports = mongoose.model('Todo',todoSchema);