const User = require("../models/User");
const jwt = require("jsonwebtoken");
const authWare = require("../customMiddleware/authware");
var db = require("../models");
const Pet = require("../models/Pets");
const PetSitter = require("../models/PetSitterMod");

module.exports = function (app) {
  app.get("/api/visits", function (req, res) {
    Pet
      .find({})
      .then(function (found) {
        res.json(found)
      })
      .catch(function (err) {
        res.status(500).json(err);
      });
  })

  app.post("/api/visits", function (req, res) {
    console.log(req.body);
    Pet
      .create(req.body)
      .then(function (saved) {
        res.json({ message: "saved" });
      })
      .catch(function (err) {
        res.status(500).json(err);
      });
  });

  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    User.create(req.body)
      .then(function (result) {
        res.json({
          message: "user created"
        });
      })
      .catch(function (err) {
        res.status(500).json({
          error: err.message
        });
      });
  });

  app.post("/api/authenticate", function (req, res) {
    console.log(req.body);
    const { username, password } = req.body;
    User.findOne({
      username: username
    }).then(function (dbUser) {
      if (!dbUser)
        return res.status(401).json({
          message: "Username and or password is incorrect"
        });
      if (dbUser.comparePassword(password)) {
        const token = jwt.sign(
          {
            data: dbUser._id
          },
          "secretKey"
        );

        res.json({
          id: dbUser._id,
          username: dbUser.username,
          token: token
        });
      } else {
        res.status(401).json({
          message: "Username and or password is incorrect"
        });
      }
    });
  });

  app.get("/api/me", authWare, function (req, res) {
    res.json({ username: req.user.username });
  })

  app.get("/api/protected", authWare, function (req, res) {
    const user = req.user;
    res.json({
      message: user.username + ", should be protected"
    });
  });

  app.post("/api/petSitters", function (req, res) {
    console.log(req.body);
    PetSitter.create(req.body)
      .then(result => {
        res.json({
          message: "sitter created"
        });
      })
      .catch(function (err) {
        console.log(err)
      });
  })

  app.get("/api/petSitters", function (res) {
    PetSitter.find({})
    .then(sitters => res.json(sitters)
    )
    .catch(function (err) {
      console.log(err);
    });
  })
};
