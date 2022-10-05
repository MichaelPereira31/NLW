import { Router } from 'express'
import { Category } from '../models/cars/model/Category';
import { CategoriesRepository } from '../models/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../models/cars/services/CreateCategoryService';

const categoriesRoutes = Router()

const categories: Category[] = [];
const categoriesRepository = new CategoriesRepository();
categoriesRoutes.post('/', (request,response) =>{
    const {name, description} = request.body

    const createCategoryService = new CreateCategoryService(categoriesRepository)
    createCategoryService.execute({name, description})
    
    return response.status(201).send()

})

categoriesRoutes.get('/',(request,response) => {
    const all = categoriesRepository.list()
    return response.json(all)
})


export { categoriesRoutes }