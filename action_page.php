<?php
if (isset($_POST["submit"])) {
  $name = $_POST['fname'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $body = $_POST['subject'];

  // Configure the email details
  $to = 'genreycristobal03@gmail.com';
  $from = $email;
  $headers = "From: $name <$from>";
  $txt = "You have received an email from $name. \n\n $body";

  // Send the email
  if (mail($to, $subject, $txt, $headers)) {
    header("Location: index.html");
    echo "Email sent successfully!";

  } 
  
  else {
    echo "Failed to send email. Please try again.";
  }
}
?>
