define(['jquery','workingWithObjects','arrayObject','inheritance','consoleTools','geolocation','logger'],
	
    function($,workingWithObjects,arrayObject,inheritance,consoleTools,geolocation,logger){
    //workingWithObjects.execute();
    //arrayObject.spliceExample();
    //arrayObject.sliceExample();
    //inheritance.example();
	//consoleTools.execute();
	geolocation.getCurrentPosition(function(position) { logger.info(position) }, function(browserSupportFlag) { window.alert('Geolocation not found, browser support : ' + browserSupportFlag);})

	
})

