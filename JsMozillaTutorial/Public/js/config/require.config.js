requirejs.config({
    baseUrl: 'Public',
    name: 'js/config/require.config',
    packages: [
        //libs
        {   name: 'jquery', location: 'js/libs/jquery' , main: 'jquery1-9-0'    },
        {   name: 'jquery.migrate', location: 'js/libs/jquery' , main: 'jquery-migrate-1-1-0'    },
        //utils
        {   name: 'logger', location: 'js/utils' , main: 'logger'    },

        //app
        {   name: 'app', location: 'js/app' , main: 'app'    },
        {   name: 'workingWithObjects', location: 'js/app' , main: 'workingWithObjects'    }
    ]
});

require(['app'], function(app){

});
