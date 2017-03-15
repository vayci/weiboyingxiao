var queryString = function(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.href);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var getPageNumber = function() {
    var pageValue = queryString('page');
    var pageNumber = 1;
    if (pageValue) {
        pageNumber = parseInt(pageValue);
    }

    return pageNumber;
};

var getAttitudesCount = function($feed) {
    var attitudesCount = 0;
    var attitudesCountText = $feed.find('a[action-type="feed_list_like"] em').text();
    if (attitudesCountText != '') {
        attitudesCount = parseInt(attitudesCountText);
    } else {
        attitudesCountText = $feed.find('span[node-type="like_status"] em').text();
        if (attitudesCountText != '') {
            attitudesCount = parseInt(attitudesCountText);
        }
    }

    return attitudesCount;
};

var getCommentsCount = function($feed) {
    var commentsCount = 0;
    var commentsCountText = $feed.find('a[action-type="feed_list_comment"] em').text();
    if (commentsCountText != '') {
        commentsCount = parseInt(commentsCountText);
    } else {
        commentsCountText = $feed.find('span[node-type="comment_btn_text"]').text().replace('评论', '').trim();
        if (commentsCountText != '') {
            commentsCount = parseInt(commentsCountText);
        }
    }

    return commentsCount;
};

var getRepostsCount = function($feed) {
    var repostsCount = 0;
    var repostsCountText = $feed.find('a[action-type="feed_list_forward"] em').text();
    if (repostsCountText != '') {
        repostsCount = parseInt(repostsCountText);
    } else {
        repostsCountText = $feed.find('span[node-type="forward_btn_text"]').text().replace('转发', '').trim();
        if (repostsCountText != '') {
            repostsCount = parseInt(repostsCountText);
        }
    }

    return repostsCount;
};

var getProfileUrl = function($feed) {
    var url = $feed.find('.W_fb').attr('href');
    if (url.indexOf('http://') == -1) {
        url = 'http://www.weibo.com' + url;
    }

    return url;
};

var getUserId = function($feed) {
    var usercard = $feed.find('.face img').attr('usercard');
    var userId = 0;
    if (usercard.indexOf('&') != -1) {
        userId = usercard.substring(3, usercard.indexOf('&'));
    } else {
        userId = usercard.substring(3);
    }

    return userId;
};

var getStatusLink = function($from) {
    var statusLink = $from.eq(0).attr('href');
    if (statusLink.indexOf('http://') === -1) {
        statusLink = 'http://www.weibo.com' + statusLink;
    }

    return statusLink;
};

var afterGetCustomers = function() {
    var pageCount = parseInt(sessionStorage.getItem('pageCount'));

    var pageNumber = getPageNumber();
    if (pageNumber < pageCount && $('.page.next').length > 0) {
        window.location.href = $('.page.next').attr('href');
    } else {
        sessionStorage.setItem('pageCount', null);
        hideLoading();

        chrome.runtime.sendMessage({
            method: 'showNotificaton',
            message: '您需要的前' + pageNumber + '页用户微博数据已经获取完毕！'
        }, function(response) {});
    }
};

