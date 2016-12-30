//Load order concept ie hoisting,, be carefull in casse of hoisting as your program is logically right
//but backend of javascript make it wrong

function sum(a,b)
{
  var x=add(a*a,b*b);
  return x;
  function add(c,d)
  {
    var a=c+d;
    return a;
  }
}

function getmystery()
{
  function choosemystery()//these function will be overwritten by new choosemystery()
  {
    return 12;
  }
  return choosemystery();
  function choosemystery()
  {
    return 65;
  }
}

getmystery();


//functionexpression never hoisted they always treated as assignments
//example 2
function getmysternum()
{
  var a=function(){
    return 34;
  }
  return a();
  var a=function(){
    return 56;
  }
}
getmysternum();


//example 3
function getmysternum()
{
  return a();

  var a=function(){
    return 34;
  }

  var a=function(){
    return 56;
  }
}
getmysternum();//its output will be an error



//example train
function capacitystatus(numpass,capacity){

  var noseat=function()
  {
    alert("no seat left");
    return false;
  }

  var seatavailabel=function(){
    alert("there are "+(capacity-numpass)+" seats left");
    return true;
  }

  if (numpass==capacity) {//if these if-else om top then error will occur because the problem of hoistng
    noseat();
  }else {
    seatavailabel();
  }

}

capacitystatus(50,50);
capacitystatus(40,50);
