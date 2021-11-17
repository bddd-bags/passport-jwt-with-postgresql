const { User } = require("../models");

function format(user) {
  const { id, username, password } = user;
  return {
    id,
    username,
    password,
    accessToken: user.generateToken(),
  };
}

module.exports = {
  // kita panggil static method yang kita buat di models tadi
  register: (req, res, next) => {
    User.register(req.body)
      .then(() => res.json({ message: "SUCCESS" }))
      .catch((err) => next(err));
  },
  login: (req, res) => {
    User.login(req.body)
      .then((user) => res.json(format(user)))
      .catch((reject) => res.json({ message: reject }));
  },
  whoami: (req, res) => {
    const currentUser = req.user;
    res.json(currentUser);
  },
};
