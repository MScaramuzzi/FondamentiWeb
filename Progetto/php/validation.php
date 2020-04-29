<?php 
	
	session_start();
    
    //verifica se il bottone "login" sia stato effettivamente premuto
   	if(isset($_POST['login'])){
      //verificata la condizione si passa alla connessione con il db
      $con = mysqli_connect('localhost', 'root', '');
      //seleziona il db desiderato
      mysqli_select_db($con, 'my_sitowebperproduttivita');
	
      /*acquisisce tramite metodo POST (non in chiaro) le informazioni inserite 
      dall'utente all'interno del form di login*/
      $username = $_POST['username'];
      $password = $_POST['password'];
      
      /*il metodo md5 di occuoa di criptare la password in modo da non renderla visibile in
      chiaro sul db   ***SICUREZZA***  */
      $pass = md5($password);
	
      /*seleziona dal database tutte le tuple della tabella users aventi i campi di
      username e password corrispondenti a quanto inserito dall'utente*/
      $query = "select * from users where username = '$username' and password='$pass'";
	  
      //mette il risultato della query precedente all'interno della variabile "result"
      $result = mysqli_query($con, $query);
	  
      //conta le righe restituite da result
      $num = mysqli_num_rows($result);
      
      //verifica se le righe restituite da result sono pari ad 1
      if($num == 1){
      	//in caso afferamtivo si viene riportati nella main page del sito web
        header('location: ../html/mainPage.html');
      }else{
      	//in caso contrario si rimane all'interno della pagina di login
        header('location: ../html/loginPage.html');
      }
    }
?>
