<?php
include("connect.php");
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$cpassword = $_POST['cpassword'];
if($password==$cpassword){
$insert = mysqli_query($connect, "INSERT INTO user (name, email, password ) 
VALUES ('$name','$email','$password')");
if($insert){
    echo '
    <script>
    alert("registration successful");
    window.location = "../";
    </script>
    ';
}else{
    echo ' 
    <script>
    alert("some error");
    window.location = "../routes/register.html";
    </script>   
    ';
}
}
else{
    echo '
    <script>
    alert("password and confirm password not matched");
    window.location = "../routes/register.html";
    </script>
    ';
}
?>