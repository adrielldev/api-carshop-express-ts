const createImageService = async (img?: string):Promise<any> =>{
  const { cloudinary } = require("../../utils/cloudnary");
  const fileStr = img;
  const uploadResponse = await cloudinary.uploader.upload(fileStr, {
    upload_preset: "ml_default",
  });
  return uploadResponse;
};

export default createImageService;
