import { module, test } from 'qunit';

import { setupTest } from 'jokes-ember/tests/helpers';

module('Unit | Model | joke', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('joke', {});
    assert.ok(model);
  });
});
