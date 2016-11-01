/**
 * @author 2016.11.1 by flyku
 * @param  module common
 * @param  公共js
 */
define(function(require, exports, module) {
    /*日期是不是第一次点击的标志*/
    var mark = 0,
        /*开始日期是否已选择的标志*/
        flag = null;

    /*对象写法*/
   return {
        // 渲染模版+
        underscoreRender: function(utl, nodeId, data) {
            var result = _.template(utl, {
                variable: 'data'
            })(data);
            $('#' + nodeId).html(result);
        },
        /*日期*/
        daily: function(id, ids) {
            $('#' + id).click(function() {
                WdatePicker({
                    minDate: '#F{$dp.$D(\'' + ids + '\')}',
                    maxDate: '(%y+1)-%m-%d'
                });
            });
            $('#' + id).blur(function() {
                flag = $('#' + id).val();
                if (flag == '') {
                    mark = 0;
                } else {
                    mark = 1;
                }
            })
        },
        dailys: function(id, ids) {
            $('#' + id).click(function() {
                if (!mark) {
                    if (this.flag != '') {
                        // alert('请先填写开始日期！');
                        layer.confirm("请先填写开始日期！", {
                            btn: ['确定'], //按钮
                            title: "提示"
                        });
                    } else {
                        WdatePicker({
                            minDate: '#F{$dp.$D(\'' + ids + '\')}',
                            maxDate: '(%y+1)-%m-%d'
                        });
                        this.flag = null;
                    }
                } else {
                    WdatePicker({
                        minDate: '#F{$dp.$D(\'' + ids + '\')}',
                        maxDate: '(%y+1)-%m-%d'
                    });
                    this.flag = null;
                };

            })
        },
        /*弹窗*/
        alertWin: function(cont, msg, title, callback) {
            //询问框
            layer.confirm(cont, {
                btn: ['确定', '取消'], //按钮
                title: title
            }, function() {
                layer.msg(msg, {
                    icon: 1
                });
                if (typeof callback == "function") {
                    callback();
                }
            });
        },
        //单行删除 点击删除按钮  父元素整行删除
        del: function(className) {
            $("." + className).on("click", function() {
                var $this = $(this);
                layer.open({
                    offset: "260px",
                    content: '确认删除选中信息？',
                    btn: ['确定', '取消'],
                    yes: function(index, layero) {
                        //按钮【按钮一】的回调
                        $this.parent().parent().remove();
                        layer.close(index);
                    },
                    btn2: function(index, layero) {
                        //按钮【按钮二】的回调
                    },
                    cancel: function() {
                        //右上角关闭回调
                    }
                });
            })
        },
        //全选
        selectAll: function(id, ids) {
            var checkAllBtn = $('#' + id);
            var otherBtn = $('#' + ids).find(':checkbox').not('#' + id + ': checkbox ');
            //全选按钮
            checkAllBtn.on('click ', function() {
                if (checkAllBtn.is(': checked ')) {
                    otherBtn.each(function() {
                        $(this).prop('checked ', true);
                    })
                } else {
                    otherBtn.each(function() {
                        $(this).prop('checked ', false);
                    })
                }
            });

            //单选按钮
            otherBtn.click(function() {
                var count = 0;
                otherBtn.each(function(i, ele) {
                    if ($(this).prop('checked ') == true) {
                        count++;
                    }
                });

                if (count == otherBtn.length) {
                    checkAllBtn.prop('checked ', true);
                } else {
                    checkAllBtn.prop('checked ', false);
                }

            })
        }
    }



    /*函数写法*/
    /*日期*/
    /* exports.daily = function(id, ids) {
         $('#' + id).click(function() {
             WdatePicker({
                 minDate: '#F{$dp.$D(\'' + ids + '\')}',
                 maxDate: '(%y+1)-%m-%d'
             });
         });
         $('#' + id).blur(function() {
             flag = $('#' + id).val();
             if (flag == '') {
                 mark = 0;
             } else {
                 mark = 1;
             }
         })
     };
     exports.dailys = function(id, ids) {
         $('#' + id).click(function() {
             if (!mark) {
                 if (this.flag != '') {
                     // alert('请先填写开始日期！');
                     layer.confirm("请先填写开始日期！", {
                         btn: ['确定'], //按钮
                         title: "提示"
                     });
                 } else {
                     WdatePicker({
                         minDate: '#F{$dp.$D(\'' + ids + '\')}',
                         maxDate: '(%y+1)-%m-%d'
                     });
                     this.flag = null;
                 }
             } else {
                 WdatePicker({
                     minDate: '#F{$dp.$D(\'' + ids + '\')}',
                     maxDate: '(%y+1)-%m-%d'
                 });
                 this.flag = null;
             };

         })
     };*/
    /*弹窗*/
    /* exports.alertWin = function(cont, msg, title, callback) {
         //询问框
         layer.confirm(cont, {
             btn: ['确定', '取消'], //按钮
             title: title
         }, function() {
             layer.msg(msg, {
                 icon: 1
             });
             if (typeof callback == "function") {
                 callback();
             }
         });
     };
     //单行删除 点击删除按钮  父元素整行删除
     exports.del = function(className) {
         $("." + className).on("click", function() {
             var $this = $(this);
             layer.open({
                 offset: "260px",
                 content: '确认删除选中信息？',
                 btn: ['确定', '取消'],
                 yes: function(index, layero) {
                     //按钮【按钮一】的回调
                     $this.parent().parent().remove();
                     layer.close(index);
                 },
                 btn2: function(index, layero) {
                     //按钮【按钮二】的回调
                 },
                 cancel: function() {
                     //右上角关闭回调
                 }
             });
         })
     };
     //全选
     exports.selectAll = function(id, ids) {
         var checkAllBtn = $('#' + id);
         var otherBtn = $('#' + ids).find(':checkbox').not('#' + id + ': checkbox ');
         //全选按钮
         checkAllBtn.on('click ', function() {
             if (checkAllBtn.is(': checked ')) {
                 otherBtn.each(function() {
                     $(this).prop('checked ', true);
                 })
             } else {
                 otherBtn.each(function() {
                     $(this).prop('checked ', false);
                 })
             }
         });

         //单选按钮
         otherBtn.click(function() {
             var count = 0;
             otherBtn.each(function(i, ele) {
                 if ($(this).prop('checked ') == true) {
                     count++;
                 }
             });

             if (count == otherBtn.length) {
                 checkAllBtn.prop('checked ', true);
             } else {
                 checkAllBtn.prop('checked ', false);
             }

         })
     };*/
});