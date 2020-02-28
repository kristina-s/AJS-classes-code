const express = require('express')
const port = 3030

var app = express()


app.get('/people', (req, res) => {
    let data = [
        { id: 1, name: "John Snow" },
        { id: 2, name: "Geralt of Rivia" },
        { id: 3, name: "Duffy Duck" }
    ];
    res.send(data)
})

app.get('/planets', (req, res) => {
    let data = [
        { id: 1, name: "Saturn" },
        { id: 2, name: "Mars" },
        { id: 3, name: "Neptune" }
    ];
    res.send(data)
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))