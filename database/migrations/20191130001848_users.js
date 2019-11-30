// User MetaData

exports.up = function( knex, Promise ) {
    return knex.schema.createTable( 'users', table => {
        table.increments();
        table.string( 'username', 255 ).notNullable().unique();
        table.string( 'name', 255 ).notNullable().unique();
        table.string( 'email', 255 ).notNullable().unique();
        table.string( 'avatar_url', 255 );
    });
};

exports.down = function( knex, Promise ) {
    return knex.schema.dropTableIfExists( 'users' );
};
