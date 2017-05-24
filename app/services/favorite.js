import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  toggle(bizId) {
    this.findByBizId(bizId).then((f) => {
      if (f.content.length) {
        f.content[0].deleteRecord()
        f.content[0].save()
      } else {
        this.get('store').findRecord('business', bizId).then((b) => {
          this.get('store').createRecord('favorite', {business: b}).save();
        })
      }
    })
  },
  create() {

  },
  delete() {

  },
  findByBizId(bizId) {
    return this.get('store').query('favorite', { business_id: bizId });
  }
});
