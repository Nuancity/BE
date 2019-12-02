exports.up = function( knex, Promise ) {
    return knex.schema.createTable( 'notifs', table => {
        table.increments();
        table.timestamps( true, true );
        table.integer( 'action_id' ).notNullable(); // id to name of action (shared, commented, etc )
        table.integer( 'subject_id' ).notNullable(); // id of object/post that sender engaged with
        table.integer( 'sender_id' ).notNullable(); // id of user who generated motification
        table.integer( 'reciever_id' ).notNullable(); // id of user who recieves notification
        table.string( 'new_content_id' ); // id to new comment or share or etc
    });
};

exports.down = function( knex, Promise ) {
    return knex.schema.dropTableIfExists( 'notifs' );
};
