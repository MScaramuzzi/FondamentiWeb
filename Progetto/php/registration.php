<?php 
	session_start();
    
	if(isset($_POST['register'])){
      $con = mysqli_connect('localhost', 'root', '');
      mysqli_select_db($con, 'my_sitowebperproduttivita');

      $username = $_POST['username'];
      $email = $_POST['email'];
      $password = $_POST['password'];
      $pass = md5($password);

      $query = "select * from users where username = $username";

      $result = mysqli_query($con, $query);
      $num = mysqli_num_rows($result);
    
      if($num == 1){
        echo "Username già in uso";
      }else{
        $insert = "insert into users (id, username, email, password) value ('0', '$username', '$email', '$pass')";
        mysqli_query($con, $insert);
        header('location: loginPage.php');
      }

      if($insert){
          include('email.php');
      }
    }
?>
