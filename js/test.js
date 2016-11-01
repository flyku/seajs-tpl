/**
 * @author 2016.11.1 by flyku
 * @param  module test.js
 * @param  各插件的使用方式和逻辑
 */
//执行逻辑
define(function(require, exports, module) {
	var $ = require('jquery');
	//var layer = require('layer');
	/*调用tpl模板*/
	require('tpl/shop/v');

	//var commonjs = require('commonjs');
	/*包装为模块后的jq插件，使用共享方式调用jq插件*/
	//require('zTree')($);
	//require('validate')($);
	/*支持模块调用，无需包装*/
	//require('My97DatePicker');
	/*模板*/
	//require('underscore');
	//var testTpl = require('tpl/shop/test.tpl');
	/*ajax数据*/
	/*var data = [{
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
	}];*/
	/*渲染数据*/
	//commonjs.underscoreRender(testTpl, "body", data);


	/*对象模块的调用*/
	//console.log(commonjs);
	//commonjs.daily("a", "b");
	//commonjs.dailys("b", "a");
	/*函数模块的调用*/
	//commonjs.daily("a", "b");


	/*使用图片*/
	/*$('#companyManage').css({
			'height':'500px',
			'background': 'url(images/photo.png)'
		});
	*/
	//exports.init = function() {
	/*validate验证使用*/
	/*$("#ss").validate({
		debug: true, //调试模式，即使验证成功也不会跳转到目标页面
		rules: { //配置验证规则，key就是被验证的dom对象，value就是调用验证的方法(也是json格式)
			sname: {
				required: true, //必填。如果验证方法不需要参数，则配置为true
				maxlength: 5
			}
		}
	});*/
	/*layer使用*/
	/*$(".ll").on("click", function() {
		layer.alert('内容', {
			icon: 1,
			skin: 'layer-ext-moon'
		});
	})*/
	/*日期使用*/
	/*$("#ss").on("click", function() {
		WdatePicker({
			minDate: '#F{$dp.$D(\'ss\')}',
			maxDate: '(%y+1)-%m-%d'
		})
	})*/
	/*ztree使用*/
	/*function zTreeClick(event, treeId, treeNode) {
		var treeObj = $.fn.zTree.getZTreeObj(treeNode.pId);
	};
	var setting = {
		view: {
			selectedMulti: false
		},
		callback: {
			onClick: zTreeClick
		},
		edit: {
			enable: false,
			showRemoveBtn: false,
			renameTitle: "修改",
			removeTitle: "删除",
			drag: {
				isCopy: true,
				autoExpandTrigger: false
			}
		},
		data: {
			simpleData: {
				enable: true
			}
		}
	};
	var zNodes = {
		name: "贯标资料目录",
		open: true,
		id: 0,
		iconSkin: "",
		children: [{
			name: "人力资源管理",
			open: true,
			id: 1,
			iconSkin: "",
			children: [{
				id: 2,
				name: "模板",
				iconSkin: ""
			}, {
				id: 3,
				name: "表单类节点名称",
				iconSkin: ""
			}]
		}, {
			name: "人力资源管理",
			open: true,
			id: 1,
			iconSkin: "",
			children: [{
				id: 2,
				name: "模板类节的名称点名称",
				iconSkin: ""
			}, {
				id: 3,
				name: "表单类节点名称",
				iconSkin: ""
			}]
		}, {
			name: "人力资源管理",
			open: true,
			id: 1,
			iconSkin: "",
			children: [{
				id: 2,
				name: "模板类节的名称点名称",
				iconSkin: ""
			}, {
				id: 3,
				name: "表单类节点名称",
				iconSkin: ""
			}]
		}, {
			name: "人力资源管理",
			open: true,
			id: 1,
			iconSkin: "",
			children: [{
				id: 2,
				name: "模板类节的名称点名称",
				iconSkin: ""
			}, {
				id: 3,
				name: "表单类节点名称",
				iconSkin: ""
			}]
		}]
	};
	$.fn.zTree.init($("#companyManage"), setting, zNodes);*/
	//};
});