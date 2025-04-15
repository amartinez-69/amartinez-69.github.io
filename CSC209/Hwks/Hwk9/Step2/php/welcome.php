<html>
<head>
<link id="pagestyle" rel="stylesheet" href="../css/css.css">
</head>
<body>

Welcome <?php echo $_POST["uname"]; ?>! <br>

<form action="admin.html.php" method="post">
    <input type="hidden" name="uname" value="<?php echo htmlspecialchars($_POST["uname"]); ?>">
    <button type="submit" style="width: auto;">Admin</button>
</form>

</body>
</html>