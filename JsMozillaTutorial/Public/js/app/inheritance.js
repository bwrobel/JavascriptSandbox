//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_Revisited?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FInheritance_Revisited

define(['jquery','logger','tracer'],function($,logger,tracer){
    function A(a){
        this.varA = a + 'from A constructor';
    }

    A.prototype = {
        varA : null,
        doSomething : function() {
            logger.info('doSth from A prototype')
        }
    }

    function B(a,b) {
        A.call(this, a);
        this.varB = b + 'from B constructor';
    }
    //B.prototype = A.prototype;
    B.prototype = Object.create(A.prototype, {
        varB : {
            value: 'varB',
            enumerable: true,
            configurable: true,
            writable: true
        },
        doSomething : {
            value: function() { //override
                logger.info('doSth from B prototype and...')
                A.prototype.doSomething.apply(this, arguments); //call super
                //...
            },
            enumerable: true,
            configurable: true,
            writable: true
        }
    });

    return {
        example: function(){
            A.prototype.dupa = 'blada from A constructor';

            var a = new A('aa');
            console.info(a);
            a.doSomething();


            var b = new B('a','b');

            console.info(b);
            b.doSomething();
        }
    }

})
