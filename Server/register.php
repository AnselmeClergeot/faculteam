<?php

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");

$user_data = json_decode(file_get_contents('php://input'), true);

if ($user_data) {
    
    $conn = mysqli_connect('localhost', 'root', '', 'users');
    $hash = '$2y$07$BCryptRequires22Chrcte/VlQH0piJtjXl.0t1XkA8pw9dMXTpOq';
    $req  = 'INSERT INTO registered(mail, firstname, lastname, password, reputation, random_id, confirmed) VALUES (\'' . $user_data['mail'] . '\', \'' . $user_data['firstname'] . '\', \'' . $user_data['lastname'] . '\', \'' . password_hash($user_data['password'], PASSWORD_BCRYPT) . '\', \'' . 0 . '\', \'' . uniqid() . '\', \'' . 0 . '\');';
    
    
    if (!mysqli_query($conn, $req)) {
        echo ("Error description: " . mysqli_error($conn));
    }
}
?>