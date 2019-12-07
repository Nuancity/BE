const express = require( 'express' );
const router = express.Router();
const comments = require( '../../database/models/comments_model');
const db = require( '../../database/db_config');

router.get( '/', ( req, res ) => {
    comments.getAll()
    .then( comms => {
        res.status( 200 ).json( comms );
    })
    .catch( () => {
        res.status( 500 ).json({ error: 'unable to get comments '});
    })
});

module.exports = router;