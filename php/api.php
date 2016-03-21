<?php

require 'dbOptions.php';

header('Access-Control-Allow-Origin: *');

function getMessages($dbOptions) {

  // Let's get all the messages from the databse and pass them over as JSON

  // Connect!
  $DB = new mysqli($dbOptions[db_host],$dbOptions[db_user],$dbOptions[db_pass],$dbOptions[db_name]);

  // Make sure we get a clean connection
  if (!$results = $DB->query('SELECT * FROM messages ORDER BY time')) {
    echo "Oops!";
    exit;
  }

  // Create a messages array to pass along
  $messages = [];
  $groupedMessages = [];

  // Let's parse that data
  while ($row = $results->fetch_assoc()) {
    // Let's format the time to be pretty
    $messages[users][$row[phone_number]][] = array(
      'from' => $row[from_user],
      'timestamp' => date( 'm.d h:i a', strtotime($row[time])),
      'body' => $row[body]
    );
  }

  // Now let's group all the phone numbers into users
  foreach ($messages[users] as $key => $value) {
    $stuff = ["number" => $key, "thread" => $value];
    array_push($groupedMessages, $stuff);
  }

  // Encode that ish and send it over
  echo json_encode($groupedMessages, JSON_PRETTY_PRINT);

  // We'll do this anyway, even though it shouldn't be needed anymore
  $results->free();
  $DB->close();

}

function putMessage($ticket, $from, $body) {

}





// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));

// Check to see what the user is trying to do here
if ($method == 'GET' && $request[1] == 'messages') {
  // The user is retrieving all messages from the DB
  getMessages($dbOptions);
}

if ($method == 'POST' && $request[1] == 'message') {
  // The user wants to add a message, let's see which ticket to append the message to
  foreach ($_GET as $key => $value) {
    echo $key. ": " . $value . "\n";
  }

  putMessage($_GET['ticket'], $_GET['from'], $_GET['body']);
}

?>
