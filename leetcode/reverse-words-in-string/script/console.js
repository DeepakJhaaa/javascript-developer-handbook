//Print Console.log to HTML Window.
(function() {
  if (!console) {
    console = {};
  }
  var old = console.log;
  var logger = document.getElementById('logger');
  console.log = function(message) {
    if (typeof message == 'object') {
      logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
    } else {
      logger.innerHTML += message + '<br />';
    }
  }
})();