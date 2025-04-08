<!DOCTYPE html>
<html>
<head>

</head>
<body>

<h1>Work for HWK7/8 Level 2</h1> 


<?php 
    $images = glob("../imagesPart1/*");
    $NRIMAGES = count($images); 
    for($i = 0; $i < $NRIMAGES; $i++){
        echo "<img src=\"" . $images[$i] . "\" alt= \"Image" . ($i + 1) . "\" style = \"height: 200px; width: 300px\"; >";
    }
?>

</body>
</html>