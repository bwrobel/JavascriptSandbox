/*
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FWorking_with_Objects
 */

define(['jquery','logger','tracer'], function($,logger,tracer){

    function Car (make, model, year,color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    };

    return {
        execute : function() {
            logger.info('Entered workingWithObjects!');
            var myCar = new Object();
            myCar.make = "Ford";
            myCar.model = "Mustang";
            myCar.year = 1996;
            myCar["color"] = "red";
            Car.prototype.owner = 'Bartek';
            mySecondCar = new Car('Fiat','Seichento',2012,'Yellow');
            myThirdCar = new Car('Mercedes','LX300',2010,'Black');

            logger.info(myCar);
            logger.info(tracer.getObjectProperties(myCar,'MyCar'));

            logger.info(mySecondCar);
            logger.info(myThirdCar);
            logger.info(myThirdCar.owner);
            logger.info(mySecondCar.owner);
            logger.info(tracer.getObjectProperties(mySecondCar,'mySecondCar'));


        }
    }
})


