<html>
<body>

<form action="php/saveUsers.php" method="POST">
Username: <input type="text" name="username"><br>
Password <input type="text" name="password"><br>
<input type="submit">
</form>

<?php 
    $path = realpath("./");
    $basename = basename($path);
    echo $basename . "<br>";
?>
</body>
</html>
