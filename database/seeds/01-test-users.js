exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shire')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('shire').insert([
        { name: 'frodo', age: 22 },
        { name: 'sam', age: 22 },
        { name: 'merry', age: 22 }
      ]);
    });
};
