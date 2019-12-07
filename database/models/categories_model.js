const db = require( '../../database/db_config.js' );

async function getAll() {
    return db( 'categories' );
}

module.exports = {
    getAll
};