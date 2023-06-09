import { Express } from 'express';
import { CorsRequest } from 'cors';

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS

app.post('/api/token', (req, res) => {
    // Implement your logic to generate and return the access token
    // Retrieve any necessary data from req.body or req.query
    // Generate the access token based on your authentication flow
    // Send the access token in the response
  });
  

  const port = 3001; // Choose a port number for your server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
