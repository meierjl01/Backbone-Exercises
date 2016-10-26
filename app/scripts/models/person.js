import Backbone from 'backbone';

const personConfig = {
  idAttribute: '_id',
  defaults: {
    timestamp: new Date()
  },
  urlRoot: 'http://tiny-za-server.herokuapp.com/collections/jensusers'
};

const Person = Backbone.Model.extend(personConfig);

export default Person;
