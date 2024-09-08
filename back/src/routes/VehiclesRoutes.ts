import { Router } from "express";
import { catchAsync404 } from "../utils/catchAsync";
import { getVehiclesController, createVehicleController, deleteVehicleController } from "../controllers/vehiclsController";
import {verifyAdmin, verifyToken }from "../middlewares/jwtVerify";

const vehiclesRouter = Router();
// admin
vehiclesRouter.get("/allvehicles", verifyToken, verifyAdmin, catchAsync404(getVehiclesController));

vehiclesRouter.post("/new", verifyToken, catchAsync404(createVehicleController));

vehiclesRouter.delete("/:id",verifyToken, catchAsync404(deleteVehicleController));


export default vehiclesRouter;