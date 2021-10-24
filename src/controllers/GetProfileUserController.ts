import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";

class GetProfieUserController {
    async handle(request: Request, response: Response) {
        const service = new ProfileUserService()

        const { user_id } = request

        const result = await service.execute(user_id)

        return response.json(result)
    }
}


export { GetProfieUserController }