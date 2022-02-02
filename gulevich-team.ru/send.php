<?php 

    $to = "Gulevich-team@mail.ru"; 
    $from = $_POST['email']; 
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $subject = "Заказ обратного звонка с сайта Gulevich-team.ru";
    $message = $name . " оставил заявку:" . "\n\n" . $name . "\n\n" . $phone . "\n\n" . $email;
	mail('Gulevich-team@mail.ru', $subject, $message);
  
?>