var getProfileCustomer = function($feedList, index) {

    if (window.cancelGetCustomers) {
        return;
    }

    var $feed = $feedList.eq(index);
    if ($feed.attr('node-type') == 'lazyload' || $feed.find('div[node-type="lazyload"]').length > 0) {
        window.scrollTo(0, document.body.scrollHeight);

        setTimeout(function() {
            getProfileCustomer(getFeedList(), index);
        }, 1000);

        return;
    }

    if ($feed.find('.W_pages').length > 0 || $feed.find('.WB_empty').length > 0) {
        afterGetCustomers();
        return;
    }

    var userId = $feed.attr('tbinfo').replace('ouid=', '');
    if (userId.indexOf('&') != -1) {
        userId = userId.substring(0, userId.lastIndexOf('&'));
    }

    var url = 'http://www.weibo.com/' + userId;
    var profileImageUrl = $('.pf_photo .photo').attr('src').replace('/180/', '/50/');

    var screenName = $feed.find('[node-type="feed_list_content"]').attr('nick-name');
    var content = $feed.find('[node-type="feed_list_content"]').html();
    var statusId = $feed.attr('mid');
    var createdAt = $feed.find('a[node-type="feed_list_item_date"]').attr('title');
    var source = $feed.find('a[action-type="app_source"]').text();

    var $from = $feed.find('.WB_feed_detail .content .feed_from a');
    if ($from.length == 0) {
        $from = $feed.find('.WB_feed_detail .WB_detail .WB_from a');
    }

    var statusLink = getStatusLink($from);

    var attitudesCount = getAttitudesCount($feed);
    var commentsCount = getCommentsCount($feed);
    var repostsCount = getRepostsCount($feed);

    var verified = false;

    var friendsCount = parseInt($('.tb_counter .t_link strong:eq(0)').text().trim());
    var followersCount = parseInt($('.tb_counter .t_link strong:eq(1)').text().trim());
    var statusesCount = parseInt($('.tb_counter .t_link strong:eq(2)').text().trim());

    var gender = 0;
    if ($('.icon_pf_male').length > 0) {
        gender = 1;
    } else if ($('.icon_pf_female').length > 0) {
        gender = 2;
    }

    var description = $('.pf_intro').text();
    var location = $('.ul_detail li:eq(0) .item_text').text().trim();
    var school = '';
    var company = '';

    var customer = {
        userId: userId,
        statusId: statusId,
        url: url,
        profileImageUrl: profileImageUrl,
        screenName: screenName,
        content: content,
        friendsCount: friendsCount,
        followersCount: followersCount,
        statusesCount: statusesCount,
        description: description,
        location: location,
        school: school,
        company: company,
        keywords: '',
        source: source,
        createdAt: createdAt,
        statusLink: statusLink,
        attitudesCount: attitudesCount,
        commentsCount: commentsCount,
        repostsCount: repostsCount,
        gender: gender,
        domain: '',
        isMember: false,
        verified: verified
    };

    var totalNumber = $feedList.length;
    chrome.runtime.sendMessage({
        method: 'addCustomer',
        customer: customer,
        totalNumber: totalNumber,
        index: index
    }, function(response) {
        index++;

        $('.message .progress').text(index + ' / ' + totalNumber);

        if (index < totalNumber) {
            getProfileCustomer($feedList, index);
        } else {
            afterGetCustomers();
        }
    });
}

var getCustomer = function($feedList, keywords, index) {

    if (window.cancelGetCustomers) {
        return;
    }

    var $feed = $feedList.eq(index);
    if ($feed.attr('node-type') == 'lazyload' || $feed.find('div[node-type="lazyload"]').length > 0) {
        window.scrollTo(0, document.body.scrollHeight);

        setTimeout(function() {
            getCustomer(getFeedList(), keywords, index);
        }, 1000);

        return;
    }

    if ($feed.find('.W_pages').length > 0 || $feed.find('.WB_empty').length > 0) {
        afterGetCustomers();
        return;
    }

    var url = getProfileUrl($feed);

    var profileImageUrl = $feed.find('.face img').attr('src');
    var userId = getUserId($feed);

    var screenName = $feed.find('.W_fb').attr('title');
    var content = $feed.find('[node-type="feed_list_content"]').html();

    var $from = $feed.find('.WB_feed_detail .content .feed_from a');
    if ($from.length == 0) {
        $from = $feed.find('.WB_feed_detail .WB_detail .WB_from a');
    }

    var statusId = $feed.find('div[action-type="feed_list_item"]').attr('mid');
    var createdAt = $from.eq(0).attr('title');
    var source = $from.eq(1).text();
    var statusLink = getStatusLink($from);

    var attitudesCount = getAttitudesCount($feed);
    var commentsCount = getCommentsCount($feed);
    var repostsCount = getRepostsCount($feed);

    var verified = $feed.find('.approve').length > 0 || $feed.find('.approve_co').length > 0;

    var getDetailUrl = 'http://www.weibo.com/aj/user/newcard?id=' + userId;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", getDetailUrl, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var result = xhr.responseText;
            result = result.replace('try{(', '').replace(')}catch(e){};', '');

            var $html = $($.parseJSON(result).data);
            var $li = $html.find('.name .userdata li').not('.W_vline');
            var friendsCount = parseInt($li.eq(0).text().substr(2));
            var followersCountText = $li.eq(1).text().substr(2);
            var followersCount = followersCountText.lastIndexOf('万') == -1 ? parseInt(followersCountText) : parseInt(followersCountText) * 10000;
            var statusesCount = parseInt($li.eq(2).text().substr(2));

            var gender = 0;
            if ($html.find('.name .female').length > 0) {
                gender = 2;
            } else if ($html.find('.name .male').length > 0) {
                gender = 1;
            }

            var description = $html.find('.info dd').text();
            $li = $html.find('.user_info .userdata li').not('.W_vline');
            var location = $li.eq(0).text();
            var school = '';
            var company = '';
            if ($li.length > 1) {
                var liText = $li.eq(1).text();
                if (liText.indexOf('毕业于') != -1) {
                    school = liText.replace('毕业于', '');
                } else {
                    company = liText.replace('就职于', '');
                }
            }

            if ($li.length > 2) {
                company = $li.eq(2).text().replace('就职于', '');
            }

            var customer = {
                userId: userId,
                statusId: statusId,
                url: url,
                profileImageUrl: profileImageUrl,
                screenName: screenName,
                content: content,
                friendsCount: friendsCount,
                followersCount: followersCount,
                statusesCount: statusesCount,
                description: description,
                location: location,
                school: school,
                company: company,
                keywords: keywords,
                source: source,
                createdAt: createdAt,
                statusLink: statusLink,
                attitudesCount: attitudesCount,
                commentsCount: commentsCount,
                repostsCount: repostsCount,
                gender: gender,
                domain: '',
                isMember: false,
                verified: verified
            };

            var totalNumber = $feedList.length;
            chrome.runtime.sendMessage({
                method: 'addCustomer',
                customer: customer,
                totalNumber: totalNumber,
                index: index
            }, function(response) {
                index++;

                $('.message .progress').text(index + ' / ' + totalNumber);

                if (index < totalNumber) {
                    getCustomer($feedList, keywords, index);
                } else {
                    afterGetCustomers();
                }
            });
        }
    }
    xhr.send();
}

