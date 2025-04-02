<!DOCTYPE hmtl>
<html>
<head>

<?php 
    $path = realpath("./");
    echo "File Path: " . $path . "<br>";
    $basename = basename($path);
    echo "Basename: ". $basename . "<br>";
    $weekNrString = substr($basename, -1); 
    if (is_numeric($weekNrString)){
        $weekNr = (int)$weekNrString;
    }
    echo "My week number is $weekNr"; 
    
?>
</head>
<body>

<p>This page figures out its whereabouts</p>
</body>
</html>