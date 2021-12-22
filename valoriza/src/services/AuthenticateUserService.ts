import { compare } from "bcryptjs"
import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories"
import {sign} from 'jsonwebtoken'


interface IAuthenticateRequest{
    email:string;
    password:string;
}

class AuthenticateUserService{
    async execute({email,password}:IAuthenticateRequest){
        const userRepository = getCustomRepository(UserRepositories)
        const user = userRepository.findOne({email})
        console.log(user)
        if(!user){
            throw new Error('Email/Password incorrect')
        }
        //Verificar senha 
        const passwordMatch = await compare(password,(await user).password)

        if(!passwordMatch){
            throw new Error('Email/Password incorrect')
        }

        //Gerar token
        const token = sign({
            email:(await user).email,
        },"6425ddbf9cd648e1e4d33c4340d3373d",{
            subject:(await user).id,
            expiresIn:"1d"
        })

        return token
    }
}

export{AuthenticateUserService}