var getCustomersFromPage = function($feedList, pageNumber, pageCount, keywords) {

    showLoading('<p>正在努力从页面提取用户数据...</p><p class="progress">0 / ' + $feedList.length + '</p><p class="page-number">第' + pageNumber + '页, 总共提取' + pageCount + '页 <a href="#" id="cancel-get-customers" class="btn">取消操作</a></p>');

    $('#cancel-get-customers').click(function() {
        sessionStorage.setItem('pageCount', null);
        hideLoading();
        window.cancelGetCustomers = true;
    });

    var isProfileFeed = $('.WB_feed_profile').length > 0;
    if (isProfileFeed) {
        getProfileCustomer($feedList, 0);
    } else {
        getCustomer($feedList, keywords, 0);
    }
}

var showLoading = function(message) {
    var $loading = $('#loading');
    if ($loading.length == 0) {
        $loading = $('<div id="loading"><div class="modal"></div><div class="message"></div><ul class="bokeh"><li></li><li></li><li></li><li></li></ul></div>');
        $('body').append($loading);
    }
    $loading.show();

    $('.message', $loading).html(message);
};

var hideLoading = function() {
    $('#loading').hide();
};

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.method === 'fetchCustomers') {
            if ($('.gn_login').length > 0) {
                alert('请先登录微博账号再提取数据！');
                return;
            }

            window.cancelGetCustomers = false;

            var keywords = $('.searchInp_form').val();
            sessionStorage.setItem('pageCount', request.pageCount);

            var pageNumber = getPageNumber();
            var $feedList = getFeedList();

            getCustomersFromPage($feedList, pageNumber, request.pageCount, keywords);

            sendResponse({
                isSuccess: true,
                message: '用户数据提取中...',
                keywords: keywords
            });

            return true;
        }
    });

var checkPageListBeforeGetCustomers = function(pageNumber, pageCount, keywords) {
    var $feedList = getFeedList();
    if ($feedList.length == 0) {
        setTimeout(function() {
            checkPageListBeforeGetCustomers(pageNumber, pageCount, keywords);
        }, 1000);
    } else {
        getCustomersFromPage($feedList, pageNumber, pageCount, keywords);
    }
};

var getFeedList = function() {
    $('.WB_cardwrap:visible').each(function() {
        if ($(this).html().trim() === "") {
            $(this).remove();
        }
    });

    return $('div[node-type="feed_list"] .WB_cardwrap:visible').not('.WB_notes');
};

$(function() {
    var pageCountValue = sessionStorage.getItem('pageCount');
    if (pageCountValue != null) {
        var pageCount = parseInt(pageCountValue);
        var pageNumber = getPageNumber();
        if (pageNumber >= 1 && pageCount >= pageNumber) {
            checkPageListBeforeGetCustomers(pageNumber, pageCount, $('.searchInp_form').val());
        }
    }
});
