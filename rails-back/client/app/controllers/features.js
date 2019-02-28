import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    destroy: function(feature) {
      this.store.findRecord('feature', feature.id,{ reload: true }).then(function(feature) {
        feature.deleteRecord();
        feature.save();
      });
    }
  }
});
