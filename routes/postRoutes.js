const express = require("express");
const controller = require("../Controller/postsController");

const router = express.Router();

router.route("/").get(controller.getPosts);
router.route("/:id").get(controller.getPostById);
router.route("/").post(controller.addPost);
router.route("/:id").put(controller.updatePost);
router.route("/:id").delete(controller.deletePost);

module.exports = router;