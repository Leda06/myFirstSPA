'use strict';

define("client/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/feature.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/feature.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/newfeature.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/newfeature.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/newtest.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/newtest.js should pass ESLint\n\n');
  });
  QUnit.test('models/feature.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/feature.js should pass ESLint\n\n');
  });
  QUnit.test('models/test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/test.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/feature.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/feature.js should pass ESLint\n\n');
  });
  QUnit.test('routes/features.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/features.js should pass ESLint\n\n');
  });
  QUnit.test('routes/newtest.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/newtest.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });
});
define("client/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('client/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'client/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('client/templates/feature.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'client/templates/feature.hbs should pass TemplateLint.\n\nclient/templates/feature.hbs\n  10:17  error  Incorrect indentation for `select` beginning at L6:C22. Expected `</select>` ending at L10:C17 to be at an indentation of 22 but was found at 8.  block-indentation\n  7:10  error  Incorrect indentation for `<option>` beginning at L7:C10. Expected `<option>` to be at an indentation of 24 but was found at 10.  block-indentation\n  8:10  error  Incorrect indentation for `<option>` beginning at L8:C10. Expected `<option>` to be at an indentation of 24 but was found at 10.  block-indentation\n  9:10  error  Incorrect indentation for `<option>` beginning at L9:C10. Expected `<option>` to be at an indentation of 24 but was found at 10.  block-indentation\n  6:56  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('client/templates/features.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'client/templates/features.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('client/templates/features/new.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'client/templates/features/new.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('client/templates/newfeature.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'client/templates/newfeature.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('client/templates/newtest.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'client/templates/newtest.hbs should pass TemplateLint.\n\nclient/templates/newtest.hbs\n  3:5  error  Incorrect indentation for `State:\n  ` beginning at L3:C5. Expected `State:\n  ` to be at an indentation of 2 but was found at 5.  block-indentation\n');
  });
});
define("client/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("client/tests/test-helper", ["client/app", "client/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('client/config/environment', [], function() {
  
          var exports = {
            'default': {"modulePrefix":"client","environment":"test","rootURL":"/","locationType":"none","EmberENV":{"FEATURES":{},"EXTEND_PROTOTYPES":{"Date":false}},"APP":{"LOG_ACTIVE_GENERATION":false,"LOG_VIEW_LOOKUPS":false,"rootElement":"#ember-testing","autoboot":false,"name":"client","version":"0.0.0"},"exportApplicationGlobal":true}
          };
          Object.defineProperty(exports, '__esModule', {value: true});
          return exports;
        
});

require('client/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
