const db = require('../data/dbConfig');

module.exports = {
        find,
        findById,

}

function find() {
    return db('project');
}

function findById(id) {
    return db('project').where({id}).first();
}
