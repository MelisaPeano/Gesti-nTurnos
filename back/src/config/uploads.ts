import multer, { StorageEngine } from 'multer';
import fs from 'fs';
import path from 'path';


const uploadDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
} 

const storage: StorageEngine = multer.diskStorage({
    destination: (req, file, cb) => { 
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${file.originalname}`;
      cb(null, uniqueSuffix);
    },
  });
  const upload = multer({ dest: path.join(__dirname, '../../uploads/') }); 
  
  export default upload;