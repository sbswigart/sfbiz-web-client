import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('business', { page: {
      number: params.page,
      size: params.size
    },
    search: params.search,
    longitude: params.longitude,
    latitude: params.latitude
  });
  },

  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    },
    search: {
      refreshModel: true
    },
    longitude: {
      refreshModel: true
    },
    latitude: {
      refreshModel: true
    }
  }
});
