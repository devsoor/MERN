const PollController = require("../controllers/poll.controller");

module.exports = app => {
  app.get("/api/", PollController.index);
  app.post("/api/poll", PollController.createPoll);
  app.get("/api/poll", PollController.getallPolls);
  app.get("/api/poll/:id", PollController.getPoll);
  app.put("/api/poll/:id", PollController.updatePoll);
  app.delete("/api/poll/:id", PollController.deletePoll);
};