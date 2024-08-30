import { Router } from "express";
import { getAppointments, myAppointment, addAppointment, cancellApointment} from "../controllers/appointmentsControllers";
import { catchAsync, catchAsync404 } from "../utils/catchAsync";
import autenticacionAppointment from "../middlewares/addAppointment";

const appointmentRoutes= Router();

appointmentRoutes.get("/", catchAsync404(getAppointments));

appointmentRoutes.get("/:id", catchAsync404(myAppointment));

appointmentRoutes.post("/schedule",autenticacionAppointment,catchAsync(addAppointment));

appointmentRoutes.put("/cancel/:id", catchAsync404(cancellApointment));

export default appointmentRoutes;