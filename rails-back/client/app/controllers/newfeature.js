import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    create: function() {
      var feature = this.store.createRecord('feature', {
        name: this.get('name'),
      });
      feature.save().then( () => {
	this.set('name',"")
        this.transitionToRoute('/features')
      });
    },
    cancel: function(){
      this.set('name',"")
      this.transitionToRoute('/features')
    }
  }
});
