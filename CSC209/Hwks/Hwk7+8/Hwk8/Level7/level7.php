
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Level 7</title>
    <link id="pagestyle" rel="stylesheet" href="slideshow.css">
</head>

<body>
    <?php
        session_start();

        // Get all the images in the folder
        $folder = isset($_GET['folder']) ? $_GET['folder'] : 'images2';
        $images = glob("../$folder/*");
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
<div class="sidenav">
    <div class="folder-selector">
        <a href="?folder=images2" class="folder-button">Original</a>
        <a href="?folder=images1" class="folder-button">Cats</a>
        <a href="?folder=images3" class="folder-button">Coffee</a>
    </div>
</div>
    <div class="main">
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
        <a class="prev" href="?action=prev&folder=<?php echo $folder; ?>">❮</a>
        <a class="next" href="?action=next&folder=<?php echo $folder; ?>">❯</a>
    </div>
</div>
    <br>
    
    

</body>

</html>


