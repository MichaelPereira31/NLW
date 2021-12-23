import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories"

class ListUserService{
    async execute(){
        const userRepository = getCustomRepository(UserRepositories)
        const users = await userRepository.find()
        return classToPlain(users)
    }
}
export {ListUserService}