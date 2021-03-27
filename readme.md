## Dependency Injection with Javascript without Classes

Dependency injection is a programming technique that makes a module independent of its dependencies. ... That enables you to replace dependencies without changing the module that uses them.

To illustrate Dependency Injection, we'll be building an api with the following endpoints

1. GET /post: Gets all posts
1. POST /post: Creates a post

and structure the api in the following way:

1. Datasource - persistence implementation using third party modules.
1. Repository - decouple application from persistence: has a datasource dependency.
1. UseCase - business logic: has a repository dependency.
1. Presentation - routes: has a usecase dependency.


## 1. PostDataSource
```js
var Datastore = require('nedb-promises');
var postdb = Datastore.create(__dirname + '/db/ne_post.db');

function postDataSource (){

    async function createPost(post) {
        const result = await postdb.insert(post)
        return result;
    }

    async function getPosts() {
        const result = await postdb.find()
        return result
    }

    return { createPost, getPosts }

}

module.exports = postDataSource;
```
The Datasource module depends directly on third a party lib as shown in the require statement. <i>(nedb is an embedded persistent database for Node. API is a subset of MongoDB)</i>


## 2. PostRepository

```js

function postRepository({ postDataSource }) {

    async function createPost(post) {
        const result = await postDataSource.createPost(post)
        return result;
    }

    async function getPosts() {
        const result = await postDataSource.getPosts();
        return result;
    }

    return { createPost, getPosts}

}

module.exports = postRepo;
```
The repository is a means of decoupling our datasource from the rest of our application. The datasource is therefore not imported but **property injected** into the repository. Once injected, all the functions within the repository now have access to this external dependency. This is using the closure feature within Javascript

<i>(A closure is a feature where an inner function has access to the outer (enclosing) function’s variables</i>

## 3. CreatePost UseCase

```js
function createPostUseCase({ postRepository }) {
  
    async function execute(post) {
        const result = await postRepository.createPost(post);
        return result;

    }

    return { execute };
}

module.exports = createPost;
```
As we've done with the repository, the usecase is property injected the post repository to allow the execute function to have access to it.  Let's now build the post router and see how we chain these dependencies. 


## 3. Post Router
```js
const express = require("express");
const router = express.Router();
const GetPostsUsecase = require("../../domain/usecases/get_all_posts");
const CreatePostUsecase = require("../../domain/usecases/create_post");
const PostRepository = require("../../domain/repositories/post_repository");
const PostDataSource = require("../../data/datasources/nedb/post_data_source");

router.get("/", async (req, res) => {
    const postDataSource = PostDataSource();
    const postRepository = PostRepository({ postDataSource });
    const getPosts = GetPostsUsecase({ postRepository });
    const result = await getPosts.execute();
    res.json(result);

})


router.post("/", async (req, res) => {
    const postDataSource = PostDataSource();
    const postRepository = PostRepository({ postDataSource });
    const createPost = CreatePostUsecase({ postRepository });
    const result = await createPost.execute(req.body);
    res.json(result);
})


module.exports = router;
```
With the code above we manually needed to create and chain together the dependencies in order to produce a usecase object on which we run the execute command.

We can simplify this process by using an IoC container. IoC container (a.k.a. DI Container) is a framework for implementing automatic dependency injection. It manages object creation, and also injects dependencies. Let's firstly create the container.

## IoC Container
```js
const { createContainer, asFunction, InjectionMode, } = require('awilix');
const PostRepository = require('./domain/repositories/post_repository');
const PostDataSource = require('./data/datasources/nedb/post_data_source');
const GetAllPostsUsecase = require('./domain/usecases/get_all_posts');
const CreatePostUsecase = require('./domain/usecases/create_post');

const container = createContainer();

container.register({
    postDataSource: asFunction(PostDataSource)
    postRepository: asFunction(PostRepository),
    getPostsUseCase: asFunction(GetAllPostsUsecase),
    createPostUsecase: asFunction(CreatePostUsecase),
});

module.exports = container;
```
All dependencies are imported and registered here. 

Let's now revisit our router and use the container.

## Post Router with Container
```js
const express = require("express");
const router = express.Router();
const { resolve } = require("../../container");

router.get("/", async (req, res) => {
    const getPosts = resolve("getPostsUseCase")
    const result = await getPosts.execute();
    res.json(result)
})

router.post("/", async (req, res) => {
    const createPost = resolve("createPostUsecase");
    const result = await createPost.execute(req.body);
    res.json(result);
})

module.exports = router;

```
