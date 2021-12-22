import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories"
import{ hash } from 'bcryptjs'

interface IUserRequest{
    name:string;
    email:string;
    admin?:boolean;
    password:string
}
class CreateUserService{
    async execute({name,email,admin,password}:IUserRequest){
        const usersRepository = getCustomRepository(UserRepositories)

        if(!email){
            throw new Error('email incorrect')
        }

        const userAlreadyExists = await usersRepository.findOne({email})

        if(userAlreadyExists){
            throw new Error('User already exists')
        }

        const passwordHash = await hash(password,8)

        const user = usersRepository.create({
            name,
            email,
            admin,
            password:passwordHash
        })

        await usersRepository.save(user)

        return user
    }
}
export {CreateUserService}