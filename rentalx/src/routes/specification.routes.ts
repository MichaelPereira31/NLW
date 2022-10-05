import {Router} from 'express'
import { SpecificationsRepository } from '../models/cars/repositories/SpecificationsRepository'
import { CreateSpecificationService } from '../models/cars/services/CreateSpecificationService'

const specificationsRouter = Router()
const specificationsRepository = new SpecificationsRepository()
specificationsRouter.post('/', (request,response) =>{
  const {name, description} = request.body
  const createSpecificationService = new CreateSpecificationService(specificationsRepository)
  createSpecificationService.execute({
    name,
    description
  })

  return response.status(201).send();

})

export {specificationsRouter}