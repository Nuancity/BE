require('dotenv').config();

const knex = require( 'knex' );
const knexConfig = require( '../knexfile.js' );
const environment = process.env.ENVIRONMENT || 'production';
const db =  knex( knexConfig[ environment ] )

module.exports = db;