// recorda imoportar en el server
import { Router } from "express";
import { appointmentControllers } from "../controllers/appointmentsControllers";

const appointmentsRouter = Router();

appointmentsRouter.get("/appointments", appointmentControllers.getAppointments);
appointmentsRouter.get("/appointments/:id", appointmentControllers.myAppointment);
appointmentsRouter.post("/appointment/shedule", appointmentControllers.addAppointment);
appointmentsRouter.put("/appointments/cancel/:id", appointmentControllers.cancellAppointment);

export default appointmentsRouter;