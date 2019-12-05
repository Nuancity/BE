const db = require('../db_config.js');

async function insert( post ) {
  await db( 'posts' ).insert( post )
  return db( 'posts' );
};

 async function getAll() {
   return db( 'posts' );
};

module.exports = {
  getAll, insert
};