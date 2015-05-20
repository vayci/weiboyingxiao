$(function() {

    'use strict';
    
    var $message = $('#message');

    var optionHtml = '';
    for (var i = 1; i <= 500; i++) {
        optionHtml += '<option value="' + i + '">前' + i + '页</option>';
    }

    var $pageCount = $('#page-count');
    $pageCount.append(optionHtml).val('50');

    var showMessage = function(message, color) {
        $message.html(message).css({
            color: color
        }).show();

        window.setTimeout(function() {
            $message.hide();
        }, 3000);
    };

    $('#get-customers').click(function() {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            var tab = tabs[0];
            if (tab.url.indexOf('.weibo.com/') < 0) {
                showMessage('请先打开<a href="http://s.weibo.com" target="_blank">微博搜索</a>页面！', 'red');
                return;
            }

            chrome.tabs.sendMessage(tab.id, {
                method: 'fetchCustomers',
                pageCount: parseInt($pageCount.val())
            }, function(response) {
                showMessage('正在提取用户...', 'green');
            });
        });
    });
});
