import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";

const registration = async (req, res) => {
    const { email, password, password2 } = req.body;
    let errors = [];
  
    if (password != password2) {
      errors.push({ msg: 'Passwords do not match' });
    }
  
    if (password.length < 6) {
      errors.push({ msg: 'Password must be > 6 Characters.' });
    }
  
    if (errors.length > 0) {
      return res.render('register', {
        errors,
        email,
        password,
        password2
      });
    }
  
    try {
      const user = await User.findOne({ email });
  
      if (user) {
        errors.push({ msg: 'User already exists' });
        return res.render('register', {
          errors,
          email,
          password,
          password2
        });
      }
  
      const newUser = new User({ email, password });
  
      const salt = await bcrypt.genSalt(12);
      const hash = await bcrypt.hash(newUser.password, salt);
  
      newUser.password = hash;
      await newUser.save();
  
      res.redirect(`${process.env.CLIENT}/health`);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  export { registration };
  