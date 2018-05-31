exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          id: '29681376-96f5-4aaf-a692-5eafe15dd55a',
          first_name: 'Andrew',
          last_name: 'Naeve',
          email: 'arnaeve@gmail.com',
          password: '$2b$10$oWiC.Tu.24waB.vr/NsCNuMMedYIuYuLa4wzp3j9TvIU2ARnoQUoW	'
        },
        {
          id: 'd9e6f7ba-565a-4ff6-98c4-48d19e8a4c82',
          first_name: 'Matt',
          last_name: 'Billings',
          email: 'mbillings@gmail.com',
          password: '$2b$10$wU49CuBkcprxrflnQuVNJu9y1nTzKzeovxf2Oc.ZgNBX34mi.wkuC'
        },
        {
          id: '01d4c391-9577-45f1-9bd1-b03ae655d6a9',
          first_name: 'Xander',
          last_name: 'Cruise',
          email: 'friskydingo@gmail.com',
          password: '$2b$10$1vkuZB2Y8HaJJmkGUB4whuMqzUN3B8E7LzV6raEFQgNiba05Ms3MK'
        }
      ]);
    });
};
