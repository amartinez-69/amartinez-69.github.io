<!DOCTYPE html>
<html>
<body>

<?php  
$i = 1;

while ($i < 6) {
  echo $i;
  $i++;
} 
?>  

<br>

<?php  
$i = 1;

do {
  echo $i;
  $i++;
} while ($i < 6);
?>  

<br>

<?php  
for ($x = 0; $x <= 10; $x++) {
  echo "The number is: $x <br>";
}
?> 

<br>

<?php  
$colors = array("red", "green", "blue", "yellow"); 

foreach ($colors as $x) {
  echo "$x <br>";
}
?>  
</body>
</html>