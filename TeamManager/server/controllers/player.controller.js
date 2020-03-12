const {Player} = require("../models/player.model");

module.exports.index = (request, response) => {
  response.json({
      message: "Hello World"
  });
}

module.exports.createPlayer = (request, response) => {
  const { name, position, status } = request.body;
  Player.create({
    name,
    position,
    status
  })
    .then(player => response.json( player ))
    .catch(err => response.status(400).json(err));
};

module.exports.getallPlayers = (request, response) => {
  Player.find({})
    .then(players => response.json( players ))
    .catch(err => response.status(400).json(err));
};

module.exports.getPlayer = (request, response) => {
  Player.findOne({_id:request.params.id})
    .then(player => response.json( player ))
    .catch(err => response.status(400).json(err));
};

module.exports.updatePlayer = (request, response) => {
  Player.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
    .then(updatePlayer => response.json( updatePlayer ))
    .catch(err => response.status(400).json(err));
};

module.exports.deletePlayer = (request, response) => {
  Player.deleteOne({_id:request.params.id})
    .then(deleteConfirmation => response.json( deleteConfirmation ))
    .catch(err => response.json({ message: "Could not delete player", error: err }));
};