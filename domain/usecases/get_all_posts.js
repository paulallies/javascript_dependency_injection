function getAllPosts(PostRepository) {
    return {
        async execute() {
            let result = await PostRepository.getPosts();
            return result;

        }
    }
}


module.exports = getAllPosts;