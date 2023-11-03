const { Signup,Login } = require("../Controllers/AuthController");
const {userVerification} = require('../Middlewares/AuthMiddleware');

const router = require("express").Router();




 router.post('/', userVerification);
// router.post('/', function(req, res){
//     userVerification
//   });
router.post("/signup", Signup);
router.post('/login', Login);
// router.post('/',userVerification);
console.log(typeof userVerification);

module.exports = router;