const express = require('express');
const router = require('../routes/routes');

const server = express();

server.use(express.json());
server.use('/api/user', router);

server.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome'
  });
});

server.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid routes'
  });
});

module.exports = server;
