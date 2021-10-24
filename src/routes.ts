import {Router} from "express";
import {AuthenticateUserService} from "./services/AuthenticateUserService";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import {ensureAuthenticated} from "./middleware/ensureAuthenticated";
import {CreateMassageController} from "./controllers/CreateMassageController";
import { Get3LastMassagesController } from "./controllers/GetLast3MessagesController";
import { GetProfieUserController } from "./controllers/GetProfileUserController";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)
router.post("/message", ensureAuthenticated, new CreateMassageController().handle)

router.get("/messages/last3", new Get3LastMassagesController().handle)
router.get("/user", ensureAuthenticated ,new GetProfieUserController().handle)

export { router }