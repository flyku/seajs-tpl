/**
 * @author 2016.11.1 by flyku
 * @param  module main.js
 * @param  主页面方法逻辑
 */
define(function(require, exports, module) {
    var _name = 'tom';
    var _age = '20';

    exports.myName = _name;

    exports.say = function() {
        return _name;
    }
    
    exports.getName = function() {
        return _name;
    }

    exports.getAge = function() {
        return _age;
    }
});
