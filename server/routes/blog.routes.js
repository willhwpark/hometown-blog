const BlogController = require("../controllers/blog.controller");

module.exports = function (app) {
  app.post("/api/register-admin", BlogController.createAdmin);
  app.post("/api/new-comment", BlogController.newPost);
};
