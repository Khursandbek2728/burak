import path from "path";
import multer from "multer";
import { v4 } from "uuid";

/* MULTER IMAGE UPLOADER */
function getTargetImageStorage(adress: any) {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./uploads/${adress}`);
    },
    filename: function (req, file, cb) {
      const extension = path.parse(file.originalname).ext;
      const random_name = v4() + extension;
      cb(null, random_name);
    },
  });
}

const makeUploader = (adress: string) => {
  const storage = getTargetImageStorage(adress);
  return multer({ storage: storage });
};

export default makeUploader;

/*
const product_storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/products");
    },
    filename: function (req, file, cb) {
        console.log(file);
        const extension = path.parse(file.originalname).ext;
        const random_name = v4() + extension;
        cb(null, random_name);
    },
});

export const uploadProductImage = multer({ storage: product_storage });
*/
