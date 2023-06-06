import { module, test } from 'qunit';

import { setupTest } from 'jokes-ember/tests/helpers';

module('Unit | Serializer | joke', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('joke');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('joke', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
