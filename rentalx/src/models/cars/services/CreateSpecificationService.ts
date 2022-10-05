import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";
interface IRequest{
  name: string;
  description: string;
}
class CreateSpecificationService{
  constructor(private specificationsRepository: ISpecificationsRepository){}
  execute({name,description}:IRequest){
    const speificationAlreadyExists = this.specificationsRepository.findByName(name);
    if(speificationAlreadyExists){
      throw new Error('Specification already exists!')
    }
    this.specificationsRepository.create({
      name,
      description
    })
  }
}

export {CreateSpecificationService}