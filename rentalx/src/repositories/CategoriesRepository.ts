import { Category } from '../model/Category';
// DTO => Data transfer object
interface ICreatecategoryDTO{
    name:string;
    description:string;
    created_at: Date;
}
class CategoriesRepository{
    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    create({name, description, created_at}: ICreatecategoryDTO): void{
        const category = new Category()

        Object.assign(category,{
            name,
            description,
            created_at
        })

        this.categories.push(category);
    }

}
export {CategoriesRepository}