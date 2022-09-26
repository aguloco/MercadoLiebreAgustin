const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, ('/public'))));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get("/views/register.html", (req,res) => {
    res.sendFile (path.join(__dirname, '/views/register.html'));
    }
);


app.get("/views/login.html", (req,res) => {
    res.sendFile (path.join(__dirname, '/views/login.html'));
    }
);


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})



/* app.listen(3000, function () {
    console.log('Servidor corriendo en puerto 3000')
})

*/
