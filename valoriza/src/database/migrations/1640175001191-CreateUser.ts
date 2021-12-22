import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1640175001191 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'users',
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary:true,
                    },
                    {
                        name:'name',
                        type:'varchar'
                    },
                    {
                        name:'email',
                        type:'varchar'
                    },
                    {
                        name:'admin',
                        type:'boolean',
                        default:false
                    },
                    {
                        name:'create_at',
                        type:'timestamp',
                        default:'now()'
                    },
                    {
                        name:'update_at',
                        type:'timestamp',
                        default:'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
