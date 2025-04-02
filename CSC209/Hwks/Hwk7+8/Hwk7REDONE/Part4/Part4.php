<!DOCTYPE html>
<html>
<body>

<?php
// Define the number of rows and columns and data
$titles = ["First Name", "Last Name", "Age"];
$first_names = ["John", "Sophia", "Michael", "Hayley", "David", "Emma"];
$last_names = ["Doe", "Smith", "Jackson", "Williams", "Bowie", "Roberts"];
$ages = [28, 73, 50, 36, 69, 34];
$NROWS = count($first_names);
$NRCOLS = count($titles);

// Start the table
echo "<table border='2'>";
echo "<tr>";

//Loop through each column for column titles
for ($i = 0; $i < $NRCOLS; $i++) {
    echo "<th> $titles[$i] </th>";

}

echo "</tr>";

// Loop through each row and output the corresponding data from each array
for ($i = 0; $i < $NROWS; $i++) {
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