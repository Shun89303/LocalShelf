import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/products");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, "product-" + uniqueSuffix + ext);
    }
});

const upload = multer({
    storage,
    limits: { files: 1}
});

export default upload;