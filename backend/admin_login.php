<?php
session_start();
header("Content-Type: application/json");
include "db.php";

$username = $_POST['username'] ?? "";
$password = $_POST['password'] ?? "";

$sql = "SELECT * FROM admin_users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(["status" => "error", "message" => "Invalid username"]);
    exit;
}

$user = $result->fetch_assoc();

if (hash('sha256', $password) === $user['password_hash']) {
    $_SESSION['admin'] = true;
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid password"]);
}
?>
