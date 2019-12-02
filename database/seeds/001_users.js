const faker = require( 'faker' );
const createPeople = ( amount = 4 ) => {
  let people = [];
  while ( amount > 0 ) {
     let person = {  
       username: `${ faker.internet.userName() }`,
       email: `${ faker.internet.email() }`,
       avatar_url: `${ faker.internet.avatar() }`,
       name: `${ faker.name.firstName() } ${ faker.name.lastName() }`,
      }
      people.push( person );
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