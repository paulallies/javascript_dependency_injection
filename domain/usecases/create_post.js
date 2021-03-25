
function createPost(PostRepository) {
    return {
        async execute(post) {
            let result = await PostRepository.createPost(post);
            return result;

        }
    }
}


module.exports = createPost;