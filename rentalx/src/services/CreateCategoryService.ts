import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}
class CreateCategoryService {
    // private categoriesRepository: CategoriesRepository
    // constructor(categoriesRepository: CategoriesRepository){
    //     this.categoriesRepository = categoriesRepository;
    // }
    constructor(private categoriesRepository: CategoriesRepository){}

    execute({name, description}: IRequest): void{
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)

        if(categoryAlreadyExists){
            throw new Error('Category Already exists!')
        }

        this.categoriesRepository.create({
            name,
            description,
            created_at: new Date()

        })
    }
}

export {CreateCategoryService}