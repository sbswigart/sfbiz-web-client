import Ember from 'ember';

export default Ember.Controller.extend({
  geolocation: Ember.inject.service(),
  queryParams: ['page', 'size', 'search', 'longitude', 'latitude'],
  page: 1,
  size: 18,
  search: "",
  longitude: "",
  latitude: "",
  geoLoading: false,
  geoError: null,

  count: Ember.computed('model.meta.pagination.last.number', 'model.meta.pagination.self.number', function() {
    const total = this.get('model.meta.pagination.last.number') || this.get('model.meta.pagination.self.number');
    if (!total) return [];
    return new Array(total + 1).join('x').split('').map((e, i) => i + 1);
  }),

  actions: {
    geoSearch() {
      this.set('geoLoading', true);
      this.get('geolocation').getLocation().then((geoObject) => {
        if (geoObject.coords) {
          this.set('longitude', geoObject.coords.longitude);
          this.set('latitude', geoObject.coords.latitude);
        }
        this.set('geoLoading', false);
      }).catch((reason) => {
        this.set('geoLoading', false);
        this.set('geoError', reason.message);
      })
    },
    typing() {
      this.set('page', 1)
    }
  }

});
