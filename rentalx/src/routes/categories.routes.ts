import { Router } from 'express'
import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router()

const categories: Category[] = [];
const categoriesRepository = new CategoriesRepository();
categoriesRoutes.post('/', (request,response) =>{
    const {name, description} = request.body
    const category = categoriesRepository.create({
        name,
        description,
        created_at: new Date()

    })
    
    return response.status(201).send()

})

export { categoriesRoutes }