import backbone from 'backbone';
import $ from 'jquery';

function renderPosts(posts) {
  location.hash="posts";

  let blogPostList = $(`<ul></ul>`);
  posts.fetch({
    success: () => {
      posts.forEach(function(post, i, arr) {
        let onePost = $(`
          <li class="${post.attributes._id}">
          <h3>${post.attributes.title}</h2>
          <p>${post.attributes.body}</p>
          </li>
          `);
          blogPostList.append(onePost);

          onePost.on('click', function(e) {
            window.location.hash = `posts/${post.attributes._id}`;
          });
      });
    }
  });
  return blogPostList;
}

export default renderPosts;
