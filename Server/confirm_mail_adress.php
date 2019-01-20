<?php
	
	
	$conn = mysqli_connect('localhost', 'root', '', 'users');
	
	if(!isset($_GET['user']) || !isset($_GET['code'])) {
		echo '<h1>Oups, quelque chose a très mal tourné</h1>';
	}
	
	else {
	
		$user = mysqli_real_escape_string($conn, $_GET['user']);
		$code = mysqli_real_escape_string($conn, $_GET['code']);
		
		//First, let's check if the mail is available. It should because the app already checks that but... Never trust user input.
		$req = mysqli_query($conn, 'SELECT * FROM registered WHERE mail=\'' . $user . '\';');
		
		$row=mysqli_fetch_array($req,MYSQLI_ASSOC);
		
		if(mysqli_num_rows($req) == 0) {
				echo '<h1>Oups, quelque chose a très mal tourné</h1>';
		}
		
		if($row['confirmed'] == '1') {
			echo '<h1>Votre compte est déjà validé, vous pouvez vous connecter.</h1>';
		}
		else {
		
		if($row['random_id'] == $code){
			
				mysqli_query($conn, "UPDATE registered SET confirmed='1' WHERE mail='" . $user . "'");
				echo '<h1>Votre compte est vérifié, vous pouvez maintenant vous connecter !</h1>';
		}
		
		else {
				echo '<h1>Bien tenté... ;)</h1>';
		}
		}
	
	}
?>