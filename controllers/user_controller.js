module.exports.profile = function(req,res){
   return res.render('users',{
      title : "users",
      A_users : "All users"
   })
}

