const express = require('express');
const app = express();
const name = 'james'
app.get('/home', (req,res,next) => {
    res.send(name)
})
const port = 4000;
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})