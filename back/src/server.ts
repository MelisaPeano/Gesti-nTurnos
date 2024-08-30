import express from "express";
import router from "./routes/usersRoutes";
import vehiclesRouter from "./routes/VehiclesRoutes";
import appointmentRoutes from "./routes/appointmentsRoutes";
import morgan from "morgan";
import cors from "cors";
import { MCatchAsync } from "./middlewares/MCatchAsync";
import path from "path";



const server = express();


server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
server.use('/uploads/', express.static(path.join(__dirname, '../uploads')));
server.use("/users", router);
server.use("/vehicles", vehiclesRouter)
server.use("/appointments", appointmentRoutes)
server.use(MCatchAsync);


export default server;
