const User =require("../models/users")
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

module.exports={ 
    registerUsers: async (req, res) => {
          try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(422).json({ errors: errors.array() });
            }
            const { name, email, password, role, phone } = req.body;
            let user = await User.findOne({ email });
      
            if (user) {
              res.status(400).json({ msg: "email already exists" });
            }
      
            user = new User({
              name,
              email,
              password,
              role,
              phone
            });
      
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
            const token = user.generateAuthToken();
            res.json({ 
              _id: user._id,
              name: user.name,
              email: user.email,
              password,
              role,
              token
      
             });
          } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
          }
        },
        // @route    POST auth/
        // @desc     Login a user
        // @access   Public
        loginUsers:
          async (req, res) => {
            try {
              const errors = validationResult(req);
              if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
              }
        
              const { email, password } = req.body;
              let user = await User.findOne({ email });
        
              if (!user) {
                return res.status(400).send({ msg: "Invalid email or password." });
              }
              const isMatch = await bcrypt.compare(password, user.password);
              if (!isMatch) {
                return res.status(400).send({ msg: "Invalid email or password." });
              }
              const token = user.generateAuthToken();
              res.json({ 
                _id: user._id,
                email: user.email,
                password,
                token
               });
            } catch (error) {
              res.status(500).send("Server error");
            }
          }
      ,
           // @desc    Get all users
       // @route   GET /api/users
      // @access  Private/Admin
      getUsers : async (req, res) => {
        const users = await User.find({})
         res.json(users) } ,
         
      AllUsers: async (req, res) => {
        try {
          const users = req.query.role
            ? await User.find({ role: req.query.role })
            : await User.find();
          if (!users) {
            return res.status(404).send({ msg: "no users were found" });
          }
          return res.send(users);
        } catch (error) {
          res.status(500).send("Server error");
        }
      }


}