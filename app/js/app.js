var App = angular.module('weiboMarketing', ['ngRoute', 'ngAnimate', 'ngStorage', 'ngSanitize',
        'ngCookies', 'ui.bootstrap', 'ui.router', 'ngResource', 'xeditable', 'toastr', 'smart-table'
    ])
    .config([
        '$compileProvider',
        function($compileProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
        }
    ])
    .run(['$rootScope', '$state', '$stateParams', '$window', 'editableOptions', function($rootScope, $state, $stateParams, $window, editableOptions) {

        editableOptions.theme = 'bs3';

        // Set reference to access them from any scope
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$storage = $window.localStorage;

        // Scope Globals
        // ----------------------------------- 
        $rootScope.app = {
            name: '微博营销助手',
            description: '获取新浪微博营销目标用户。多个条件筛选用户，批量推送评论，批量点赞，批量转发，批量收听。',
            viewAnimation: 'ng-fadeInUp'
        };
    }]);

'use strict';

App.config(["$stateProvider", "$urlRouterProvider", "$controllerProvider", "$compileProvider", "$filterProvider", "$provide", function($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

        App.controller = $controllerProvider.register;
        App.directive = $compileProvider.directive;
        App.filter = $filterProvider.register;
        App.factory = $provide.factory;
        App.service = $provide.service;
        App.constant = $provide.constant;
        App.value = $provide.value;

        // default route
        $urlRouterProvider.otherwise('/app/customers');

        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'views/app.html',
                controller: 'AppController'
            })
            .state('app.customers', {
                url: '/customers',
                title: '用户的微博列表',
                templateUrl: 'views/customers.html'
            })
            .state('app.logs', {
                url: '/logs',
                title: '日志列表',
                templateUrl: 'views/logs.html'
            })
            .state('app.tasks', {
                url: '/tasks',
                title: '任务列表',
                templateUrl: 'views/tasks.html'
            })
            .state('app.settings', {
                url: '/settings',
                title: '设置',
                templateUrl: 'views/settings.html'
            })
            .state('app.accounts', {
                url: '/accounts',
                title: '我的微博账号列表',
                templateUrl: 'views/accounts.html'
            });

    }])
    .controller('NullController', function() {});

'use strict';

App.controller('AccountsController', ["$scope", "toastr", "$modal", function($scope, toastr, $modal) {

    $scope.accounts = [];

    $.Utils.showSpinner();

    chrome.runtime.sendMessage({
        method: 'getAccounts'
    }, function(response) {
        $scope.$apply(function() {

            $.Utils.hideSpinner();

            $scope.accounts = response.accounts;
        });

    });

    $scope.checkName = function(name, id) {
        if (!name) {
            return '用户名不能为空！';
        }

        for (var i in $scope.accounts) {
            var account = $scope.accounts[i];
            if (account.id !== id && account.username === name) {
                return '用户名已经存在！';
            }
        }
    };

    $scope.taskPaused = function(type, isPaused, id) {
        chrome.runtime.sendMessage({
            method: 'accountTaskPaused',
            id: id,
            type: type,
            isPaused: isPaused
        }, function(response) {

        });
    };

    $scope.taskCount = function(type, count, id) {
        chrome.runtime.sendMessage({
            method: 'accountTaskCount',
            id: id,
            type: type,
            count: count
        }, function(response) {

        });
    };


    $scope.checkPassword = function(password) {
        if (!password) {
            return '密码不能为空！';
        }
    };

    $scope.saveAccount = function(index, data, id) {
        angular.extend(data, {
            id: id
        });

        chrome.runtime.sendMessage({
            method: id === 0 ? 'addAccount' : 'updateAccount',
            account: data
        }, function(response) {
            $scope.$apply(function() {
                toastr.success('保存账号成功！');
                var account = $scope.accounts[index];
                account.id = response.accountId;
            });
        });
    };

    $scope.removeAccount = function(index, id) {
        chrome.runtime.sendMessage({
            method: 'deleteAccount',
            id: id
        }, function(response) {
            $scope.$apply(function() {
                toastr.success('删除账号成功！');

                $scope.accounts.splice(index, 1);
            });
        });
    };

    $scope.addAccount = function() {
        $scope.inserted = {
            id: 0,
            username: '',
            password: '',
            status: ''
        };
        $scope.accounts.push($scope.inserted);
    };

    document.getElementById('import-file').addEventListener('change', function(evt) {
        var file = evt.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $.Utils.showSpinner();

                var contents = e.target.result;
                var lines = contents.split('\n');
                var line, account, array, count = 0;
                var accounts = [];
                for (var i in lines) {
                    line = lines[i].trim();
                    if (line.length > 0) {
                        array = line.split(/\s+/);

                        account = {
                            id: 0,
                            username: array[0],
                            password: array[1],
                            status: ''
                        };

                        var accountExists = function(element) {
                            return element.username === account.username;
                        };

                        if ($scope.accounts.some(accountExists)) {
                            continue;
                        }

                        accounts.push(account);
                    }
                };

                chrome.runtime.sendMessage({
                    method: 'addAccounts',
                    accounts: accounts
                }, function(response) {
                    accounts = response.accounts;
                    for (var i in accounts) {
                        $scope.accounts.push(accounts[i]);
                    }

                    $scope.$apply(function() {
                        toastr.success('导入' + accounts.length + '个账号！');
                        $.Utils.hideSpinner();
                    });

                });
            };

            reader.readAsText(file);
            $(this).val('');
        }
    });

    $scope.changePincode = function(account) {
        account.pincodeImageUrl = 'http://login.sina.com.cn/cgi/pin.php?r=' + Date.now() + '&s=0&p=' + account.pcid;
    };

    $scope.loginAccount = function(index, account) {
        $.Utils.showSpinner();

        chrome.runtime.sendMessage({
            method: 'loginAccount',
            account: account
        }, function(response) {

            $scope.$apply(function() {
                $.Utils.hideSpinner();

                var pcid = response.pcid;
                if (pcid) {
                    account.showPincode = true;
                    account.pcid = pcid;

                    $scope.changePincode(account);

                    return;
                }

                account.showPincode = false;
                account.pincode = '';

                if (response.status === '登录失败') {
                    toastr.error('登录失败，请检查账号是否正确！');
                } else {
                    toastr.success('登录成功！');
                }

                $scope.accounts[index].status = response.status;
                $scope.accounts[index].userId = response.userId;
                $scope.accounts[index].screenName = response.screenName;

            });
        });
    };

    $scope.showTaskLog = function(account) {

        $modal.open({
            templateUrl: 'task-logs-modal.html',
            controller: 'TaskLogsController',
            resolve: {
                account: function() {
                    return account;
                }
            }
        });
    }
}]);

App.controller('TaskLogsController', ["$scope", "$modalInstance", "account", function($scope, $modalInstance, account) {

    $scope.taskLogs = [];
    $scope.account = account;

    $.Utils.showSpinner();

    chrome.runtime.sendMessage({
        method: 'getTaskLogs',
        userId: account.userId
    }, function(response) {
        $scope.$apply(function() {

            $.Utils.hideSpinner();

            $scope.taskLogs = response.taskLogs;
        });

    });

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
}]);

'use strict';

