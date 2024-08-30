import { Router } from "express";
import { createUser, loginUser, getUser, detailsUser, saveProfilePicture } from "../controllers/usersControllers";
import {autenticacion, autenticacionLogin} from "../middlewares/autenticacion";
import { catchAsync, catchAsync404 } from "../utils/catchAsync";
import multer from "multer";

const router = Router();

const upload = multer({ dest: 'uploads/' });

router.post("/register",autenticacion, catchAsync(createUser))

router.post("/login",autenticacionLogin,catchAsync(loginUser))

router.post("/upload/:id", upload.single("profilePicture"),catchAsync(saveProfilePicture))

router.get("/", catchAsync404(getUser));

router.get("/:id",catchAsync404(detailsUser))

export default router;