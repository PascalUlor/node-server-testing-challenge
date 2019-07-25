exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shire')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('shire').insert([
        { name: 'rowValue1', age: 22 },
        { name: 'rowValue2', age: 22 },
        { name: 'rowValue3', age: 22 }
      ]);
    });
};
