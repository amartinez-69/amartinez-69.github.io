<!DOCTYPE html>
<html>
<head>
<?php 
    $images = glob("../imagesPart1/*");
    $NRIMAGES = count($images); 
?>
</head>
<body>

<h1>Work for HWK7/8 Level 1</h1> 

<script> 
    const images = 
        <?php
        echo json_encode($images);
        ?>;
    for (let i = 0; i < <?php echo $NRIMAGES ?>; i++) {
        let img = document.createElement("img");
        img.src = images[i];
        img.width = 300;
        img.height = 200;
        document.body.appendChild(img);
    }
</script>
</body>
</html>