import { module, test } from 'qunit';

import { setupTest } from 'jokes-ember/tests/helpers';

module('Unit | Adapter | joke', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:joke');
    assert.ok(adapter);
  });
});
