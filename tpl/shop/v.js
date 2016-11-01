/**
 * @author 2016.11.1 by flyku
 * @param  module v.js
 * @param  主模板渲染和数据渲染逻辑
 */
define(function(require, exports, module) {
	var $ = require('jquery');
	var commonjs = require('commonjs');
	/*模板*/
	require('underscore');
	var testTpl = require('tpl/shop/test.tpl');
	/*ajax数据*/
	var data = [{
		name: 'mike',
		age: 18,
		sex: '男'
	}, {
		name: 'nina',
		age: 20,
		sex: '女'
	}, {
		name: 'elle',
		age: 26,
		sex: '女'
	}];
	/*渲染数据*/
	commonjs.underscoreRender(testTpl, "body", data);
});