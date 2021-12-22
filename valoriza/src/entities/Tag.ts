import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
@Entity('tags')
class Tag{
    @PrimaryColumn()
    id:string

    @Column()
    name:string

    @CreateDateColumn()
    create_at:Date

    @UpdateDateColumn()
    update_at:Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}
export {Tag}