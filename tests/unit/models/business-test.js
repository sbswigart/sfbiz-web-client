import { moduleForModel, test } from 'ember-qunit';

moduleForModel('business', 'Unit | Model | business', {
  // Specify the other units that are required for this test.
  needs: ['model:favorite']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
