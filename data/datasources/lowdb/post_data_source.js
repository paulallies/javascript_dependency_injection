//@ts-check
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults
// db.defaults({ posts: [], user: {} }).write()

const postDataSource = () => {

    /**
     * 
     * @param {string} name 
     * @returns 
     */
    async function createPost(name) {
        db.get('posts')
            .push({ id: 1, name })
            .write()
        return "Created"
    }

    /**
     * 
     * @returns {Promise}
     */
    async function getPosts() {
        let result = db.get('posts').value()

        return result;


    }

    /**
     * 
     * @param {string} id 
     * @returns 
     */
    async function deletePost(id) {
        let result = db.get('posts')
            .remove({ id })
            .write()
        return result;
    }

    return {
        createPost, deletePost, getPosts
    }
}

module.exports = postDataSource;