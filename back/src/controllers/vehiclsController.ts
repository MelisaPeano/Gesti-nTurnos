import { createVehicleService, getVehiclesService, deleteVehicleService} from "../services/vehiclsServer";
import { Request, Response } from "express";



export const getVehiclesController = async (req: Request, res: Response) => {
  const vehicles = await getVehiclesService();
  return res.status(200).json(vehicles);
}


export const createVehicleController = async (req: Request, res: Response) => {
    const { year, brand, color, model, userId } = req.body;
  if (!year || !brand || !color || !model || !userId ){
    return res.status(404).json("faltan datos")
  }
  
  const newVehicle = await createVehicleService({ 
        year, 
        brand, 
        color,
        model, 
        userId, 
        servicio: []
    })

   return res.status(201).json(newVehicle);
}

export const deleteVehicleController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deleted = await deleteVehicleService(+id);
   return res.status(200).json(deleted);
}