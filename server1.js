//require http
var http = require('http');

//define a port to listen on
var PORT = 8080;
var PORT2 = 3000;
var hit = 0;
var hit2 = 0;

//function to handle all requests
function handleRequest(request, response){
	hit++;
	response.end('<h1>It works!</h1><br><p>' +hit+ 'hits counted</p>');
}


function handleRequest2(request, response){
	hit2++;
	response.end('<h1>It works!</h1><br><p>' +hit2+ 'hits counted</p>');
}

//set up the server
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server.listen(PORT, function(){
	console.log('server listening on: http://localhost:%s', PORT);
})


server2.listen(PORT2, function(){
	console.log('server listening on ', PORT2);
})


