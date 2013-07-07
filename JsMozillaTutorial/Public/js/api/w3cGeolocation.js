define([],function(){
    return {
    	getCurrentPosition : function(handlePosition, handleNoGeolocation){
	    	if(navigator.geolocation)
	    	{
				browserSupportFlag = true;
				navigator.geolocation.getCurrentPosition(
					function(position) {
						handlePosition(position);
					},
					function() {
						handleNoGeolocation(browserSupportFlag);
					});
	    	}
	    	else {
			    browserSupportFlag = false;
			    handleNoGeolocation(browserSupportFlag);
			}
    	}
    };
});
