exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('project', tbl => {
      tbl.increments();
      tbl.string('name', 128)
        .notNullable();
        tbl.string('description', 128);
        tbl.boolean('completed')
        .notNullable();
    })
    // we can chain together createTable
    .createTable('resource', tbl => {
      tbl.increments();
      tbl.string('name', 128)
      .notNullable();
      tbl.string('description', 128);
      tbl.integer('resource_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('project');
    })

        //creating the task list
        .createTable('task', tbl => {
            tbl.increments();
            tbl.string('name', 128)
            .notNullable();
            tbl.string('description', 128)
            .notNullable();
            tbl.string('notes', 128);
            tbl.boolean('completed')
            .defaultTo(false)
            .notNullable();
            tbl.integer('task_id')
              // forces integer to be positive
              .unsigned()
              .notNullable()
              .references('id')
              // this table must exist already
              .inTable('project');
    })
};

exports.down = function(knex, Promise) {
    // drop in the opposite order
    return knex.schema
      .dropTableIfExists('task')
      .dropTableIfExists('resource')
      .dropTableIfExists('project')
  };