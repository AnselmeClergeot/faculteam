<?php

function lengthIsValid($str, $min, $max) {
	return (strlen($str) <= $max && strlen($str) >= $min);
}

function error() {
	echo 1;
	exit();
}

function success() {
	echo 0;
}

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");

$user_data = json_decode(file_get_contents('php://input'), true);

if ($user_data) {
	
	
    
    $conn = mysqli_connect('localhost', 'root', '', 'users');
	
	$mail = mysqli_real_escape_string($conn, $user_data['mail']);
	$firstname = mysqli_real_escape_string($conn, $user_data['firstname']);
	$lastname = mysqli_real_escape_string($conn, $user_data['lastname']);
	$password = mysqli_real_escape_string($conn, $user_data['password']);
	
	//First, let's check if the mail is available. It should because the app already checks that but... Never trust user input.
	$mailSearchRes = mysqli_query($conn, 'SELECT * FROM registered WHERE mail=\'' . $mail . '\';');
	
    if (mysqli_num_rows($mailSearchRes) >= 1) {
		error();
    }
	
	if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
		error();
	}
	
	if(!lengthIsValid($firstname, 2, 15) || !lengthIsValid($lastname, 2, 20) || !lengthIsValid($password, 4, 30)) {
		error();
	}

	
    $hash = '$2y$07$BCryptRequires22Chrcte/VlQH0piJtjXl.0t1XkA8pw9dMXTpOq';
    $req  = 'INSERT INTO registered(mail, firstname, lastname, password, reputation, random_id, confirmed) VALUES (\'' . $mail . '\', \'' . $firstname . '\', \'' . $lastname . '\', \'' . password_hash($password, PASSWORD_BCRYPT) . '\', \'' . 0 . '\', \'' . uniqid() . '\', \'' . 0 . '\');';
    
    
    if (!mysqli_query($conn, $req)) {
        error();
    }
}
else {
	error();
}

success();


?>