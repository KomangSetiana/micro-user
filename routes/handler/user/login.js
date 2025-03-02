const bcrypt = require("bcrypt");
const { User } = require("../../../models");
const validator = require("fastest-validator");
const v = new validator();

module.exports = async (req, res) => {
  const shcema = {
    email: "email|empty:false",
    password: "string|empty:false|min:6",
  };

  const validate = v.validate(req.body, shcema);

  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const user = await User.findOne({
    where: { email: req.body.email },
  });

  if (!user) {
    return res.status(404).json({
      status: "error",
      mesage: "user not found",
    });
  }
  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isValidPassword) {
    return res.status(404).json({
      status: "error",
      message: "user not found",
    });
  }

  res.json({
    status: 'success',
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      profession: user.profession,
    },
  });
};
