const express = require(`express`);
const arrayPost = require(`./modules/post`);
const app = express()
const port = 3000

app.use(express.static(`public`));

app.get(`/`, (req, res) => {
    res.send(`Server del mio blog`)
})

app.get(`/bacheca`, (req, res) => {
    const post = arrayPost

    res.json(post)
})

app.listen(port, ()=> {
    console.log(`In ascolto alla porta ${port}`);
    
})