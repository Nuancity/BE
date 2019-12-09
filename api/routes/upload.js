const express = require( 'express' );
const router = express.Router();
const cloudinary = require( 'cloudinary' );
const db = require( '../../database/db_config.js' );

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME, 
   api_key: process.env.CLOUDINARY_API_KEY, 
   api_secret: process.env.CLOUDINARY_API_SECRET
})

const sendToDb = async ( result ) => {
    await db( 'resources' ).insert( 
        {
            url: result.secure_url,
            creator_id: 1
        } 
    );
    allResources = await db( 'resources' );
    return allResources;
};

router.post( '/', ( req, res ) => {
    const file = req.body.path;
    const uploader = cloudinary.uploader.upload( file, ( result ) => sendToDb( result ) );
    res.status( 201 ).json( uploader );
});

router.get( '/', ( req, res ) => {
    db( 'resources' )
    .then( posts => {
        res.status( 200 ).json( posts )
    })
    .catch( () => {
        res.status( 500 ).json({ error: 'could not retrieve posts.' }) 
    })
 });
 
 module.exports = router;