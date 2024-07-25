// recorda imoportar en el server
import { Router } from "express";

const appointmentsRouter = Router();

appointmentsRouter.get("/appointments");
appointmentsRouter.get("/appointments/:id");
appointmentsRouter.post("/appointment/shedule");
appointmentsRouter.put("/appointments/cancel/:id");

export default appointmentsRouter;