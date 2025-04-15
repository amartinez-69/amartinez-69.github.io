<html>
<body>

Welcome <?php echo $_POST["username"]; ?><br>
Your email address is: <?php echo $_POST["password"]; ?>

<?php
$file = fopen("../output/users.txt","w");
fwrite($file,"Username: " . $_POST["username"]);
fwrite($file, "\n");
fwrite($file,"Password: " . $_POST["password"]);
fclose($file);
?>

</body>
</html>