<?php

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");

$user_data = json_decode(file_get_contents('php://input'), true);

if ($user_data) {
    $conn = mysqli_connect('localhost', 'root', '', 'users');
    
    $res = mysqli_query($conn, 'SELECT * FROM registered WHERE mail=\'' . $user_data['mail'] . '\';');
	
    if (mysqli_num_rows($res) >= 1) {
        echo 1;
    } 
	else {
        echo 0;
    }
}
?>