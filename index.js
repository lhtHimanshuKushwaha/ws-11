const express = require('express')
const upload = require('express-fileupload')
const chalk = require("chalk");
const app = express()
app.use(upload())
app.get('/upload', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.post('/', (req, res) => {
    if (req.files) {
        console.log(req.files)
        var file = req.files.file
        var filename = file.name
        console.log(filename)

        file.mv('./uploads/' + filename, function (err) {
            if (err) {
                res.send(err)
            } else {
                res.send("File Uploaded")
            }
        })
    }
})
app.listen(5000, console.log(chalk.redBright("connection successful")))