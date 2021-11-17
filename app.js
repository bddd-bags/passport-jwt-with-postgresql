const express = require("express");
const app = express();
const { PORT = 3000 } = process.env;
const passport = require("./lib/passport");

app.use(express.json());
app.use(passport.initialize());

app.use(require("./routes/router"));

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
