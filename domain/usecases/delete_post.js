/// <reference path="../../typedefs.js" />
/**
 * 
 * @param {{postRepository: PostRepository}} dependencies
 * @returns {{execute: (id: string) => Promise<boolean>}}
 */
function deletePost({ postRepository }) {
    return {
        async execute(id) {
            let result = await postRepository.deletePost(id)
            return result;

        }
    }
}


module.exports = deletePost
