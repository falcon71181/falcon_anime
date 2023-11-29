const logOut = (req, res) => {
    req.logout();
    res.redirect('/users/login');
  }

export { logOut };