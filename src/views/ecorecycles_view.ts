import Ecorecycle from '../models/Ecorecycle';
import imagesView from './images_view';

export default {
  render(ecorecycle: Ecorecycle) {
    return {
      id: ecorecycle.id,
      name: ecorecycle.name,
      latitude: ecorecycle.latitude,
      longitude: ecorecycle.longitude,
      about: ecorecycle.about,
      instructions: ecorecycle.instructions,
      opening_hours: ecorecycle.opening_hours,
      open_on_weekends: ecorecycle.open_on_weekends,
      images: imagesView.renderMany(ecorecycle.images)
    };
  },

  renderMany(ecorecycles: Ecorecycle[]) {
    return ecorecycles.map(ecorecycle => this.render(ecorecycle));
  }
};