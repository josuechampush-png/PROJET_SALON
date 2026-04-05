const express = require('express');
const app = express();

app.use(express.static('./'));

app.get('/', (req, res)=>{
    res.status(200).sendFile('accueilSalon.html', {root: __dirname});
});

app.get('/accueil', (req, res)=>{
    res.status(300).redirect('/');
});

app.get('/apropos', (req, res)=>{
    res.status(200).sendFile('aproposSalon.html', {root: __dirname});
})

app.use((req, res)=>{
    res.status(200).sendFile('accueilSalon.html', {root: __dirname});
});

app.listen(714, '0.0.0.0', ()=>{
    console.log("Serveur lancer sur localhost:714");
});








//https://dullish-jalen-nonaudible.ngrok-free.dev