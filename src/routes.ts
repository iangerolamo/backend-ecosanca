import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import EcorecyclesController from './controllers/EcorecyclesController';


const routes = Router();
const upload = multer(uploadConfig);

routes.get('/ecorecycles', EcorecyclesController.index);
routes.get('/ecorecycles/:id', EcorecyclesController.show);
routes.post('/ecorecycles', upload.array('images'),EcorecyclesController.create);

export default routes;