const express = require('express');
const morgan = require('morgan');
const path = require('path');

const server = express();

server.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

server.use(express.static(path.resolve(__dirname, '..', 'Client')));

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'Client', 'index.html'));
});

module.exports = server;
