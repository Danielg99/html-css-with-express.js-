const http = require('http')
const express = require('express')
const host = '127.0.0.1'
const port = 8080

const restAPI = express()
restAPI.use(express.static('client'))

restAPI.listen(8080, () => {
  console.log('Server running at http://127.0.0.1:8080/');
});
