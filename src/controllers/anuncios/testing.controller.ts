import { Request, Response } from "express";
import createAnuncioService from "../../services/anuncios/createAnuncio.service";

const testing = async (req: Request, res: Response) => {
  try{
    const filterFile = req.body.data
  }catch(error){
    console.error(error)
  }
};

export default testing;
