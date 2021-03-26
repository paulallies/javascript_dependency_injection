const express = require("express");
const router = express.Router();
const { cradle, resolve } = require("../../container");

router.get("/", async (req, res) => {
    const getPosts = cradle.getAllPostsUsecase
    let result = await getPosts.execute();
    res.send(result)

})


router.get("/:id", async (req, res) => {
    const getPost = resolve("getPostUsecase")
    let result = await getPost.execute(req.params.id);
    res.send(result)

})

router.delete("/:id", async (req, res) => {
    const deletePost = resolve("deletePostUsecase")
    let result = await deletePost.execute(req.params.id);
    res.send(result)

})


router.post("/", async (req, res) => {
    const createPost = resolve("createPostUsecase")
    let result = await createPost.execute(req.body);
    res.send(result)
})

router.put("/", async (req, res) => {
    const createPost = resolve("updatePostsUsecase")
    let result = await createPost.execute(req.body);
    res.send(result)
})

module.exports = router;