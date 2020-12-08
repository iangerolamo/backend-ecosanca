import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${(Math.random() * 20)}-${file.originalname.split(' ').join('+')}`;

      cb(null, fileName)
    },
  })
};