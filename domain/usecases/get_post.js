
/// <reference path="../../typedefs.js" />

/**
 * 
 * @param {{postRepository: PostRepository}} dependencies
 * @returns {{execute: (id: string) => Promise<Post>}}
 */
function getPost({ postRepository }) {
    return {
        async execute(id) {
            let result = await postRepository.getPost(id);
            return result;

        }
    }
}


module.exports = getPost;
