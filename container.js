
const { createContainer, asFunction, InjectionMode, } = require('awilix');
const PostRepository = require('./domain/repositories/post_repository');
const PostDataSource = require('./data/datasources/nedb/post_data_source');

const GetAllPostsUsecase = require('./domain/usecases/get_all_posts');
const GetPostUsecase = require('./domain/usecases/get_post');
const DeletePostUsecase = require('./domain/usecases/delete_post');
const CreatePostUsecase = require('./domain/usecases/create_post');

const container = createContainer();

container.register({
    getPostsUseCase: asFunction(GetAllPostsUsecase),
    getPostUsecase: asFunction(GetPostUsecase),
    deletePostUsecase: asFunction(DeletePostUsecase),
    createPostUsecase: asFunction(CreatePostUsecase),
    postRepository: asFunction(PostRepository),
    postDataSource: asFunction(PostDataSource)
});


module.exports = container;
