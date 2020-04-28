<?php
    /*l'intero codice php che segue ha l'obiettivo di inviare un messaggio automatico di 
    benvenuto a chi ha provveduto ad effettuare la registrazione ad Activity Planner*/
    require '../PHPmailer/PHPMailerAutoload.php';
    //sono dichiarate tutte le variabili utili all'invio automatico dell'email
    $mail = new PHPMailer;
    //host di invio email (gmail)
    $mail->Host='smtp.gmail.com';
    //porta di uscita messaggio
    $mail->Port=587;
    $mail->SMTPAuth=true;
    //protocollo di sicurezza
    $mail->SMTPSecure='tls';

    //password ed email del mittente 
    $mail->Username='activityplanner2@gmail.com';
    $mail->Password='activityplanner2020';

    //info riguardanti il mittente (ricevute dal destinatario)
    $mail->setFrom('activityplanner2@gmail.com', 'Activity Planner');
    $mail->addAddress($email);
    $mail->addReplyTo('activityplanner2@gmail.com');

    $mail->isHTML(true);
    //oggetto dell'email
    $mail->Subject='Benvenuto in Activity Planner';
    //corpo dell'email
    $mail->Body='<h1 align=center>Benvenuto in Activity Planner</h1></br>
                 <p>Ti diamo il benvenuto nel nostro applicativo.Grazie per averci scelti!</p>
                 <p>Speriamo che sia di tuo gradimento!</p>';
    
    //verifica se l'email è stata inviata
    if(!$mail->send()){
        echo "Email non inviata";
    }else{
        echo "Email inviata";
    }
    
?>