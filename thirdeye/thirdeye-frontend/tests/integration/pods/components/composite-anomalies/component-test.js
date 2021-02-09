import { module, test, setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | composite anomalies', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function (assert) {
    this.setProperties({
      alertId: 123,
      anomalies: []
    });

    await render(hbs`{{composite-anomalies alertId=alertId anomalies=anomalies}}`);

    assert.ok(this.$().text().trim().includes('Alert Anomalies'));
  });
});
