const sendJson = (res,json) => {
    res.setHeader('Content-Type','application/json')
    res.send(json)
    return res
}

module.exports = {
    sendJson
}