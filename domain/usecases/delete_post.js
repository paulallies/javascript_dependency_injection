module.exports = (PostRepository) => {
    return {
        async execute(id) {
            let result = await PostRepository.deletePost(id);
            return result;

        }
    }
}
