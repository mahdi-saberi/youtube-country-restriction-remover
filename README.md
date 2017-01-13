# youtube country restriction remover
 

## Requirements & Installation
VPS for php code (or you can use your local compouter)

Installing [youtube-dl] (https://rg3.github.io/youtube-dl/) on your vps/local computer

Upload y.php on your webserver which is very simple as you can see below in this page

Installing greasemonkey which is client app to run javascript on specific pages
[greasemonkey for firefox] (https://addons.mozilla.org › Add-ons for Firefox › Extensions)  | 
[greasemonkey for chrome] (https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)

Change SERVER_URL to your vps ip address or if you use in youtube-unblock.user.js on line 19


## Server side code y.php
```
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
print_r( shell_exec("youtube-dl '{$_GET['u']}' -g -f 22"));  //which 22 means 720p
?>
```