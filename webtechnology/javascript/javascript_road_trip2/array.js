//run one by one chrome console
//arrary can hold string ,values,variable and also other array or combination of all these
var passenger=["sandeeep","prem","yadav","kumar","mukharji"];//String array
console.log(passenger[5]);
passenger[3]="erric alan";

passenger.pop();//delete and return the last index value of array
passenger.push("adam aron");//put the value at last index and return length of array

//combination of different type of datatype array
var combarray=["one","two","three",45454,"fish"];
var variable="hey i am variable";
var combarray2=["hw","console","chrome",variable,"ds",56565,variable];
var arrayofarray=[combarray,combarray2];//2D arrary
console.log(arrayofarray); //try it one console and u can figure out what is output and how it going to store in memory
console.log(arrayofarray[0][3]);//return 45454

//traversing 1d arrary
for (var i = 0; i < combarray.length; i++) {
  console.log("the value at index "+i+" is " combarray[i]);
}

//traversing 2D array
for (var i = 0; i < arrayofarray.length; i++) {
  for (var j = 0; j < arrayofarray[i].length; j++) {
    console.log("the value at of arrayofarray as objectwise is "+arrayofarray[i][j]);
  }
}

arrayofarray[0][3]=undefined;  // set these cell of arrary is empty ie has no value

//these below function identify odd number and modify that odd cell as empty by putting them undefined is no value
var numberlist=[1,22,343,656,75,4,3,7,87,65];
var evencount=0;
for (var i = 0; i < numberlist.length; i++) {
  if (numberlist[i]%2==0) {
    evencount++;
  }
  else {
    numberlist[i]=undefined;
  }
}
console.log("even number in array is "+evencount);
console.log("odd number in array is "+(numberlist.length-evencount));
console.log(numberlist);
console.log("element of numberlost array is"+numberlist);//output compare both console

//this function add new passenger in passenger array
function addpassenger(name,passenger)
{
  if (passenger.length==0) {
    passenger.push(name);
  }
  else {
    for (var i = 0; i < passenger.length; i++) {
      if (passenger[i]==undefined) {
        passenger[i]=name;
        console.log(passenger);
        return passenger;//break;

      }
      else if(i==passenger.length-1){
        passenger.push(name);
        return passenger;
      }
    }
  }
}

addpassenger("yadav",passenger);
addpassenger("gohil",passenger);

function delpassenger(name,passenger)
{
  if(passenger.length==0)
  {
    console.log("list is already empty");
  }
  else {
  for (var i = 0; i < passenger.length; i++) {
    if (passenger[i]==name) {
      passenger[i]=undefined;
      return passenger;
    }
    else if (i==passenger.length-1) {
      console.log("no passenger of "+name +" is found");
    }
  }
 }
 return passenger;
}

delpassenger("sandeep",passenger);
passenger=delpassenger("yadav",passenger);
