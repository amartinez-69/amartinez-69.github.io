<?php 
    $usernames = [];
    $file = fopen("../output/users.txt", "r");
    while(!feof($file)){
        $line = fgets($file);
        if(str_contains($line,"Username")){
            $username = substr($line, 9);
            array_push($usernames, $username);
        }
    }
    $nrUsers = count($usernames);
    echo "Number of users: " . $nrUsers . "<br>";
    for($i = 0; $i < $nrUsers; $i++){
        echo $usernames[$i] . "<br>";
    }
    fclose($file);
?>