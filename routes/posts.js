const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth } = require("../middleware/auth");

//Post Routes - simplified for now
//Since linked from server js trat each path as:
//post/:id, post/createPOst, post/likePost/:id, post/deletePost/:id
router.get("/:id", ensureAuth, postsController.getPost);

//Enables user to create post w/ cloudinry for media uploads
router.post("/createPost", upload.single("file"), postsController.createPost);

//Enables user to like posts. In controller uses POST model to update likes by 1
router.put("/likePost/:id", postsController.likePost);

//Enables user to delete posts. In controller uses POST model to delete post from MongoDB collection
router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
