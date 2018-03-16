var App = angular.module("weiboMarketing", ["ngAnimate", "ngStorage", "ngSanitize", "ngCookies", "ui.bootstrap", "ui.router", "ngResource", "xeditable", "toastr", "smart-table"]).config(["$compileProvider", function(t) {
	t.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/)
}]).run(["$rootScope", "$state", "$stateParams", "$window", "editableOptions", function(t, e, n, o, s) {
	s.theme = "bs3", t.$state = e, t.$stateParams = n, t.$storage = o.localStorage, t.app = {
		name: "微博营销助手",
		description: "获取新浪微博营销目标用户。多个条件筛选用户，批量推送评论，批量点赞，批量转发，批量收听。",
		viewAnimation: "ng-fadeInUp"
	}
}]);
App.config(["$stateProvider", "$urlRouterProvider", "$controllerProvider", "$compileProvider", "$filterProvider", "$provide", function(t, e, n, o, s, r) {
	"use strict";
	App.controller = n.register, App.directive = o.directive, App.filter = s.register, App.factory = r.factory, App.service = r.service, App.constant = r.constant, App.value = r.value, e.otherwise("/app/customers"), t.state("app", {
		url: "/app",
		"abstract": !0,
		templateUrl: "views/app.html",
		controller: "AppController"
	}).state("app.customers", {
		url: "/customers",
		title: "用户的微博列表",
		templateUrl: "views/customers.html"
	}).state("app.logs", {
		url: "/logs",
		title: "日志列表",
		templateUrl: "views/logs.html"
	}).state("app.tasks", {
		url: "/tasks",
		title: "任务列表",
		templateUrl: "views/tasks.html"
	}).state("app.settings", {
		url: "/settings",
		title: "设置",
		templateUrl: "views/settings.html"
	}).state("app.accounts", {
		url: "/accounts",
		title: "我的微博账号列表",
		templateUrl: "views/accounts.html"
	})
}]).controller("NullController", function() {}), App.controller("AccountsController", ["$scope", "toastr", "$uibModal", function(t, e, n) {
	"use strict";
	t.accounts = [], $.Utils.showSpinner(), chrome.runtime.sendMessage({
		method: "getAccounts"
	}, function(e) {
		t.$apply(function() {
			$.Utils.hideSpinner(), t.accounts = e.accounts
		})
	}), t.checkName = function(e, n) {
		if (!e) return "用户名不能为空！";
		for (var o in t.accounts) {
			var s = t.accounts[o];
			if (s.id !== n && s.username === e) return "用户名已经存在！"
		}
	}, t.taskPaused = function(t, e, n) {
		chrome.runtime.sendMessage({
			method: "accountTaskPaused",
			id: n,
			type: t,
			isPaused: e
		}, function(t) {})
	}, t.taskCount = function(t, e, n) {
		chrome.runtime.sendMessage({
			method: "accountTaskCount",
			id: n,
			type: t,
			count: e
		}, function(t) {})
	}, t.checkPassword = function(t) {
		if (!t) return "密码不能为空！"
	}, t.saveAccount = function(n, o, s) {
		angular.extend(o, {
			id: s
		}), chrome.runtime.sendMessage({
			method: 0 === s ? "addAccount" : "updateAccount",
			account: o
		}, function(o) {
			t.$apply(function() {
				e.success("保存账号成功！");
				var s = t.accounts[n];
				s.id = o.accountId
			})
		})
	}, t.removeAccount = function(n, o) {
		chrome.runtime.sendMessage({
			method: "deleteAccount",
			id: o
		}, function(o) {
			t.$apply(function() {
				e.success("删除账号成功！"), t.accounts.splice(n, 1)
			})
		})
	}, t.addAccount = function() {
		t.inserted = {
			id: 0,
			username: "",
			password: "",
			status: ""
		}, t.accounts.push(t.inserted)
	}, document.getElementById("import-file").addEventListener("change", function(n) {
		var o = n.target.files[0];
		if (o) {
			var s = new FileReader;
			s.onload = function(n) {
				$.Utils.showSpinner();
				var o, s, r, a = n.target.result,
					i = a.split("\n"),
					c = [];
				for (var l in i) if (o = i[l].trim(), o.length > 0) {
					r = o.split(/\s+/), s = {
						id: 0,
						username: r[0],
						password: r[1],
						status: ""
					};
					var u = function(t) {
							return t.username === s.username
						};
					if (t.accounts.some(u)) continue;
					c.push(s)
				}
				chrome.runtime.sendMessage({
					method: "addAccounts",
					accounts: c
				}, function(n) {
					c = n.accounts;
					for (var o in c) t.accounts.push(c[o]);
					t.$apply(function() {
						e.success("导入" + c.length + "个账号！"), $.Utils.hideSpinner()
					})
				})
			}, s.readAsText(o), $(this).val("")
		}
	}), t.changePincode = function(t) {
		t.pincodeImageUrl = "http://login.sina.com.cn/cgi/pin.php?r=" + Date.now() + "&s=0&p=" + t.pcid
	}, t.loginAccount = function(n, o) {
		$.Utils.showSpinner(), chrome.runtime.sendMessage({
			method: "loginAccount",
			account: o
		}, function(s) {
			t.$apply(function() {
				$.Utils.hideSpinner();
				var r = s.pcid;
				return r ? (o.showPincode = !0, o.pcid = r, void t.changePincode(o)) : (o.showPincode = !1, o.pincode = "", "登录失败" === s.status ? e.error("登录失败，请检查账号是否正确！") : e.success("登录成功！"), t.accounts[n].status = s.status, t.accounts[n].userId = s.userId, void(t.accounts[n].screenName = s.screenName))
			})
		})
	}, t.showTaskLog = function(t) {
		n.open({
			templateUrl: "task-logs-modal.html",
			controller: "TaskLogsController",
			resolve: {
				account: function() {
					return t
				}
			}
		})
	}
}]), App.controller("TaskLogsController", ["$scope", "$uibModalInstance", "account", function(t, e, n) {
	t.taskLogs = [], t.account = n, $.Utils.showSpinner(), chrome.runtime.sendMessage({
		method: "getTaskLogs",
		userId: n.userId
	}, function(e) {
		t.$apply(function() {
			$.Utils.hideSpinner(), t.taskLogs = e.taskLogs
		})
	}), t.cancel = function() {
		e.dismiss("cancel")
	}
}]), App.controller("CustomersController", ["$scope", "toastr", "$uibModal", "$filter", "$state", function(t, e, n, o, s) {
	"use strict";
	t.allInCurrentPageSelected = !1, 
	t.allSelected = !1, 
	t.allCustomers = [], 
	t.customers = [], 
	t.count = 0, 
	t.$watch("allInCurrentPageSelected", function(e, n) {
		e === !1 && (t.allSelected = !1);
		for (var o in t.customers) t.customers[o].isSelected = e
	}), 
	t.selectAll = function() {
		t.allSelected = !0, $.Utils.showSpinner(), chrome.runtime.sendMessage({
			method: "getCustomers",
			start: 0,
			pageSize: t.count,
			searchConditions: t.searchConditions
		}, function(e) {
			t.allCustomers = e.list, $.Utils.hideSpinner()
		})
	}, 
	t.cancelSelectAll = function() {
		t.allSelected = !1
	}, 
	t.searchConditions = {
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
	}, $.Utils.showSpinner(), t.callServer = function(e) {
		var n = e.pagination,
			o = n.start || 0,
			s = n.number || 50;
		chrome.runtime.sendMessage({
			method: "getCustomers",
			start: o,
			pageSize: s,
			searchConditions: t.searchConditions
		}, function(n) {
			t.$apply(function() {
				t.customers = n.list;
				var o = n.count;
				t.count = o, e.pagination.numberOfPages = Math.ceil(o / s), $.Utils.hideSpinner()
			})
		})
	}, t.getGender = function(t) {
		return 1 === t ? "男" : 2 === t ? "女" : ""
	};
	var r = function() {
			var e = t.searchConditions;
			localStorage.keywords = e.keywords || "", localStorage.filters = e.filters || "", localStorage.statusesCountMin = e.statusesCountMin || "", localStorage.statusesCountMax = e.statusesCountMax || "", localStorage.commentsCountMin = e.commentsCountMin || "", localStorage.commentsCountMax = e.commentsCountMax || "", localStorage.repostsCountMin = e.repostsCountMin || "", localStorage.repostsCountMax = e.repostsCountMax || "", localStorage.attitudesCountMin = e.attitudesCountMin || "", localStorage.attitudesCountMax = e.attitudesCountMax || "", localStorage.followersCountMin = e.followersCountMin || "", localStorage.followersCountMax = e.followersCountMax || "", localStorage.friendsCountMin = e.friendsCountMin || "", localStorage.friendsCountMax = e.friendsCountMax || "", localStorage.gender = e.gender || ""
		},
		a = function(o, s, r) {
			var a;
			return isNaN(o) ? a = l() : (a = [], a.push(c(t.customers[o]))), 0 === a.length ? void e.error("请先选择用户！") : void n.open({
				templateUrl: s,
				controller: r,
				resolve: {
					items: function() {
						return a
					}
				}
			})
		};
	t.comment = function(t) {
		a(t, "comment-modal.html", "CommentModalController")
	}, t.forward = function(t) {
		a(t, "forward-modal.html", "ForwardModalController")
	};
	var i = function(t) {
			var e = document.createElement("DIV");
			return e.innerHTML = t, e.textContent || e.innerText || ""
		},
		c = function(t) {
			return {
				statusId: t.statusId,
				userId: t.userId,
				screenName: t.screenName,
				content: "",
				statusLink: t.statusLink,
				statusContent: i(t.content).replace(/#/g, "").replace(/(?:\bhttps?:\/\/|\bwww\.|\[url)\S+\s*/g, "").trim()
			}
		},
		l = function() {
			var e, n = [];
			if (t.allSelected) {
				e = t.allCustomers;
				for (var o in e) n.push(c(e[o]))
			} else {
				e = t.customers;
				for (var o in e) {
					var s = e[o];
					s.isSelected && n.push(c(s))
				}
			}
			return n
		},
		u = function() {
			var e, n = [];
			if (t.allSelected) {
				e = t.allCustomers;
				for (var o in e) n.push(e[o].id)
			} else {
				e = t.customers;
				for (var o in e) {
					var s = e[o];
					s.isSelected && n.push(s.id)
				}
			}
			return n
		};
	t.deleteCustomers = function(t) {
		var n = [];
		if (t) n.push(t);
		else if (n = u(), 0 == n.length) return void e.error("请先选择用户微博！");
		confirm("确定删除用户微博？") && ($.Utils.showSpinner(), chrome.runtime.sendMessage({
			method: "deleteCustomers",
			ids: n
		}, function(t) {
			$.Utils.hideSpinner(), e.success("删除用户微博成功！"), s.reload()
		}))
	}, t.resetSearch = function() {
		t.searchConditions = {}, r(), s.reload()
	}, t.search = function() {
		r(), s.reload()
	};
	var d = function(n, o, s) {
			var r = [];
			return isNaN(n) ? r = l() : r.push(c(t.customers[n])), 0 === r.length ? void e.error("请先选择用户！") : void chrome.runtime.sendMessage({
				method: "addTasks",
				type: o,
				list: r
			}, function(n) {
				t.$apply(function() {
					e.success(s)
				})
			})
		};
	t.praise = function(t) {
		d(t, "praise", "添加点赞任务成功，任务已经在任务列表中等待执行！")
	}, t.follow = function(t) {
		d(t, "follow", "添加收听任务成功，任务已经在任务列表中等待执行！")
	}, t.message = function(t) {
		a(t, "message-modal.html", "MessageModalController")
	}
}]);
var modalConfirm = function(t, e, n, o, s, r) {
		$.Utils.showSpinner(), chrome.runtime.sendMessage({
			method: "addTasks",
			type: n,
			list: o,
			content: t.useRandomContent ? "" : t.content,
			useRandomContent: t.useRandomContent
		}, function(n) {
			t.$apply(function() {
				e.close(), s.success(r), $.Utils.hideSpinner()
			})
		})
	};
App.controller("CommentModalController", ["$scope", "$uibModalInstance", "items", "toastr", function(t, e, n, o) {
	t.useRandomContent = !0, t.content = "", t.ok = function() {
		return "" !== t.content || t.useRandomContent ? void modalConfirm(t, e, "comment", n, o, "添加评论任务成功，任务已经在任务列表中等待执行！") : void o.error("如果不使用随机评论，那么评论内容必须填写！")
	}, t.cancel = function() {
		e.dismiss("cancel")
	}
}]), App.controller("ForwardModalController", ["$scope", "$uibModalInstance", "items", "toastr", function(t, e, n, o) {
	t.useRandomContent = !0, t.content = "", t.ok = function() {
		modalConfirm(t, e, "forward", n, o, "添加转发任务成功，任务已经在任务列表中等待执行！")
	}, t.cancel = function() {
		e.dismiss("cancel")
	}
}]), App.controller("MessageModalController", ["$scope", "$uibModalInstance", "items", "toastr", function(t, e, n, o) {
	t.content = "", t.ok = function() {
		return "" === t.content ? void o.error("私信内容必须填写！") : ($.Utils.showSpinner(), void chrome.runtime.sendMessage({
			method: "addTasks",
			type: "message",
			list: n,
			content: t.content
		}, function(n) {
			t.$apply(function() {
				e.close(), o.success("添加私信任务成功，任务已经在任务列表中等待执行！"), $.Utils.hideSpinner()
			})
		}))
	}, t.cancel = function() {
		e.dismiss("cancel")
	}
}]), App.controller("LogsController", ["$scope", "toastr", "$state", function(t, e, n) {
	"use strict";
	t.logs = [], $.Utils.showSpinner(), t.count = 0, t.callServer = function(e) {
		var n = e.pagination,
			o = n.start || 0,
			s = n.number || 50;
		chrome.runtime.sendMessage({
			method: "getLogs",
			start: o,
			pageSize: s
		}, function(n) {
			t.$apply(function() {
				t.logs = n.list;
				var o = n.count;
				t.count = o, e.pagination.numberOfPages = Math.ceil(o / s), $.Utils.hideSpinner()
			})
		})
	}, t.deleteLogs = function() {
		$.Utils.showSpinner(), chrome.runtime.sendMessage({
			method: "deleteLogs"
		}, function(t) {
			$.Utils.hideSpinner(), e.success("清空完成！"), n.reload()
		})
	}
}]), App.controller("AppController", ["$rootScope", "$scope", "$state", "$window", "$localStorage", "$timeout", "toggleStateService", function(t, e, n, o, s, r, a) {
	"use strict";
	t.$on("$stateNotFound", function(t, e, n, o) {
	}), t.$on("$stateChangeError", function(t, e, n, o, s, r) {
	}), t.$on("$stateChangeSuccess", function(e, s, r, a, i) {
		o.scrollTo(0, 0), t.currTitle = n.current.title
	}), t.currTitle = n.current.title, t.pageTitle = function() {
		return (t.currTitle || t.app.description) + " - " + t.app.name
	}, a.restoreState($(document.body)), r(function() {
		t.mainViewAnimation = t.app.viewAnimation
	}), t.cancel = function(t) {
		t.stopPropagation()
	}
}]), App.controller("NavigationController", ["$rootScope", "$scope", "$state", function(t, e, n) {
	"use strict";
	e.menuItems = [{
		text: "用户的微博列表",
		sref: "app.customers"
	}, {
		text: "任务列表",
		sref: "app.tasks"
	}, {
		text: "我的微博账号列表",
		sref: "app.accounts"
	}];
	var o = function(t) {
			return n.is(t.sref) || n.includes(t.sref)
		};
	e.getMenuItemPropClasses = function(t) {
		return o(t) ? " active" : ""
	}
}]), App.controller("SettingsController", ["$scope", "toastr", function(t, e) {
	"use strict";
	t.settings = {
		praiseIntervalTime: localStorage.praiseIntervalTime || 30,
		commentIntervalTime: localStorage.commentIntervalTime || 30,
		followIntervalTime: localStorage.followIntervalTime || 30,
		forwardIntervalTime: localStorage.forwardIntervalTime || 30,
		messageIntervalTime: localStorage.messageIntervalTime || 30,
		randomContents: localStorage.randomContents || "嗯，有道理～\n有空再看\n转发微博\n你很啰嗦啊。\n已阅。"
	}, t.update = function(t) {
		localStorage.praiseIntervalTime = t.praiseIntervalTime, localStorage.commentIntervalTime = t.commentIntervalTime, localStorage.followIntervalTime = t.followIntervalTime, localStorage.forwardIntervalTime = t.forwardIntervalTime, localStorage.messageIntervalTime = t.messageIntervalTime, localStorage.randomContents = t.randomContents, chrome.runtime.sendMessage({
			method: "restartTasks"
		}, function(t) {
			e.success("保存设置成功！")
		})
	}
}]), App.controller("TasksController", ["$scope", "toastr", "$state", function(t, e, n) {
	"use strict";
	t.allInCurrentPageSelected = !1, t.allSelected = !1, t.allTasks = [], t.tasks = [], t.count = 0, t.$watch("allInCurrentPageSelected", function(e, n) {
		0 == e && (t.allSelected = !1);
		for (var o in t.tasks) t.tasks[o].isSelected = e
	}), t.getTypeText = function(t) {
		var e = "";
		switch (t) {
		case "follow":
			e = "收听";
			break;
		case "forward":
			e = "转发";
			break;
		case "message":
			e = "私信";
			break;
		case "comment":
			e = "评论";
			break;
		case "praise":
			e = "点赞"
		}
		return e
	}, t.selectAll = function() {
		t.allSelected = !0, $.Utils.showSpinner(), chrome.runtime.sendMessage({
			method: "getTasks",
			start: 0,
			pageSize: t.count,
			searchConditions: t.searchConditions
		}, function(e) {
			t.allTasks = e.list, $.Utils.hideSpinner()
		})
	}, t.cancelSelectAll = function() {
		t.allSelected = !1
	}, t.getStatusCss = function(t) {
		switch (t) {
		case "等待执行":
			return "label label-warning";
		case "已完成":
			return "label label-success"
		}
		return "label label-danger"
	}, $.Utils.showSpinner(), t.callServer = function(e) {
		var n = e.pagination,
			o = n.start || 0,
			s = n.number || 50;
		chrome.runtime.sendMessage({
			method: "getTasks",
			start: o,
			pageSize: s,
			searchConditions: t.searchConditions
		}, function(n) {
			t.$apply(function() {
				t.tasks = n.list;
				var o = n.count;
				t.count = o, e.pagination.numberOfPages = Math.ceil(o / s), $.Utils.hideSpinner()
			})
		})
	};
	var o = function() {
			var e, n = [];
			if (t.allSelected) {
				e = t.allTasks;
				for (var o in e) n.push(e[o].id)
			} else {
				e = t.tasks;
				for (var o in e) {
					var s = e[o];
					s.isSelected && n.push(s.id)
				}
			}
			return n
		};
	t.searchConditions = {
		taskStatus: localStorage.taskStatus,
		taskType: localStorage.taskType
	};
	var s = function() {
			var e = t.searchConditions;
			localStorage.taskStatus = e.taskStatus || "", localStorage.taskType = e.taskType || ""
		};
	t.search = function() {
		s(), n.reload()
	}, t.deleteTasks = function() {
		var t = o();
		return 0 === t.length ? void e.error("请先选择任务！") : void(confirm("确定删除所选任务？") && ($.Utils.showSpinner(), chrome.runtime.sendMessage({
			method: "deleteTasks",
			ids: t
		}, function(t) {
			$.Utils.hideSpinner(), e.success("删除任务成功！"), n.reload()
		})))
	}
}]), App.directive("stringToNumber", function() {
	"use strict";
	return {
		require: "ngModel",
		link: function(t, e, n, o) {
			o.$parsers.push(function(t) {
				return "" + t
			}), o.$formatters.push(function(t) {
				return parseFloat(t, 10)
			})
		}
	}
}), App.directive("toggleState", ["toggleStateService", function(t) {
	"use strict";
	return {
		restrict: "A",
		link: function(e, n, o) {
			var s = $("body");
			$(n).on("click", function(e) {
				e.preventDefault();
				var n = o.toggleState;
				n && (s.hasClass(n) ? (s.removeClass(n), o.noPersist || t.removeState(n)) : (s.addClass(n), o.noPersist || t.addState(n)))
			})
		}
	}
}]), App.service("toggleStateService", ["$rootScope", function(t) {
	"use strict";
	var e = "toggleState",
		n = {
			hasWord: function(t, e) {
				return new RegExp("(^|\\s)" + e + "(\\s|$)").test(t)
			},
			addWord: function(t, e) {
				if (!this.hasWord(t, e)) return t + (t ? " " : "") + e
			},
			removeWord: function(t, e) {
				if (this.hasWord(t, e)) return t.replace(new RegExp("(^|\\s)*" + e + "(\\s|$)*", "g"), "")
			}
		};
	return {
		addState: function(o) {
			var s = angular.fromJson(t.$storage[e]);
			s = s ? n.addWord(s, o) : o, t.$storage[e] = angular.toJson(s)
		},
		removeState: function(o) {
			var s = t.$storage[e];
			s && (s = n.removeWord(s, o), t.$storage[e] = angular.toJson(s))
		},
		restoreState: function(n) {
			var o = angular.fromJson(t.$storage[e]);
			o && n.addClass(o)
		}
	}
}]), function(t, e, n) {
	"use strict";
	var o = t("html"),
		s = t(e);
	t.support.transition = function() {
		var t = function() {
				var t, e = n.body || n.documentElement,
					o = {
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "oTransitionEnd otransitionend",
						transition: "transitionend"
					};
				for (t in o) if (void 0 !== e.style[t]) return o[t]
			}();
		return t && {
			end: t
		}
	}(), t.support.animation = function() {
		var t = function() {
				var t, e = n.body || n.documentElement,
					o = {
						WebkitAnimation: "webkitAnimationEnd",
						MozAnimation: "animationend",
						OAnimation: "oAnimationEnd oanimationend",
						animation: "animationend"
					};
				for (t in o) if (void 0 !== e.style[t]) return o[t]
			}();
		return t && {
			end: t
		}
	}(), t.support.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || e.oRequestAnimationFrame ||
	function(t) {
		e.setTimeout(t, 1e3 / 60)
	}, t.support.touch = "ontouchstart" in e && navigator.userAgent.toLowerCase().match(/mobile|tablet/) || e.DocumentTouch && document instanceof e.DocumentTouch || e.navigator.msPointerEnabled && e.navigator.msMaxTouchPoints > 0 || e.navigator.pointerEnabled && e.navigator.maxTouchPoints > 0 || !1, t.support.mutationobserver = e.MutationObserver || e.WebKitMutationObserver || e.MozMutationObserver || null, t.Utils = {}, t.Utils.showSpinner = function() {
		t(".content-wrapper").addClass("whirl").addClass("traditional")
	}, t.Utils.hideSpinner = function() {
		t(".content-wrapper").removeClass("whirl").removeClass("traditional")
	}, t.Utils.debounce = function(t, e, n) {
		var o;
		return function() {
			var s = this,
				r = arguments,
				a = function() {
					o = null, n || t.apply(s, r)
				},
				i = n && !o;
			clearTimeout(o), o = setTimeout(a, e), i && t.apply(s, r)
		}
	}, t.Utils.removeCssRules = function(t) {
		var e, n, o, s, r, a, i, c, l, u;
		t && setTimeout(function() {
			try {
				for (u = document.styleSheets, s = 0, i = u.length; s < i; s++) {
					for (o = u[s], n = [], o.cssRules = o.cssRules, e = r = 0, c = o.cssRules.length; r < c; e = ++r) o.cssRules[e].type === CSSRule.STYLE_RULE && t.test(o.cssRules[e].selectorText) && n.unshift(e);
					for (a = 0, l = n.length; a < l; a++) o.deleteRule(n[a])
				}
			} catch (d) {}
		}, 0)
	}, t.Utils.isInView = function(e, n) {
		var o = t(e);
		if (!o.is(":visible")) return !1;
		var r = s.scrollLeft(),
			a = s.scrollTop(),
			i = o.offset(),
			c = i.left,
			l = i.top;
		return n = t.extend({
			topoffset: 0,
			leftoffset: 0
		}, n), l + o.height() >= a && l - n.topoffset <= a + s.height() && c + o.width() >= r && c - n.leftoffset <= r + s.width()
	}, t.Utils.options = function(e) {
		if (t.isPlainObject(e)) return e;
		var n = e ? e.indexOf("{") : -1,
			o = {};
		if (n != -1) try {
			o = new Function("", "var json = " + e.substr(n) + "; return JSON.parse(JSON.stringify(json));")()
		} catch (s) {}
		return o
	}, t.Utils.events = {}, t.Utils.events.click = t.support.touch ? "tap" : "click", t(function() {
		if (t.support.mutationobserver) {
			var e = new t.support.mutationobserver(t.Utils.debounce(function(e) {
				t(n).trigger("domready")
			}, 300));
			e.observe(document.body, {
				childList: !0,
				subtree: !0
			})
		}
	}), o.addClass(t.support.touch ? "touch" : "no-touch")
}(jQuery, window, document);