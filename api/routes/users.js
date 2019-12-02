const express = require('express');
const router = express.Router();
const users = require('../../database/models/users_model.js')

router.get('/', ( req, res ) => {
    users.getAll()
    .then( users => {
        res.status( 200 ).json( users )
    })
    .catch( () => {
        res.status( 500 ).json({ error: 'could not retrieve users.' }) 
    })
});

module.exports = router;