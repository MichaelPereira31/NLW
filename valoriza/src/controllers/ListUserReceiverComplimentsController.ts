import { Request, Response } from "express"
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService"

class ListUserReceiverComplimentsController{
    async handle(request:Request, response:Response){
        const {user_id} = request
        const listUserReceiverComplimentsController = new ListUserReceiveComplimentsService()
        const compliments = await listUserReceiverComplimentsController.execute(user_id)
        return response.json(user_id)

    }
}

export {ListUserReceiverComplimentsController}