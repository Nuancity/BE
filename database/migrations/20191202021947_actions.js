exports.up = function( knex, Promise ) {
    return knex.schema.createTable( 'actions', table => {
        table.increments();
        table.timestamps( true, true );
        table.string( 'action_name' ).notNullable();
    });
};

exports.down = function( knex, Promise ) {
    return knex.schema.dropTableIfExists( 'actions' );
};
