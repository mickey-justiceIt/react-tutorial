const User = require("../models/User");
const UserDate = require("../models/UserDate");
const errorHandler = require("../utils/errorHandler");
const bcrypt = require("bcryptjs");

module.exports.update = async (req, res) => {
  const user = await User.findOne({ email: req.params.email });

  const userDate = await new UserDate({
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    company: user.company,
    address: req.body.address,
    oldPassword: req.body.oldPassword,
    newPassword: req.body.newPassword,
  });

  const passwordCompare = bcrypt.compareSync(
    user.body.password,
    userDate.oldPassword
  );
  if (passwordCompare) {
    const salt = bcrypt.genSaltSync(10);
    let password = userDate.newPassword;
    password = bcrypt.hashSync(password, salt);
  }

  try {
    await userDate.save();
    res.status(200).json(userDate);
  } catch (e) {
    errorHandler(res, e);
  }
};
