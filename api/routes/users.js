const express = require('express');
const router = express.Router();

// ========================== GET 

router.get('/', ( req, res ) => {
    users.getAll()
    .then( users => {s
        res.status( 200 ).json( users )
    })
    .catch( () => {
        res.status( 500 ).json({ error: 'could not retrieve users.' }) 
    })
});

module.exports = router;