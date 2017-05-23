import DS from 'ember-data';

export default DS.Model.extend({
  business: DS.belongsTo('business')
});
