const {Product} = require("../models/product.model");

module.exports.index = (request, response) => {
  response.json({
      message: "Hello World"
  });
}

module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({
    title,
    price,
    description
  })
    .then(product => response.json( product ))
    .catch(err => response.json({ message: "Product could not be created", error: err }));
};

module.exports.getallProducts = (request, response) => {
  Product.find({})
    .then(products => response.json( products ))
    .catch(err => response.json({ message: "Cannot get all products", error: err }));
};

module.exports.getProduct = (request, response) => {
  Product.findOne({_id:request.params.id})
    .then(product => response.json( product ))
    .catch(err => response.json({ message: "Cannot get product", error: err }));
};

module.exports.updateProduct = (request, response) => {
  Product.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
    .then(updateProduct => response.json( updateProduct ))
    .catch(err => response.json({ message: "Could not update product", error: err }));
};

module.exports.deleteProduct = (request, response) => {
  Product.deleteOne({_id:request.params.id})
    .then(deleteConfirmation => response.json( deleteConfirmation ))
    .catch(err => response.json({ message: "Could not delete product", error: err }));
};