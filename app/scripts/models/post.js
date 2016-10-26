import Backbone from 'backbone';

const postConfig = {
  idAttribute: '_id',
  defaults: {
    timestamp: new Date()
  },
  urlRoot: 'http://tiny-za-server.herokuapp.com/collections/backbone_apps'
};

const Post = Backbone.Model.extend(postConfig);

export default Post;