var Alexa = require('alexa-sdk');


var handlers = {
    'HelloIntent': function () {
        this.emit(':tell', 'HelloWorld');
    }
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

