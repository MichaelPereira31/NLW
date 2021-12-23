import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController{
    async handle(request:Request, response:Response){
        const {user_id} = request
        const listUserSendComplimentsController = new ListUserSendComplimentsService()
        const compliments = await listUserSendComplimentsController.execute(user_id)
        return response.json(user_id)
    }
}

export {ListUserSendComplimentsController}