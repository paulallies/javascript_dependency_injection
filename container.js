
const { createContainer, asValue, asFunction, InjectionMode, asClass } = require('awilix');
const PostRepository = require('./domain/repositories/post_repository');
const PostDataSource = require('./data/datasources/nedb/post_data_source');

const GetAllPostsUsecase = require('./domain/usecases/get_all_posts');
const GetPostUsecase = require('./domain/usecases/get_post');
const DeletePostUsecase = require('./domain/usecases/delete_post');
const CreatePostUsecase = require('./domain/usecases/create_post');



const container = createContainer({
    injectionMode: InjectionMode.PROXY
});

container.register({
    getAllPostsUsecase: asFunction(GetAllPostsUsecase),
    getPostUsecase: asFunction(GetPostUsecase),
    deletePostUsecase: asFunction(DeletePostUsecase),
    createPostUsecase: asFunction(CreatePostUsecase),
    postRepository: asFunction(PostRepository),
    postDataSource: asValue(PostDataSource)
});


module.exports = container;
