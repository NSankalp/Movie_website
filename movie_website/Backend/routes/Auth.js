const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    if (error.code === 11000) { // Duplicate key error
      res.status(400).send({ error: 'Username already exists' });
    } else {
      res.status(500).send({ error: 'Internal server error' });
    }
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send({ error: 'Invalid username or password' });
    }
    if (user.password !== password) {
      return res.status(400).send({ error: 'Invalid username or password' });
    }
    res.send({ message: 'Login successful' });
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
});

module.exports = router;
