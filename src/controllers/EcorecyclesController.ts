import { Request, Response } from 'express';
import { getRepository} from 'typeorm';

import Ecorecycle from '../models/Ecorecycle';

export default {
  async index(request: Request, response: Response) {
    const ecorecyclesRepository = getRepository(Ecorecycle);

    const ecorecycles = await ecorecyclesRepository.find();

    return response.json(ecorecycles);
  },

  async create(request: Request, response: Response) {
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
  }
};