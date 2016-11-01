/**
 * @author 2016.11.1 by flyku
 * @param  项目配置
 */
;(function (window, undefined) {
    var allConfigs = {
        /*指向根目录*/
        base: 'http://localhost:3000/work_example',
        /**
         * 别名配置
         * 以下路径配置时需要以项目根目录为基础
         */
        alias: {
            'jquery': 'lib/jquery',
            'underscore': 'lib/underscore',
            'underscoreTlp': 'lib/underscoreTlp',
            'layer': 'lib/layer/layer',
            'My97DatePicker': 'lib/My97DatePicker/WdatePicker',
            'validate': 'lib/validate/jquery.validate',
            'zTree': 'lib/zTree/jquery.ztree.min',
            'commonjs': 'js/common'
        },
        /*模板加载*/
        preload: [],
        /**
         * 路径配置
         */
        paths: {
            //'tpl': 'tpl/shop',
            //'images':'images',
            //'utils': 'src/scripts/utils',
            //'tpls': 'src/tpls'
        },
        /**
         * 是否开启调试模式
         */
        debug: true
    };
    
    if (typeof module !== 'undefined' && module.exports !== 'undefined') {
        module.exports = allConfigs;
    } else if (typeof define === 'function') {
        define(function () {
            return allConfigs;
        });
    }
})(this);