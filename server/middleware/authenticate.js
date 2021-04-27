const jwt = require('jsonwebtoken');

module.exports.authenticate = async(req, res, next)=>{

const authHeaders = req.headers['authorization'];
const token = authHeaders && authHeaders.split(' ')[1];

if(token == null) return res.sendStatus(401)

await jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user)=>{
	if(err){
		return res.sendStatus(403);
	}else{
		req.user = user;
		next();
	}
});

} 