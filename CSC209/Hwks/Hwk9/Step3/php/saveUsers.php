<html>
<link id="pagestyle" rel="stylesheet" href="../css/css.css">
<body>

<?php
$file = fopen("../output/users.txt","a");
fwrite($file,"Username: " . $_POST["uname"]);
fwrite($file, "\n");
fwrite($file,"Email: " . $_POST["email"]);
fwrite($file, "\n");
fwrite($file,"Password: " . $_POST["psw"]);
fwrite($file, "\n");
fclose($file);
?>

<p>Welcome! If you are admin, please click below.</p>
<form action="admin.html.php" method="post">
    <input type="hidden" name="uname" value="<?php echo htmlspecialchars($_POST["uname"]); ?>">
    <button type="submit" style="width: auto;">Admin</button>
</form>

</body>
</html>