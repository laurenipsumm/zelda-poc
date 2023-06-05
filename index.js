const { PeerServer } = require("peer");

const peerServer = PeerServer({
  port: 3000, key:"demodemo", path: "/myapp",
  allow_discovery: true,
});


peerServer.on("connection", c => {
  console.log("connection ID:", c.id)
})

peerServer.on("disconnect", c => {
  console.log("disconnect!", c.id)
})

console.log("running")