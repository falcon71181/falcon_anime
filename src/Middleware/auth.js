//  User Token must be Authenticated
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(200).json({valid: false});
};

//  Verify User Token, Sent { valid: false/true } boolean value to Client
const validAuthentication = (req, res) => {
  const data = {
    valid: false
  }
  if (req.isAuthenticated()) {
    data.valid = true;
  }
  res.status(200).json(data);
};

export { ensureAuthenticated, validAuthentication };
