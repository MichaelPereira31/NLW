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

    list():Category[]{
        return this.categories
    }

    findByName(name:string):Category{
        const category = this.categories.find(category => category.name === name)
        return category
    }

}
export {CategoriesRepository}