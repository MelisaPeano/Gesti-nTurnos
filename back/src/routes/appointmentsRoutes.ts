import { Router } from "express";
import { getAppointments, myAppointment, addAppointment, cancellApointment} from "../controllers/appointmentsControllers";
import { catchAsync, catchAsync404 } from "../utils/catchAsync";
import autenticacionAppointment from "../middlewares/addAppointment";
import { verifyAdmin, verifyToken }from "../middlewares/jwtVerify";

const appointmentRoutes= Router();
// admin
appointmentRoutes.get("/",verifyToken, verifyAdmin, catchAsync404(getAppointments));

// user \\ employee
appointmentRoutes.get("/:id", verifyToken, catchAsync404(myAppointment));

appointmentRoutes.post("/schedule",verifyToken, autenticacionAppointment,catchAsync(addAppointment));

appointmentRoutes.put("/cancel/:id", verifyToken, catchAsync404(cancellApointment));

export default appointmentRoutes;