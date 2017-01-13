 <?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
print_r( shell_exec("youtube-dl '{$_GET['u']}' -g -f 22"));  //which 22 means 720p
?>