import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

interface ITag{
    name:string;
}
class CreateTagService{
    async execute({name}:ITag){
        const tagsRepository = getCustomRepository(TagsRepositories)
        
        if(!name){
            throw new Error("Incorect name")
        }

        const tagAlreadyExists = await tagsRepository.findOne({
            name
        })

        if(tagAlreadyExists){
            throw new Error('Tag Already exists')
        }

        const tag = tagsRepository.create({name})

        await tagsRepository.save(tag)

        return tag
    }
}
export {CreateTagService}