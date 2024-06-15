<?php

// Establish connection to your database
$servername = "localhost"; // Replace with your server name
$username = "root"; // Replace with your database username
$password = ""; // Replace with your database password
$dbname = "rating_system"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get email and password from the form
$email = $_POST['email'];
$password = $_POST['password'];

// SQL query to check if the email and password match
$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Login successful
    echo "<script>alert('Login successful!'); window.location.href='index.html';</script>";
} else {
    // Invalid email or password
    echo "<script>alert('Invalid email or password'); window.history.back();</script>";
}

// Close the database connection
$conn->close();
?>





