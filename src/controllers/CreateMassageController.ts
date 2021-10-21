import {Request, Response} from "express";
import { CreateMessageService } from "../services/CreateMessageService";
import { io } from "../app";
// import {AuthenticateUserService} from "../services/AuthenticateUserService";

class CreateMassageController{
    async handle(request: Request, response: Response){
        const { message } = request.body;
        const {user_id} = request

        const service = new CreateMessageService()

        const result = await service.execute(message, user_id)

        io.emit("new_message",)

        return response.json(result)
    }
}


export {CreateMassageController}