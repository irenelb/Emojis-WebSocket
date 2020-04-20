const wss = require("./ws");
const generator = require("./generator");

const connectedClients = [];

wss.on("connection", ws => {
  connectedClients.push(ws);
});

generator({
  maxTime: 20000,
  callback: emojii => {
    connectedClients.forEach(ws => {
      ws.send(emojii);
    });
  }
});
