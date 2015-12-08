var formatCurrentUrl = function() {
  var removeHTTP = document.URL.replace(/http:\/\//, "");
  return removeHTTP.split('?')[0].replace(/[^\w\s]/gi, "_");
};

var currentUrl = formatCurrentUrl();

// Put website body in a div.
var theirBody = document.getElementsByTagName("body")[0].innerHTML;
var theirNewBody = "<div id='theirBody'>" + theirBody + "</div>";
document.getElementsByTagName("body")[0].innerHTML = theirNewBody;

// Create iframe, get api code, send current url
var ifrm = document.createElement("IFRAME");
ifrm.id = "chatensionIframe";
ifrm.src = "https://chatension.herokuapp.com/?currentUrl="+currentUrl;
ifrm.height = window.innerHeight;

// Append the iframe before theirBody div.
document.body.insertBefore(ifrm, document.body.firstChild);