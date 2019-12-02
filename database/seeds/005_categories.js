const createCategories = ( amount = 6 ) => {
    let mockTopics = [ 
        'Economics', 
        'Politics', 
        'Conspiracy', 
        'Philosophy', 
        'Artificial Intelligence', 
        'Psychology' 
    ];
    let topics = [];
    while ( amount > 0 ) {
        let topic = {
            name: mockTopics[ amount ]
        };
        topics.push( topic );
        amount --;
    }
    return topics;
}

exports.seed = ( knex, Promise ) => {
    return knex( 'categories' ).delete()
     .then( () => {
         return knex( 'categories' ).insert( ( createCategories() ) );
     });
} 