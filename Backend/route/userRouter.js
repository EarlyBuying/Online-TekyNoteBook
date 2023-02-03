const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    //get value from frontend
    const { email, password, passwordVerify } = req.body;
    //validation
    if (!email || !password || !passwordVerify) {
      return res
        .status(400)
        .json({ errorMessage: "Please complete all the lines" });
    }
    //password validation
    if (password.length < 8) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter characters more than 6" });
    }

    if (password !== passwordVerify) {
      return res.status(400).json({ errorMessage: "Check password again" });
    }
    const alreadyUser = await User.findOne({ email });
    if (alreadyUser) {
      return res
        .status(400)
        .json({ errorMessage: "This email already register" });
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      userPassword: hashPassword,
    });

    const savedUser = await newUser.save();
    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
    return res.status(200).json({ successMessage: "You have been registered" });
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    //check all filds filed
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ errorMessage: "Please complete all the lines" });
    }

    //check valid email
    const checkEmail = await User.findOne({ email });
    if (!checkEmail) {
      return res.status(400).json({ errorMessage: "Please register " });
    }

    //check password
    const validPassword = await bcrypt.compare(
      password,
      checkEmail.userPassword
    );
    if (!validPassword) {
      return res.status(401).json({ errorMessage: "Check your password" });
    }

    //Get token
    const token = jwt.sign(
      {
        user: checkEmail._id,
      },
      process.env.JWT_SECRET
    );
    console.log(token);
    //token convert to cookie and send
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (error) {
    console.log(error);
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);
    res.send(true);
  } catch (error) {
    res.json(false);
  }
});

module.exports = router;
