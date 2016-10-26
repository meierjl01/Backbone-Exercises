import Backbone from 'backbone';
import Person from '../models/person';

export default Backbone.Collection.extend({
  model: Person,
  url: 'http://tiny-za-server.herokuapp.com/collections/jensusers'
});
