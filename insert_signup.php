<?php
// Database connection
$servername = "localhost"; // Change to your server name
$username = "root"; // Change to your database username
$password = ""; // Change to your database password
$dbname = "rating_system"; // Change to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];


// Insert data into users table with current timestamp
$sql = "INSERT INTO users (username, email, password, created_at)
VALUES ('$username', '$email', '$password', NOW())";

if ($conn->query($sql) === TRUE) {
    echo "<script>alert('New record created successfully');</script>";
    echo "<script>window.location.href = 'index.html';</script>";
} else {
    echo "<script>alert('Error: " . $sql . "<br>" . $conn->error . "');</script>";
}

$conn->close();
?>



