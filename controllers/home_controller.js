const Post = require("../models/post");
const User = require("../models/user");

module.exports.home = async function (req, res) {
    console.log(req.cookies);
    res.cookie("user_id", 25);
    
    try {
    //POPULATE THE USER OF EACH POST
    let posts = await Post.find({})
      .populate("user")
      .populate({
        path: "comments",
        populate: {
          path: "user",
        },
      });
    let users = await User.find({});
    // .exec(function(err,posts){
    //     User.find({},function(err,users){

    return res.render("home", {
      title: "Codeial | Home",
      posts: posts,
      all_users: users,
    });
    // })

    // });
  } catch (err) {
    console.log("Error", err);
    return;
  }
};
