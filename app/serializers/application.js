import Ember from 'ember';
import DS from 'ember-data';

const {
  String: {
    capitalize,
    singularize
  }
} = Ember;

export default DS.JSONAPISerializer.extend({
  payloadKeyFromModelName(modelName) {
    return singularize(capitalize(modelName));
  }
});
