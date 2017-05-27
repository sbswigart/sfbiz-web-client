import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  startDate: DS.attr('string'),
  endDate: DS.attr('string'),
  distance: DS.attr('number')
});
