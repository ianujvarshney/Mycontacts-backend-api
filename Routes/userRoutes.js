const express = require('express');

const router = express.Router();

router.post("/register", (req, res) => {
    res.json("Register");
});


router.post("/login", (req, res) => {
  res.json("login");
});


router.post("/Current", (req, res) => {
  res.json("Current");
});

