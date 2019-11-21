<?php

if(isset($_POST['submit'])){
    $name = $_POST['email_name'];
    $mailFrom = $_POST['email_email'];
    $message = $_POST['email_message'];

    $mailTo = "luki250350@gmail.com";
    $headers = "From: ".$mailFrom;

    mail($mailTo, $name, $message, $headers);

    echo("Message sent :)")
}

?>