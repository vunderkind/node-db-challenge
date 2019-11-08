const db = require('../data/dbConfig');

module.exports = {
        find,
        findById,
        findTasks,

}

function find() {
    return db('project');
}

function findById(id) {
    return db('project').where({id}).first();
}

function findTasks(id) {
    return db('project')
    .join('task', 'project.id', 'task_id')
    .select('project.name', 'project.description', 'task.name', 'task.description', 'task.notes')
    .where({'project.id':id})
    .orderBy('task_id');
}