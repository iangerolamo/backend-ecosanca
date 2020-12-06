import express from 'express'; // requisições e respostas de rota

import './database/connection';

const app = express();

app.get('/users/:id', (request, response) => {
  return response.json({ message: 'Hello World!'})
});

app.listen(3333);