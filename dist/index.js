/******************************************************************************
 * Author       : Subrata Mal
 * Date         : 09 July 2015 (Thursday)
 * Time         : 11:21:58 AM
 * Description  : Extracts all the git repository present in the folder
 *  and restores them in the specified path.
 *****************************************************************************/
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _nodeDir = require("node-dir");

var _nodeDir2 = _interopRequireDefault(_nodeDir);

var ExtractGitRepoUrl = (function () {
    function ExtractGitRepoUrl(_ref) {
        var dirName = _ref.dirName;

        _classCallCheck(this, ExtractGitRepoUrl);

        this.dirName = dirName;
        this._repositories = [];
    }

    _createClass(ExtractGitRepoUrl, [{
        key: "extract",
        value: function extract() {
            var self = this;

            _nodeDir2["default"].readFiles(self.dirName, {
                match: /^package.json$/
            }, function (err, content, next) {
                console.log(content);
                if (err) {
                    console.error("Error Happened!");
                }

                var packageJson = JSON.parse(content);
                var url = packageJson.url || (packageJson.repository && packageJson.repository.url && packageJson.repository.type === "git" ? packageJson.repository.url : "");

                self.repositories.push({
                    name: packageJson.name,
                    url: url
                });

                console.log(packageJson.url);
            });
        }
    }, {
        key: "repositories",
        get: function get() {
            return this._repositories;
        },
        set: function set(_repositories) {
            this._repositories = _repositories;
        }
    }]);

    return ExtractGitRepoUrl;
})();

exports["default"] = ExtractGitRepoUrl;
module.exports = exports["default"];