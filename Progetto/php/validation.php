<?php 
	session_start();
    
   	if(isset($_POST['login'])){
      $con = mysqli_connect('localhost', 'root', '');
      mysqli_select_db($con, 'my_sitowebperproduttivita');

      $username = $_POST['username'];
      $password = $_POST['password'];
      $pass = md5($password);

      $query = "select * from users where username = '$username' and password='$pass'";

      $result = mysqli_query($con, $query);

      $num = mysqli_num_rows($result);
      
      if($num == 1){
        header('location: ../html/mainPage.html');
      }else{
        header('location: loginPage.php');
      }
    }
?>
