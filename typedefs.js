// typedefs.js
/**
 * @typedef {Object} Post
 * @property {string} name
 * @property {string} title
 */

/**
 * @typedef {Object} PostModel
 * @property {string} name
 * @property {string} title
 */

/**
 * @typedef {Object} PostDataSource
 * @property {(post: PostModel) =>Promise<Post>} createPost
 * @property {(id: string) =>Promise<Post>} getPost
 * @property {() =>Promise<Post[]>} getPosts
 * @property {(id: string) =>Promise<boolean>} deletePost
 */

/**
 * @typedef {Object} PostRepository
 * @property {(post: Post)=>Promise<Post>} createPost
 * @property {(id: string) =>Promise<Post>} getPost
 * @property {() =>Promise<Post[]>} getPosts
 * @property {(id: string) => Promise<boolean>} deletePost

 */

/**
 * @typedef {Object} Issue
 * @property {string} name
 * @property {string} title
 * @property {Date} datecreated
 */

/**
 * @typedef {Object} DeletePost
 * @param {PostRepository} PostRepository
 * @return {{execute: (id: string) => Promise<boolean>}}

 */