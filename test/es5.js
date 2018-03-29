
(function (){
    'use strict';

    //函数声明,提在最前面，不推荐
    // function Animal() {
    //
    // }

    //函数表达式，推荐
    var Animal = function (name,age) {
       this.name = name;
       this.age = age;

    };

    // Animal.prototype.say = function () {
    //     console.log(this.name + ' ' + this.age);
    // }
    //
    //
    // var cat = new Animal("小猫","3岁");
    // cat.say();
    //
    // //寄生组合继承
    // //call(),apply()
    // //调用一个对象的一个方法，用另一个对象代替当前对象
    // Animal.prototype.say.apply(cat);
    // var p = {
    //     name:'猫2',
    //     age: 4
    // }
    // Animal.prototype.say.call(p);
    //寄生组合继承
    var Cat = function (name,age) {
        Animal.apply(this,arguments);
    };
    Cat.prototype = Object.create(Animal.prototype);
    //Cat.prototype = new Animal();


})();