import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updateValue: function(value) {
      this.set('state', value);
    },
    create: function(model) {
      var test = this.store.createRecord('test', {
        name: this.get('name'),
	state: this.get('state'),
	feature: model.id
      });
      test.save().then( () => {
	this.set('name',"");
	this.transitionToRoute('/features/'+model.id);
      });
    },
    cancel: function(model) {
      this.set('name',"");
      this.transitionToRoute('/features/'+model.id);
    }
  }
});
