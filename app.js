const connection = require('./assets/js/config/connection');
const begin = require('./assets/js/startingPrompt');

connection.connect(function(err) {
    if(err) throw err;
    
    begin.inquirerPrompts();
});