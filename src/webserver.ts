import express from 'express'
import path from "path"

console.log(__dirname)

const app = express();
const port = 3000;

const project_path: string = "/mnt/c/Users/jmigu/Documents/projects/mal-challenge-helper.git/dev/dist"

app.get(['/', '/index'], (req, res) => {
    res.sendFile(path.join(project_path, "/index.html"))
})

app.get('/submit', (req, res) => {
    res.send("Thanks")
    console.log("Received submit request")
    console.log(req.query)
})

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(project_path, "/favicon.ico"))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
