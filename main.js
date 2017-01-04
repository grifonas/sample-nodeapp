/* Hello, World! program in node.js */

// "require" directive to load the http module:
var http = require("http");
var fs = require('fs');


var port = 80
var ip = "0.0.0.0"
var message = "Testing Rollbacl Stage 2" 
http.createServer (function (request, response) {
        // Send the HTTP header
        // HTTP status: 200 : OK
        // Content Type: text/plain
        response.writeHead(200, {'Content-Type': 'text/plain'});

        // Send response body as "Hello World"
        response.end(message);
}).listen(port, ip);

// Console output:
console.log('Server running at http://' + ip +':' +port);
console.log('Message: '+message)
