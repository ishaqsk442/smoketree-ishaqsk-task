const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Add this line to import CORS
const { sequelize, User, Address } = require('./models');

const app = express();

// Enable CORS for all routes
app.use(cors());  // Add this line to enable CORS

app.use(bodyParser.json());

// Register a user and address
app.post('/register', async (req, res) => {
  try {
    const { name, address } = req.body;

    // Create a new user
    const user = await User.create({ name });

    // Create a new address linked to the user
    await Address.create({ address, userId: user.id });

    res.status(201).json({ message: 'User and Address created successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
