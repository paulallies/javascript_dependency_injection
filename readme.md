## Dependency Injection with Javascript without Classes

We'll be building an api to manage blog posts

1. Create a Post
1. Get Posts

To illustrate Dependency Injection. Let's architect our application across multi layers.

We'll have a 

1. Presentation - routes
1. UseCase - business logic
1. Repository - to minize duplication and decouple application from persistence 
1. Datasoure - your persistence implementation

Each layer depends on the layer below. 

## PostDataSource
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

## PostRepository

```js
function postRepo({ postDataSource }) {

    async function createPost(post) {
        let result = await postDataSource.createPost(post)
        return result;
    }

    async function getPosts() {
        let result = await postDataSource.getPosts();
        return result;
    }

    return { createPost, getPosts}

}

module.exports = postRepo;
```

## CreatePost UseCase

```js
function createPost({ postRepository }) {
  
    async function execute(post) {
        let result = await postRepository.createPost(post);
        return result;

    }

    return { execute };
}

module.exports = createPost;
```

So for the Presentation layer to use the createPost function, we need to pass in the dependencies as properties.  This is called property injection. Using closures we can return the desired functions to the consumer of the component to use.

```js

```

To make the project testable would need to inject dependencies as follows

