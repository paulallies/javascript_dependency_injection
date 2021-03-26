/// <reference path="../../typedefs.js" />

/**
 * 
 * @param {{postRepository: PostRepository}} dependencies
 * @returns {{execute: (post: Post) => Promise<Post>}}
 */
function createPost({ postRepository }) {
    async function execute(post) {
        let result = await postRepository.createPost(post);
        return result;

    }

    return { execute };
}


module.exports = createPost;