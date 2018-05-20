exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          first_name: 'Xander',
          last_name: 'Cruise',
          email: 'friskydingo@gmail.com',
          password: '$2b$10$1vkuZB2Y8HaJJmkGUB4whuMqzUN3B8E7LzV6raEFQgNiba05Ms3MK'
        }
      ]);
    });
};
