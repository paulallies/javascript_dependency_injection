function postRepo(PostDataSource) {
    return {
        async createPost(post) {
            let result = await PostDataSource.createPost(post)
            return result;
        },
        async getPosts() {
            let result = await PostDataSource.getPosts();
            return result;
        },
        async deletePost(id) {
            let result = await PostDataSource.deletePost(id)
            return result
        },

        async getPost(id) {
            let result = await PostDataSource.getPost(id)
            return result
        }

    }

}

module.exports = postRepo;