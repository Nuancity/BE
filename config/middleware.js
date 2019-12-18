const express = require( 'express' );
const helmet = require( 'helmet' );
const morgan = require( 'morgan' );
const cors = require( 'cors' );
const fileupload = require("express-fileupload");

module.exports = server => {
   server.use( fileupload() );
   server.use( helmet () );
   server.use( express.json() );
   server.use( cors() );
   server.use( '*', cors( {
    origin: [ 'http://localhost:3000', 'https://nuancity.herokuapp.com/api' ],
   credentials: true, } ) );
};
