<?php
		
				
				$con = mysqli_connect("localhost", "root", "root123", "dejan");
				 
				// Check connection
				if($con === false){
				    die("ERROR: Could not connect. " . mysqli_connect_error());
				}
				
				$fname = mysqli_real_escape_string($con, $_REQUEST['namee1']);
				$flname = mysqli_real_escape_string($con, $_REQUEST['lastname1']);
				$fdate = mysqli_real_escape_string($con, $_REQUEST['date1']);
				$ftoo = mysqli_real_escape_string($con, $_REQUEST['to1']);

				// Attempt insert query execution
				$sql = "INSERT INTO form (Name, Lastname, Da, Too) VALUES ('$fname', '$flname', '$fdate', '$ftoo')";
				if(mysqli_query($con, $sql)){
				    echo "Records inserted successfully. Please email or text your address for the following trip you have booked.";
				    header( 'refresh: 7; url=index.html' );
				} else{
				    echo "ERROR: Could not able to execute $sql. " . mysqli_error($con);
				    header( 'refresh: 3; url=index.html' );
				}
				 
				// Close connection
				mysqli_close($con);

?>  
				