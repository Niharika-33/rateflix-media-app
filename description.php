<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Database</title>
    <style>
        /* Your CSS styles here */
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2; /* Light Grey */
            margin: 0;
            padding: 0;
            color: #343a40; /* Dark Grey */
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            border: 1px solid #ddd; /* Light Grey */
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #dcdcdc; /* Medium Grey */
        }

        h2 {
            color: #007bff; /* Blue */
        }
    </style>
</head>
<body>

<h2>Movie Database</h2>

<table>
    <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Type</th>
        <th>Genre</th>
        <th>Release Date</th>
        <th>Description</th>
    </tr>
   
    <?php 
    // Database connection parameters
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "rating_system";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // SQL query to fetch movie records from the database
    $sql = "SELECT id, title, type, genre, release_date, description FROM content";
    $result = $conn->query($sql);

    // Check if the query was successful
    if ($result === false) {
        die("Error executing query: " . $conn->error);
    }

    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($row["id"]) . "</td>"; // Sanitize output
        echo "<td>" . htmlspecialchars($row["title"]) . "</td>"; // Sanitize output
        echo "<td>" . htmlspecialchars($row["type"]) . "</td>"; // Sanitize output
        echo "<td>" . htmlspecialchars($row["genre"]) . "</td>"; // Sanitize output
        echo "<td>" . htmlspecialchars($row["release_date"]) . "</td>"; // Sanitize output
        echo "<td>" . htmlspecialchars($row["description"]) . "</td>"; // Sanitize output
        echo "</tr>";
    }

    // Close connection
    $conn->close();
   ?>

</table>

</body>
</html>



