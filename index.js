const express = require("express");

require("dotenv").config();

const app = express();

const router = express.Router();

const PORT = process.env.PORT || 9500;

const path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); 

app.get("/", (req, res) => {
    res.sendFile('index.html');
  });

router.get('/', (req, res)=>{
    res.send('Listado de Usuarios');
  });

router.post('/', (req, res)=>{

    console.log(req.url);

    const {usuario, password} = req.body;

    let datoUsuario = req.body.usuario;
    let datoPassword = req.body.password;

    console.log(datoUsuario);
    console.log(datoPassword)

    res.send(`Hemos recibido tus datos ${usuario} - ${password}`);

});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is running at http://localhost:${PORT}`);
});
 