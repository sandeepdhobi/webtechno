//run this command one by one on chrome command prompt
/*
alert("train #5 is approaching");
confirm("Dude are you sure");//cancel return false and ok return true
prompt("give me your name");//send message and also retrieve information
var save=prompt("what your age");
console.log(save);
typeof true;
typeof undefined;//undefined
typeof "hi how are you";//string
typeof 45;//number
typeof null;//object
var user=prompt("hey buddy give your name");
console.log(user);
typeof user;

*/

var gotname=false;
while (gotname==false) {
  var username=prompt("yo passenge whats your name?");
  if (confirm("are u sure , that your name is "+username+" ?")) {
    alert("sup"+username+"!");
    gotname=true;
  }
}
