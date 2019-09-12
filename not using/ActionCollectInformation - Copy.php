		<?php
				$con = mysql_connect("localhost","root","root123");
				if (!$con)
				  {
				  die('Could not connect: ' . mysql_error());
				  }
				
				mysql_select_db("dejan", $con);
				
				$sql= "INSERT INTO form (Name, Lastname, Da, Too) VALUES ('$_POST[name1]','$_POST[lastname]','$_POST[date]','$_POST[to]')";
				
				if (!mysql_query($sql,$con))
				  {
				  die('Error: ' . mysql_error());
				  }
				echo "1 record added";
				mysql_close($con)
		?>


			// INCLUDE('config.php');

	// $name = $_REQUEST['name1'];
	// $lastname = $_REQUEST['lastname'];
	// $date	= date('date');
	// $too = $_REQUEST['to'];

	
	// // $query= mysql_query("INSERT INTO form (Name, Lastname, Date, To) VALUES ('$name', '$lastname','$date', '$too')");
	// $query = "INSERT INTO 'dejan'.'form'('Name', 'Lastname', 'Da', 'To') VALUES ('john', 'smith','10-10-95', 'paris')";
	// if(mysql_query($query, $db))
	// {
	// 	echo "Form Uploaded Successfully. Well Done.";
	// 	header( 'refresh: 3; url=index.html' );
	// }

	// else
	// {
	// 	echo "Upload Not Possible, Try Again.";
	// 	header( 'refresh: 3; url=index.html' );
	// }



<!-- 	$con = mysql_connect("localhost","root","root123");
				if (!$con)
				  {
				  die('Could not connect: ' . mysql_error());
				  }
				
				mysql_select_db("dejan", $con);

				$name = $_REQUEST['name1'];
				$lastname = $_REQUEST['lastname'];
				$dat	= date('date');
				$too = $_REQUEST['to'];
				
				$sql= mysql_query("INSERT INTO form (Name, Lastname, Da, Too) VALUES ('$name', '$lastname','$date', '$too')");
				
				if (!mysql_query($sql,$con))
				  {
				  die('Error: ' . mysql_error());
				  }
				echo "1 record added";
				mysql_close($con) -->