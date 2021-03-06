define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.message = 'Hello World!';
      this.AWS = window.AWS;
      this.AWS.config.region = 'us-west-2';
      this.s3 = new this.AWS.S3();
    }

    App.prototype.activate = function activate(params, routeConfig, navigationInstruction) {
      var _this = this;

      this.s3.createBucket({ Bucket: 'i.dont.have.aws' }, function (err, data) {

        if (err) {
          console.log(err);
        } else {

          var _params = { Bucket: 'i.dont.have.aws', Key: 'I have no key', Body: 'Hello!' };

          _this.s3.putObject(_params, function (err, data) {

            if (err) {

              console.log(err);
            } else {

              console.log("Successfully uploaded data to myBucket/myKey");
            }
          });
        }
      });
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1><h4>AWS Version: ${AWS.VERSION}</h4></template>"; });
//# sourceMappingURL=app-bundle.js.map