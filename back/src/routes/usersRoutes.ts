import router from "./index";
import { createUser, getUser, deleteUser} from "../controllers/usersControllers";

router.post("users/register", createUser);
router.post("users/login");

router.get("/users", getUser);

router.delete("/users", deleteUser);

router.get("users/:id")

export default router;