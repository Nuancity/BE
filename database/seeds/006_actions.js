let actions = [
  { action_name: 'protested' },
  { action_name: 'extended' },
  { action_name: 'commented' },
  { action_name: 'shared' },
  { action_name: 'reacted' },
];
exports.seed = function( knex, Promise ) {
  return knex( 'actions' ).delete()
    .then( () => {
      return knex( 'actions' ).insert( actions );
    });
};
