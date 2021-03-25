//@ts-check
const axios = require("axios")
const base = "https://jsonplaceholder.typicode.com"

const postDataSource = () => {

    /**
     * 
     * @param {string} name 
     * @returns 
     */
    async function createPost(name) {
        let result = await axios.default.post(base +"/posts", {name: "test"})
        return result.data;
    }

    /**
     * 
     * @returns {Promise}
     */
    async function getPosts() {
        let result =  await axios.default.get(base +"/posts");
        return result.data;
    }

    /**
     * 
     * @param {string} id 
     * @returns 
     */
    async function deletePost(id) {
        let result =  await axios.default.delete(base+"/posts/"+id)
        return result.data
    }

    return {
        createPost, deletePost,  getPosts
    }
}

module.exports = postDataSource;