import express from 'express'; // requisições e respostas de rota

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!'})
});

app.listen(3333);