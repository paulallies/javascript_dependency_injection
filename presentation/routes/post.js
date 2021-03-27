const express = require("express");
const router = express.Router();
const { resolve } = require("../../container");

router.get("/", async (req, res) => {
    const getPosts = resolve("getPostsUseCase")
    const result = await getPosts.execute();
    res.json(result)
})

router.post("/", async (req, res) => {
    const createPost = resolve("createPostUsecase");
    const result = await createPost.execute(req.body);
    res.json(result);
})

router.get("/:id", async (req, res) => {
    const getPost = resolve("getPostUsecase");
    const result = await getPost.execute(req.params.id);
    res.json(result);
})

router.delete("/:id", async (req, res) => {
    const deletePost = resolve("deletePostUsecase");
    const result = await deletePost.execute(req.params.id);
    res.json(result);

})

router.put("/", async (req, res) => {
    const createPost = resolve("updatePostsUsecase");
    const result = await createPost.execute(req.body);
    res.json(result);
})

module.exports = router;