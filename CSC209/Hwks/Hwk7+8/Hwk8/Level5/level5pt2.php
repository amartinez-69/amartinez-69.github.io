<?php
session_start();

// Get all the images in the folder
$images = glob("../imagesPart2/*");
$NRIMAGES = count($images);
$captions = [];
foreach ($images as $image) {
    $caption = basename($image);
    array_push($captions, $caption);
}

// Initialize slideIndex to session or default to 1
if (!isset($_SESSION['slideIndex'])) {
    $_SESSION['slideIndex'] = 1;
}

// Get the current slide index, default to session value if not set in the URL
if (isset($_GET['slide'])) {
    $_SESSION['slideIndex'] = (int)$_GET['slide'];
}

// Handle next and previous logic
if (isset($_GET['action'])) {
    if ($_GET['action'] === 'next') {
        $_SESSION['slideIndex'] = ($_SESSION['slideIndex'] % $NRIMAGES) + 1; // Go to next slide, loop back to 1
    } elseif ($_GET['action'] === 'prev') {
        $_SESSION['slideIndex'] = ($_SESSION['slideIndex'] - 2 + $NRIMAGES) % $NRIMAGES + 1; // Go to previous slide, loop back to last
    }
}

// Current slide index
$slideIndex = $_SESSION['slideIndex'];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slideshow</title>
    <link id="pagestyle" rel="stylesheet" href="css/slideshow.css">
</head>

<body>
    <div class="slideshow-container">
        <!-- Slides -->
        <?php 
        for ($i = 0; $i < $NRIMAGES; $i++) {
            $activeClass = ($i + 1 == $slideIndex) ? 'active' : ''; // Add active class for the current slide
            echo "<div class=\"mySlides fade $activeClass\">";
            echo "<div class=\"numbertext\">" . ($i + 1) . " / " . $NRIMAGES . "</div>";
            echo "<img src=\"" . $images[$i] . "\" style=\"width:100%\">";
            echo "<div class=\"text\">" . $captions[$i] . "</div>";
            echo "</div>";
        }
        ?>

        <!-- Navigation dots -->
        <div class="dot-container">
            <?php
            for ($i = 0; $i < $NRIMAGES; $i++) {
                $activeClass = ($slideIndex == ($i + 1)) ? 'active' : '';
                echo "<span class=\"dot $activeClass\" onclick=\"window.location.href='?slide=" . ($i + 1) . "'\"></span>";
            }
            ?>
        </div>

        <!-- Navigation buttons -->
        <a href="?action=prev">Previous</a>
        <a href="?action=next">Next</a>
    </div>

    <br>

    

</body>

</html>


