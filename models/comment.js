const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
// const User = require('./user');
// const Post = require('./post');
const commentSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    //comment belongs to a user
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
},{
    timestamps: true
});

const Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment;