import Backbone from 'backbone';
import $ from 'jquery';
import renderNewPostForm from './views/newPostForm';
import renderPersonForm from './views/newPersonForm';
import Posts from './collections/posts';
import People from './collections/people';
import renderPosts from './views/renderPosts';
import renderPostsNav from './views/renderPostsNav';
import renderPost from './views/renderPost';

let posts = new Posts();
let people = new People();

const Router = Backbone.Router.extend({
    routes: {
        // ''          : '',
        'newuser'  : 'renderPersonForm',
        'newpost'  : 'renderNewPostForm',
        'posts'    : 'renderPosts',
        'posts/:id': 'renderPost',
        // '*anything': 'render404'
    },
    // renderHome: function() {
    //   $('.container').append(renderHome());
    // },
    renderPersonForm: () => {
        $('.container').empty();
        $('.sidebar').empty();
        $('.container').append(renderPersonForm(people));
    },
    renderNewPostForm: () => {
        $('.container').empty();
        $('.sidebar').empty();
        $('.container').append(renderNewPostForm(posts));
    },
    renderPosts: () => {
        $('.container').empty();
        $('.sidebar').empty();
        $('.sidebar').append(renderPostsNav(posts));
        $('.container').append(renderPosts(posts));
    },
    renderPost: () => {
        $('.container').empty();
        $('.sidebar').empty();
        $('.sidebar').append(renderPostsNav(posts));
        $('.container').append(renderPost(posts));
    }
    //I'm still having issues with rendering a 404 page. for this one, when I had that uncommented, when I went to any page, it had the message on there and also the function it was rendering.
    // render404: () => {
    //     $('.container').html('sorry, that page was not found');
    // }
});

const router = new Router();

export default router;
