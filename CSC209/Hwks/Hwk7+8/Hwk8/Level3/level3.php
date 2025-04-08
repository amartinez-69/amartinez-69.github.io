<!DOCTYPE html>
<html>
<head>

</head>
<body>

<h1>Work for HWK7/8 Level 3</h1> 

<form>
Select which image you want to display:
<select id="imgSelect" onchange="showImage()">
    <option>None</option>
    <option>Image 1</option>
    <option>Image 2</option>
    <option>Image 3</option>
    <option>Image 4</option>
</select>
<br><br>
</form> 

<?php 
    $images = glob("../images1/*");
    $NRIMAGES = count($images); 
    for($i = 0; $i < $NRIMAGES; $i++){
        echo "<img id='Image" . ($i+1) . "' src=\"" . $images[$i] . "\" alt= \"Image" . ($i + 1) . "\" style=\"height: 200px; width: 300px; display: none;\">";
    }
?>

<script> 
    function showImage() {
        let selectedImage = document.getElementById("imgSelect").value;
        let allImages = document.querySelectorAll('img');
        allImages.forEach(image => image.style.display = 'none');

        if (selectedImage == "Image 1"){
            document.getElementById('Image1').style.display = 'block';
        } else if (selectedImage == "Image 2"){
            document.getElementById('Image2').style.display = 'block';
        } else if (selectedImage == "Image 3"){
            document.getElementById('Image3').style.display = 'block';
        } else if (selectedImage == "Image 4"){
            document.getElementById('Image4').style.display = 'block';
        } else {
            allImages.forEach(image => image.style.display = 'none');
        }
    }  
</script> 
</body>
</html>