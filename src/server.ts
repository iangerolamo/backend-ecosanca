import express from 'express'; // requisições e respostas de rota
import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);



app.listen(3333);