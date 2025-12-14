<?php
include "db.php";

$password = 'admin123';
$hash = password_hash($password, PASSWORD_DEFAULT);
echo 'New hash for admin123: ' . $hash . PHP_EOL;

$sql = "UPDATE admin_users SET password_hash = '$hash' WHERE username = 'admin'";
if ($conn->query($sql) === TRUE) {
    echo 'Admin password updated successfully! You can now login with admin/admin123' . PHP_EOL;
} else {
    echo 'Error updating password: ' . $conn->error . PHP_EOL;
}
?>
