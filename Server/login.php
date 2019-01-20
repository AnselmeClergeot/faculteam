<?php

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");

function noSuchUser() {
	echo json_encode(array('message' => 'no_such_user'));
	exit();
}

function connected() {
	echo json_encode(array('message' => 'connected'));
	exit();
}

function error() {
	echo json_encode(array('message' => 'error'));
	exit();
}

$user_data = json_decode(file_get_contents('php://input'), true);

if($user_data) {
	
	$conn = mysqli_connect('localhost', 'root', '', 'users');
	
	$mail = mysqli_real_escape_string($conn, $user_data['mail']);
	$password = mysqli_real_escape_string($conn, $user_data['password']);
	
	$res = mysqli_query($conn, 'SELECT * FROM registered WHERE mail=\'' . $mail . '\' AND password=\'' . password_hash($password, PASSWORD_BCRYPT) . '\';');
	
    if (mysqli_num_rows($res) == 0) {
		noSuchUser();
    }
	else {
		connected();
	}
	
}

else {
	error();
}


?>