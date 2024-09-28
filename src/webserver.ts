import express from 'express'
import path from "path"
import * as AnimeRepository from "./db/AnimeRepository"

console.log(__dirname)

const app = express();
const port = 3000;

const project_path: string = "/mnt/c/Users/jmigu/Documents/projects/mal-challenge-helper.git/dev/dist"

app.get(['/', '/index'], (req, res) => {
    res.sendFile(path.join(project_path, "/index.html"))
})

app.get('/submit', (req, res) => {
    let mal_id = req.query.mal_id as string | undefined
    if (mal_id && mal_id !== '') {
        AnimeRepository.findAnimeByMalId(mal_id)
            .then((anime) => {
                res.json(anime)
            })
            .catch((err) => {
                res.status(404).send(err)
            })
    } else {
        res.status(400).send("mal_id is required")
    }
})

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(project_path, "/favicon.ico"))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
