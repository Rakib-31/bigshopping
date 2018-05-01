
var test = function(a,b){

    this.a = a;
    this.b = b;

    var ob = {};
    ob.get = function(){
        return a+b;
    };
    
};

var arr = [3,6];

var bind = new test(2,3);
console.log(bind.get());