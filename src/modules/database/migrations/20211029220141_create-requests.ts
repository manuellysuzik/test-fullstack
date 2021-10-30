import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('Request', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()

    table
      .string('description')
      .notNullable()

    table
      .integer('qtd')
      .notNullable()
      .unsigned()
      
    table
      .float('price', 6, 1)

    table.dateTime('createdDate')
    table.dateTime('updatedDate')
  })
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTableIfExists('Request')
}
