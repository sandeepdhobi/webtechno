//try all these in chrome console and other javascript road_trip too

/*
function diffsquare(a,b)
{
  return a*a-b*b;
}
*/

var diff=function diffsquare(a,b)
{
  return a*a-b*b;
}; //remember this semicolon at the the end of function exp and not at the end of function

diff(9,6);

var add=function(a,b) //anonymous function
{
  return a*a+b*b;
}

add(4,7);
console.log(add);//it will return whole function body and not the output and rememnber this

//look crefully at these below function
var greeting;
newcustmer=true;
if(newcustmer)
{
  greeting=function()
  {
    alert("thanks for visiting the badland\n"+"we hope u stays here is better than most");

  }
}
else {
  var greeting=function()
  {
    alert("welcome for  visiting the badland\n"+"welcome rto new home");
  }
}
closeterminal(greeting);
function closeterminal(message){
  message();
}



var number=[12,34,56,78,32,4];
//var result=number.map(coolfunction());//it is equavalent to below code
/*var result=[];
for (var i = 0; i < number.length; i++) {
  result[i]=coolfunction(number[i]);
}
*/
var result=number.map(function(arraycell){
  return arraycell*2;
});
console.log(number);
console.log(result);


//An example
var sweet=function(){alert("ATTENTION\n cupcakes\nthats all")};
console.log(sweet());

var fruit=["apple","mango","pineapple","cranberry","pomgranate"];
var fruitjuice=fruit.map(function(fruit){return "\n" +fruit+" juice"});
alert(fruitjuice);


//Return function from function
var parkride=[["birch bumpers",40],["pines plunge",55],["cedar coaster",20],["ferris",90]];
var fastpassq=["cedar coaster","pines plunge","birch bumpers","pines plunge"];
fastpassq.shift();//it pop up first index of arrary and return that so u can store that value in some variable
var value=fastpassq.shift();
console.log(value);

function builtticket(allride,passride,pick)
{
  if (passride[0]==pick) {
    var pass=passride.shift();
    return function(){alert("Quick, you have got a fast pass to "+pass+ " !")};

  }else {
    for (var i = 0; i < allride.length; i++) {
      if (allride[i][0]==pick) {
        return function(){alert("A ticket is printing for "+pick+"\n Your wait time is about "+allride[i][1]+" minute")};

      }
    }
  }
}

var wantride="birch bumpers";
var ticket=builtticket(parkride,fastpassq,wantride);// try without var ticket u get function definition
//builtticket(parkride,fastpassq,wantride)();  //this is solution of above commented problem,,concept of closure
ticket();
