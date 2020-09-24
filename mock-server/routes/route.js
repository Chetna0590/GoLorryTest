const express = require('express')
const router = express.Router()
const responses = require('../responses/resp')
const { sendJson } = require("../utils")

router.get('/user', (req,res) => {
    return sendJson(res, responses['/user'])
})

router.get('/orders', (req,res) => {
    return sendJson(res, responses['/orders'])
})

router.get('/reports', (req,res) => {
    return sendJson(res, responses['/reports'])
})

router.get('/trucks', (req,res) => {
    return sendJson(res, responses['/trucks'])
})

router.get('/drivers', (req,res) => {
    return sendJson(res, responses['/drivers'])
})

module.exports = router