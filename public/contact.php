<?php
header('Content-Type: application/json');
$page = "contact"; //setting default string
parse_str($_SERVER['QUERY_STRING']);

$errors = array();
function died($errors) {
    echo json_encode(array('result' => false,'success' => "failure",'errors' => $errors));
    die();
}   
$required_fields;
if($page == "contact"){
    $required_fields = array('name' => 'Name','email' => 'Email Address','comments' => 'Message','phone' => "Phone Number(max 10 digits are allowed)");
}
else{
    $required_fields = array('name' => 'Name','email' => 'Email Address','services' => 'Services Required','package' => 'Package Selected','business_name'=>'Business name','phone' => "Phone Number(max 10 digits are allowed)");
}
$fields = array();
foreach($required_fields as $x => $x_value) {
    if(!isset($_POST[$x]) && trim($_POST[$x])=="" ){
        array_push($fields,$x_value);
    }
}
if(sizeof($fields) > 0)
    died($fields);
$name = $_POST['name']; // required
$email_from = $_POST['email']; // required
$phone = $_POST['phone']; //required
$weburl = $_POST['weburl']; //not required
$email_exp = '/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/';
$date = $_POST['duedate_submit'];

if(!preg_match($email_exp,$email_from)) { 
    array_push($errors,"Email Address");
    died($errors);
}
$string_exp = "/^[A-Za-z .'-]+$/";
if(!preg_match($string_exp,$name)) {
    array_push($errors,"Name");
    died($errors);
}
$phone_exp = "/^[0-9]{10}$/";
if(!preg_match($phone_exp, $phone)) {
    array_push($errors,"Phone No (max 10 digits are allowed)");
    died($errors);
}
if($weburl!=""){
    if (filter_var($weburl, FILTER_VALIDATE_URL) === false) {
    array_push($errors,"Invalid website URL(Ex: http://www.gangez.in)");
        died($errors);
}
}
if($date != ""){
    $curdate = strtotime("today");
    $duedate_submit = strtotime($date);
    if($duedate_submit < $curdate){
        array_push($errors,"Due date shouldn't be lesser than the current date");
        died($errors);
    }
}


$email_message = "Form details below.\n\n";
function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
}    
$email_message .= "<td>Name: ".clean_string($name)."\n";
$email_message .= "Email: ".clean_string($email_from)."\n";
$email_message .= "Phone: ".clean_string($phone)."\n";
$email_message .= "Website: ".clean_string($weburl)."\n";
$email_message .= "Comments: ".clean_string($comments)."\n";

$email_message = '<html><body style="background:#C0C0C0">';
$email_message .= '<img src="http://gangez.in/images/logo_new.png" width="140px"/>';
$email_message .= '<table rules="all" style="border:1px solid #666;" cellpadding="10">';
$email_message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($name) . "</td></tr>";
$email_message .= "<tr><td><strong>Email:</strong> </td><td>". strip_tags($email_from) . "</td></tr>";
$email_message .= "<tr style='background: #eee;'><td><strong>Webiste:</strong> </td><td>" . strip_tags($weburl) . "</td></tr>";
$email_message .= "<tr><td><strong>Phone:</strong> </td><td>" . strip_tags($phone) . "</td></tr>";
if($page == "contact"){
    $email_message .= "<tr style='background: #eee;'><td><strong>Message:</strong> </td><td>" . strip_tags($_POST['comments']) . "</td></tr>";
    $email_subject = "Contact Request";
}
else if($page == "quote"){
    $email_subject = "Request for Quote";
    $email_message .= "<tr style='background: #eee;'><td><strong>Services Required:</strong> </td><td>" . strip_tags($_POST['services']) . "</td></tr>";
    $email_message .= "<tr><td><strong>Package Selected:</strong> </td><td>" . strip_tags($_POST['package']) . "</td></tr>";
    $email_message .= "<tr style='background: #eee;'><td><strong>Business Name:</strong> </td><td>" . strip_tags($_POST['business_name']) . "</td></tr>";
}
$email_message .= "</table>";
$email_message .= "</body></html>";

// create email header
$email_to = "info@gangez.in";

$headers = "From: " . clean_string($email_from) . "\r\n";
$headers .= "Reply-To: ". clean_string($email_from) . "\r\n";
$headers .= "CC: preetamreddy.pothala@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

@mail($email_to, $email_subject, $email_message, $headers);  
echo json_encode(array('result' => true,'success' => "success",'message' => "Thank you for contacting us. We shall get back to you soon."));
?>
