<!-- add.php -->
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Item</title>
</head>
<body>
<form method="post">
    <input type="text" name="newTodo" id="newTodo">
    <input type="submit" value="Добавить">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $title = $_POST['newTodo'];

    $url = 'http://81.177.140.68:666/todos';

    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $headers = array(
        "Content-Type: application/json",
    );
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

    $data = json_encode(array("title" => $title));

    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

    $response = curl_exec($curl);
    curl_close($curl);

    if ($response === FALSE) {
        // Обработка ошибки
    } else {
        echo "Информация успешно добавлена!";
    }
}
?>


</body>
</html>
