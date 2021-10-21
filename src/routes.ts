import {Router} from "express";
import {AuthenticateUserService} from "./services/AuthenticateUserService";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import {ensureAuthenticated} from "./middleware/ensureAuthenticated";
import {CreateMassageController} from "./controllers/CreateMassageController";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)
router.post("/message", ensureAuthenticated, new CreateMassageController().handle)

export { router }