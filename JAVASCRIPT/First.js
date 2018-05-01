var people = function(name,age){
    var ob = {};
    ob.name = name;
    ob.age = age;

    var method = function(){
        console.log(this.name + "  " + this.age);
    };
   // return ob;
};

var person1 = people("rakib",22);
var person2 = people("shuvo",14);
person1.method();
person2.method();

var constructor = function(){
    this.name = name;
    this.age = age;
    this.method = function() 
}