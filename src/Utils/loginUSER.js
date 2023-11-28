import passport from "passport";

const login = (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: `${process.env.CLIENT}/profile`,
      failureRedirect: `${process.env.CLIENT}/login`,
      failureFlash: true
    })(req, res, next);
}

export { login };