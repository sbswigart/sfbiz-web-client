import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size', 'search'],
  page: 1,
  size: 18,
  search: "",

  count: Ember.computed('model.meta.pagination.last.number', 'model.meta.pagination.self.number', function() {
    const total = this.get('model.meta.pagination.last.number') || this.get('model.meta.pagination.self.number');
    if (!total) return [];
    return new Array(total + 1).join('x').split('').map((e, i) => i + 1);
  })

});
