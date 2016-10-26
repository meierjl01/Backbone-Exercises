import Backbone from 'backbone';
import $ from 'jquery';

function renderNewPostForm(posts) {
  const element = $(`
        <form class="new-post">
          <input type="text" name="title" placeholder="title">
          <textarea placeholder="Write your blog post here..."></textarea>
          <input type="submit" name="name" value="save">
        </form>
    `);
    element.on('submit', function(e) {
      e.preventDefault();
      const title = $(this).find('input[type="text"]').val();
      const body = $(this).find('textarea').val();
      posts.create({title, body}, {
        success: (data) => {
          console.log('successful blog post creation', data);
          //put a location hash change here once you have a home page built
        }
      });
    });
    return element;
}

export default renderNewPostForm;
