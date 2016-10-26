import Backbone from 'backbone';
import $ from 'jquery';


function renderPosts(posts) {
    const blogNav = $(`
    <ul class="blogNav"></ul>
  `);
    $('.container').append(blogNav);
    posts.fetch({
        success: () => {
            posts.forEach(function(post, i, arr) {
                let li = $(`
            <li class="${post.attributes._id}">${post.get('title')}
            </li>
            `);
                blogNav.append(li);
                $(`.${post.attributes._id}`).on('click', (e) => {
                  window.location.hash = `posts/${post.attributes._id}`;
                });
            });
        }

    });
    return blogNav;
}


export default renderPosts;
