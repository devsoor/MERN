const {Poll} = require("../models/poll.model");

module.exports.index = (request, response) => {
  response.json({
      message: "Hello World"
  });
}

module.exports.createPoll = (request, response) => {
  const {question, option1, option2, option3, option4, option1Num, option2Num, option3Num, option4Num} = request.body;
  Poll.create({
    question, option1, option2, option3, option4, option1Num, option2Num, option3Num, option4Num
  })
    .then(poll => response.json( poll ))
    .catch(err => response.status(400).json(err));
};

module.exports.getallPolls = (request, response) => {
  Poll.find({})
    .then(polls => response.json( polls ))
    .catch(err => response.status(400).json(err));
};

module.exports.getPoll = (request, response) => {
  Poll.findOne({_id:request.params.id})
    .then(poll => response.json( poll ))
    .catch(err => response.status(400).json(err));
};

module.exports.updatePoll = (request, response) => {
  Poll.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
    .then(updatePoll => response.json( updatePoll ))
    .catch(err => response.status(400).json(err));
};

module.exports.deletePoll = (request, response) => {
  Poll.deleteOne({_id:request.params.id})
    .then(deleteConfirmation => response.json( deleteConfirmation ))
    .catch(err => response.json({ message: "Could not delete poll", error: err }));
};