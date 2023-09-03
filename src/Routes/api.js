const express = require('express');
const router = express.Router();

// controller functions
const blogController = require('./src/controllers/blogController');
const blogDetailsController = require('./src/controllers/blogDetailsController');
const commentController = require('./src/controllers/commentController');
const messageController = require('./src/controllers/messageController');
const portfolioController = require('./src/controllers/portfolioController');
const profitController = require('./src/controllers/profitController');
const productController = require('./src/controllers/productController');
const projectController = require('./src/controllers/projectController');
const serviceController = require('./src/controllers/serviceController');
const titleController = require('./src/controllers/titleController');


const controllers = [
  { name: 'blog', controller: blogController },
  { name: 'blogDetails', controller: blogDetailsController },
  { name: 'comment', controller: commentController },
  { name: 'message', controller: messageController },
  { name: 'portfolio', controller: portfolioController },
  { name: 'profit', controller: profitController },
  { name: 'product', controller: productController },
  { name: 'project', controller: projectController },
  { name: 'service', controller: serviceController },
  { name: 'title', controller: titleController }
];

controllers.forEach(({ name, controller }) => {
  const { create, read, update, delete: deleteItem } = controller;

  // Create routes for each controller function
  router.get(`/${name}/create`, async (req, res) => {
    try {
      const result = await create(req, res);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get(`/${name}/read`, async (req, res) => {
    try {
      const result = await read(req, res);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get(`/${name}/update`, async (req, res) => {
    try {
      const result = await update(req, res);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get(`/${name}/delete`, async (req, res) => {
    try {
      const result = await deleteItem(req, res);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
});

module.exports = router;
