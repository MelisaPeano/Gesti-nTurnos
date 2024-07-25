import express from "express";
import router from "./routes/usersRoutes";
import morgan from "morgan";
import appointmentsRouter from "./routes/appointmentsRoutes";



const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use( "/",appointmentsRouter);
server.use("/users", router);

export default server;
