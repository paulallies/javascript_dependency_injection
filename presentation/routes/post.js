const express = require("express");
const router = express.Router();
const CreatePostUseCase = require("../../domain/usecases/create_post")
const GetPostsUseCase = require("../../domain/usecases/get_all_posts")
const GetPostUseCase = require("../../domain/usecases/get_post")
const DeletePostUseCase = require("../../domain/usecases/delete_post")
const PostRepo = require("../../domain/repositories/post_repository")
const PostDS = require("../../data/datasources/nedb/post_data_source");
let repo = PostRepo(PostDS)

router.get("/", async (req, res) => {
    const getPosts = GetPostsUseCase(repo);
    let result = await getPosts.execute();
    res.send(result)

})


router.get("/:id", async (req, res) => {
    const getPost = GetPostUseCase(repo);
    let result = await getPost.execute(req.params.id);
    res.send(result)

})

router.delete("/:id", async (req, res) => {
    const deletePost = DeletePostUseCase(repo);
    let result = await deletePost.execute(req.params.id);
    res.send(result)

})


router.post("/", async (req, res) => {
    const createPost = CreatePostUseCase(repo);
    let result = await createPost.execute(req.body);
    res.send(result)
})

router.put("/", async (req, res) => {
    const createPost = CreatePostUseCase(repo);
    let result = await createPost.execute(req.body);
    res.send(result)
})

module.exports = router;