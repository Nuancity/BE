const db = require('../db_config.js');

async function insert( notif ) {
  await db( 'notifs' ).insert( notif )
  return db( 'notifs' );
};

 async function getAll() {
   return db( 'notifs' );
};

module.exports = {
  getAll, insert
};