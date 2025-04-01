<!DOCTYPE html>
<html>
<body>

<?php
echo strlen("Hello world!");
//12
echo "<br>";
echo str_word_count("Hello world!");
//2
echo "<br>";
echo strpos("Hello world!", "world");
//6
echo "<br>";

$x = "Hello World!";
//upper
echo strtoupper($x);
echo "<br>";
//lower
echo strtolower($x);
echo "<br>";
//replace world with dolly
echo str_replace("World", "Dolly", $x);
echo "<br>";
//reverse string
echo strrev($x);
echo "<br>";
?> 

<br>

<?php
//concatenation
$x = "Hello";
$y = "World";
$z = $x . $y;
echo $z;
?>

<br>

<?php
//simpler concatenation
$x = "Hello";
$y = "World";
$z = "$x $y";
echo $z;
?>

<br>

<?php
//substring
$x = "Hello World!";
echo substr($x, 6, 5);
?> 

 
</body>
</html>
