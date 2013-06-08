define([],function(){
    var getMessage = function(){
        var message = '%c' + arguments[0];
        Array.prototype.slice.call(arguments,1).forEach(function(literal,index){
            message = message.replace('{' + index + '}', literal);
        });
        return message;
    };

    return {
        info : function(){
            if(typeof arguments[0] == "object")
                console.info(arguments[0]);
            else
                console.info(getMessage.apply(this, arguments),'background: white; color: blue;font-weight: bold');
        },
        warn : function(){
            if(typeof arguments[0] == "object")
                console.warn(arguments[0]);
            else
                console.warn(getMessage.apply(this, arguments),'color: #FF6600;font-weight: bold');
        },
        error : function(){
            if(typeof arguments[0] == "object")
                console.error(arguments[0]);
            else
                console.error(getMessage.apply(this, arguments),'color: #FF0000;text-decoration:underline;font-weight: bold');

        }
    }
})