<?php
if(!defined('sugarEntry') || !sugarEntry) die('Not A Valid Entry Point');

//  REST HTTP Header
header('Content-Type: application/json');

// Get current user
global $current_user;

// Configure Click to dial data
$data = array(
  'server' => '192.168.100.40', // example server ip
  'ramal' => $current_user->ramal_c // custom field created in user module
);

// Send JSON to front-end
echo json_encode($data);
