<?php

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];

$to = 'matthewjohncoleman@gmail.com';
$subject = "Profile Comment";
$headers = "From:".$email;
mail($to,$subject, $message, $headers) or die("failed");

echo("Mail has been sent to ". "site owner" . ' from '. $name);


 ?>
<html>
<link rel="stylesheet" href="css/style.css">
<head>
</head>
<body>
  <p>Sending .......  </p>
  <a href="contact.html">Return</a>

</body>
</html>
