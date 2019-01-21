<?php
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");



$conn = mysqli_connect('localhost', 'root', '', 'users');
$request = json_decode(file_get_contents('php://input'), true);

$user_mail = mysqli_real_escape_string($conn, $request['mail']);

$response = mysqli_query($conn, 'SELECT * FROM registered WHERE mail=\'' . $user_mail . '\';');
$array_res = mysqli_fetch_assoc($response);

echo json_encode($array_res);

?>