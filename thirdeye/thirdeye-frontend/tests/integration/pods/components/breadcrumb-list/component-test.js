import { module, setupRenderingTest, test } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | breadcrumb list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.setProperties({
      items: [
        {
          title: 'breadcrumb 1',
          id: 1,
          isRoot: true
        },
        {
          title: 'breadcrumb 2',
          id: 2
        }
      ]
    });

    await render(hbs`{{breadcrumb-list items=items}}`);

    const displayedString = this.$().text();

    assert.ok(displayedString.includes(this.items[0].title), 'breadcrumb 1 is displayed');
    assert.ok(displayedString.includes(this.items[1].title), 'breadcrumb 2 is displayed');
    assert.ok(displayedString.includes('>'), 'separator is displayed');
  });
});
