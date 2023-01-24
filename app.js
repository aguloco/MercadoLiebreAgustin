const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, ('/public'))));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

<<<<<<< HEAD
app.listen(3001, function () {
    console.log('Servidor corriendo en puerto 3001')
=======
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
>>>>>>> 089c21879253bb7be42bc42de22ac2393e609935
})

*/
