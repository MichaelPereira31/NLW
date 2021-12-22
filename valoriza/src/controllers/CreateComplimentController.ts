import { Request, Response } from "express";
import { CreateComplimentsService } from "../services/CreateComplementsService";

class CreateComplimentController{
    async handle(request:Request, response:Response){
        const {tag_id,user_sender,user_receiver,message} = request.body
        const createComplimentService = new CreateComplimentsService()
        const compliment = await createComplimentService.execute({
            tag_id,
            user_sender,
            user_receiver,
            message
        })
        return response.json(compliment)
    }
}
export {CreateComplimentController}