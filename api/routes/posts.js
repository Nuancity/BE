const express = require('express');
const router = express.Router();
const authHelper = require('../../common/auth_helper.js');
const posts = require('../../database/models/posts_model.js');

router.get('/', ( req, res ) => {
   posts.getAll()
   .then( posts => {
       res.status( 200 ).json( posts )
   })
   .catch( () => {
       res.status( 500 ).json({ error: 'could not retrieve posts.' }) 
   })
});

router.get('/:id', async (req, res) => {
    const { id } = req.params || req.body
    try {
       const post = await db( 'posts' )
          .where({ id: id })
          .first();
 
       !post
          ? res.status( 404 ).json({ error: 'post does not exist' })
          : res.status( 200 ).json({ post, post_categories });
    } catch ( err ) {
       res.status( 500 ).json({ error: 'unable to get post' });
    }
 });

router.post('/', async ( req, res ) => {
    let { id, ...newPost } = req.body
    console.log( req.body );

    try {
      const allPosts = await posts.insert( newPost );
      newPost = await db( 'posts' ).where({ title: newPost.title }).first();
  
        res.status(201).json({
           message: "post created!",
           newPost, allPosts
         })

    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', authHelper.protected, async (req, res) => {
    const { id } = req.params
    const changes = req.body;
    try {
       const post = await db('posts')
          .where({ id: id })
          .first();
 
       !post
          ? res.status(404).json({ error: 'post does not exist' })
          : await db('posts')
               .where({ id: id })
               .update(changes);
            const changedPost = await db('posts').where({id:id})
            const allPosts = await db('posts')
       res.status(202).json({
          message: `post with id:'${post.id}' has been updated`,
          allPosts,
          changedPost
       });
    } catch (err) {
       res.status(500).json({ err, error: 'unable to update the post' });
    }
 });

router.delete('/:id', authHelper.protected, async (req, res) => {
    const { id } = req.params;
    try {
         const del_post_categories = await db('post-categories').where({post_id:id}).del()

       const post = await db('posts')
          .where({ id: id })
          .first();
 
       !post
          ? res.status(404).json({ error: 'post does not exist' })
          : await db('posts')
               .where({ id: id })
               .delete();

            allPosts = await db('posts')
 
       res.status(202).json({
          message: 'post has been deleted.',
          allPosts
       });
    } catch (err) {
       res.status(500).json({ error: 'Unable to delete post' });
    }
 });


 module.exports = router;