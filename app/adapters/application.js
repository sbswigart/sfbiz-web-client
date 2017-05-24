import Ember from 'ember';
import DS from 'ember-data';
import ENV from 'sfbiz-web-client/config/environment';

const {
  String: {
    pluralize,
    underscore
  }
} = Ember;

export default DS.JSONAPIAdapter.extend({
  host: ENV.APP.host,
  pathForType(type) {
    return pluralize(underscore(type));
  }
});
