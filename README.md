# websocket_cellGame

# Learned Lessons
1. Be careful how you craft your connection.on stuff. Mispellings and an extra () => ruined things for sure. Failed silently so it was hard to identify where it failed at first.

2. Websocket is essentially you creaate socket objects that you'll be able to call upon to do things.
	To create a new one -- new WebSocket("ws://localhost:....")...
	To send something on a socket -- WebSocketObject.send()....
3. Difference between http.request() and http.createServer() https://stackoverflow.com/questions/48373182/http-request-vs-http-createserver/48373224#:~:text=with%20each%20other.-,http.,creating%20your%20own%20HTTP%20server.
	http.request() -- is to request/download another server's page like stack overflow...
	http.createServer() -- is to create your own server. Binds your app to socket to listen on
	
	

