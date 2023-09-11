const express = require('express');
const api = express.Router()
// const books = require('../../routes/book')

api.get("/", (req, res) => res.status(200).json({
    status: 'success',
    message: 'Welcome to My Books App API'
}))


module.exports = api