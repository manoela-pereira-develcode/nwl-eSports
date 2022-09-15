import express from "express"

const app = express();

app.get("/ads", (req, response) => {
    return response.json([
        {id: 1, name: "anuncio 1"},
        {id: 2, name: "anuncio 2"},
        {id: 3, name: "anuncio 33"},
        {id: 4, name: "anuncio 4"}

    ])
})

app.listen(3333)