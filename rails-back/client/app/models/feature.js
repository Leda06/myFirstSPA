import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  tests: DS.hasMany('test')
});
