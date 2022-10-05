import { Category } from "../model/Category";

// DTO => Data transfer object
interface ICreatecategoryDTO{
    name:string;
    description:string;
    created_at: Date;
}

interface ICategoriesRepository{
    findByName(name:string): Category;
    list(): Category[];
    create({name, description}: ICreatecategoryDTO): void;
} 
export {ICategoriesRepository, ICreatecategoryDTO};