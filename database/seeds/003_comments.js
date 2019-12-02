const faker = require( 'faker' );
const createComments = ( amount = 20 ) => {
    let comments = [];
    while ( amount > 0 ) {
      let comment = {
        reply_count: faker.random.number( 10 ),
        reaction_count: faker.random.number( 10 ),
        post_id: faker.random.number( { min : 1, max: 20 } ),
        content: faker.lorem.paragraphs( { min : 1, max: 5 } ),
        creator_id: faker.random.number( { min : 1, max: 4 } ),
      }
      comments.push( comment );
      amount --;
    }
  return comments;
};

exports.seed = function( knex, Promise ) {
    return knex( 'comments' ).delete()
      .then( () => {
        return knex( 'comments' ).insert( createComments() );
      });
};