App.controller('CustomersController', ["$scope", "toastr", "$modal", "$filter", "$state", function($scope, toastr, $modal, $filter, $state) {

    $scope.allInCurrentPageSelected = false;
    $scope.allSelected = false;
    $scope.allCustomers = [];
    $scope.customers = [];
    $scope.count = 0;

    $scope.$watch('allInCurrentPageSelected', function(newValue, oldValue) {
        if (newValue === false) {
            $scope.allSelected = false;
        }

        for (var i in $scope.customers) {
            $scope.customers[i].isSelected = newValue;
        }
    });

    $scope.selectAll = function() {

        $scope.allSelected = true;

        $.Utils.showSpinner();

        chrome.runtime.sendMessage({
            method: 'getCustomers',
            start: 0,
            pageSize: $scope.count,
            searchConditions: $scope.searchConditions
        }, function(response) {

            $scope.allCustomers = response.list;

            $.Utils.hideSpinner();
        });
    };

    $scope.cancelSelectAll = function() {
        $scope.allSelected = false;
    };

    $scope.searchConditions = {
        keywords: localStorage.keywords,
        filters: localStorage.filters,
        statusesCountMin: localStorage.statusesCountMin,
        statusesCountMax: localStorage.statusesCountMax,
        commentsCountMin: localStorage.commentsCountMin,
        commentsCountMax: localStorage.commentsCountMax,
        repostsCountMin: localStorage.repostsCountMin,
        repostsCountMax: localStorage.repostsCountMax,
        attitudesCountMin: localStorage.attitudesCountMin,
        attitudesCountMax: localStorage.attitudesCountMax,
        followersCountMin: localStorage.followersCountMin,
        followersCountMax: localStorage.followersCountMax,
        friendsCountMin: localStorage.friendsCountMin,
        friendsCountMax: localStorage.friendsCountMax,
        gender: localStorage.gender
    };

    $.Utils.showSpinner();

    $scope.callServer = function callServer(tableState) {

        var pagination = tableState.pagination;

        var start = pagination.start || 0;
        var number = pagination.number || 50;

        chrome.runtime.sendMessage({
            method: 'getCustomers',
            start: start,
            pageSize: number,
            searchConditions: $scope.searchConditions
        }, function(response) {
            $scope.$apply(function() {

                $scope.customers = response.list;

                var count = response.count;
                $scope.count = count;

                tableState.pagination.numberOfPages = Math.ceil(count / number);

                $.Utils.hideSpinner();
            });
        });

    };

    $scope.getGender = function(gender) {
        if (gender === 1) {
            return '男';
        } else if (gender === 2) {
            return '女';
        }

        return '';
    };

    var storeSearchConditions = function() {

        var searchConditions = $scope.searchConditions;
        localStorage.keywords = searchConditions.keywords || '';
        localStorage.filters = searchConditions.filters || '';
        localStorage.statusesCountMin = searchConditions.statusesCountMin || '';
        localStorage.statusesCountMax = searchConditions.statusesCountMax || '';
        localStorage.commentsCountMin = searchConditions.commentsCountMin || '';
        localStorage.commentsCountMax = searchConditions.commentsCountMax || '';
        localStorage.repostsCountMin = searchConditions.repostsCountMin || '';
        localStorage.repostsCountMax = searchConditions.repostsCountMax || '';
        localStorage.attitudesCountMin = searchConditions.attitudesCountMin || '';
        localStorage.attitudesCountMax = searchConditions.attitudesCountMax || '';
        localStorage.followersCountMin = searchConditions.followersCountMin || '';
        localStorage.followersCountMax = searchConditions.followersCountMax || '';
        localStorage.friendsCountMin = searchConditions.friendsCountMin || '';
        localStorage.friendsCountMax = searchConditions.friendsCountMax || '';
        localStorage.gender = searchConditions.gender || '';
    };

    var showModal = function(index, templateUrl, controller) {
        var items;
        if (!isNaN(index)) {
            items = [];
            items.push(getTask($scope.customers[index]));
        } else {
            items = getSelectedItems();
        }

        if (items.length === 0) {
            toastr.error('请先选择用户！');
            return;
        }

        $modal.open({
            templateUrl: templateUrl,
            controller: controller,
            resolve: {
                items: function() {
                    return items;
                }
            }
        });
    };

    $scope.comment = function(index) {
        showModal(index, 'comment-modal.html', 'CommentModalController');
    };

    $scope.forward = function(index) {
        showModal(index, 'forward-modal.html', 'ForwardModalController');
    };

    var strip = function(html) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };

    var getTask = function(customer) {
        return {
            statusId: customer.statusId,
            userId: customer.userId,
            content: '',
            statusLink: customer.statusLink,
            statusContent: strip(customer.content).replace(/#/g, '').replace(/(?:\bhttps?:\/\/|\bwww\.|\[url)\S+\s*/g, '').trim()
        };
    };

    var getSelectedItems = function() {
        var list = [],
            customers;

        if ($scope.allSelected) {
            customers = $scope.allCustomers;
            for (var i in customers) {
                list.push(getTask(customers[i]));
            }
        } else {
            customers = $scope.customers;
            for (var i in customers) {
                var customer = customers[i];
                customer.isSelected && list.push(getTask(customer));
            }
        }

        return list;
    };

    var getSelectedIds = function() {
        var list = [],
            customers;
        if ($scope.allSelected) {
            customers = $scope.allCustomers;
            for (var i in customers) {
                list.push(customers[i].id);
            }
        } else {
            customers = $scope.customers;
            for (var i in customers) {
                var customer = customers[i];
                customer.isSelected && list.push(customer.id);
            }
        }

        return list;
    };

    $scope.deleteCustomers = function(id) {

        var ids = [];
        if (id) {
            ids.push(id);
        } else {
            ids = getSelectedIds();
            if (ids.length == 0) {
                toastr.error('请先选择用户微博！');
                return;
            }
        }

        if (confirm('确定删除用户微博？')) {

            $.Utils.showSpinner();

            chrome.runtime.sendMessage({
                method: 'deleteCustomers',
                ids: ids
            }, function(response) {

                $.Utils.hideSpinner();

                toastr.success('删除用户微博成功！');

                $state.reload();

            });
        }
    };

    $scope.resetSearch = function() {

        $scope.searchConditions = {};
        storeSearchConditions();
        $state.reload();
    };

    $scope.search = function() {
        storeSearchConditions();
        $state.reload();
    };

    var praiseAndFollow = function(index, type, message) {
        var selectedItems = [];
        if (!isNaN(index)) {
            selectedItems.push(getTask($scope.customers[index]));
        } else {
            selectedItems = getSelectedItems();
        }

        if (selectedItems.length === 0) {
            toastr.error('请先选择用户！');
            return;
        }

        chrome.runtime.sendMessage({
            method: 'addTasks',
            type: type,
            list: selectedItems
        }, function(response) {
            $scope.$apply(function() {
                toastr.success(message);
            });
        });
    };

    $scope.praise = function(index) {
        praiseAndFollow(index, 'praise', '添加点赞任务成功，任务已经在任务列表中等待执行！');
    };

    $scope.follow = function(index) {
        praiseAndFollow(index, 'follow', '添加收听任务成功，任务已经在任务列表中等待执行！');
    };

    $scope.message = function(index) {
        showModal(index, 'message-modal.html', 'MessageModalController')
    };
}]);

