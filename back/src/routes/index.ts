import { Router } from "express";

const router: Router = Router();

router.use("/users", require("./usersRouters"));
router.use("/appointments", require(".appointmentsRouter"));

export default router;