exports.up = function( knex, Promise ) {
    return knex.schema.createTable( 'posts', table => {
        table.increments();
        table.string( 'content' ).notNullable();
        table.integer( 'creator_id' ).notNullable();
        table.integer( 'category_id' ).notNullable();
        table.integer( 'fork_count' );
        table.integer( 'reaction_count' );
        table.timestamps( true, true );
    });
};

exports.down = function( knex, Promise ) {
    return knex.schema.dropTableIfExists( 'posts' );
};

