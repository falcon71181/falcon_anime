const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(200).json({valid: false});
};

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
