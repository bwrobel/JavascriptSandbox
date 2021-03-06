requirejs.config({
    baseUrl: 'Public',
    name: 'js/config/require.config',
    packages: [
        //libs
        {   name: 'jquery', location: 'js/libs/jquery' , main: 'jquery1-9-0'    },
        {   name: 'jquery.migrate', location: 'js/libs/jquery' , main: 'jquery-migrate-1-1-0'    },
        //utils
        {   name: 'logger', location: 'js/utils' , main: 'logger'    },
        {   name: 'tracer', location: 'js/utils' , main: 'tracer'    },

        //app
        {   name: 'app', location: 'js/app' , main: 'app'    },
        {   name: 'workingWithObjects', location: 'js/app' , main: 'workingWithObjects'    },
        {   name: 'arrayObject', location: 'js/app' , main: 'arrayObject'    },
        {   name: 'inheritance', location: 'js/app' , main: 'inheritance'    },
		{   name: 'consoleTools', location: 'js/app' , main: 'consoleTools'    },

        //api
        {   name: 'geolocation', location: 'js/api' , main: 'w3cGeolocation'    }

    ]
});

require(['app'], function(app){

});
