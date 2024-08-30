import { Router } from "express";
import { catchAsync404 } from "../utils/catchAsync";
import { getVehiclesController, createVehicleController, deleteVehicleController } from "../controllers/vehiclsController";

const vehiclesRouter = Router();

vehiclesRouter.get("/allvehicles", catchAsync404(getVehiclesController));

vehiclesRouter.post("/new",catchAsync404(createVehicleController));

vehiclesRouter.delete("/:id",catchAsync404(deleteVehicleController));


export default vehiclesRouter;