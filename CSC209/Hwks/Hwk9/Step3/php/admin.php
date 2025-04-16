<?php 
    $usernames = [];
    $emails = [];
    $passwords = [];
    $file = fopen("../output/users.txt", "r");
    while(!feof($file)){
        $line = fgets($file);
        if(str_contains($line,"Username")){
            $username = substr($line, 9);
            array_push($usernames, $username);
        }
        elseif(str_contains($line,"Email")){
            $email = substr($line, 6);
            array_push($emails, $email);
        }
        elseif(str_contains($line,"Password")){
            $password = substr($line, 9);
            array_push($passwords, $password);
        }
    }
    $nrUsers = count($usernames);
    echo "Number of users: " . $nrUsers . "<br>";
    echo "<br>";

    for($i = 0; $i < $nrUsers; $i++){
        echo "<div class=\"users\">";
        echo $usernames[$i] . "<br>";
        echo $emails[$i] . "<br>";
        echo $passwords[$i] . "<br>";
        echo "</div>";
        echo "<br>";
    }
    fclose($file);
?>
