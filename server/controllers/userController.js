var user = require("../models/user");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const validator = require("email-validator");


function validate(email){
   return validator.validate(email);
}

exports.login = async (req, res) => {
   let userData = req.body;

   let user = await user.find({ email: userData.email });
   if (user) {
      await bcrypt.compare(userData.password, user.password).then((status) => {
         if (status) {
            user.password = null;
            var accessToken = jwt.sign(userData, process.env.ACCESS_TOKEN_KEY);
            res.status(200);
            res.json({
               status: 200,
               message: "Authentication Successful",
               accessToken: accessToken,
               user: userData,
            });
         }
      });
   } else {
      res.status(401);
      res.json({
         status: 401,
         message: "Authentication Failed",
      });
   }
};

exports.signUp = async(req, res)=>{
   let userData = req.body;
   if(res.body.name && req.body.email && req.body.password && validate(userData.email)){
   userData.password = await bcrypt.hash(userData.password, 10);
   let user = new user({
      name: userData.name,
      email: userData.email,
      password: userData.password
   });
   user.save(async(err, users)=>{
      if(err){
         console.error(err);
         res.status(401);
         res.json({
            status: 401,
            message: "Error Creating User",
         });
      }else{
         userData.password = null;
         accessToken = await jwt.sign(userData, process.env.ACCESS_TOKEN_KEY);
         res.status(200);
         res.json({
            status: 200,
            message: "User Created Successfully",
            accessToken: accessToken,
            user: userData
         });
      }

   });
}else{
         res.status(401);
         res.json({
            status: 401,
            message: "Error Creating User",
         });
}
};
