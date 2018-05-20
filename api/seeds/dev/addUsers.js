exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          first_name: 'Andrew',
          last_name: 'Naeve',
          email: 'arnaeve@gmail.com',
          password: '$2b$10$oWiC.Tu.24waB.vr/NsCNuMMedYIuYuLa4wzp3j9TvIU2ARnoQUoW	'
        },
        {
          first_name: 'Matt',
          last_name: 'Billings',
          email: 'mbillings@gmail.com',
          password: '$2b$10$wU49CuBkcprxrflnQuVNJu9y1nTzKzeovxf2Oc.ZgNBX34mi.wkuC'
        },
        {
          first_name: 'Xander',
          last_name: 'Cruise',
          email: 'friskydingo@gmail.com',
          password: '$2b$10$1vkuZB2Y8HaJJmkGUB4whuMqzUN3B8E7LzV6raEFQgNiba05Ms3MK'
        }
      ]);
    });
};
