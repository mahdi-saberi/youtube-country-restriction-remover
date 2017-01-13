// ==UserScript==
// @name        youtube unblock
// @namespace   n/a
// @match     https://*.youtube.com/*
// @match     https://youtube.com/*
// @version     1
// @grant       GM_xmlhttpRequest
// ==/UserScript==


function my_func()
{  
    try
    {
        if(document.getElementById('player-unavailable') != null && document.getElementById('player-unavailable').classList.value.indexOf('hid') < 0){
          //alert("http://a.live7.ir/y.php?u="+document.location.href);
            GM_xmlhttpRequest({ 
                method: "GET",
                url : "http://SERVER_URL/y.php?u="+document.location.href,
                onload : function(xhr)
                {
                    var oPage = xhr.responseText;   // page contents
                    //alert(xhr.responseText);
                  document.getElementById('player-unavailable').innerHTML = '<video id="video1" style="width:100%;" controls="" autoplay=""><source src="'+xhr.responseText+'" type="video/mp4"></source></video>';
                  
                }
            });
        }
    }
    catch (zError)
    {
        alert (zError); //-- Use console.log() in place of alert(), if running Firebug.

    }
}

window.addEventListener ("load", my_func, false);