var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hey, what up.')
})

app.listen(3001, function() {
    console.log('Music backend listening on port 3001')
})
