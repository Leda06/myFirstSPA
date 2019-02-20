import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateValue: function(test, target) {
      this.store.findRecord('test', test.id).then(function(test) {
        test.set('state',target);
        test.save();
      });
    }
  }
});
