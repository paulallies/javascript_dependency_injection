var Datastore = require('nedb-promises');
var postdb = Datastore.create(__dirname + '/db/ne_post.db');


const postDataSource = {

    async createPost(post) {
        const result = await postdb.insert(post)
        return result;
    },

    async getPosts() {
        const result = await postdb.find()
        return result;
    },

    async deletePost(id) {
        let result = await postdb.remove({ _id: id })
        return result.data
    },

    async getPost(id) {
        let result = await postdb.findOne({ _id: id })
        return result
    }


}

module.exports = postDataSource;