import express, { json } from "express";
import { Routas } from './Route/Routes.js';
import { Cors } from "./Midlewhare/cors.js";
//import { ModalMYSQL } from "./Modal/Mysql.js";
import { Local } from "./Modal/Local.js";
const app = express();

app.use(Cors());
app.use(json());
app.use('/', Routas({Modal:Local})); 

app.use((req, res) => {
    res.status(404).send('ERROR 404');
});

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
    console.log('Está en el puerto ' + Port);
});
