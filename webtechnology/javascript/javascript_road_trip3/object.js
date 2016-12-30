//object are container of related information
//multiple properties are grouped into objectwise
//multiple way to create object

//Example 1
var extra=["hello","hi","sorry","thank you"];
var mybox={height:6,width:5,length:9,volume:380,
           material:"cardboard",
           contents:["great expectation","the remainof the day","peter pen"],
           ext:extra
           };

console.log(mybox.height);
mybox.ext;
mybox.contents;
mybox["volume"];// another method for accessing property from object
console.log(mybox["volume"]);
//updating value
mybox.width=76;
mybox.volume=mybox.length*mybox.width*mybox.height;
console.log(mybox.volume);

mybox.contents.push("on the road");
mybox.ext.push("yahoo");
console.log(extra);
console.log(mybox.ext);

//adding new properties
mybox.weight=25;
mybox.destination1="oriando";
mybox.destination2="miami";
mybox["no of stops"]=9;
//console.log(mybox."no of stops");  //this will generate error as string property can not be accessed by . operater
//so use parenthesis
console.log(mybox["no of stops"]);
for (var i = 0; i <=mybox["no of stops"]; i++) {
  console.log(mybox["destination"+i]);
}

delete mybox.ext;//delete propertname as well as value associated with it and return true
delete mybox.noprop;//return true as no property with that anme are there

mybox["no of book"]=0;
function addbook(box,name,writer){
  box["no of book"]++;
  box["book"+box["no of book"]]={title:name,auther:writer};//box["no of book"] it is just for book1,book2 objects name;
}

addbook(mybox,"great expectation","charles dickens");
addbook(mybox,"hiroil","sadneep");
console.log(mybox.book1.title);
console.log("auther of book2 is "+mybox["book2"]["auther"]);



//Example 2
var aquarium={
  Nemo:{type:"fish",species:"clownfish",length:3.7},
  Marlin:{type:"fish",species:"clownfish",length:4.1},
  Dory:{type:"fish",species:"blue tong",length:6.2},
  Peach:{type:"echinoderm",species:"starfish",length:5.3},
  "Coral Castle":{type:"environment",material:"coquina",moves:false},//see name of property in string
  "Dragon Statue":{type:"environment",material:"plastic",moves:false},
  addcritter:function(name,type,species,length){
    this[name]={type:type,species:species,length:length};
  },
  addtoy:function(name,type,species,length){
    this[name]={type:type,material:material,moves:moves};
  }
};

/*function addcritter(container,name,type,species,length){
  container[name]={type:type,species:species,length:length};
}
function addtoy(container,name,type,species,length){
  container[name]={type:type,material:material,moves:moves};
}
*/
aquarium.addcritter("bubbles","fish","yellow tang",5.6);
aquarium.takeout=function(name)
{
  this[name].name=name;
  var temp=this[name];
  delete this[name];
  return temp;
}

var fishout=aquarium.takeout("Marlin");
console.log(fishout);

//can not use aquarium.length as aquarium is not an array it is and objcet
//
aquarium.countfish=function(){//just adding this function inside aquarium object
var numfish=0;
for(key in this)//used in enumration ie for object and key here take propert name
{
  if (this[key].type=="fish") {
    numfish++;
  }
}
return numfish;
}


aquarium.countfish();
