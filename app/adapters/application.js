import Ember from 'ember';
import DS from 'ember-data';

const {
  String: {
    pluralize,
    underscore
  }
} = Ember;

export default DS.JSONAPIAdapter.extend({
  host: 'http://aqueous-cliffs-83557.herokuapp.com',
  pathForType(type) {
    return pluralize(underscore(type));
  }
});
