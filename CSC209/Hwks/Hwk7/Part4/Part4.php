<!DOCTYPE html>
<html>
<body>

<?php
// Define the number of rows and columns and data
define('NROWS', 6);
define('NRCOLS', 3);

$first_names = ["John", "Sophia", "Michael", "Hayley", "David", "Emma"];
$last_names = ["Doe", "Smith", "Jackson", "Williams", "Bowie", "Roberts"];
$ages = [28, 73, 50, 36, 69, 34];

// Start the table
echo "<table border='2'>";
echo "<tr>";
echo "<th>First Name</th>";
echo "<th>Last Name</th>";
echo "<th>Age</th>";
echo "</tr>";

// Loop through each row and output the corresponding data from each array
for ($i = 0; $i < NROWS; $i++) {
    echo "<tr>";
    echo "<td> $first_names[$i] </td>";
    echo "<td> $last_names[$i] </td>";
    echo "<td> $ages[$i] </td>";
    echo "</tr>";
}

// End the table
echo "</table>";
?>


</body>
</html>