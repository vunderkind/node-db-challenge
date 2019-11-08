
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'World Building', description: 'define characters, and how they interact with their worlds', completed: '1'},
        {name: 'End World Hunger', description: 'There are people dying. How do we get billionaires to suffer, too?', completed: '0'},
        {name: 'Build world\s Ugliest building', description: 'Create the ultimate Neidbau event', completed: '0'}
      ]);
    });
};
