<?php

require 'dbOptions.php';

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
      'body' => $row[body],
      'time' => date('m.d h:i a', strtotime($row[time]))
    );
  }

  // Now let's group all the phone numbers into users
  foreach ($messages[users] as $key => $value) {
    $stuff = ["number" => $key, "messages" => $value];
    array_push($groupedMessages, $stuff);
  }

  // Encode that ish and send it over
  echo json_encode($groupedMessages, JSON_PRETTY_PRINT);

  // We'll do this anyway, even though it shouldn't be needed anymore
  $results->free();
  $DB->close();

}

// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));

// Check to see what the user is trying to do here
if ($method == 'GET') {
  getMessages($dbOptions);
}

?>
