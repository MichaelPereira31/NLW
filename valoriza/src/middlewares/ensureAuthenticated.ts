import {Request, Response, NextFunction} from 'express'
import {verify}from 'jsonwebtoken'

interface IPayload{
    sub:string;
}

export function ensureAuthenticated(request:Request, response:Response, next:NextFunction){
    //Receber token
    const authToken = request.headers.authorization

    //Validar se token está preenchido
    if(!authToken){
        return response.status(401).send()
    }

    //validar se token é válido
    const [,token] = authToken.split(" ")
    try{
        const {sub} = verify(token,'6425ddbf9cd648e1e4d33c4340d3373d') as IPayload

        request.user_id = sub
        
        return next()
    }catch(err){
        return response.status(401).end()
    }

    //Recuperar infomrações do usuário
}