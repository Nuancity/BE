const express = require( 'express' );
const router = express.Router();

const categories = require( '../../database/models/categories_model.js' );
const db = require( '../../database/db_config.js' );

router.get( '/', ( req, res ) => {
    categories.getAll()
    .then( cats => res.status( 200 ).json( cats ) )
    .catch( err => res.status( 500 ).json( err ) )
});

module.exports = router;