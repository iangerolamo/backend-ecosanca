import express from 'express'; // requisições e respostas de rota


import './database/connection';

const app = express();

app.use(express.json());



app.listen(3333);