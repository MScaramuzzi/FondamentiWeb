<?php

    require '../PHPmailer/PHPMailerAutoload.php';
    
    $mail = new PHPMailer;
    $mail->Host='smtp.gmail.com';
    $mail->Port=587;
    $mail->SMTPAuth=true;
    $mail->SMTPSecure='tls';

    $mail->Username='activityplanner2@gmail.com';
    $mail->Password='activityplanner2020';

    $mail->setFrom('activityplanner2@gmail.com', 'Activity Planner');
    $mail->addAddress($email);
    $mail->addReplyTo('activityplanner2@gmail.com');

    $mail->isHTML(true);
    $mail->Subject='Benvenuto in Activity Planner';
    $mail->Body='<h1 align=center>Benvenuto in Activity Planner</h1></br>
                 <p>Ti diamo il benvenuto nel nostro applicativo.Grazie per averci scelti!</p>
                 <p>Speriamo che sia di tuo gradimento!</p>';
    
    if(!$mail->send()){
        echo "Email non inviata";
    }else{
        echo "Email inviata";
    }

?>