var modalConfirm = function($scope, $modalInstance, type, items, toastr, message) {
    $.Utils.showSpinner();

    chrome.runtime.sendMessage({
        method: 'addTasks',
        type: type,
        list: items,
        content: $scope.useRandomContent ? '' : $scope.content,
        useRandomContent: $scope.useRandomContent
    }, function(response) {
        $scope.$apply(function() {

            $modalInstance.close();

            toastr.success(message);

            $.Utils.hideSpinner();

        });
    });
};

App.controller('CommentModalController', ["$scope", "$modalInstance", "items", "toastr", function($scope, $modalInstance, items, toastr) {

    $scope.useRandomContent = true;
    $scope.content = '';

    $scope.ok = function() {

        if ($scope.content === '' && !$scope.useRandomContent) {
            toastr.error('如果不使用随机评论，那么评论内容必须填写！');
            return;
        }

        modalConfirm($scope, $modalInstance, 'comment', items, toastr, '添加评论任务成功，任务已经在任务列表中等待执行！');
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
}]);

App.controller('ForwardModalController', ["$scope", "$modalInstance", "items", "toastr", function($scope, $modalInstance, items, toastr) {

    $scope.useRandomContent = true;
    $scope.content = '';

    $scope.ok = function() {
        modalConfirm($scope, $modalInstance, 'forward', items, toastr, '添加转发任务成功，任务已经在任务列表中等待执行！');
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
}]);

App.controller('MessageModalController', ["$scope", "$modalInstance", "items", "toastr", function($scope, $modalInstance, items, toastr) {

    $scope.content = '';

    $scope.ok = function() {

        if ($scope.content === '') {
            toastr.error('私信内容必须填写！');
            return;
        }

        $.Utils.showSpinner();

        chrome.runtime.sendMessage({
            method: 'addTasks',
            type: 'message',
            list: items,
            content: $scope.content
        }, function(response) {
            $scope.$apply(function() {

                $modalInstance.close();

                toastr.success('添加私信任务成功，任务已经在任务列表中等待执行！');

                $.Utils.hideSpinner();

            });
        });
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
}]);

'use strict';

App.controller('LogsController', ["$scope", "toastr", "$state", function($scope, toastr, $state) {

    $scope.logs = [];

    $.Utils.showSpinner();

    $scope.count = 0;

    $scope.callServer = function callServer(tableState) {

        var pagination = tableState.pagination;

        var start = pagination.start || 0;
        var number = pagination.number || 50;

        chrome.runtime.sendMessage({
            method: 'getLogs',
            start: start,
            pageSize: number
        }, function(response) {
            $scope.$apply(function() {

                $scope.logs = response.list;

                var count = response.count;
                $scope.count = count;

                tableState.pagination.numberOfPages = Math.ceil(count / number);

                $.Utils.hideSpinner();
            });
        });
    };

    $scope.deleteLogs = function() {

        $.Utils.showSpinner();

        chrome.runtime.sendMessage({
            method: 'deleteLogs'
        }, function(response) {

            $.Utils.hideSpinner();

            toastr.success('清空完成！');

            $state.reload();

        });
    };
}]);

'use strict';

App.controller('AppController', ["$rootScope", "$scope", "$state", "$window", "$localStorage", "$timeout", "toggleStateService", function($rootScope, $scope, $state, $window, $localStorage, $timeout, toggleStateService) {

    // Hook not found
    $rootScope.$on('$stateNotFound',
        function(event, unfoundState, fromState, fromParams) {
            console.log(unfoundState.to); // "lazy.state"
            console.log(unfoundState.toParams); // {a:1, b:2}
            console.log(unfoundState.options); // {inherit:false} + default options
        });
    // Hook error
    $rootScope.$on('$stateChangeError',
        function(event, toState, toParams, fromState, fromParams, error) {
            console.log(error);
        });
    // Hook success
    $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
            // display new view from top
            $window.scrollTo(0, 0);
            // Save the route title
            $rootScope.currTitle = $state.current.title;
        });

    $rootScope.currTitle = $state.current.title;
    $rootScope.pageTitle = function() {
        return ($rootScope.currTitle || $rootScope.app.description) + ' - ' + $rootScope.app.name;
    };

    toggleStateService.restoreState($(document.body));

    // Applies animation to main view for the next pages to load
    $timeout(function() {
        $rootScope.mainViewAnimation = $rootScope.app.viewAnimation;
    });

    // cancel click event easily
    $rootScope.cancel = function($event) {
        $event.stopPropagation();
    };
}]);

'use strict';

App.controller('NavigationController', ["$rootScope", "$scope", "$state", function($rootScope, $scope, $state) {
    $scope.menuItems = [{
        'text': '用户的微博列表',
        'sref': 'app.customers'
    }, {
        'text': '任务列表',
        'sref': 'app.tasks'
    }, {
        'text': '我的微博账号列表',
        'sref': 'app.accounts'
    }];

    var isActive = function(item) {
        return $state.is(item.sref) || $state.includes(item.sref);
    };

    $scope.getMenuItemPropClasses = function(item) {
        return isActive(item) ? ' active' : '';
    };
}]);

'use strict';

App.controller('SettingsController', ["$scope", "toastr", function($scope, toastr) {

    $scope.settings = {
        praiseIntervalTime: localStorage.praiseIntervalTime || 30,
        commentIntervalTime: localStorage.commentIntervalTime || 30,
        followIntervalTime: localStorage.followIntervalTime || 30,
        forwardIntervalTime: localStorage.forwardIntervalTime || 30,
        messageIntervalTime: localStorage.messageIntervalTime || 30,
        randomContents: localStorage.randomContents || '嗯，有道理～\n有空再看\n转发微博\n你很啰嗦啊。\n已阅。'
    };

    $scope.update = function(settings) {
        localStorage.praiseIntervalTime = settings.praiseIntervalTime;
        localStorage.commentIntervalTime = settings.commentIntervalTime;
        localStorage.followIntervalTime = settings.followIntervalTime;
        localStorage.forwardIntervalTime = settings.forwardIntervalTime;
        localStorage.messageIntervalTime = settings.messageIntervalTime;
        localStorage.randomContents = settings.randomContents;

        chrome.runtime.sendMessage({
            method: 'restartTasks'
        }, function(response) {
            toastr.success('保存设置成功！');
        });
    };
}]);

'use strict';

App.controller('TasksController', ["$scope", "toastr", "$state", function($scope, toastr, $state) {

        $scope.allInCurrentPageSelected = false;
        $scope.allSelected = false;
        $scope.allTasks = [];
        $scope.tasks = [];
        $scope.count = 0;

        $scope.$watch('allInCurrentPageSelected', function(newValue, oldValue) {
            if (newValue == false) {
                $scope.allSelected = false;
            }

            for (var i in $scope.tasks) {
                $scope.tasks[i].isSelected = newValue;
            }
        });

        $scope.getTypeText = function(type) {
            var result = '';
            switch (type) {
                case 'follow':
                    result = '收听';
                    break;
                case 'forward':
                    result = '转发';
                    break;
                case 'message':
                    result = '私信';
                    break;
                case 'comment':
                    result = '评论';
                    break;
                case 'praise':
                    result = '点赞';
                    break;
            }

            return result;
        };

        $scope.selectAll = function() {

            $scope.allSelected = true;

            $.Utils.showSpinner();

            chrome.runtime.sendMessage({
                method: 'getTasks',
                start: 0,
                pageSize: $scope.count,
                searchConditions: $scope.searchConditions
            }, function(response) {

                $scope.allTasks = response.list;

                $.Utils.hideSpinner();
            });
        };

        $scope.cancelSelectAll = function() {
            $scope.allSelected = false;
        };

        $scope.getStatusCss = function(status) {
            switch (status) {
                case '等待执行':
                    return 'label label-warning';
                case '已完成':
                    return 'label label-success';
            }

            return 'label label-danger';
        };


        $.Utils.showSpinner();

        $scope.callServer = function callServer(tableState) {

            var pagination = tableState.pagination;

            var start = pagination.start || 0;
            var number = pagination.number || 50;

            chrome.runtime.sendMessage({
                method: 'getTasks',
                start: start,
                pageSize: number,
                searchConditions: $scope.searchConditions
            }, function(response) {
                $scope.$apply(function() {

                    $scope.tasks = response.list;

                    var count = response.count;
                    $scope.count = count;

                    tableState.pagination.numberOfPages = Math.ceil(count / number);

                    $.Utils.hideSpinner();
                });
            });

        };

        var getSelectedIds = function() {
            var list = [],
                tasks;
            if ($scope.allSelected) {
                tasks = $scope.allTasks;
                for (var i in tasks) {
                    list.push(tasks[i].id);
                }
            } else {
                tasks = $scope.tasks;
                for (var i in tasks) {
                    var task = tasks[i];
                    task.isSelected && list.push(task.id);
                }
            }

            return list;
        };

        $scope.searchConditions = {
            taskStatus: localStorage.taskStatus,
            taskType: localStorage.taskType
        };

        var storeSearchConditions = function() {
            var searchConditions = $scope.searchConditions;
            localStorage.taskStatus = searchConditions.taskStatus || '';
            localStorage.taskType = searchConditions.taskType || '';
        };

        $scope.search = function() {
            storeSearchConditions();
            $state.reload();
        };

        $scope.deleteTasks = function() {

            var ids = getSelectedIds();
            if (ids.length === 0) {
                toastr.error('请先选择任务！');
                return;
            }

            if (confirm('确定删除所选任务？')) {

                $.Utils.showSpinner();

                chrome.runtime.sendMessage({
                    method: 'deleteTasks',
                    ids: ids
                }, function(response) {

                    $.Utils.hideSpinner();

                    toastr.success('删除任务成功！');

                    $state.reload();
                });
            }
        };
    }]
);

'use strict';

App.directive('stringToNumber', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(value) {
                return '' + value;
            });
            ngModel.$formatters.push(function(value) {
                return parseFloat(value, 10);
            });
        }
    };
});

