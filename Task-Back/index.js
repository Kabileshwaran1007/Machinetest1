const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const verifyToken = require("./middleware/AuthMiddleware");
const userRoutes = require('./routes/userRoutes');
const app = express(); 
const port = 8080;


app.use(cors());
app.use(bodyParser.json()); 
app.use(express.json()); 

const url = 'mongodb://127.0.0.1:27017/Task01';


mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
  app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
   