import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('business', { page: {
      number: params.page,
      size: params.size
    }});
  },

  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    }
  }
});
