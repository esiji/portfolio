<?php

$name = $_POST['name'];
$mailFrom = $_POST['email'];
$message = $_POST['message'];
$mailTo = "luki250350@yahoo.com";
$headers = "From: ".$mailFrom;
mail($mailTo, $name, $message, $headers);

echo "thank you."

?>