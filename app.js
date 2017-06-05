/*
 function placeAnOrder(orderNumber){
     console.log("Customer order: ", orderNumber);

     cookAndDeliverFood(function (){
         console.log("delivered food order", orderNumber);
     })
 }

 function cookAndDeliverFood(callback){
     setTimeout(callback, 5000);
     //setTimeout just sets a schedule. It just doenst wait for things to be done.
 }

 placeAnOrder(1)
*/


/*
var keny = {
    printfirstname: function (){
    console.log("my first name");
    console.log(this === keny);//"this" is just a reference to calling object/

}

}
keny.printfirstname();

function whatever() {
    console.log("this is whateever");
    console.log(this === global);
}

whatever()*/
/*

var music = require('./music');


function User() {
    this.name = "";

    this.HP = 100;
    this.givelife = function givelife(target) {
      //  target.HP += 1;

        console.log(target.name + " get clednt " + target.name);
        console.log(target.HP);


    }
}
// press command + 1 to show project box.
var anotherPerson = new User();
anotherPerson.name = "dja";
anotherPerson.HP = 300;
anotherPerson.givelife(anotherPerson);

//upper cut is the way to use inhererance.
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.HP -= 3;
    cosole.log(this.name);
};
//adding another property also can be done directly.
User.prototype.magic = 30;

console.log(anotherPerson.magic);


music.someSongs();

require('./kenny');
console.log(kenny.music.favMusic)

*/
/*

test()

function test(){
    console.log("hi")
}

//in this case, the reverse call works.

*/


test2  function() {
    console.log("hi")
}

test2()