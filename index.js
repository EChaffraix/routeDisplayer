const express = require('express')
const app = express()
const port = 8080

app.get('/*', (req, res) => {
    const message = `${process.env.NAME}|Call received on : ${req.originalUrl} -> ${req.url}`;
    console.log(message);
    res.send(message);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})