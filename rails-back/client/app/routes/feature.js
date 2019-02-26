import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return hash({
      feature: this.store.findRecord('feature',params.feature_id).then(function(feature) {
        return feature;
      }),
      tests: this.store.query('test',{
        filter: {
          feature: params.feature_id
        }
      }).then(function(tests) {
        return tests;
      })
    });
  }
});
