import { Router } from 'express'
import {v4 as uuid} from 'uuid'
const categoriesRoutes = Router()

const categories = [];

categoriesRoutes.post('/', (request,response) =>{
    const {name, description} = request.body

    const category = {
        id: uuid(),
        name, 
        description,
        created_at: new Date(),
    }
    categories.push(category);
    console.log(categories)
    return response.status(201).send()

})

export { categoriesRoutes }