const express = require('express');
const router = express.Router();
const cloudinary = require( 'cloudinary' );

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME, 
   api_key: process.env.CLOUDINARY_API_KEY, 
   api_secret: process.env.CLOUDINARY_API_SECRET
})

router.post('/', ( req, res ) => {
    const file = req.body.path;
    cloudinary.uploader.upload( file, ( err, res ) => console.log( res, err ) );
});
 
 module.exports = router;