//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Predefined_Core_Objects?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FPredefined_Core_Objects

define(['jquery','logger'],function($,logger) {
    return {
        spliceExample: function() {
            logger.info('splice example');
            var array = ['1','2','3','4','5'];
            logger.info('before:');
            logger.info(array);

            logger.info('after:');
            array.splice(1,1,'a','b','c','d','e');
            logger.info(array);
        },

        sliceExample: function() {
            logger.info('slice example {0} {1}','better','show it!');
            var array = ['1','2','3','4','5'];
            logger.warn('before:');
            logger.info(array);

            logger.warn('after:');
            array = array.slice(1,4);
            logger.info(array);
        }
    }
})