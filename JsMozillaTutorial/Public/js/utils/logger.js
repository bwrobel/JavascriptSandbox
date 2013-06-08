define([],function(){
    var getMessage = function(){

        var message = arguments[0];

        if(typeof message != "object")
        {
            message = '%c' + message;
            for(var i = 1 ; i < arguments.length ; i++)
            {
                message = message.replace('{' + (i-1) + '}', arguments[i]);
            }
        }
        return message;
    };

    return {
        info : function(){
            console.info(getMessage.apply(this, arguments),'background: white; color: blue');
        },
        warn : function(){
            console.warn(getMessage.apply(this, arguments),'background: #222; color: orange');
        },
        error : function(){
            console.error(getMessage.apply(this, arguments),'background: red; color: white');
        }
    }
})