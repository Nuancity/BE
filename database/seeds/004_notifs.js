const faker = require( 'faker' );
const createNotifications = ( amount = 10 ) => {
    let notifications = [];
    while ( amount > 0 ) {
        let notif = {
          action_id: faker.random.number( { min : 1, max: 5 } ),
          subject_id: faker.random.number( { min : 1, max: 20 } ),
          sender_id: faker.random.number( { min : 1, max: 4 } ),
          reciever_id: faker.random.number( { min : 1, max: 4 } ),
        };
        notifications.push( notif );
        amount --;
    }
    return notifications;
}

exports.seed = function( knex, Promise ) {
  return knex( 'notifs' ).delete()
    .then( () => {
      return knex( 'notifs' ).insert( createNotifications() );
    });
};