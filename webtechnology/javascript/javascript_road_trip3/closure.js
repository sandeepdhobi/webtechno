//if an inside function return value which is available for outside variable then its called closure
function testclosure(){
  var x=45;
  function closex(){//for this function the x variable is like global variable
    //but x is neither stored here in parameter and not stored in variable
    return x;
  }
  return closex;
}

var check=testclosure();
testclosure()();
check();
console.log(check());

//New example
function buildcoverticketmaker(transport)
{
  var passengernumber=0;
  return function(name){
    passengernumber++;
    alert("here is your transportaion ticket via the "+transport+ "\n"
          +"welcome to cold closuer cove "+name+" !\n"+
          "you are passenger #"+passengernumber+".");
  }
}

var getsubmarineticket=buildcoverticketmaker("submarine");
var getbattleticket=buildcoverticketmaker("battleship");
var getgiantseagullticket=buildcoverticketmaker("giant seagull");

getsubmarineticket("mario");//below also equivalent to these ,,see above testclosuer function call
getsubmarineticket("horio");//for same type transport passengernumber increament
getsubmarineticket("alephanta");
buildcoverticketmaker("submarine")("mario");
getbattleticket("luigi");
getgiantseagullticket("bowser");


function assigntorpedo(name,passengerarray)
{
  var torpedoassignment;
  for (var i = 0; i <passengerarray.length; i++) {
    if (passengerarray[i]==name) {
      return function(){
        alert("hurrey "+name+"!\n"+"man your post at torpedo is #"+(i+1));

      };
    }
  }
}

var subpassenger=["luke","sandeep","bunty","bubly","sorry"];
var giveassinment=assigntorpedo("sandeep",subpassenger);
giveassinment();
