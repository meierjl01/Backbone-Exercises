import Backbone from 'backbone';
import $ from 'jquery';


function renderNewPostForm(posts) {
  const element = $(`
        <form class="new-post">
          <input type="text" name="title" placeholder="Blog Post Title">
          <textarea placeholder="Write your blog post here..."></textarea>
          <input type="submit" name="name" value="Save">
        </form>
    `);
    element.on('submit', function(e) {
      e.preventDefault();
      const title = $(this).find('input[type="text"]').val();
      const body = $(this).find('textarea').val();
      posts.create({title, body}, {
        success: (data) => {
          console.log('successful blog post creation', data);
        }
      });
      location.hash = '';
    });
    return element;
}

export default renderNewPostForm;
