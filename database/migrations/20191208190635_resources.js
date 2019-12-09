exports.up = function( knex, Promise ) {
    return knex.schema.createTable( 'resources', table => {
        table.increments();
        table.timestamps( true, true );
        table.string( 'url' ).notNullable();
        table.integer( 'creator_id' ).notNullable();
    });
};

exports.down = function( knex, Promise ) {
    return knex.schema.dropTableIfExists( 'resources' );
};

