import { Router } from "express";
import { createUser, loginUser, getUser, detailsUser, saveProfilePicture, updateRole } from "../controllers/usersControllers";
import {autenticacion, autenticacionLogin} from "../middlewares/autenticacion";
import { catchAsync, catchAsync404 } from "../utils/catchAsync";
import multer from "multer";
import { verifyAdmin, verifyToken } from "../middlewares/jwtVerify";

const router = Router();

const upload = multer({ dest: 'uploads/' });

router.post("/register",autenticacion, catchAsync(createUser))

router.post("/login",autenticacionLogin,catchAsync(loginUser))
//user
router.get("/:id", verifyToken, catchAsync404(detailsUser))

router.post("/upload/:id", verifyToken, upload.single("profilePicture"),catchAsync(saveProfilePicture))
//admin

router.get("/",verifyToken, verifyAdmin, catchAsync404(getUser));

router.put("/uploadRole/:id", verifyToken, verifyAdmin, catchAsync404(updateRole))

export default router;