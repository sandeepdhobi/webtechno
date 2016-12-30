//see video again
//example 1
function loadprofile(username){
if (username.length>3) {
  let loadmessage="This might take a while";//let remove hoisting
  console.log(loadmessage);
  console.log(flashmessage);
}
else {
  let flashmessage="Loading profiles";
  console.log(flashmessage);
}
console.log(flashmessage);//afyer let it will show error refernce error and before that no error simply undefined
}

loadprofile(["ram","shyam","dhyan","sakira","swift"]);

//example 2  checkout _fetchProfile()
function loadprofilesss(username){
for(var i in username){
_fetchProfile("/user/ "+username[i],function(){
console.log("fetched for",username[i]);
});
}
}

loadprofilesss(["ram","shyam","dhyan","sakira","swift"]);