'use strict';

App.directive('toggleState', ["toggleStateService", function(toggleStateService) {

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            var $body = $('body');

            $(element).on('click', function(e) {
                e.preventDefault();
                var classname = attrs.toggleState;

                if (classname) {
                    if ($body.hasClass(classname)) {
                        $body.removeClass(classname);
                        if (!attrs.noPersist)
                            toggleStateService.removeState(classname);
                    } else {
                        $body.addClass(classname);
                        if (!attrs.noPersist)
                            toggleStateService.addState(classname);
                    }

                }

            });
        }
    };

}]);

'use strict';

App.service('toggleStateService', ["$rootScope", function($rootScope) {

    var storageKeyName = 'toggleState';

    // Helper object to check for words in a phrase //
    var WordChecker = {
        hasWord: function(phrase, word) {
            return new RegExp('(^|\\s)' + word + '(\\s|$)').test(phrase);
        },
        addWord: function(phrase, word) {
            if (!this.hasWord(phrase, word)) {
                return (phrase + (phrase ? ' ' : '') + word);
            }
        },
        removeWord: function(phrase, word) {
            if (this.hasWord(phrase, word)) {
                return phrase.replace(new RegExp('(^|\\s)*' + word + '(\\s|$)*', 'g'), '');
            }
        }
    };

    // Return service public methods
    return {
        // Add a state to the browser storage to be restored later
        addState: function(classname) {
            var data = angular.fromJson($rootScope.$storage[storageKeyName]);

            if (!data) {
                data = classname;
            } else {
                data = WordChecker.addWord(data, classname);
            }

            $rootScope.$storage[storageKeyName] = angular.toJson(data);
        },

        // Remove a state from the browser storage
        removeState: function(classname) {
            var data = $rootScope.$storage[storageKeyName];
            // nothing to remove
            if (!data) return;

            data = WordChecker.removeWord(data, classname);

            $rootScope.$storage[storageKeyName] = angular.toJson(data);
        },

        // Load the state string and restore the classlist
        restoreState: function($elem) {
            var data = angular.fromJson($rootScope.$storage[storageKeyName]);

            // nothing to restore
            if (!data) return;
            $elem.addClass(data);
        }

    };

}]);

