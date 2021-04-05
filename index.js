const http = require("http"); // built into node.js
const app = require("express")();
app.get("/", (req,res)=> res.sendFile(__dirname + "/index.html"))

app.listen(9091, ()=> console.log("Listening on http port 9091"))

const websocketServer = require("websocket").server;
const httpServer = http.createServer();
httpServer.listen(9090, () => console.log("Listening on 9090"));

//hasmap
const clients = {};

const wsServer = new websocketServer({
    "httpServer": httpServer
})

wsServer.on("request", request => {
    //this is someone who's trying to connect
    const connection = request.accept(null, request.origin); //gets a beautiful tcp connection, biDirectional thing
    connection.on("open", () => console.log("opened!"))
    connection.on("close", () => console.log("closed!"))
    connection.on("message", () => message => {
        const result = JSON.parse(message.utf8Data)
        //i have receieved a message from the client
        console.log(result)
    })

    // generate a new clientId
    const clientId = guid();
    clients[clientId] = {
        "connection": connection
    }

    const payLoad = {
        "method": "connect",
        "clientId": clientId
    }

    //send back the client connection
    connection.send(JSON.stringify(payLoad))
})

// function to generate guid
function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
 
// then to call it, plus stitch in '4' in the third group
const guid = () => (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();