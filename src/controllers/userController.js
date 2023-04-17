import userService from "../services/userService";
import bcrypt from "bcryptjs";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs paraeter! ",
    });
  }

  let userData = await userService.handleUserLogin(email, password);
  //check email exist
  // comprare password
  // return userInfor
  // acess_token: JWT json web token
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};
module.exports = {
  handleLogin: handleLogin,
};
