import Backbone from 'backbone';
import $ from 'jquery';

function renderPost(posts) {
    const singleBlog = $(`
<div class="singleBlog"></div>
`);
    let id = (location.hash).split('/')[1];
    // console.log(posts.get(id));
    let currentPost = posts.get(id);

    let postInfo = $(`
      <h2>${currentPost.attributes.title}</h2>
      <p>${currentPost.attributes.body}</p>
      <div class="timestamp">${currentPost.attributes.timestamp}</div>
      `);
    singleBlog.append(postInfo);
    return singleBlog;
}

export default renderPost;
