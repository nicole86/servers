// * Create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// ** Bonus **
// * Generate the good / bad phrase randomly from a list of predefined phrases
// * Use the `twitter` package inside the response to also return a random tweet!

var http = require('http');

var PORT = 7000;
var PORT2 = 7500;

function goodVibes(request, response){
	response.end('<h1>You are awesome!</h1>');
}

function badVibes(request, response){
	response.end('<h1>You suck!</h1>');
}

var server = http.createServer(goodVibes);
var server2 = http.createServer(badVibes);

server.listen(PORT, function(){
	console.log('server listening on', PORT);
})

server2.listen(PORT2, function(){
	console.log('server listening on', PORT2);
})