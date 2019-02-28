import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  state: DS.attr('string', {
    defaultValue() { return 'undefined'; }
  }),
  feature: DS.attr(),
  featureObj: DS.belongsTo('feature')
});
