<html>
<body>

Welcome <?php echo $_POST["username"]; ?><br>
Your email address is: <?php echo $_POST["password"]; ?>

<?php
$file = fopen("../output/users.txt","a");
fwrite($file,"Username: " . $_POST["username"]);
fwrite($file, "\n");
fwrite($file,"Password: " . $_POST["password"]);
fwrite($file, "\n");
fclose($file);
?>

</body>
</html>