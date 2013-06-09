define([],function(){
    return {
        getObjectProperties: function(obj, objName) {
            var result = "";
            Object.getOwnPropertyNames(obj).forEach(function(propertyName){
                result += objName + "." + propertyName + " = " + obj[propertyName] + "\n";
            });
            return result;
        }
    }
})
