<?php

if($_POST) {
    $name = $_POST['email_name'];
    $mailFrom = $_POST['email_email'];
    $message = $_POST['email_message'];
    $mailTo = "luki250350@yahoo.com";
    $headers = "From: ".$mailFrom;
    mail($mailTo, $name, $message, $headers);

    echo "thank you."
}

?>  