
/// <reference path="../../typedefs.js" />

/**
 * 
 * @param {{postRepository: PostRepository}} dependencies
 * @returns {{execute: () => Promise<Post[]>}}
 */

function getAllPosts({ postRepository }) {
    return {
        async execute() {
            let result = await postRepository.getPosts();
            return result;

        }
    }
}


module.exports = getAllPosts;