import { Router } from 'express';
import { getRepository} from 'typeorm';
import Ecorecycle from './models/Ecorecycle';


const routes = Router();

routes.post('/ecorecycles', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = request.body;

  const ecorecyclesRepository = getRepository(Ecorecycle);

  const ecorecycle =  ecorecyclesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  await ecorecyclesRepository.save(ecorecycle);

  return response.status(201).json(ecorecycle)
});