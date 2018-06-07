'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.history = exports.routeChange = undefined;

var _history = require('./history');

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultBeforeRouteMiddlewares = [];

var defaultAfterRouteMiddlewares = [];

var routeChange = exports.routeChange = function routeChange(to) {
    return _history2.default.push(to);
};

var routerMiddlewareHandler = function routerMiddlewareHandler(createPath, enhance) {
    return function () {
        if (!_history2.default.push) throw new Error('need react router history');

        var _ref = enhance || {},
            _ref$before = _ref.before,
            before = _ref$before === undefined ? [] : _ref$before,
            _ref$after = _ref.after,
            after = _ref$after === undefined ? [] : _ref$after;

        var locationSearch = window.location.search;
        var url = '' + createPath.apply(undefined, arguments) + locationSearch;
        var beforeTasks = Array.isArray(before) ? before : [before];
        var afterTasks = Array.isArray(after) ? after : [after];
        var tasks = [].concat(defaultBeforeRouteMiddlewares, _toConsumableArray(beforeTasks), [routeChange], _toConsumableArray(afterTasks), defaultAfterRouteMiddlewares);
        var goOnFlag = true;
        var next = function next(goOn) {
            if (goOn === false) {
                goOnFlag = goOn;
            } else {
                goOnFlag = true;
            }
        };
        tasks.reduce(function (acc, cur) {
            if (acc) {
                cur(url, next);
            }
            return goOnFlag;
        }, goOnFlag);
    };
};

exports.history = _history2.default;
exports.default = routerMiddlewareHandler;
//# sourceMappingURL=index.js.map