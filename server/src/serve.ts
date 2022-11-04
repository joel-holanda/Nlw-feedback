import express from 'express'

const app = express();

app.get('/user', (req, res) => {
    return res.send("hello")
})

app.listen(3333, () => {
    console.log("Server On")
})