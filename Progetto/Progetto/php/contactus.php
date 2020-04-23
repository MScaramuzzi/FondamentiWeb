<?php

  if(isset($_POST['submit'])){
      $nome = $_POST['nome'];
      $oggetto = $_POST['oggetto'];
      $email = $_POST['email'];
      $messaggio = $_POST['messaggio'];

      $mailTo = "activityplanner2@gmail.com";
      $headers = "From: ".$email;
      $txt = "Hai ricevuto un'e-mail da ".$nome.".\n\n".$messaggio;

      mail($mailTo, $oggetto, $txt, $headers);
      header('location: contactsPage.php');
  }

?>