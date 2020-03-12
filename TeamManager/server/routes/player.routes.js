const PlayerController = require("../controllers/player.controller");

module.exports = app => {
  app.get("/api/", PlayerController.index);
  app.post("/api/player", PlayerController.createPlayer);
  app.get("/api/player", PlayerController.getallPlayers);
  app.get("/api/player/:id", PlayerController.getPlayer);
  app.put("/api/player/:id", PlayerController.updatePlayer);
  app.delete("/api/player/:id", PlayerController.deletePlayer);
};