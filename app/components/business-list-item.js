import Ember from 'ember';

export default Ember.Component.extend({
  favoriteService: Ember.inject.service('favorite'),
  tagName: 'tr',
  isFavorite: false,
  actions: {
    toggleFavorite() {
      let bId = this.get('bizId')
      this.toggleProperty('isFavorite')
      this.get('favoriteService').toggle(bId)
    }
  },
  init() {
    this._super(...arguments);
    this.initFavorite();
  },
  initFavorite() {
    let bId = this.get('bizId')
    this.get('favoriteService').findByBizId(bId).then((f) => {
      this.set('isFavorite', (f.content.length === 1))
    })
  }
});
