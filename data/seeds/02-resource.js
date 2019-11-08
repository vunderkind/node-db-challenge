
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'Map', description: 'Cartographic resource to help you ground your characters', resource_id: 1},
        {name: 'Character style sheet', description: 'A style sheet for generating characters enmasse', resource_id: 2}
      ]);
    });
};
