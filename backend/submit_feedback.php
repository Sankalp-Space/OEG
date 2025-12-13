<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

include "db.php";

$rating = $_POST['rating'] ?? null;
$comment = $_POST['comment'] ?? null;
$video_id = $_POST['video_id'] ?? "HKLnBv3wxUg";
$user_ip = $_SERVER['REMOTE_ADDR'];

if (!$rating) {
    echo json_encode(["status" => "error", "message" => "Rating is required"]);
    exit;
}

$sql = "INSERT INTO feedback (rating, comment, video_id, user_ip) 
        VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("isss", $rating, $comment, $video_id, $user_ip);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Feedback saved"]);
} else {
    echo json_encode(["status" => "error", "message" => "Database error"]);
}
?>