'use strict';

(function($, window, doc) {

    var $html = $('html'),
        $win = $(window);

    $.support.transition = (function() {

        var transitionEnd = (function() {

            var element = doc.body || doc.documentElement,
                transEndEventNames = {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd otransitionend',
                    transition: 'transitionend'
                },
                name;

            for (name in transEndEventNames) {
                if (element.style[name] !== undefined) return transEndEventNames[name];
            }
        }());

        return transitionEnd && {
            end: transitionEnd
        };
    })();

    $.support.animation = (function() {

        var animationEnd = (function() {

            var element = doc.body || doc.documentElement,
                animEndEventNames = {
                    WebkitAnimation: 'webkitAnimationEnd',
                    MozAnimation: 'animationend',
                    OAnimation: 'oAnimationEnd oanimationend',
                    animation: 'animationend'
                },
                name;

            for (name in animEndEventNames) {
                if (element.style[name] !== undefined) return animEndEventNames[name];
            }
        }());

        return animationEnd && {
            end: animationEnd
        };
    })();

    $.support.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
    $.support.touch = (
        ('ontouchstart' in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
        (window.DocumentTouch && document instanceof window.DocumentTouch) ||
        (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) || //IE 10
        (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0) || //IE >=11
        false
    );
    $.support.mutationobserver = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null);

    $.Utils = {};


    $.Utils.showSpinner = function() {
        $('.content-wrapper').addClass('whirl').addClass('traditional');
    };

    $.Utils.hideSpinner = function() {
        $('.content-wrapper').removeClass('whirl').removeClass('traditional');
    };

    $.Utils.debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    $.Utils.removeCssRules = function(selectorRegEx) {
        var idx, idxs, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref;

        if (!selectorRegEx) return;

        setTimeout(function() {
            try {
                _ref = document.styleSheets;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    stylesheet = _ref[_i];
                    idxs = [];
                    stylesheet.cssRules = stylesheet.cssRules;
                    for (idx = _j = 0, _len1 = stylesheet.cssRules.length; _j < _len1; idx = ++_j) {
                        if (stylesheet.cssRules[idx].type === CSSRule.STYLE_RULE && selectorRegEx.test(stylesheet.cssRules[idx].selectorText)) {
                            idxs.unshift(idx);
                        }
                    }
                    for (_k = 0, _len2 = idxs.length; _k < _len2; _k++) {
                        stylesheet.deleteRule(idxs[_k]);
                    }
                }
            } catch (_error) {}
        }, 0);
    };

    $.Utils.isInView = function(element, options) {

        var $element = $(element);

        if (!$element.is(':visible')) {
            return false;
        }

        var window_left = $win.scrollLeft(),
            window_top = $win.scrollTop(),
            offset = $element.offset(),
            left = offset.left,
            top = offset.top;

        options = $.extend({
            topoffset: 0,
            leftoffset: 0
        }, options);

        if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() &&
            left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
            return true;
        } else {
            return false;
        }
    };

    $.Utils.options = function(string) {

        if ($.isPlainObject(string)) return string;

        var start = (string ? string.indexOf('{') : -1),
            options = {};

        if (start != -1) {
            try {
                options = (new Function('', 'var json = ' + string.substr(start) + '; return JSON.parse(JSON.stringify(json));'))();
            } catch (e) {}
        }

        return options;
    };

    $.Utils.events = {};
    $.Utils.events.click = $.support.touch ? 'tap' : 'click';


    $(function() {

        // Check for dom modifications
        if (!$.support.mutationobserver) return;

        // Install an observer for custom needs of dom changes
        var observer = new $.support.mutationobserver($.Utils.debounce(function(mutations) {
            $(doc).trigger('domready');
        }, 300));

        // pass in the target node, as well as the observer options
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

    });

    // add touch identifier class
    $html.addClass($.support.touch ? 'touch' : 'no-touch');

}(jQuery, window, document));
