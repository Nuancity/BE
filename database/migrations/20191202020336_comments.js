exports.up = function( knex, Promise ) {
    return knex.schema.createTable( 'comments', table => {
        table.increments();
        table.timestamps( true, true );
        table.integer( 'reply_count' );
        table.integer( 'reaction_count' );
        table.integer( 'post_id' ).notNullable();
        table.string( 'content' ).notNullable();
        table.integer( 'creator_id' ).notNullable();
    });
};

exports.down = function( knex, Promise ) {
    return knex.schema.dropTableIfExists( 'comments' );
};
