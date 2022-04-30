import { Router } from 'express'
import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router()

const categories: Category[] = [];
const categoriesRepository = new CategoriesRepository();
categoriesRoutes.post('/', (request,response) =>{
    const {name, description} = request.body

    const categoryAlreadyExists = categoriesRepository.findByName(name)

    if(categoryAlreadyExists){
        return response.status(400).json({error: 'Category Already exists!'})
    }

    categoriesRepository.create({
        name,
        description,
        created_at: new Date()

    })
    
    return response.status(201).send()

})

categoriesRoutes.get('/',(request,response) => {
    const all = categoriesRepository.list()
    return response.json(all)
})


export { categoriesRoutes }