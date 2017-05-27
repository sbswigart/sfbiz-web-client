import Ember from 'ember';

export default Ember.Controller.extend({
  geolocation: Ember.inject.service(),
  queryParams: ['page', 'size', 'search', 'longitude', 'latitude'],
  page: 1,
  size: 18,
  search: "",
  longitude: "",
  latitude: "",

  count: Ember.computed('model.meta.pagination.last.number', 'model.meta.pagination.self.number', function() {
    const total = this.get('model.meta.pagination.last.number') || this.get('model.meta.pagination.self.number');
    if (!total) return [];
    return new Array(total + 1).join('x').split('').map((e, i) => i + 1);
  }),

  actions: {
    geoSearch() {
      this.get('geolocation').getLocation().then((geoObject) => {
        if (geoObject.coords) {
          this.set('longitude', geoObject.coords.longitude);
          this.set('latitude', geoObject.coords.latitude);
        }
      })
    },
    typing() {
      this.set('page', 1)
    }
  }

});
