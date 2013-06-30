/*
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FWorking_with_Objects
 */

define(['jquery','logger','tracer'], function($,logger,tracer){		
	return {
        execute : function() {	
			var fakeArray = [],
			i = 0,
			l = 10000000;
			console.clear();
			console.time('Timer');
			for (; i<l; i++) {
				fakeArray.push(i);
			}
			console.timeEnd('Timer');

			
			logger.info("TABLE");
			var data = [["Andi", "Smith", "M"],["Amy", "Smith", "F"]];
			console.table(data);
			
			logger.info("TABLE END");
			
			
			console.trace();
		}
    }
})


