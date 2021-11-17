const passport = require("passport");
const { Strategy: JwtStratregy, ExtractJwt } = require("passport-jwt");
const { User } = require("../models");

const options = {
  // untuk mengekstrak jwt dari request, dan mengambil tokennya dari headers Authorization
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  /* Harus sama seperti dengan apa yang kita masukkan sebagai parameter kedua dari jwt.sign di User Model.
    Inilah yang kita pakai untuk memverifikasi apakah tokennya dibuat oleh sistem kita */
  secretOrKey: "hai saya upin",
};

passport.use(
  new JwtStratregy(options, async (payload, done) => {
    User.findByPk(payload.id)
      .then((user) => done(null, user))
      .catch((err) => done(err, false));
  })
);

module.exports = passport;
