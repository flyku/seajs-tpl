/**
 * @author 2016.11.1 by flyku
 * @param  module index.js
 * @param  主页面入口
 */
seajs.use('./config', function(conf) {
    seajs.config(conf);
    seajs.use('./js/index');
});

define(function(require, exports, module) {
    var $ = require('jquery');
    var layer = require('layer');
    //var commonjs = require('commonjs');
    var main = require('./main');

    /*模板*/
    //var tlp = require('tlp/tlp');


    var s1 = $('#s1');
    var s2 = $('#s2');
    var s3 = $('#s3');

    var name = main.getName();
    var age = main.getAge();
    var msg = main.say();

    s1.html(name);
    s2.html(age);
    s3.html(msg);
});