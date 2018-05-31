exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stripe_customers')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('stripe_customers').insert([
        {
          id: 1,
          customer_id: 'cus_CtttkdElAuCV8r',
          user_id: '29681376-96f5-4aaf-a692-5eafe15dd55a'
        }
      ]);
    });
};
