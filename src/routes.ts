import { Router } from 'express';
import EcorecyclesController from './controllers/EcorecyclesController';


const routes = Router();

routes.get('/ecorecycles', EcorecyclesController.index);
routes.post('/ecorecycles', EcorecyclesController.create);

export default routes;