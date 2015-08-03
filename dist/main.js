/******************************************************************************
 * Author       : Subrata Mal
 * Date         : 10 July 2015 (Friday)
 * Time         : 06:10:33 PM
 * Description  : Extractor invoker
 *****************************************************************************/
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

var Main = function Main() {
  _classCallCheck(this, Main);

  debugger;
  var extractGitRepoUrl = new _index2["default"]({ dirName: "/Users/subratamal/Works.Pers/Application" });
  extractGitRepoUrl.extract();
};

new Main();