const User = require('../models/user');

module.exports.profile = function(req,res){
   User.findById(req.params.id, function(err,user){

      return res.render('user_profile',{
         title : "users",
         A_users : "All users",
         profile_user : user
      });
   });
}

module.exports.update = function(req,res){
   if(req.user.id == req.params.id){
      User.findByIdAndUpdate(req.params.id, req.body , function(err,user){
         return res.redirect('back');
      });
   }else{
      return res.status(401).send("Unautharized!");
   }
}

//render the sign up page
module.exports.signUp = function(req,res){

   if(req.isAuthenticated()){
     return res.redirect('/users/profile');
   }

   return res.render('user_sign_up',{
      title : "Codeial | Sign up"
   })
}

//render the sign in page
module.exports.signIn = function(req,res){

   if(req.isAuthenticated()){
      return res.redirect('/users/profile');
   }

   return res.render('user_sign_in',{
      title : 'Codeial | Sign in'
   })
}

// Get the sign up data
module.exports.create = function(req,res){
   if(req.body.password != req.body.confirm_password){
      console.log("password and confirm password aren't same!");
      return res.redirect('back');
   }

   User.findOne({email: req.body.email},function(err,user){
      if(err){
         console.log("Error in finding user in signing up!");
         return;
      }

      if(!user){
         User.create(req.body,function(err,user){
            if(err){
               console.log("Error in creating user while signing up!");
               return;
            }
            return res.redirect('/users/sign-in');
         });
      }else{
         return res.redirect('back');
      }

   });
}


// sign in and create the session for user
module.exports.createSession = function(req,res){
   req.flash('success','Logged in Successfully');
   return res.redirect('/');
}

module.exports.destroySession = function(req,res){
   req.logout(function(err){
      if(err){
         console.log("Error in logging out the session");
         return;
      }
      req.flash('success','You have logged out!');
      return res.redirect('/');
   });
}