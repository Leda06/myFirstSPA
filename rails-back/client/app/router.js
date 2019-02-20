import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('features');
  this.route('feature',{ path: '/features/:feature_id' });
  this.route('newfeature');
  this.route('newtest',{ path: '/features/:feature_id/newtest' });
});

export default Router;
