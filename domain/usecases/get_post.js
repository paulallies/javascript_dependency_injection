module.exports = (PostRepository) => {
    return {
        async execute(id) {
            let result = await PostRepository.getPost(id);
            return result;

        }
    }
}
