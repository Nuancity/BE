const faker = require( 'faker' );
const createPosts = ( amount = 20 ) => {
  let posts = [];
  while ( amount > 0 ) {
    let post = {
        content: faker.lorem.paragraphs( faker.random.number( { min: 1, max: 5 } ) ),
        creator_id: faker.random.number( { min : 1, max: 4 } ),
        category_id: faker.random.number(  { min : 1, max: 6 } ),
        fork_count: faker.random.number( 10 ),
        reaction_count: faker.random.number( 10 ),
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