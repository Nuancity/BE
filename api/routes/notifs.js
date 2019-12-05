const express = require( 'express' );
const router = express.Router();
const authHelper = require( '../../common/auth_helper.js' );
const notifs = require( '../../database/models/notifs_model.js' );
const db = require( '../../database/db_config.js' );

router.get('/', ( req, res ) => {
    notifs.getAll()
    .then( notifs => {
        res.status( 200 ).json( notifs )
    })
    .catch( () => {
        res.status( 500 ).json({ message: 'could not retrieve notifications.' }) 
    })
});

module.exports = router;