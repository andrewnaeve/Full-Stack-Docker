exports.up = function(knex, Promise) {
  return knex.schema.hasTable('stripe_customers').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('stripe_customers', function(table) {
        table.increments('id').primary();
        table.string('customer_id');
        table.string('last_four');
        table
          .uuid('user_id')
          .references('users.id')
          .onDelete('CASCADE');
      });
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stripe_customers');
};
