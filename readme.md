## Dependency Injection with Javascript Functions

So you're tired of configuring your project for typescript just so that you can use type checking

Well let's see how we can architect a purely functional purely javascript project.
This is quite a simple project.

It's main purpose is to manage posts.
We have 4 usecases.

1. Create a Post
2. Show All Posts
3. Show a specific Post
4. Delete a Post
5. Update a Post

To make things even easier we'll use ne-db (a sqlite-like mongodb) database

Data will be stored in a local file.

This is an express project but we aim to break up the application into manageable pieces using a clean-code-like architecture encouraged by Uncle Bob.

So we'll have main sections to the application
1. Services (Implementations of Data Persistence)
2. Domain (Business Logic and Rules)
3. Presentation (Our comsumers interface)

We will be using Typescript but not in the strict sense.
We'll only be using typescript to help typechecking

So we'll be using JSDoc and vscode's built in ts-checker
We'll configure vscode to type-check all the time

So start right now and configure vs code to type check all js files by adding this line to vs code settings

```json
{
    ...,
    "js/ts.implicitProjectConfig.checkJs": true
}
```
