const jwt = require('jsonwebtoken');
const functions = require('../helpers/functions');

/**
 * @name Authenticate
 * @module middleware/authenticate
 * @function
 * @param {require('express').Request} req
 * @param {require('express').Response} res
 * @param {require('express').NextFunction} next
 * @return {undefined}
 */
// module.exports.authenticate = async (req, res, next) => {
//   const authHeaders = req.headers['authorization'];
//   const token = authHeaders && authHeaders.split(' ')[1];

//   if (token === null)
//     return res.status(401).json({status: 401, message: 'Unauthorized'});

//   await jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
//     if (err) {
//       return res.status(401).json({status: 401, message: 'Unauthorized'});
//     } else {
//       req.user = user;
//       next();
//     }
//   });
// };

module.exports.authenticate = async(req, res, next) => {
  const accessToken = req.cookies.acces_token;
  const refreshToken = req.cookies.refresh_token;
  const user = req.cookies.user;
  console.log(req.cookies);
  if(accessToken && refreshToken){
    await jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY, async (err, foundUser)=>{
      if(err){
         functions.verifyToken(refreshToken).then((token)=>{
          if(user){
          functions.generateAccessToken(user).then((newToken)=>{
                  res.cookie("access_token", newToken, {maxAge: 3600000, httpOnly: true, sameSite: 'none', path: '/'});
                  next();
          });
          }else{
            return res.status(401).json({status: 401, message: 'Unauthorized'});    
          }
         });
      }else{
        req.user = foundUser;
        next();
      }
    });
  }else{
    return res.status(401).json({status: 401, message: 'Unauthorized'});
  }
}