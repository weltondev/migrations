const express = require("express");
const postsController = require("../controllers/posts/postsController");
const usersController = require("../controllers/users/usersController");

const routes = express.Router();

routes.get("/", usersController.listUsers);
routes.post("/create", usersController.createUser);
routes.put("/update/:id", usersController.updateUser);
routes.delete("/delete/:id", usersController.deleteUser);

routes.get("/posts", postsController.listPosts);
routes.post("/posts", postsController.createPost);
routes.put("/posts/:id", postsController.updatePost);
routes.delete("/posts/:id", postsController.deletePost);


module.exports = routes;