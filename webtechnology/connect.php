<?php

/*
$hostname="localhost"; //local server name default localhost
$username="root";  //mysql username default is root.
$password="";       //blank if no password is set for mysql.
$database="register";  //database name which you created
$con=mysql_connect($hostname,$username,$password);
if(! $con)
{
die('Connection Failed'.mysql_error());
}
*/

$connect=mysqli_connect('localhost','root','','user_db');
if(mysqli_connect_errno($connect))
{
    echo "failedc to connect";
}


?>
