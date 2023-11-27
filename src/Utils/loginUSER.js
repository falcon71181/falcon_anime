import passport from "passport";

const login = (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/api/login',
      failureFlash: true
    })(req, res, next);
}

export { login };