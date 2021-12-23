import { Request, response, Response } from "express";
import { ListUserService } from "../services/ListUserService";

class ListUserController{
    async handle(request:Request, reponse:Response){
        const listUser = new ListUserService()
        const users = await listUser.execute()
        return response.json(users)
    }
}
export {ListUserController}