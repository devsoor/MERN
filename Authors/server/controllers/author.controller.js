const {Author} = require("../models/author.model");

module.exports.index = (request, response) => {
  response.json({
      message: "Hello World"
  });
}

module.exports.createAuthor = (request, response) => {
  const { name, quote } = request.body;
  Author.create({
    name,
    quote,
  })
    .then(author => response.json( author ))
    .catch(err => response.json(err));
};

module.exports.getallAuthors = (request, response) => {
  Author.find({})
    .then(authors => response.json( authors ))
    .catch(err => response.json(err));
};

module.exports.getAuthor = (request, response) => {
  Author.findOne({_id:request.params.id})
    .then(author => response.json( author ))
    .catch(err => response.json(err));
};

module.exports.updateAuthor = (request, response) => {
  Author.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
    .then(updateAuthor => response.json( updateAuthor ))
    .catch(err => response.json(err));
};

module.exports.deleteAuthor = (request, response) => {
  Author.deleteOne({_id:request.params.id})
    .then(deleteConfirmation => response.json( deleteConfirmation ))
    .catch(err => response.json({ message: "Could not delete author", error: err }));
};