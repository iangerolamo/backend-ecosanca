import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1607383214346 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
          name: 'images',
          columns: [
            {
              name: 'id',
              type: 'integer',
              unsigned: true,
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'path',
              type: 'varchar',
            },
            {
              name: 'ecorecycle_id',
              type: 'integer',
            },
          ],
          foreignKeys: [
            {
              name: 'ImageEcorecycle',
              columnNames: ['ecorecycle_id'],
              referencedTableName: 'ecorecycles',
              referencedColumnNames: ['id'],
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE',
            },
          ]
        }))
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
      }
    
    }