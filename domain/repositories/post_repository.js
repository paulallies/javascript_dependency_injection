/// <reference path="../../typedefs.js" />

/**
 * 
 * @param {{postDataSource: PostDataSource}} dependencies 
 * @returns {PostRepository}
 */
function postRepo({ postDataSource }) {

    async function createPost(post) {
        let result = await postDataSource.createPost(post)
        return result;
    }

    async function getPosts() {
        let result = await postDataSource.getPosts();
        return result;
    }

    async function deletePost(id) {
        let result = await postDataSource.deletePost(id)
        return result
    }

    async function getPost(id) {
        let result = await postDataSource.getPost(id)
        return result
    }

    return { createPost, getPosts, deletePost, getPost }

}

module.exports = postRepo;