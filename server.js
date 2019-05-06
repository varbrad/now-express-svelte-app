// Get ENV variables from .env file for local dev
const path = require('path')
require('dotenv').config()

// Get our express app
const express = require('express')
const app = require('./src/api')

app.use(express.static('public'))

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('API running at localhost:3000'))
