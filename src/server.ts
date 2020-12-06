import express from 'express'; // requisições e respostas de rota
import './database/connection';

const app = express();

app.use(express.json());

app.post('/ecorecycles', (request, response) => {
  console.log(request.body)

  return response.json({ message: 'Hello World!'})
});

app.listen(3333);