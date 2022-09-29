const router = require("express").Router(),
      passport = require("passport"),
      strategy = require("../../config/passport"),
      User = require("../../models/User");

passport.use(strategy);

// user, admin, staff
router.post("/signup", (req, res) => {
  const { email, password} = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: "Please provide all input fields!" });
  }
  const user = new User();
  user.email = email;
  user.password = password;
  user.save()
  .then((data) => {
    if(!data) {
      res.send({error : {message : "Signed up failed.Try again!"}});
    }
    res.send(user.toAuthJSON());
  })
  .catch((err) => {
    res.send({error : {message : err.message}})
  });
});

// user, admin, staff
router.post("/login", function (req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({
      error: {
        message: "Email and password field must be provided to login."
      },
    });
  }
  passport.authenticate(
    "local",
    { session: false },
    function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (user) {
        return res.json({ user: user.toAuthJSON() });
      } else {
        return res.status(422).json(info);
      }
    }
  )(req, res, next);
});

module.exports = router;
