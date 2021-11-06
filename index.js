const express = require('express');
const app = express();


app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(__dirname + '/html/index.html');
});

app.get("/sobre", (req, res) => {
    res.send("Sobre");
})

app.get('/blog', () => {
    res.send('BemVindo ao meu Blog');
})

app.get("/ola/:cargo/:nome/:cor", () => {
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2> Seu Cargo é:" + req.params.cargo + "</h2>" + "<h3> Sua cor preferida é:" + req.params.cor + "</h3>");
})


app.listen(8081, () => {
    console.log('Server is running on port 8081');
})
