exports.up = function(knex, Promise) {
  return knex.schema.hasTable('users').then(function(exists) {
    return knex.schema.createTable('users', function(table) {
      table.uuid('id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table
        .string('email')
        .notNullable()
        .unique();
      table.string('password').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
