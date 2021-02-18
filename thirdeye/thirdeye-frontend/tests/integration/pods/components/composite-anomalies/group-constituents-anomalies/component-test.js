import { module, test, setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import * as anomalyUtil from 'thirdeye-frontend/utils/anomaly';

module('Integration | Component | composite anomalies/group constituent anomalies', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function (assert) {
    this.setProperties({
      tableTitle: 'ENTITY:group_entity_one',
      tableData: [
        {
          id: 2,
          groupName: 'groupConstituentOne',
          startTime: 1599462000000,
          endTime: 1599721200000,
          feedback: null,
          criticality: '6.189942819613212',
          currentPredicted: {
            current: '4.00',
            predicted: '2.00',
            deviation: 1,
            deviationPercent: '+100.0%'
          }
        },
        {
          id: 5,
          groupName: 'groupConstituentTwo',
          startTime: 1599462000000,
          endTime: 1599721200000,
          feedback: null,
          criticality: '1.213451',
          currentPredicted: {
            current: '4.00',
            predicted: '2.00',
            deviation: 1,
            deviationPercent: '+100.0%'
          }
        }
      ],
      feedbackOptionNames: anomalyUtil.anomalyResponseObj.mapBy('name'),
      feedbackOptionValues: anomalyUtil.anomalyResponseObj.mapBy('value')
    });

    await render(hbs`
      {{composite-anomalies/group-constituents-anomalies title=tableTitle data=tableData}}
    `);

    assert.equal(this.$('.panel-title').html().trim(), this.tableTitle);

    assert.equal(this.$('.te-anomaly-table__duration')[0].innerHTML, '72 hours');
    assert.equal(this.$('.te-anomaly-table__duration')[1].innerHTML, '72 hours');

    assert.equal(this.$('.te-anomaly-table__group')[0].innerHTML.trim(), 'groupConstituentOne');
    assert.equal(this.$('.te-anomaly-table__group')[1].innerHTML.trim(), 'groupConstituentTwo');

    assert.equal(this.$('.te-anomaly-table__criticality')[0].innerHTML.trim(), '6.189942819613212');
    assert.equal(this.$('.te-anomaly-table__criticality')[1].innerHTML.trim(), '1.213451');

    assert.equal(this.$('.te-anomaly-table__current-baseline')[0].innerHTML.trim(), '4.00/2.00');
    assert.equal(this.$('.te-anomaly-table__deviation-percent')[0].innerHTML.trim(), '(+100.0%)');

    assert.equal(this.$('.ember-power-select-selected-item').html().trim(), this.feedbackOptionNames[0]);

    // Check other values based on feedback
    for (let index = 0; index < this.feedbackOptionNames.length; index++) {
      this.tableData[0].feedback = {
        feedbackType: this.feedbackOptionValues[index]
      };

      await render(hbs`
          {{composite-anomalies/entity-metrics-anomalies data=tableData}}
        `);

      assert.equal(this.$('.ember-power-select-selected-item').html().trim(), this.feedbackOptionNames[index]);
    }
  });
});
