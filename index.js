const { PeerServer } = require("peer");
const WS_PORT = process.env.PORT;


const peerServer = PeerServer({
  port: WS_PORT, key:"demodemo", path: "/myapp",
  allow_discovery: true,
});


peerServer.on("connection", c => {
  console.log("connection ID:", c.id)
})

peerServer.on("disconnect", c => {
  console.log("disconnect!", c.id)
})

console.log("running on port", WS_PORT)