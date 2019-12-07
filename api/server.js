const express = require( 'express' );
const server = express();
const helmet = require( 'helmet' );
const cors = require( 'cors' );

server.use( express.json() );
server.use( helmet() );
server.use( cors() );
server.use( '*', cors({
    origin: [ 'http://localhost:3000' ],
   credentials: true,
}));

server.get( '/api', ( req, res ) => {
    res.status( 200 ).json( { message: "API Running!" } );
});

// ======================

const auth = require('./routes/auth.js');
const posts = require('./routes/posts.js');
const users = require('./routes/users.js');
const notifs = require('./routes/notifs.js');
const comments = require('./routes/comments.js');
// const categories = require('./routes/categories_router.js');
// const posts_categories = require('./routes/posts_categories_router.js');
// const resources = require('./routes/resources.js');
// const comments = require('./routes/comments.js');


// ======================

server.use( '/api/users', users );
server.use( '/api/auth', auth );
server.use( '/api/posts', posts );
server.use( '/api/notifs', notifs );
server.use( '/api/comments', comments );
// server.use( '/api/categories', categories );
// server.use( '/api/cp', posts_categories );

// =====================


module.exports = server;
