const faker = require( 'faker' );

const createPeople = ( amount = 20 ) => {
  let people = [];
  while ( amount > 0 ) {
     let node = {  
          name: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
          username: `${ faker.internet.userName() }`,
          email: `${ faker.internet.email() }`,
      }
      people.push( node );
      amount --;
  }
  return people;
}

exports.seed = function( knex, Promise ) {
  return knex( 'users' ).delete() // Deletes all existing entries
    .then(function () {
      // Inserts seed entries
      return knex( 'users' ).insert( createPeople() );
  });
};