<!DOCTYPE html>
<html>
<body>

<?php
$t = 14;

if ($t < 20) {
  echo "Have a good day!";
}
?>

<br>

<?php
$a = 200;
$b = 33;
$c = 500;

if ($a > $b && $a < $c ) {
  echo "Both conditions are true";
}
?>
 
<br>

<?php
$a = 5;

if ($a == 2 || $a == 3 || $a == 4 || $a == 5 || $a == 6 || $a == 7) {
  echo "$a is a number between 2 and 7";
}
?> 

<br>

<?php
$t = date("H");

if ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}
?>

<br>

<?php
$t = date("H");
echo "<p>The hour (of the server) is " . $t; 
echo ", and will give the following message:</p>";

if ($t < "10") {
  echo "Have a good morning!";
} elseif ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}
?>

<br>

<?php
$a = 13;

if ($a > 10) {
  echo "Above 10";
  if ($a > 20) {
    echo " and also above 20";
  } else {
    echo " but not above 20";
  }
}
?>

</body>
</html>
