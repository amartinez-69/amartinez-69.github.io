<!DOCTYPE html>
<html>
<body>

<?php
$cars = array("Volvo", "BMW", "Toyota");
echo count($cars), "<br>";
echo $cars[0], "<br>";
$cars[1] = "Ford";
var_dump($cars, "<br>");
foreach ($cars as $x) {
    echo "$x <br>";
  }
?>

<br>

<!DOCTYPE html>
<html>
<body>
<pre>

<?php
$car = array("brand"=>"Ford", "model"=>"Mustang", "year"=>1964);
var_dump($car);
echo $car["model"];
$car["year"] = 2024;
foreach ($car as $x => $y) {
    echo "$x: $y <br>";
  }
?>

<br>

<?php  
$cars = array("Volvo", "BMW", "Toyota");
var_dump($cars);
?> 

</pre>
</body>
</html>

</body>
</html>