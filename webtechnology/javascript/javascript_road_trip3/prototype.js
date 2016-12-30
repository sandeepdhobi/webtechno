//as object is created few properties get assigned to it by default
//ie. valueOf ,constructer,toLocalString,toString,isPrototypeOf,propertyIsEnumerable,hasOwnProperty
//and these bydefault property is called object prototype ie like blueprint of object
//these properties is passed with the help of inheritance
//ie all js datastructure inherit all of their properties and method from their very own prototype
//exaple :array ,method of array ie .length, .shift, .reduce, .pop, .reverse, .join, .push, .sort, .slice
//example 2:string ,method of string ie .length, .concat, .toUpperCase, .charAt, .indexOf, .toLowerCase, .trim, .replace, .substring
//example3 :Number prototype ie .toFixed, .toExponential, .toPrecision
//Example4 :Function prototype ie .name, .bind, .call, .apply
//all these protype inherits from object prototype
//all these data structure also have method of object prototype

//example of prototype
var witch="hey buddy what going on in ur life";
var scarecrow="some people are like scarecrow";
var lion="yes i am lion";
String.prototype.countAll=function(letter){//adding function to predefined prototype so all the object can use it
  var lettercount=0;
  for (var i = 0; i < this.length; i++) {
    if (this.charAt(i).toUpperCase()==letter.toUpperCase()) {
        lettercount++;
    }
  }
  return lettercount;
}

witch.countAll("h");

//example2
var shoe={size:6,gender:"women",construction:"slipper"};
var magicshoe=Object(shoe);//this first args will be used as the prototype of newly created Object ie magicshoe
console.log(magicshoe);
magicshoe.jewels="ruby";
magicshoe.travel="click hills";
magicshoe.action="5";
console.log(magicshoe);
Object.prototype.isPrototypeOf(shoe);
shoe.isPrototypeOf(magicshoe);
magicshoe.isPrototypeOf(shoe);//return false
Object.prototype.isPrototypeOf(magicshoe);

//var mensboot=Object.create(shoe);// as women also come then not appropriate
var shoe={size:undefined,gender:undefined,construction:undefined};
var mensboot=Object.create(shoe);
var flipflop=Object.create(shoe);
/*mensboot.size=12;
mensboot.gender="men";
mensboot.construction="boot";
flipflop.size=5;
flipflop.gender="women";
flipflop.construction="flipflop";
*/

function shoe(shoesize,shoecolor,forgender,constructstyle){//It is constructer function for object shoe
  this.size=shoesize;
  this.color=shoecolor;
  this.gender=forgender;
  this.construction=constructstyle;
  //this.puton=function(){alert("shoes is on");};
  //this.takeoff=function(){alert("uh, whats that smell?");};
}

shoe.prototype={
  puton:function(){alert("your " +this.construction+ "s on!");},
  takeoff:function(){alert("phew! somebody's size "+this.size+"s are fragrent");}
};


var beachshoe=new shoe(10,"blue","women","flipflop");
console.log(beachshoe);
beachshoe.puton();
beachshoe.straps=3;//adding new properties to beachshoe object

var beachshoe=new shoe(10,"blue","women","flipflop");
beachshoe.takeoff();
beachshoe.hasOwnProperty("construction");
beachshoe.puton();





var x=9;
var y="9";
x.valueOf();//9
y.valueOf();//"9"
x.valueOf()==y.valueOf();//true
x.valueOf()===y.valueOf();//false  coz === also check property
var a=[3,"blind","mice"];
a.valueOf();
var b=new Number(99);
b.valueOf();
var tornado=function(category,affectedareas,windguest){
  this.category=category;
  this.affectedareas=affectedareas;
  this.windguest=windguest;
};

var cities=[["kansas city",456879],["lenexa",456987]];
var twister=new tornado("F5",cities,220);
twister.valueOf();

tornado.prototype.valueOf=function(){
  var sum=0;
  for (var i = 0; i < this.affectedareas.length; i++) {
    sum+=this.affectedareas[i][1];
  }
  return sum;
};
twister.valueOf();

/*
x.toString();//"4"
y.toString();//"4"
a.toString();//"3,blind,mice"
var double=function(param)
{
  return param*2;
};
double.toString();
*/
tornado.prototype.toString=function(){
  var list="";
  for (var i = 0; i < this.affectedareas.length; i++) {
    if (i<this.affectedareas.length-1) {
      list=list+this.affectedareas[i][0]+",";
    }
    else {
      list=list+"and"+this.affectedareas[i][0];
    }
  }
  return "this tornado has been classified as an "+this.category+
  ",with wind guest upto "+this.windguest+"mph. affectedareas are: "+list+",potentially affecting a populationof "+this.valueOf()+" .";

}

twister.toString();
twister.constructor;
twister.constructor.prototype;
twister.__proto__;


Object.prototype.findOwnerOfProperty=function(propname){
  var currentobject=this;
  while (currentobject!=null) {
    if (currentobject.hasOwnProperty(propname)) {
      return currentobject;
    }
    else {
      currentobject=currentobject.__proto__;
    }
  }
  return "no property found";
};

twister.findOwnerOfProperty("valueOf");
twister.findOwnerOfProperty("gotoz");
