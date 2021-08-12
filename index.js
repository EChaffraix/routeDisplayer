const express = require('express')
const app = express()
const port = 5000

app.get('/*', (req, res) => {
    console.log(`Call on : ${req.originalUrl} -> ${req.url}`);
    res.send(`Call received on : ${req.originalUrl} -> ${req.url}`);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})