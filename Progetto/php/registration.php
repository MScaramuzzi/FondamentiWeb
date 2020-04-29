<?php 
	session_start();
    
  //verifica se il bottone "login" sia stato effettivamente premuto
	if(isset($_POST['register'])){
       //verificata la condizione si passa alla connessione con il db
      $con = mysqli_connect('localhost', 'root', '');
      //seleziona il db desiderato
      mysqli_select_db($con, 'my_sitowebperproduttivita');

       /*acquisisce tramite metodo POST (non in chiaro) le informazioni inserite 
      dall'utente all'interno del form di registrazione*/
      $username = $_POST['username'];
      $email = $_POST['email'];
      $password = $_POST['password'];
      /*il metodo md5 di occuoa di criptare la password in modo da non renderla visibile in
      chiaro sul db   ***SICUREZZA***  */
      $pass = md5($password);

      /*seleziona dal database tutte le tuple della tabella users aventi il campo 
      username corrispondente a quanto inserito dall'utente*/
      $query = "select * from users where username = $username";
      
      //mette il risultato della query precedente all'interno della variabile "result"
      $result = mysqli_query($con, $query);
       //conta le righe restituite da result
      $num = mysqli_num_rows($result);
    
      //verifica se le righe restituite da result sono pari ad 1
      if($num == 1){
        //in caso afferamtivo mostra quanto segue
        echo "Username già in uso";
      }else{
        //in caso contrario si effettua un'operazione di inserimento dei dati immessi nel form
        $insert = "insert into users (id, username, email, password) value ('0', '$username', '$email', '$pass')";
        mysqli_query($con, $insert);
        //torna alla pagina di login
        header('location: ../html/loginPage.html');
      }

      //verifica se è stato effettuato un inserimento nel db
      if($insert){
          //utilizza quanto esplicitato nel file email.php
          include('email.php');
      }
    
   }
?>
