<?php

   //verifica se il bottone "login" sia stato effettivamente premuto
  if(isset($_POST['submit'])){

      /*acquisisce tramite metodo POST (non in chiaro) le informazioni inserite 
      dall'utente all'interno del form di feedback*/
      $nome = $_POST['nome'];
      $oggetto = $_POST['oggetto'];
      $email = $_POST['email'];
      $messaggio = $_POST['messaggio'];

      /*variabili dove si salvano i dati: email del destinatario (Sctivity Planner), 
      da chi si riceve il feedback, testo del messaggio*/
      $mailTo = "activityplanner2@gmail.com";
      $headers = "From: ".$email;
      $txt = 'Hai ricevuto un\'e-mail da '.$nome.'.\n\n'.$messaggio;

      //effettua l'invio dell'email di feedback
      mail($mailTo, $oggetto, $txt, $headers);
      //rimani nella pagina conttattaci
      header('location: ../html/contactsPage.html');
  }

?>