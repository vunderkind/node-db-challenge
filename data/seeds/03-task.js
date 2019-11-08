
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {name: 'Draw Characters', description: 'Put pen to paper and draw your characters', notes: 'Make some male, and some female', completed: '1', task_id: 1 }
      ]);
    });
};
