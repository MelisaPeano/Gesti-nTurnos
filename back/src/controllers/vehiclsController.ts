import { Request, Response } from "express";
import{ createNewVehicle  } from "../services/vehiclsServer";

export const createNewVehicleController = async (req: Request, res: Response): Promise<void> => {
    const { marca, year } = req.body;
    const { id } = req.params;
    const newVehicle = await createNewVehicle({ marca, year, userId: Number(id) });
    res.status(201).json(newVehicle);
    
}