const faker = require( 'faker' );

const createPosts = ( amount = 20 ) => {
  let posts = [];
  while ( amount > 0 ) {
    let post = {
        content: faker.lorem.paragraphs( 3 ),
        creator_id: 1,
        category_id: 0,
        extensionCount: 1,
        reactionCount: 20,
      }
      posts.push( post );
      amount --;
  }
  return posts;
}

exports.seed = function( knex, Promise ) {
  return knex( 'posts' ).delete()
    .then( () => {
      return knex( 'posts' ).insert( createPosts() );
    });
};
