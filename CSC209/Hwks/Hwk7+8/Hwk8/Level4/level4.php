<!DOCTYPE html>
<html lang="en">
<head>
<title>Level 4</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link id="pagestyle" rel="stylesheet" href="css/slideshow.css">
<?php 
    $images = glob("../images2/*");
    $NRIMAGES = count($images);
    $captions = [];
    foreach($images as $image){
        $caption = basename($image); 
        array_push($captions, $caption);
    }
?>
</head>

<body>
    <div class="slideshow-container" id="slideshow">
        <a class="prev" onclick="plusSlides(-1)">❮</a>
        <a class="next" onclick="plusSlides(1)">❯</a>

    </div>
        <br>
        
    <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span> 
        <span class="dot" onclick="currentSlide(2)"></span> 
        <span class="dot" onclick="currentSlide(3)"></span> 
    </div>

<script>
    const images = 
        <?php
        echo json_encode($images);
        ?>;
    let slideIndex = 1;
    const captions = <?php
        echo json_encode($captions);
        ?>;
    function loadSlides() {
        let slideshowContainer = document.getElementById("slideshow");

        for (let i = 0; i < <?php echo $NRIMAGES?>; i++) {
            let slideDiv = document.createElement("div");
            slideDiv.className = "mySlides";

            let slideNum = document.createElement("div");
            slideNum.className = 'numberText';
            slideNum.textContent = (i + 1) + '/' + <?php echo $NRIMAGES?>;

            let img = document.createElement("img");
            img.src = images[i];
            img.style = "width:100%"
            img.alt = "Slide " + (i + 1);

            let caption = document.createElement("div");
            caption.className = 'text';
            caption.textContent = captions[i];

            slideDiv.appendChild(caption);
            slideDiv.appendChild(img);
            slideDiv.appendChild(slideNum);
            slideshowContainer.appendChild(slideDiv);
        }
    }


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }

    loadSlides()
    showSlides(slideIndex);
</script>
</article>
</section>
</body>
</html>