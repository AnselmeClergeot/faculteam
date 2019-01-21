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
function wrongPassword() {
	echo json_encode(array('message' => 'wrong_password'));
	exit();
}

function error() {
	echo json_encode(array('message' => 'error'));
	exit();
}

function unverified() {
	echo json_encode(array('message' => 'unverified'));
	exit();
}

$user_data = json_decode(file_get_contents('php://input'), true);

if(isset($user_data['mail']) && isset($user_data['password'])) {
	
	$conn = mysqli_connect('localhost', 'root', '', 'users');
	
	$mail = mysqli_real_escape_string($conn, $user_data['mail']);
	$password = mysqli_real_escape_string($conn, $user_data['password']);
	
	$res = mysqli_query($conn, 'SELECT * FROM registered WHERE mail=\'' . $mail . '\';');
	$array_res = mysqli_fetch_assoc($res);
	
    if (mysqli_num_rows($res) == 0) {
		noSuchUser();
    }
	
	else {
		
		if($array_res['confirmed'] == '0')
				unverified();
			
		$crypted_password = $array_res['password'];
		
		if(password_verify($user_data['password'], $crypted_password)) {
			connected();
		}

		else {
			wrongPassword();
		}
	}
	
}

else {
	error();
}


?>