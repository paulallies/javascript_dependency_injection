var Datastore = require('nedb-promises');
var postdb = Datastore.create(__dirname + '/db/ne_post.db');

function postDataSource() {

    async function createPost(post) {
        const result = await postdb.insert(post)
        return result;
    }

    async function getPosts() {
        const result = await postdb.find()
        return result
    }

    async function deletePost(id) {
        let result = await postdb.remove({ _id: id }, { multi: false });
        return result > 0
    }

    async function getPost(id) {
        let result = await postdb.findOne({ _id: id })
        return result
    }

    return { createPost, getPost, getPosts, deletePost }
}

module.exports = postDataSource;