
  var trainop=8;
  var totaltrain=12;
  var dayofweek="friday";
  if (trainop==totaltrain)
    console.log("all train running today");
    else if (trainop==0)
    console.log("no train running today");
  else{
  for (var trainnumber = 1; trainnumber <=totaltrain ; trainnumber++)
  {
    if (trainnumber<=trainop && trainnumber!=3)
      console.log("train #"+trainnumber+" is running");
    else if (trainnumber==3 && dayofweek=="sunday")
      console.log("train # "+trainnumber+"is running on sunday");
    else if (trainnumber==10 || trainnumber==12)
      console.log("train # "+trainnumber+" is running at noon");
    else
        console.log("train # "+trainnumber+" is not running");
  }
  }
