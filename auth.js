const mongoose=require('mongoose');
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=mongoose.model('User');
 passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

function register(username, password, errorCallback, successCallback,req,res) {
  if(username.length<8||password.length<8){
    console.log('USERNAME PASSWORD TOO SHORT,must bigger than 8 characters');
    const errObj={};
    errObj.message='USERNAME PASSWORD TOO SHORT,must bigger than 8 characters';
    errorCallback(errObj);
    return;
  }
  User.findOne({username:username}, (err,result,count)=>{
    if(err){
      console.log(err);
      const errObj={};
      errObj.message='findOne error.';
      errorCallback(errObj);
      return;
    }
    if(result){
      console.log('USERNAME ALREADY EXISTS');
      const errObj={};
      errObj.message='USERNAME ALREADY EXISTS';
      errorCallback(errObj);
      return;
    }else{
      User.register(new User({username:username}),password,(err,user)=>{
             if(err){
               console.log(err);
               const errObj={};
               errObj.message='Your registration information is not valid.';
               errorCallback(errObj);
               return;
             }else{
               passport.authenticate('local',function(err,user){
                 successCallback(user);
                 return;
               })(req,res);
             }
         });
    }

  });
}

function login(successCallback,errorCallback,req,res){
  passport.authenticate('local',(err,user)=>{
    if(user){
      successCallback(user);
      return;
    }else{
      console.log('Your login or password is not correct.');
      const errObj={};
      errObj.message='Your login or password is not correct.';
      errorCallback(errObj);
    }
  })(req,res);
}

module.exports = {
  register: register,
  login: login
};
