import Backbone from 'backbone';
import $ from 'jquery';


function renderPostsNav(posts) {
    const blogNav = $(`
    <ul class="blogNav">All Blog Posts</ul>
  `);
    $('.sidebar').append(blogNav);
    posts.fetch({
        success: () => {
            posts.forEach(function(post, i, arr) {
                let li = $(`
            <li class="${post.attributes._id}">
            <h4>${post.attributes.title}</h4>
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


export default renderPostsNav;
