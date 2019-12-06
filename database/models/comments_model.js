const db = require( '../db_config' );

async function insert( comm ) {
    await db( 'comments' ).insert( comm )
    return db( 'comments' );
};

async function getAll() {
    return db( 'comments' );
};

module.exports = {
    insert, getAll
};
