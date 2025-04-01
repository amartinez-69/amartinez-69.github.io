<!DOCTYPE html>
<html>
<body>

<?php
echo strlen("Hello world!");
//12
echo str_word_count("Hello world!");
//2
echo strpos("Hello world!", "world");
//6

$x = "Hello World!";
//upper
echo strtoupper($x);
//lower
echo strtolower($x);
//replace world with dolly
echo str_replace("World", "Dolly", $x);
//reverse string
echo strrev($x);
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
