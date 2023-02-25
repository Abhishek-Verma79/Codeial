const mongoose = require('mongoose');
// const User = require('./user');
// const Comment = require('./comment');
mongoose.set('strictQuery',false);
const postSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'

    },
    //include the array of ids of all the comments in this post schema itself
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},{

    timestamps: true

});

const Post = mongoose.model('Post',postSchema);
module.exports = Post;