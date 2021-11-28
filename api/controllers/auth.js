const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const User = require("../models/User");
const errorHandler = require("../utils/errorHandler");

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({
    email: req.body.email,
  });
  if (candidate) {
    //  when email true, comparing passwords
    const passwordResult = bcrypt.compareSync(
      req.body.password,
      candidate.password
    );
    if (passwordResult) {
      // after success auth creating token
      const token = jwt.sign(
        {
          email: candidate.email,
          userId: candidate.id,
        },
        keys.jwt,
        { expiresIn: 60 * 60 }
      );
      res.status(200).json({
        userId: candidate.id,
        token: `Bearer ${token}`,
      });
    } else {
      // throw error password
      res.status(401).json({
        message: "Password mismatch",
      });
    }
  } else {
    // throw error email
    res.status(404).json({
      massage: "User with this email not found",
    });
  }
};

module.exports.register = async function (req, res) {
  const candidate = await User.findOne({
    email: req.body.email,
  });
  if (candidate) {
    // If exists throw error
    res.status(409).json({
      message: "User with this email already exists.Try another email",
    });
  } else {
    // Creating  user
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      company: req.body.company,
      email: req.body.email,
      address: req.body.address,
      password: bcrypt.hashSync(password, salt),
    });
    try {
      await user.save();
      res.status(201).json(user);
    } catch (e) {
      errorHandler(res, e);
    }
  }
};

module.exports.getUser = async (req, res) => {
  const user = await User.findOne({ id: req.body.id });
  try {
    await user.save();
    res.status(200).json(user);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.updateUserInfo = async (req, res) => {
  try {
    const setNewPassword = (currentPass, oldPass, newPass) => {
      const passwordCompare = bcrypt.compareSync(oldPass, currentPass);

      if (passwordCompare) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(newPass, salt);
      }

      return "";
    };

    let user2 = await User.findOne({ id: req.body.id });
    let user = await User.findOneAndUpdate(
      { id: req.body.id },
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        company: req.body.company,
        email: req.body.email,
        address: req.body.address,
        password: setNewPassword(
          user2.password,
          req.body.oldPassword,
          req.body.newPassword
        )
          ? setNewPassword(
              user2.password,
              req.body.oldPassword,
              req.body.newPassword
            )
          : req.body.password,
      },
      { new: true }
    );

    await user.save();
    res.status(200).json(user);
  } catch (e) {
    errorHandler(res, e);
  }
};
