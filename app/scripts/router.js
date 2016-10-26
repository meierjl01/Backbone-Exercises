import Backbone from 'backbone';
import $ from 'jquery';
import renderNewPostForm from './views/newPostForm';
import renderPersonForm from './views/newPersonForm';
import Posts from './collections/posts';
import People from './collections/people';
import renderPosts from './views/renderPosts';
import renderPost from './views/renderPost';

let posts = new Posts();
let people = new People();

const Router = Backbone.Router.extend({
  routes: {
    //change hash once more have been completed
    // ''          : '',
    'newuser'   : 'renderPersonForm',
    'newpost'   : 'renderNewPostForm',
    'viewposts' : 'renderPosts',
    'viewpost'  : 'renderPost',
    // '*anything' : 'render404'
  },
  // renderHome: function() {
  //   $('.container').append(renderHome());
  // },
  renderPersonForm: () => {
    $('.container').empty();
    $('.container').append(renderPersonForm(people));
  },
  renderNewPostForm: () => {
    $('.container').empty();
    $('.container').append(renderNewPostForm(posts));
  },
  renderPosts: () => {
    $('.container').empty();
    $('.container').append(renderPosts(posts));
  },
  renderPost: () => {
    $('.container').empty();
    $('.container').append(renderPost(posts));
  }
  // render404: () => {
  //   $('.container').html('sorry, that page was not found');
  // }
});

const router = new Router();

export default router;
