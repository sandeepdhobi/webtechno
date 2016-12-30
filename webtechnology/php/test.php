<!DOCTYPE html>
<html>
<head>
	<title>Sample</title>
</head>
<body>
<h1>My first php</h1>

<?php
echo "Hi how r u ?" . "<br>";

$color="hmmm hi helo fuck off from herre and dont show me your face ";
$COLOR="variable are case sesitive in php but function, classes ,user defined function are not cxase sensitive ";
echo $color ."<br>";
echo "this is uppercase variable in php code ". $COLOR ."<br>";

$text="www.w3schools.com";
echo "I love $text <br>";
echo "I love " . $text;

$x=545;
$y=454;
echo "$x+$y"."<br>";
echo $x+$y;


echo "<h1>Variable scope</h1> ";
function scopecheck()
{
	$u="hi i am loacl variable<br>";
	static $v=55;
	echo $u;
	$GLOBALS['x'] = 89999;
	global $x;
	echo "change value of global variable is  " . $x  . "<br>";
	echo $v-54 . " call " . $v . "<br>";
	$v++;

}

scopecheck();
scopecheck();



print "<h1>HI its is in print</h1>";
print "</br> " . $x+$y . "<br>";

//array declartion and use of var_dump() function.

$car=array("volvo","BMW","TOYTa");
 var_dump($car); 

 //string operation
 echo "<br>" . strlen("Hi I am sandeep") . "<br>";
 echo str_word_count("hi how are you") . "<br>";
 echo strrev("Hi whats going on ") . "<br>";
 echo strpos("hello world" , "world") ."<br>"; 
 echo str_replace("world","dolly","Its change w-o-r-l-d world in this string to dolly") . "<br>";


// PHP loops
 $t=date("H");
 if($t<10)
 {
 	echo "Good morning";
 }
 elseif ($t<20)
  {
 	echo "Have a good day";

 }
 else
 {
 	echo "Have a good night <br>";
 }
echo "<br>";
//Foreach loops
 $color= array('sandeep' =>"20" ,"pradeep" => "21","dilip" => "25" );
 foreach ($color as $key => $value) 
 {
 	echo "$key has age of $value <br>";	# code...
 }

echo "<br>";
 function writeMsg($arg1,$arg2) 
 {
   echo "Hello world!";
   echo "The first arg are $arg1 and second argumemt are $arg2";
   }

   writeMsg("sandeep","pradeep");

// PHP $_SERVER Supervariable
   echo $_SERVER['PHP_SELF'];
   echo "<br>";
   echo $_SERVER['SERVER_NAME'];
   echo "<br>";
   echo $_SERVER['HTTP_HOST'];
   echo "<br>";
   echo $_SERVER['HTTP_REFERER'];
   echo "<br>";
   echo $_SERVER['HTTP_USER_AGENT'];
   echo "<br>";
   echo $_SERVER['SCRIPT_NAME'];

  ?>



<Form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>
<?php 
if($_SERVER["REQUEST_METHOD"]=="POST")
{
	$name=$_REQUEST['fname'];
	if (empty($name))
	 {
		echo "Name is empty";	# code...
	}
	else
		echo "$name";
}

?>
</body>
</html>