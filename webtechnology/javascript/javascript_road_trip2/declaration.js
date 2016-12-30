//read comment also ,it gives you lot of information
function sumofcube(a,b)//dont declare like c ie var a
{
/*  var acube=a*a*a;
  var bcube=b*b*b;
  var sum=acube+bcube;
  return sum;
*/
return a*a*a + b*b*b; //replaced athe above three line of code by just one line
}

//sumofcube(4,5);
var myson=sumofcube(7,9);
console.log(myson);
sumofcube(3*3,5+5);

var x=4;
sumofcube(x*2,x+5);
//run below function on chrome console directly and then call function
function countE()
{
  var phrase=prompt("enter the phrase u want to examine");
  if (typeof phrase!="string") {
      alert("that not a valid string !!");
      return false;
  }
  else {
    var ecount=0;
    for (var i = 0; i<phrase.length; i++)
    {
      if (phrase.charAt(i)=='e' || phrase.charAt(i)=='E') {
        ecount++;
      }
    }
    alert("there is "+ecount+" e in phrase ");
    return true;
  }
}

countE();


//Local as well as Global variable
var x=6;
var y=9;
function add(a,b)
{
  var x=a+b;//this x is local variable and scope of this variable also local
  return x;
}

console.log(x);//it return value 6 as its scope is global and local variable got destroyed

function sub(a,b)
{
  console.log(y);//print value of gloabl variable ie 9
  y=a-b;
  return y;
}
console.log(y);
