<!DOCTYPE html>
<html>
<body>

<?php
$myfile = fopen("FileExample/webdictionary.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("FileExample/webdictionary.txt"));
fclose($myfile);

echo "<br>";

$myfile = fopen("FileExample/webdictionary.txt", "r") or die("Unable to open file!");
echo fgets($myfile);
fclose($myfile);

echo "<br>";

$myfile = fopen("FileExample/webdictionary.txt", "r") or die("Unable to open file!");
// Output one line until end-of-file
while(!feof($myfile)) {
  echo fgets($myfile) . "<br>";
}
fclose($myfile);

echo "<br>";

$myfile = fopen("FileExample/webdictionary.txt", "r") or die("Unable to open file!");
// Output one character until end-of-file
while(!feof($myfile)) {
  echo fgetc($myfile);
}
fclose($myfile);

echo "<br>";

echo file_exists("FileExample/webdictionary.txt");
?>

</body>
</html>