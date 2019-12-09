const express = require( 'express' );
const middelware = require( '../config/middleware.js' );
const server = express();
middelware( server );

server.get( '/api', ( req, res ) => {
    res.status( 200 ).json( { message: "API Running!" } );
});

// ======================

const auth = require('./routes/auth.js');
const posts = require('./routes/posts.js');
const users = require('./routes/users.js');
const notifs = require('./routes/notifs.js');
const comments = require('./routes/comments.js');
const categories = require('./routes/categories.js');
const upload = require('./routes/upload.js');

// const actions = require('./routes/resources.js');
// const posts_categories = require('./routes/posts_categories_router.js');


// ======================

server.use( '/api/users', users );
server.use( '/api/auth', auth );
server.use( '/api/posts', posts );
server.use( '/api/notifs', notifs );
server.use( '/api/comments', comments );
server.use( '/api/categories', categories );
server.use( '/api/upload', upload );
// server.use( '/api/cp', posts_categories );

// =====================


module.exports = server;
