const express = require(`express`);
const app = express()
const port = 3000

let arrayPost = 
[
    {
        titolo: "ciambelloneTitolo",
        contenuto: "ciambelloneContenuto",
        img: "./images/ciambellone.jpeg",
        tags: ["ciambellone", "post"]

    },
    {
        titolo: "crackerTitolo",
        contenuto: "crackerContenuto",
        img: "./images/cacker_barbabietola",
        tags: ["cracker", "barbabietola",]

    },
    {
        titolo: "paneFrittoTitolo",
        contenuto: "PaneFrittoContenuto",
        img: "./images/pane_fritto_dolce.jpeg",
        tags: ["pane", "fritto"]

    },
    {
        titolo: "pastaTitolo",
        contenuto: "pastaContenuto",
        img: "./images/pasta_barbabietola.jpeg",
        tags: ["pasta", "barbabietola"]

    },
    {
        titolo: "tortaTitolo",
        contenuto: "tortaContenuto",
        img: "./images/torta_paesana.jpeg",
        tags: ["torta", "paesana"]

    },
]

app.get(`/`, (req, res) => {
    res.send(`Server del mio blog`)
})

app.get(`/bacheca`, (req, res) => {
    const post = arrayPost

    res.json(post)
})

app.listen(port, ()=> {
    console.log(`esempio ${port}`);
    
})