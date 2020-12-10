import { Request, Response } from 'express';
import { getRepository} from 'typeorm';
import ecorecycleView from '../views/ecorecycles_view';
import * as Yup from 'yup';

import Ecorecycle from '../models/Ecorecycle';

export default {
  async index(request: Request, response: Response) {
    const ecorecyclesRepository = getRepository(Ecorecycle);

    const ecorecycles = await ecorecyclesRepository.find({
      relations: ['images']
    });

    return response.json(ecorecycleView.renderMany(ecorecycles));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const ecorecyclesRepository = getRepository(Ecorecycle);

    const ecorecycle = await ecorecyclesRepository.findOneOrFail(id, {
      relations: ['images']
    });

    return response.json(ecorecycleView.render(ecorecycle));
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

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename }
    })
  
    const data =  ecorecyclesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    });

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      )
    })

    await schema.validate(data, {
      abortEarly: false,
    });

    const ecorecycle = ecorecyclesRepository.create(data);
  
    await ecorecyclesRepository.save(ecorecycle);
  
    return response.status(201).json(ecorecycle)
  }
};