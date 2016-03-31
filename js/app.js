webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var browser_1 = __webpack_require__(48);
	var http_1 = __webpack_require__(17);
	var App1_1 = __webpack_require__(663);
	var App2_1 = __webpack_require__(670);
	var App3_1 = __webpack_require__(683);
	var App6_1 = __webpack_require__(700);
	var App7_1 = __webpack_require__(735);
	var Help_1 = __webpack_require__(660);
	var core_1 = __webpack_require__(1);
	var EntryPanel_1 = __webpack_require__(772);
	var AppManager_1 = __webpack_require__(770);
	var CommBroker_1 = __webpack_require__(7);
	var Filemenu_1 = __webpack_require__(325);
	var FilemenuItem_1 = __webpack_require__(775);
	var Logo_1 = __webpack_require__(776);
	var RefreshTheme_1 = __webpack_require__(28);
	var Conts_1 = __webpack_require__(11);
	var StyleService_1 = __webpack_require__(139);
	var router_1 = __webpack_require__(14);
	var router_2 = __webpack_require__(14);
	var Observable_1 = __webpack_require__(3);
	__webpack_require__(29);
	__webpack_require__(45);
	__webpack_require__(44);
	var Welcome = (function () {
	    function Welcome(params) {
	        this.someId = 'App1' + Math.random();
	    }
	    Welcome = __decorate([
	        core_1.Component({
	            styles: ["\n        #routerLinks {\n            padding: 20px;\n        }\n    "],
	            template: "\n                <div id=\"routerLinks\">\n                    <h4>Direct router shortcut links:</h4>\n                    <!--\n                    <a [routerLink]=\"['/Login', 'Login']\">To Login screen</a><br/>\n                    <a [routerLink]=\"['/Login', {id: 'lion.demo'}, 'Login']\">To Login screen with demo user args</a><br/>\n                    <a [routerLink]=\"['/ForgotPass', 'ForgotPass']\">To Forgot Password screen</a><br/>\n                    <a [routerLink]=\"['/AppManager']\">To App manager</a><br/>\n                    <a [routerLink]=\"['/App1']\">To App1</a><br/>\n                    <a [routerLink]=\"['/App2']\">To App2</a><br/>\n                    <a [routerLink]=\"['/App3']\">To App3</a><br/>\n                    -->\n                    <hr/>\n                    <a [routerLink]=\"['/App6']\">Scanner Test</a><br/>\n                    <hr/>\n                    <a [routerLink]=\"['/App7']\">SQLite Test</a><br/>\n                    <hr/>\n                    <a [routerLink]=\"['/Help']\">I need help</a><br/>\n                    <hr/>\n                    <!--\n                    <br/><small>I am Welcome component</small>\n                    -->\n                </div>\n                ",
	            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink]
	        }), 
	        __metadata('design:paramtypes', [router_2.RouteParams])
	    ], Welcome);
	    return Welcome;
	})();
	exports.Welcome = Welcome;
	var App = (function (_super) {
	    __extends(App, _super);
	    function App(commBroker, styleService) {
	        var _this = this;
	        _super.call(this);
	        this.m_styleService = styleService;
	        this.m_commBroker = commBroker;
	        this.m_commBroker.setService(Conts_1.Consts.Services().App, this);
	        Observable_1.Observable.fromEvent(window, 'resize').debounceTime(250).subscribe(function () {
	            _this.appResized();
	        });
	    }
	    App.prototype.ngAfterContentInit = function () {
	        this.appResized();
	    };
	    App.prototype.appResized = function () {
	        var appHeight = document.body.clientHeight;
	        var appWidth = document.body.clientWidth;
	        jQuery(Conts_1.Consts.Elems().APP_NAVIGATOR_EVER).height(appHeight - 115);
	        jQuery(Conts_1.Consts.Elems().APP_NAVIGATOR_WASP).height(appHeight - 115);
	        jQuery(Conts_1.Consts.Clas().CLASS_APP_HEIGHT).height(appHeight - 220);
	        jQuery('#mainPanelWrap').height(appHeight - 115);
	        jQuery('#propPanel').height(appHeight - 130);
	        this.m_commBroker.setValue(Conts_1.Consts.Values().APP_SIZE, { height: appHeight, width: appWidth });
	        this.m_commBroker.fire({
	            fromInstance: self,
	            event: Conts_1.Consts.Events().WIN_SIZED,
	            context: '',
	            message: { height: appHeight, width: appWidth }
	        });
	    };
	    App = __decorate([
	        core_1.Component({
	            encapsulation: core_1.ViewEncapsulation.Emulated,
	            providers: [StyleService_1.StyleService],
	            selector: 'app',
	            template: __webpack_require__(444),
	            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink, Filemenu_1.Filemenu, FilemenuItem_1.FilemenuItem, Logo_1.Logo]
	        }),
	        router_2.RouteConfig([
	            { path: '/AppManager', component: AppManager_1.AppManager, as: 'AppManager', useAsDefault: true },
	            { path: '/Welcome', component: Welcome, as: 'Welcome' },
	            { path: '/EntryPanelNoId/...', component: EntryPanel_1.EntryPanel, as: 'EntryPanelNoId' },
	            { path: '/EntryPanel/:id/...', component: EntryPanel_1.EntryPanel, as: 'EntryPanel' },
	            { path: '/Login/...', component: EntryPanel_1.EntryPanel, as: 'Login' },
	            { path: '/ForgotPass/...', component: EntryPanel_1.EntryPanel, as: 'ForgotPass' },
	            { path: '/App1', component: App1_1.App1, as: 'App1' },
	            { path: '/App2', component: App2_1.App2, as: 'App2' },
	            { path: '/App3', component: App3_1.App3, as: 'App3' },
	            { path: '/App6', component: App6_1.App6, as: 'App6' },
	            { path: '/App7', component: App7_1.App7, as: 'App7' },
	            { path: '/Help', component: Help_1.Help, as: 'Help' },
	        ]), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker, StyleService_1.StyleService])
	    ], App);
	    return App;
	})(RefreshTheme_1.RefreshTheme);
	exports.App = App;
	var startUp = function () {
	    var waitForStartup = 1;
	    logmsg("var startUp = function() { ... ");
	    logmsg("starting up in " + waitForStartup + " seconds...");
	    setTimeout(function () {
	        document.getElementById('loading').style.display = "none";
	        browser_1.bootstrap(App, [
	            router_1.ROUTER_PROVIDERS,
	            http_1.HTTP_PROVIDERS,
	            core_1.provide(CommBroker_1.CommBroker, { useClass: CommBroker_1.CommBroker }),
	            core_1.provide(Conts_1.Consts, { useClass: Conts_1.Consts }),
	            core_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy }),
	            core_1.provide(Window, { useValue: window })
	        ]).catch(function (err) {
	            logmsg("error 2176get76i9w7384rz3e");
	            logmsg(JSON.stringify(err));
	        });
	    }, waitForStartup);
	};
	var prepopulateDatabase = function () {
	    logmsg("var prepopulateDatabase = function() { ... ");
	    try {
	        function copysuccess(result) {
	            logerr(result);
	            startUp();
	        }
	        function copyerror(result) {
	            logerr(result);
	            startUp();
	        }
	        window.plugins.sqlDB.copy("onion.db", 0, copysuccess, copyerror);
	        if (false) {
	            var fileId = "onion.db";
	            window.resolveLocalFileSystemURL(window.LocalFileSystem.PERSISTENT, function (directoryEntry) {
	                logmsg("directoryEntry");
	                logerr(directoryEntry);
	                directoryEntry.getFile(fileId, { create: false, exclusive: false }, function (fileEntry) {
	                    logmsg("fileEntry");
	                    logmsg(JSON.stringify(fileEntry));
	                    var target_directory = window.cordova.file.externalDataDirectory;
	                    window.resolveLocalFileSystemURL(target_directory, function onSuccess(dirEntry) {
	                        fileEntry.copyTo(dirEntry, 'targetfile.txt', function () {
	                            logmsg('copying was successful');
	                        }, function () {
	                            logmsg('unsuccessful copying');
	                        });
	                    }, function (errormsg) {
	                        logmsg(errormsg);
	                    });
	                }, logerr);
	            }, logerr);
	        }
	    }
	    catch (err) {
	        logmsg("Error 2222rdhig98reugj");
	        logmsg(err);
	    }
	};
	var logmsg = function (msg) {
	    console.log(msg);
	    document.getElementById('debugging').innerHTML += "<br/>" + msg;
	    var objDiv = document.getElementById("debugging");
	    objDiv.scrollTop = 99999;
	};
	var logerr = function (err) {
	    try {
	        var msg = JSON.stringify(err);
	    }
	    catch (isnoobjecterr) {
	        var msg = err;
	    }
	    finally {
	        console.log(msg);
	        document.getElementById('debugging').innerHTML += "<br/>" + JSON.stringify(err);
	        var objDiv = document.getElementById("debugging");
	        objDiv.scrollTop = 99999;
	    }
	};
	var gotFS = function (fileSystem) {
	    var vm = this;
	    logmsg("got filesystem");
	    if (window.cordova == undefined)
	        window.cordova = {};
	    if (window.cordova.file == undefined)
	        window.cordova.file = {};
	    var row = 0;
	    logmsg('JSON.stringify(fileSystem)');
	    logmsg(JSON.stringify(fileSystem));
	    window.rootFS = fileSystem.root;
	    logmsg("JSON.stringify(window.cordova.file)");
	    logmsg(JSON.stringify(window.cordova.file));
	    if (StatusBar) {
	        logmsg("CORDOVA PLUGIN DETECTED: StatusBar");
	        console.log(StatusBar);
	        StatusBar.overlaysWebView(false);
	        StatusBar.styleBlackTranslucent();
	        StatusBar.hide();
	    }
	    else {
	        logmsg("CORDOVA PLUGIN MISSING: StatusBar");
	    }
	    setTimeout(function () {
	        prepopulateDatabase();
	    }, 1);
	};
	var fail = function () {
	    logmsg("FATAL ERROR: could not get filesystem");
	    alert("FATAL ERROR: could not get filesystem");
	};
	var onDeviceReady = function (mobileStartup) {
	    if (mobileStartup != false)
	        var mobileStartup = true;
	    logmsg("mobileStartup: " + mobileStartup);
	    if (mobileStartup == true) {
	        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
	        if (window.LocalFileSystem == undefined)
	            window.LocalFileSystem = {};
	        window.requestFileSystem(window.LocalFileSystem.PERSISTENT, 0, gotFS, fail);
	    }
	    else {
	        logmsg("startup a desktop pc");
	        startUp();
	    }
	};
	var onDevicePause = function () {
	};
	var onDeviceResume = function () {
	};
	var onDeviceMenuButton = function () {
	};
	document.getElementById('loading').style.display = "block";
	if (window.cordova !== undefined) {
	    document.addEventListener('deviceready', onDeviceReady, false);
	}
	else {
	    onDeviceReady(false);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	__webpack_require__(45);
	__webpack_require__(21);
	__webpack_require__(184);
	__webpack_require__(83);
	var Subject_1 = __webpack_require__(19);
	var CommBroker = (function () {
	    function CommBroker() {
	        this.randomName = Math.random();
	        var self = this;
	        self.services = [];
	        self.streamMessages = new Subject_1.Subject();
	        self.streamMessages.share();
	        document['commBroker'] = this;
	    }
	    CommBroker.prototype.toString = function () {
	        return 'CommBroker ' + this.randomName;
	    };
	    CommBroker.prototype.fire = function (iMessage) {
	        var self = this;
	        self.streamMessages.next(iMessage);
	    };
	    CommBroker.prototype.onEvent = function (event) {
	        var self = this;
	        return self.streamMessages.filter(function (e) {
	            return e.event == event;
	        });
	    };
	    CommBroker.prototype.onInstance = function (instance) {
	        var self = this;
	        return self.streamMessages.filter(function (e) {
	            return e.fromInstance == instance;
	        });
	    };
	    CommBroker.prototype.onInstanceAndEvent = function (instance, event) {
	        var self = this;
	        return self.streamMessages.filter(function (e) {
	            return e.fromInstance == instance && e.event == event;
	        });
	    };
	    CommBroker.prototype.setService = function (i_name, i_service) {
	        this.services[i_name] = i_service;
	    };
	    CommBroker.prototype.getService = function (i_name) {
	        if (i_name == undefined) {
	            return undefined;
	        }
	        if (this.services[i_name]) {
	            return this.services[i_name];
	        }
	        else {
	            return undefined;
	        }
	    };
	    CommBroker.prototype.getAllServices = function () {
	        return this.services;
	    };
	    CommBroker.prototype.clearServices = function () {
	        var self = this;
	        self.services = undefined;
	    };
	    CommBroker.prototype.setValue = function (i_name, i_value, i_fireEvent) {
	        var self = this;
	        this.services[i_name] = i_value;
	        if (i_fireEvent) {
	            var msg = {
	                fromInstance: self,
	                event: i_fireEvent,
	                context: null,
	                message: { name: i_name, value: i_value }
	            };
	            self.fire(msg);
	        }
	    };
	    CommBroker.prototype.getValue = function (i_name) {
	        if (this.services[i_name]) {
	            return this.services[i_name];
	        }
	        else {
	            return undefined;
	        }
	    };
	    CommBroker = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], CommBroker);
	    return CommBroker;
	})();
	exports.CommBroker = CommBroker;


/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	var Consts = (function () {
	    function Consts() {
	    }
	    Consts.Elems = function () {
	        return {
	            COMMON_FILE_MENU: '#commonFileMenu',
	            FILE_NAV_EVER: '#fileNavEver',
	            APP_NAVIGATOR_WASP: '#appNavigatorWasp',
	            APP_NAVIGATOR_EVER: '#appNavigatorEver',
	            TOGGLE_PANEL: '#togglePanel',
	            PROP_PANEL_WRAP: '#propPanelWrap',
	            MAIN_PANEL_WRAP: '#mainPanelWrap'
	        };
	    };
	    Consts.Clas = function () {
	        return {
	            CLASS_APP_HEIGHT: '.appHeight'
	        };
	    };
	    Consts.Events = function () {
	        return {
	            WIN_SIZED: 'winSized',
	            MENU_SELECTION: 'menuSelection'
	        };
	    };
	    Consts.Values = function () {
	        if (window.cordova !== undefined) {
	            var _BASE_LOADPATH = window.emitloadpath;
	        }
	        else {
	            var _BASE_LOADPATH = window.emitloadpath;
	        }
	        return {
	            MENU_MIN_ICON_SHOW: 1550,
	            APP_SIZE: 'AppSize',
	            USER_NAME: 'userName',
	            USER_PASS: 'userPass'
	        };
	    };
	    Consts.Services = function () {
	        return {
	            App: 'Application',
	            Properties: 'Properties',
	            StyleService: 'StyleService',
	            PouchDB: window.PouchDB
	        };
	    };
	    Consts.W = function () {
	        return {
	            App: 'Application',
	            Properties: 'Properties',
	            StyleService: 'StyleService'
	        };
	    };
	    return Consts;
	})();
	exports.Consts = Consts;


/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var browser_1 = __webpack_require__(48);
	var Sliderpanel = (function () {
	    function Sliderpanel(viewContainer) {
	        this.dom = new browser_1.BrowserDomAdapter();
	        var self = this;
	        self.viewContainer = viewContainer;
	        self.el = viewContainer.element.nativeElement;
	    }
	    Sliderpanel.prototype.getElementByClass = function (element) {
	        var self = this;
	        return self.dom.getElementsByClassName(self.el, element)[0];
	    };
	    Sliderpanel.prototype.removeAllClassesFrom = function (elementClass, selected) {
	        var self = this;
	        var element = self.getElementByClass(elementClass);
	        if (selected) {
	            self.dom.removeClass(element, 'selected');
	            return;
	        }
	        self.dom.removeClass(element, 'left');
	        self.dom.removeClass(element, 'right');
	        self.dom.removeClass(element, 'center');
	        self.dom.removeClass(element, 'transition');
	    };
	    Sliderpanel.prototype.addClassesTo = function (elementClass, classesToAdd) {
	        var self = this;
	        var element = self.getElementByClass(elementClass);
	        for (var i = 0; i < classesToAdd.length; i++) {
	            self.dom.addClass(element, classesToAdd[i]);
	        }
	    };
	    Sliderpanel.prototype.slideToPage = function (toClassName, i_direction) {
	        var self = this;
	        if (toClassName == 'selected')
	            return;
	        self.removeAllClassesFrom(toClassName);
	        self.addClassesTo(toClassName, ["page", i_direction]);
	        var parent = self.dom.parentElement(self.getElementByClass(toClassName));
	        var grandparent = self.dom.parentElement(parent);
	        self.dom.getProperty(grandparent, 'offsetWidth');
	        self.removeAllClassesFrom(toClassName);
	        self.addClassesTo(toClassName, ['page', 'transition', 'center']);
	        self.removeAllClassesFrom('selected');
	        self.addClassesTo('selected', ['page', 'transition', i_direction === 'left' ? 'right' : 'left']);
	        self.removeAllClassesFrom('selected', true);
	        self.addClassesTo(toClassName, ['selected']);
	    };
	    Sliderpanel = __decorate([
	        core_1.Component({
	            selector: 'Sliderpanel',
	            template: "<ng-content></ng-content>"
	        }), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef])
	    ], Sliderpanel);
	    return Sliderpanel;
	})();
	exports.Sliderpanel = Sliderpanel;


/***/ },
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var app_store_1 = __webpack_require__(330);
	exports.AppStore = app_store_1.AppStore;
	var actions_1 = __webpack_require__(329);
	exports.Actions = actions_1.Actions;
	var logger_1 = __webpack_require__(331);
	exports.LoggerMiddleware = logger_1.LoggerMiddleware;
	//# sourceMappingURL=index.js.map

/***/ },
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var Conts_1 = __webpack_require__(11);
	var RefreshTheme = (function () {
	    function RefreshTheme() {
	        setTimeout(function (e) {
	            if (document['commBroker']) {
	                document['commBroker'].getService(Conts_1.Consts.Services().StyleService).refreshTheme();
	            }
	        }, 50);
	    }
	    return RefreshTheme;
	})();
	exports.RefreshTheme = RefreshTheme;


/***/ },
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.defaultMemoize = defaultMemoize;
	exports.createSelectorCreator = createSelectorCreator;
	exports.createSelector = createSelector;
	exports.createStructuredSelector = createStructuredSelector;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	function defaultEqualityCheck(a, b) {
	  return a === b;
	}
	
	function defaultMemoize(func) {
	  var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];
	
	  var lastArgs = null;
	  var lastResult = null;
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    if (lastArgs !== null && lastArgs.length === args.length && args.every(function (value, index) {
	      return equalityCheck(value, lastArgs[index]);
	    })) {
	      return lastResult;
	    }
	    lastArgs = args;
	    lastResult = func.apply(undefined, args);
	    return lastResult;
	  };
	}
	
	function getDependencies(funcs) {
	  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
	
	  if (!dependencies.every(function (dep) {
	    return typeof dep === 'function';
	  })) {
	    var dependencyTypes = dependencies.map(function (dep) {
	      return typeof dep;
	    }).join(', ');
	    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
	  }
	
	  return dependencies;
	}
	
	function createSelectorCreator(memoize) {
	  for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    memoizeOptions[_key2 - 1] = arguments[_key2];
	  }
	
	  return function () {
	    for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      funcs[_key3] = arguments[_key3];
	    }
	
	    var recomputations = 0;
	    var resultFunc = funcs.pop();
	    var dependencies = getDependencies(funcs);
	
	    var memoizedResultFunc = memoize.apply(undefined, [function () {
	      recomputations++;
	      return resultFunc.apply(undefined, arguments);
	    }].concat(memoizeOptions));
	
	    var selector = function selector(state, props) {
	      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	        args[_key4 - 2] = arguments[_key4];
	      }
	
	      var params = dependencies.map(function (dependency) {
	        return dependency.apply(undefined, [state, props].concat(args));
	      });
	      return memoizedResultFunc.apply(undefined, _toConsumableArray(params));
	    };
	
	    selector.recomputations = function () {
	      return recomputations;
	    };
	    return selector;
	  };
	}
	
	function createSelector() {
	  return createSelectorCreator(defaultMemoize).apply(undefined, arguments);
	}
	
	function createStructuredSelector(selectors) {
	  var selectorCreator = arguments.length <= 1 || arguments[1] === undefined ? createSelector : arguments[1];
	
	  if (typeof selectors !== 'object') {
	    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
	  }
	  var objectKeys = Object.keys(selectors);
	  return selectorCreator(objectKeys.map(function (key) {
	    return selectors[key];
	  }), function () {
	    for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	      values[_key5] = arguments[_key5];
	    }
	
	    return values.reduce(function (composition, value, index) {
	      composition[objectKeys[index]] = value;
	      return composition;
	    }, {});
	  });
	}

/***/ },
/* 34 */,
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var browser_1 = __webpack_require__(48);
	var ModalDialog = (function () {
	    function ModalDialog(viewContainer) {
	        this.dom = new browser_1.BrowserDomAdapter();
	        this.viewContainer = viewContainer;
	        this.el = this.viewContainer.element.nativeElement;
	    }
	    ModalDialog.prototype.ngAfterViewInit = function () {
	        this.owner.registerCaller(this);
	    };
	    ModalDialog.prototype.openModal = function () {
	        var modal = this.dom.getElementsByClassName(this.el, 'modal')[0];
	        jQuery(modal).modal();
	    };
	    ModalDialog = __decorate([
	        core_1.Component({
	            selector: 'ModalDialog',
	            inputs: ['title:title', 'content:content', 'owner:owner'],
	            styles: ["\n            .modal-dialog {\n                width: 95%;\n                height: 95%;\n                padding: 0;\n            }\n\n            .modal-content {\n                height: 95%;\n                border-radius: 0;\n            }\n    "],
	            encapsulation: core_1.ViewEncapsulation.Emulated,
	            template: "\n         <div class=\"modal modal-static fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n             aria-hidden=\"true\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button id=\"toggleProperties\" type=\"button\" class=\"close\" data-dismiss=\"modal\"\n                                aria-hidden=\"true\">&times;</button>\n                        <h4 class=\"modal-title\" id=\"myModalLabel\" data-localize=\"ModalTitle\">{{title}}</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        {{content}}\n                        <small>I am ModalDialog component</small>\n                        <ng-content></ng-content>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" data-localize=\"close\">Close</button>\n                        <button type=\"button\" class=\"btn btn-primary\" data-localize=\"saveChanges\">Save changes</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef])
	    ], ModalDialog);
	    return ModalDialog;
	})();
	exports.ModalDialog = ModalDialog;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var CommBroker_1 = __webpack_require__(7);
	var Conts_1 = __webpack_require__(11);
	var Menu = (function () {
	    function Menu(commBroker) {
	        this.m_hidden = false;
	        this.m_items = [];
	        this.m_commBroker = commBroker;
	        this.listenWinResize();
	    }
	    Menu.prototype.listenWinResize = function () {
	        var _this = this;
	        var self = this;
	        self.m_commBroker.onEvent(Conts_1.Consts.Events().WIN_SIZED).subscribe(function (e) {
	            if (e.message.width < Conts_1.Consts.Values().MENU_MIN_ICON_SHOW) {
	                _this.m_hidden = true;
	            }
	            else {
	                _this.m_hidden = false;
	            }
	        });
	    };
	    Menu.prototype.listenMenuSelected = function (event) {
	        var text = event.target.nodeName.toLocaleLowerCase() == 'li' ? jQuery(event.target).find('span').text() : jQuery(event.target).closest('li').find('span').text();
	        event.preventDefault();
	        this.m_commBroker.fire({
	            fromInstance: self,
	            event: Conts_1.Consts.Events().MENU_SELECTION,
	            context: null,
	            message: text
	        });
	        return false;
	    };
	    Menu.prototype.addMenuItem = function (i_item) {
	        this.m_items.push(i_item);
	    };
	    Menu = __decorate([
	        core_1.Component({
	            selector: 'Menu',
	            inputs: ['fontAwesome:fontAwesome'],
	            styles: ["\n    .appMenu {\n      background: #3e3f48;\n    }\n  "],
	            template: "\n        <section id=\"appNavigatorWasp\" (click)=\"listenMenuSelected($event)\" class=\"appMenu hidden-xs hidden-sm hidden-md col-lg-2\">\n         <li *ngFor=\"#item of m_items\" data-ripple-color=\"white\" class=\"btn btn-default list-group-item\">\n            <i class=\"navicons fa {{item.localFontAwesome}}\" [hidden]=\"m_hidden\">\n            </i>\n            <span>{{item.localTabTitle}}</span>\n          </li>\n      </section>\n    "
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
	    ], Menu);
	    return Menu;
	})();
	exports.Menu = Menu;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 65 */
/***/ function(module, exports) {

	var MailModel = (function () {
	    function MailModel(id, name, male, contactMethod, subject) {
	        this.id = id;
	        this.name = name;
	        this.male = male;
	        this.contactMethod = contactMethod;
	        this.subject = subject;
	    }
	    return MailModel;
	})();
	exports.MailModel = MailModel;


/***/ },
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var Conts_1 = __webpack_require__(11);
	var NotesBase = (function () {
	    function NotesBase(sliderPanel, commBroker) {
	        this.sliderPanel = sliderPanel;
	        this.commBroker = commBroker;
	        this.me = this;
	    }
	    NotesBase.prototype.openModal = function () {
	        this.modalDialog.openModal();
	    };
	    NotesBase.prototype.onPrev = function (event) {
	        this.sliderPanel.slideToPage(this.slideRight, 'right');
	        this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView(this.slideRight);
	    };
	    NotesBase.prototype.onNext = function (event) {
	        this.sliderPanel.slideToPage(this.slideLeft, 'left');
	        this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView(this.slideLeft);
	    };
	    NotesBase.prototype.registerCaller = function (caller) {
	        this.modalDialog = caller;
	    };
	    return NotesBase;
	})();
	exports.NotesBase = NotesBase;


/***/ },
/* 87 */
86,
/* 88 */
86,
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Conts_1 = __webpack_require__(11);
	var CommBroker_1 = __webpack_require__(7);
	var Logout = (function () {
	    function Logout(commBroker) {
	        this.commBroker = commBroker;
	        this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('Logout');
	        jQuery('body').fadeOut(3000, function () {
	            window.location.replace("https://github.com/born2net/ng2Boilerplate");
	        });
	    }
	    Logout = __decorate([
	        core_1.Component({
	            selector: 'Logout',
	            template: "\n        <h1><Center>Goodbye</Center></h1>\n        <small>I am Logout component</small>\n        "
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
	    ], Logout);
	    return Logout;
	})();
	exports.Logout = Logout;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Menu_1 = __webpack_require__(64);
	var MenuItem = (function () {
	    function MenuItem(i_appMenu) {
	        this.title = 'no name';
	        this.m_appMenu = i_appMenu;
	        this.m_appMenu.addMenuItem(this);
	    }
	    MenuItem.prototype.ngAfterViewInit = function () {
	        var self = this;
	    };
	    MenuItem = __decorate([
	        core_1.Component({
	            inputs: ['localTabTitle:tabtitle', 'localFontAwesome:fontAwesome'],
	            selector: 'MenuItem',
	            template: ""
	        }), 
	        __metadata('design:paramtypes', [Menu_1.Menu])
	    ], MenuItem);
	    return MenuItem;
	})();
	exports.MenuItem = MenuItem;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Tabs = (function () {
	    function Tabs() {
	        this.tabs = [];
	    }
	    Tabs.prototype.selectTab = function (tab, event) {
	        event.preventDefault;
	        _deactivateAllTabs(this.tabs);
	        tab.active = true;
	        function _deactivateAllTabs(tabs) {
	            tabs.forEach(function (tab) { return tab.active = false; });
	        }
	        return false;
	    };
	    Tabs.prototype.addTab = function (tab) {
	        if (this.tabs.length === 0) {
	            tab.active = true;
	        }
	        this.tabs.push(tab);
	    };
	    Tabs = __decorate([
	        core_1.Component({
	            selector: 'tabs',
	            template: "\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"#tab of tabs\" (click)=\"selectTab(tab, $event)\" [class.active]=\"tab.active\">\n        <a href=\"#\">{{tab.title}}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n    <small>I am Tabs component</small>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Tabs);
	    return Tabs;
	})();
	exports.Tabs = Tabs;


/***/ },
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Lib = (function () {
	    function Lib() {
	    }
	    Lib.log = function (msg) {
	        console.log(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1") + ': ' + msg);
	    };
	    Lib.guid = function () {
	        function s4() {
	            return Math.floor((1 + Math.random()) * 0x10000)
	                .toString(16)
	                .substring(1);
	        }
	        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	            s4() + '-' + s4() + s4() + s4();
	    };
	    Lib.loggerMiddleware = function (store) { return function (next) { return function (action) {
	        console.log("dispatching", action);
	        var result = next(action);
	        console.log("next state", store.getState());
	        return result;
	    }; }; };
	    Lib = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Lib);
	    return Lib;
	})();
	exports.Lib = Lib;
	if (!Object.assign) {
	    Object.defineProperty(Object, "assign", {
	        enumerable: false,
	        configurable: true,
	        writable: true,
	        value: function (target) {
	            "use strict";
	            if (target === undefined || target === null) {
	                throw new TypeError("Cannot convert first argument to object");
	            }
	            var to = Object(target);
	            for (var i = 1; i < arguments.length; i++) {
	                var nextSource = arguments[i];
	                if (nextSource === undefined || nextSource === null) {
	                    continue;
	                }
	                nextSource = Object(nextSource);
	                var keysArray = Object.keys(nextSource);
	                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	                    var nextKey = keysArray[nextIndex];
	                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	                    if (desc !== undefined && desc.enumerable) {
	                        to[nextKey] = nextSource[nextKey];
	                    }
	                }
	            }
	            return to;
	        }
	    });
	}


/***/ },
/* 127 */
/***/ function(module, exports) {

	exports.APP_STORE = 'APP_STORE';
	exports.ADD_TODO = 'ADD_TODO';
	exports.EDIT_TODO = 'EDIT_TODO';
	exports.REMOVE_TODO = 'REMOVE_TODO';
	exports.TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
	exports.TOGGLE_ALL_COMPLETED = 'TOGGLE_ALL_COMPLETED';
	exports.CLEAR_COMPLETED = 'CLEAR_COMPLETED';


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var angular2_redux_util_1 = __webpack_require__(20);
	exports.ADD_PART = 'ADD_PART';
	var PartActions = (function (_super) {
	    __extends(PartActions, _super);
	    function PartActions() {
	        _super.apply(this, arguments);
	        this.id = 11;
	    }
	    PartActions.prototype.addPart = function (name) {
	        return { type: exports.ADD_PART, id: _.uniqueId(), name: name };
	    };
	    PartActions = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], PartActions);
	    return PartActions;
	})(angular2_redux_util_1.Actions);
	exports.PartActions = PartActions;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ },
/* 129 */
127,
/* 130 */
128,
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var TodoStatsModel = (function () {
	    function TodoStatsModel() {
	        this.storesizes = [];
	        this.flist = [];
	        this.status = "";
	        this.txtinfo = "";
	        this.file_content = "";
	        this.qty = 0;
	        this.query_duration = 0;
	        this.updates = 0;
	        this.deletes = 0;
	        this.reads = 0;
	        this.creates = 0;
	        this.barcode_scanner_info = {};
	        this.product_info = {};
	    }
	    TodoStatsModel = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], TodoStatsModel);
	    return TodoStatsModel;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TodoStatsModel;


/***/ },
/* 132 */
127,
/* 133 */
128,
/* 134 */
131,
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var browser_1 = __webpack_require__(48);
	var Conts_1 = __webpack_require__(11);
	var Observable_1 = __webpack_require__(3);
	var DiggLoader_1 = __webpack_require__(771);
	var CommBroker_1 = __webpack_require__(7);
	__webpack_require__(115);
	__webpack_require__(21);
	__webpack_require__(45);
	__webpack_require__(24);
	var DIGG_INIT_HEIGHT = '400px';
	var Digg = (function () {
	    function Digg(commBroker, diggLoader, m_commBroker, viewContainer) {
	        this.commBroker = commBroker;
	        this.m_commBroker = m_commBroker;
	        this.dom = new browser_1.BrowserDomAdapter();
	        var self = this;
	        self.mode = 'list';
	        this.diggs = [];
	        self.viewContainer = viewContainer;
	        self.el = viewContainer.element.nativeElement;
	        self.channel = new Observable_1.Observable(function (observer) {
	            self.stream = observer;
	        }).share();
	        self.channel.debounceTime(1000).distinctUntilChanged().subscribe(function (e) {
	            self.diggs = [];
	            diggLoader.loadDiggs(e, self.diggs);
	        });
	        this.listenWinResize();
	        var propView = this.commBroker.getService(Conts_1.Consts.Services().Properties);
	        if (propView)
	            propView.setPropView('Digg');
	    }
	    Digg.prototype.ngOnInit = function () {
	        setTimeout(function (e) {
	            if (document['commBroker']) {
	                document['commBroker'].getService(Conts_1.Consts.Services().StyleService).refreshTheme();
	            }
	        }, 50);
	    };
	    Digg.prototype.listenWinResize = function () {
	        var self = this;
	        self.m_commBroker.onEvent(Conts_1.Consts.Events().WIN_SIZED).subscribe(function (e) {
	            self.setSize(e.message.height);
	        });
	    };
	    Digg.prototype.ngAfterContentInit = function () {
	        this.tileStyle = this.mode == "tiles" ? true : false;
	        this.setSize(this.m_commBroker.getValue(Conts_1.Consts.Values().APP_SIZE).height);
	    };
	    Digg.prototype.setSize = function (height) {
	        var h = height - 200;
	        var el = this.dom.getElementsByClassName(this.el, 'diggContainer')[0];
	        this.dom.setStyle(el, 'height', h);
	    };
	    Digg.prototype.onSearch = function (event) {
	        this.stream.next(event.target.value);
	    };
	    Digg = __decorate([
	        core_1.Component({
	            selector: 'Digg',
	            inputs: ['mode:mode'],
	            encapsulation: core_1.ViewEncapsulation.Emulated,
	            providers: [DiggLoader_1.DiggLoader],
	            styles: [("\n        .diggContainer {\n            overflow-y: scroll;\n            height: " + DIGG_INIT_HEIGHT + ";\n        };\n        .largeImage {\n           max-width: 100;\n           max-height: 60;\n        }\n        .smallImage {\n           width: 70;\n           height: 40;\n        }\n        .grow { transition: all .2s ease-in-out; }\n        .grow:hover { transform: scale(1.1); opacity: 0.7}\n    ")],
	            template: "\n        <ng-content></ng-content>\n        <div class=\"appHeight\">\n             <form (submit)=\"$event.preventDefault();\">\n                <br/>\n                <div class=\"input-group\">\n                      <span class=\"input-group-addon\" id=\"symbol-input\">Digg filter</span>\n                      <input type=\"text\" class=\"form-control\" (keyup)=\"onSearch($event)\" placeholder=\"press [ENTER] for unfiltered result\">\n                    </div>\n              </form>\n              <div class=\"diggContainer list\">\n                  <table class=\"table table-striped\">\n                  <tbody>\n                    <tr *ngFor=\"#digg of diggs\" [ngClass]=\"{'col-xs-4': tileStyle, 'col-lg-3': tileStyle}\">\n                      <td>\n                      <img class=\"img-responsive grow\" [ngClass]=\"{'largeImage': tileStyle, 'smallImage': !tileStyle}\" src=\"{{digg.link}}\"/>\n                      <span>{{digg.title}}</span>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n        </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker, DiggLoader_1.DiggLoader, CommBroker_1.CommBroker, core_1.ViewContainerRef])
	    ], Digg);
	    return Digg;
	})();
	exports.Digg = Digg;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Conts_1 = __webpack_require__(11);
	var DividerPanel = (function () {
	    function DividerPanel() {
	        this.panelOpen = true;
	    }
	    DividerPanel.prototype.onToggleSidePanel = function () {
	        var self = this;
	        if (jQuery(Conts_1.Consts.Elems().TOGGLE_PANEL).hasClass('propPanelIsOpen')) {
	            this.panelOpen = false;
	            ;
	            jQuery(Conts_1.Consts.Elems().TOGGLE_PANEL).toggleClass('propPanelIsOpen');
	            jQuery(Conts_1.Consts.Elems().PROP_PANEL_WRAP).addClass('hidden-xs hidden-sm hidden-md');
	            jQuery(Conts_1.Consts.Elems().MAIN_PANEL_WRAP).removeClass('col-xs-9 col-sm-9 col-md-9');
	            jQuery(Conts_1.Consts.Elems().MAIN_PANEL_WRAP).addClass('col-xs-12 col-md-12');
	        }
	        else {
	            this.panelOpen = true;
	            jQuery(Conts_1.Consts.Elems().TOGGLE_PANEL).toggleClass('propPanelIsOpen');
	            jQuery(Conts_1.Consts.Elems().MAIN_PANEL_WRAP).addClass('col-xs-9 col-sm-9 col-md-9');
	            setTimeout(function () {
	                jQuery(Conts_1.Consts.Elems().PROP_PANEL_WRAP).hide();
	                jQuery(Conts_1.Consts.Elems().MAIN_PANEL_WRAP).removeClass('col-xs-12 col-md-12');
	                jQuery(Conts_1.Consts.Elems().PROP_PANEL_WRAP).removeClass('hidden-xs hidden-sm hidden-md');
	                jQuery(Conts_1.Consts.Elems().PROP_PANEL_WRAP).fadeIn('fast');
	            }, 500);
	        }
	    };
	    DividerPanel = __decorate([
	        core_1.Component({
	            selector: 'DividerPanel',
	            styles: ["\n        #togglePanel {\n                position: fixed;\n                margin: 10px;\n                right: -5px;\n                top: 50px;\n                z-index: 1050;\n                height: 30px;\n                width: 30px;\n                text-align: center;\n                padding: 6px 0;\n                font-size: 11px;\n                outline:none;\n                border-radius: 15px !important;\n        }\n        #togglePanel > span {\n           opacity: 0.5;\n           position: relative;\n           top: -3px;\n           font-size: 2em;\n        }\n    "],
	            template: "\n                <button id=\"togglePanel\" (click)=\"onToggleSidePanel($event)\" class=\"propPanelIsOpen btn btn-default btn-sm hidden-lg\">\n                    <span [ngClass]=\"{'fa-arrow-circle-right': panelOpen, 'fa-arrow-circle-left': !panelOpen}\"  class=\"fa\"></span>\n                  </button>\n                <ng-content></ng-content>\n              "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DividerPanel);
	    return DividerPanel;
	})();
	exports.DividerPanel = DividerPanel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var tabs_1 = __webpack_require__(91);
	var Tab = (function () {
	    function Tab(tabs) {
	        this.active = this.active || false;
	        tabs.addTab(this);
	    }
	    Tab = __decorate([
	        core_1.Component({
	            selector: 'tab',
	            inputs: [
	                'title:tabtitle',
	                'active'
	            ],
	            styles: ["\n    .pane{\n      padding: 1em;\n    }\n  "],
	            template: "\n    <div [hidden]=\"!active\" class=\"pane\">\n      <ng-content></ng-content>\n    </div>\n  "
	        }),
	        __param(0, core_1.Host()), 
	        __metadata('design:paramtypes', [tabs_1.Tabs])
	    ], Tab);
	    return Tab;
	})();
	exports.Tab = Tab;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var StyleModel = (function () {
	    function StyleModel() {
	        this.themes = ['lite', 'dark', 'polymer'];
	    }
	    StyleModel = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], StyleModel);
	    return StyleModel;
	})();
	exports.StyleModel = StyleModel;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(bootbox) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var LocalStorage_1 = __webpack_require__(777);
	var StyleModel_1 = __webpack_require__(138);
	var CommBroker_1 = __webpack_require__(7);
	var Conts_1 = __webpack_require__(11);
	var StyleService = (function () {
	    function StyleService(commBroker) {
	        this.commBroker = commBroker;
	        this.model = new StyleModel_1.StyleModel();
	        this.localStorage = new LocalStorage_1.LocalStorage();
	        this.commBroker.setService(Conts_1.Consts.Services().StyleService, this);
	        var styleData = this.localStorage.getItem('style_data', {
	            theme: 'lite',
	            remember: true
	        });
	        this.model.remember = styleData.remember;
	        this.model.theme = styleData.theme;
	        if (this.model.remember == false)
	            return;
	        this.loadTheme(this.model.theme);
	    }
	    StyleService.prototype.loadTheme = function (styleName) {
	        this.model.selectedTheme = styleName;
	        switch (styleName) {
	            case 'lite':
	                {
	                    this.loadCss('style.css');
	                    break;
	                }
	            case 'dark':
	                {
	                    this.loadCss('style_dark.css');
	                    break;
	                }
	            case 'polymer':
	                {
	                    this.loadMaterial();
	                    break;
	                }
	        }
	    };
	    StyleService.prototype.loadMaterial = function () {
	    };
	    StyleService.prototype.loadCss = function (url) {
	        if (url.indexOf('_') == -1)
	            return;
	        var link = document.createElement("link");
	        link.type = "text/css";
	        link.rel = "stylesheet";
	        link.className = 'customStyles';
	        link.href = url;
	        document.getElementsByTagName("head")[0].appendChild(link);
	    };
	    StyleService.prototype.onUpdate = function () {
	        var _this = this;
	        var self = this;
	        setTimeout(function (e) {
	            self.localStorage.setItem('style_data', {
	                theme: self.model.theme,
	                remember: self.model.remember
	            });
	            _this.loadTheme(self.model.theme);
	            if (self.model.remember)
	                bootbox.alert('reload the application to see the full effect of the theme...');
	        }, 10);
	    };
	    Object.defineProperty(StyleService.prototype, "model", {
	        get: function () {
	            return this.styleModel;
	        },
	        set: function (styleModel) {
	            this.styleModel = styleModel;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    StyleService.prototype.refreshTheme = function () {
	        if (this.model.selectedTheme != 'polymer')
	            return;
	        this.loadTheme('polymer');
	    };
	    StyleService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
	    ], StyleService);
	    return StyleService;
	})();
	exports.StyleService = StyleService;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)))

/***/ },
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */
/***/ function(module, exports) {

	'use strict';
	
	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;
	
	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}
	
	module.exports = thunkMiddleware;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(288);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(466);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(465);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(464);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(287);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(289);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(180)))

/***/ },
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var TodoStatsModel = (function () {
	    function TodoStatsModel() {
	        this.updates = 0;
	        this.deletes = 0;
	        this.reads = 0;
	        this.creates = 0;
	    }
	    TodoStatsModel = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], TodoStatsModel);
	    return TodoStatsModel;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TodoStatsModel;


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var angular2_redux_util_1 = __webpack_require__(20);
	exports.ADD_TO_CART = "ADD_TO_CART";
	exports.REMOVE_FROM_CART = "REMOVE_FROM_CART";
	var CartActions = (function (_super) {
	    __extends(CartActions, _super);
	    function CartActions() {
	        _super.apply(this, arguments);
	    }
	    CartActions.prototype.addToCart = function (id) {
	        return { type: exports.ADD_TO_CART, id: id };
	    };
	    ;
	    CartActions.prototype.removeFromCart = function (id) {
	        return { type: exports.REMOVE_FROM_CART, id: id };
	    };
	    ;
	    CartActions = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], CartActions);
	    return CartActions;
	})(angular2_redux_util_1.Actions);
	exports.CartActions = CartActions;


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var http_1 = __webpack_require__(17);
	var core_1 = __webpack_require__(1);
	var angular2_redux_util_1 = __webpack_require__(20);
	__webpack_require__(29);
	exports.REQUEST_FILMS = 'REQUEST_FILMS';
	exports.RECEIVE_FILMS = 'RECEIVE_FILMS';
	exports.REQUEST_FILM = 'REQUEST_FILM';
	exports.RECEIVE_FILM = 'RECEIVE_FILM';
	exports.CURRENT_FILMS = 'CURRENT_FILMS';
	exports.RECEIVE_NUMBER_OF_FILMS = 'RECEIVE_NUMBER_OF_FILMS';
	exports.CURRENT_FILM = 'CURRENT_FILM';
	var BASE_URL = "http://swapi.co/api/films/";
	var FilmActions = (function (_super) {
	    __extends(FilmActions, _super);
	    function FilmActions(_http) {
	        _super.call(this);
	        this._http = _http;
	    }
	    FilmActions.prototype.fetchFilms = function () {
	        var _this = this;
	        return function (dispatch) {
	            dispatch(_this.requestFilms());
	            var sub = _this._http.get("" + BASE_URL)
	                .map(function (result) { return result.json(); })
	                .map(function (json) {
	                dispatch(_this.receiveFilms(json.results));
	                dispatch(_this.receiveNumberOfFilms(json.count));
	            })
	                .subscribe(function (e) { return sub.unsubscribe(); });
	        };
	    };
	    FilmActions.prototype.fetchFilm = function (index) {
	        var _this = this;
	        return function (dispatch) {
	            dispatch(_this.requestFilm());
	            var sub = _this._http.get("" + BASE_URL + (index + 1) + "/")
	                .map(function (result) { return result.json(); })
	                .map(function (json) {
	                dispatch(_this.receiveFilm(json));
	            })
	                .subscribe(function (e) { return sub.unsubscribe(); });
	        };
	    };
	    FilmActions.prototype.requestFilms = function () {
	        return { type: exports.REQUEST_FILMS };
	    };
	    FilmActions.prototype.receiveFilms = function (films) {
	        return {
	            type: exports.RECEIVE_FILMS,
	            films: films
	        };
	    };
	    FilmActions.prototype.receiveNumberOfFilms = function (count) {
	        return {
	            type: exports.RECEIVE_NUMBER_OF_FILMS,
	            count: count
	        };
	    };
	    FilmActions.prototype.requestFilm = function () {
	        return { type: exports.REQUEST_FILM };
	    };
	    FilmActions.prototype.receiveFilm = function (film) {
	        return {
	            type: exports.RECEIVE_FILM,
	            film: film
	        };
	    };
	    FilmActions.prototype.setCurrentFilm = function (currentIndex) {
	        return {
	            type: exports.CURRENT_FILM,
	            currentIndex: currentIndex
	        };
	    };
	    FilmActions = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], FilmActions);
	    return FilmActions;
	})(angular2_redux_util_1.Actions);
	exports.FilmActions = FilmActions;


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var http_1 = __webpack_require__(17);
	var core_1 = __webpack_require__(1);
	var angular2_redux_util_1 = __webpack_require__(20);
	__webpack_require__(29);
	exports.REQUEST_USERS = 'REQUEST_USERS';
	exports.RECEIVE_USERS = 'RECEIVE_USERS';
	exports.CURRENT_USER = 'CURRENT_USER';
	exports.SET_FILM_FILTER = 'SET_FILM_FILTER';
	var UserActions = (function (_super) {
	    __extends(UserActions, _super);
	    function UserActions(_http) {
	        _super.call(this);
	        this._http = _http;
	    }
	    UserActions.prototype.fetchUsers = function () {
	        var _this = this;
	        var BASE_URL = "http://swapi.co/api/people/";
	        return function (dispatch) {
	            dispatch(_this.requestUsers());
	            var sub = _this._http.get("" + BASE_URL)
	                .map(function (result) { return result.json(); })
	                .map(function (json) { return json.results; })
	                .map(function (result) { return dispatch(_this.receiveUsers(result)); })
	                .subscribe(function (e) { return sub.unsubscribe(); });
	        };
	    };
	    UserActions.prototype.requestUsers = function () {
	        return { type: exports.REQUEST_USERS };
	    };
	    UserActions.prototype.receiveUsers = function (users) {
	        return {
	            type: exports.RECEIVE_USERS,
	            users: users,
	            updated: Date.now()
	        };
	    };
	    UserActions.prototype.setCurrentUser = function (current) {
	        return {
	            type: exports.CURRENT_USER,
	            current: current
	        };
	    };
	    UserActions.prototype.setFilmFilter = function (filmFilter) {
	        return {
	            type: exports.SET_FILM_FILTER,
	            filmFilter: filmFilter
	        };
	    };
	    UserActions = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], UserActions);
	    return UserActions;
	})(angular2_redux_util_1.Actions);
	exports.UserActions = UserActions;


/***/ },
/* 198 */
195,
/* 199 */
196,
/* 200 */
197,
/* 201 */
195,
/* 202 */
196,
/* 203 */
197,
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Observable_1 = __webpack_require__(3);
	__webpack_require__(21);
	var AsyncSubject_1 = __webpack_require__(120);
	var http_1 = __webpack_require__(17);
	var MyIp = (function () {
	    function MyIp(http) {
	        var _this = this;
	        this.http = http;
	        this.getMyIp('https://secure.digitalsignage.com/getIp').subscribe(function (result) {
	            _this.ipAddress = JSON.parse(result._body).ip;
	        });
	        setTimeout(function (e) {
	            _this.getMyIp('https://secure.digitalsignage.com/getIp').subscribe(function (result) {
	                _this.ipAddress = JSON.parse(result._body).ip;
	            });
	        }, 2000);
	    }
	    MyIp.prototype.getMyIp = function (url) {
	        var _this = this;
	        var self = this;
	        return Observable_1.Observable.create(function (observer) {
	            if (!_this.subject) {
	                _this.subject = new AsyncSubject_1.AsyncSubject();
	                self.http.get(url).subscribe((_this.subject));
	            }
	            return _this.subject.subscribe(observer);
	        });
	    };
	    MyIp = __decorate([
	        core_1.Component({
	            selector: 'MyIp',
	            template: "\n                <h3>Your ip address is: {{ipAddress}}</h3>\n                <small>I am MyIp component</small>\n                <ng-content></ng-content>\n    "
	        }), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], MyIp);
	    return MyIp;
	})();
	exports.MyIp = MyIp;


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var common_directives_1 = __webpack_require__(214);
	var SimpleList = (function () {
	    function SimpleList() {
	        this.current = new core_1.EventEmitter();
	        this.linkResultPerItem = {};
	    }
	    SimpleList.prototype.getContent = function (item) {
	        if (this.content) {
	            return this.content(item);
	        }
	        else {
	            return item;
	        }
	    };
	    SimpleList.prototype.getLink = function (item) {
	        if (this.link) {
	            var key = item;
	            if (typeof key === "object") {
	                key = JSON.stringify(key);
	            }
	            if (this.linkResultPerItem[key] == null) {
	                this.linkResultPerItem[key] = this.link(item);
	            }
	            return this.linkResultPerItem[key];
	        }
	        else {
	            return null;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], SimpleList.prototype, "list", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], SimpleList.prototype, "content", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], SimpleList.prototype, "link", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], SimpleList.prototype, "current", void 0);
	    SimpleList = __decorate([
	        core_1.Component({
	            selector: 'simple-list',
	            template: "\n        <div *ngIf=\"!list\">\n            Loading...\n        </div>\n        <div *ngIf=\"list\">\n            <table class=\"table table-striped table-bordered table-hover\">\n                <tbody>\n                    <tr *ngFor=\"#item of list\" (mouseover)=\"current.next(item)\" (mouseout)=\"current.next(null)\">\n                        <td *ngIf=\"!link\">{{getContent(item)}}</td>\n                        <td *ngIf=\"link\"><a [routerLink]=\"getLink(item)\">{{getContent(item)}}</a></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    ",
	            directives: [router_1.RouterLink, common_directives_1.COMMON_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SimpleList);
	    return SimpleList;
	})();
	exports.SimpleList = SimpleList;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var CharCount = (function () {
	    function CharCount() {
	    }
	    CharCount.prototype.transform = function (input) {
	        return input.length;
	    };
	    CharCount = __decorate([
	        core_1.Pipe({
	            name: 'CharCount'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CharCount);
	    return CharCount;
	})();
	exports.CharCount = CharCount;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var _ = __webpack_require__(430);
	var OrderBy = (function () {
	    function OrderBy() {
	    }
	    OrderBy.prototype.transform = function (input, _a) {
	        var field = _a[0], _b = _a[1], desc = _b === void 0 ? false : _b;
	        if (input && field) {
	            return Array.from(input).sort(function (a, b) {
	                if (_.get(a, field) < _.get(b, field)) {
	                    return desc ? 1 : -1;
	                }
	                if (_.get(a, field) > _.get(b, field)) {
	                    return desc ? -1 : 1;
	                }
	                return 0;
	            });
	        }
	        return input;
	    };
	    OrderBy = __decorate([
	        core_1.Pipe({
	            name: 'OrderBy'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], OrderBy);
	    return OrderBy;
	})();
	exports.OrderBy = OrderBy;


/***/ },
/* 208 */
/***/ function(module, exports) {

	function NameTakenValidator(control) {
	    var q = new Promise(function (resolve, reject) {
	        setTimeout(function () {
	            if (control.value === 'Sean') {
	                resolve({ "taken": true });
	            }
	            else {
	                resolve(null);
	            }
	        }, 1000);
	    });
	    return q;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = NameTakenValidator;


/***/ },
/* 209 */
/***/ function(module, exports) {

	function StartCapValidator(control) {
	    if (!control.value.match(/^[A-Z]/)) {
	        return { notCapped: true };
	    }
	    else {
	        return null;
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = StartCapValidator;


/***/ },
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */
/***/ function(module, exports) {

	'use strict';
	
	var fnToStr = Function.prototype.toString;
	
	var constructorRegex = /\s*class /;
	var isES6ClassFn = function isES6ClassFn(value) {
		try {
			var fnStr = fnToStr.call(value);
			var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
			var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
			var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
			return constructorRegex.test(spaceStripped);
		} catch (e) {
			return false; // not a function
		}
	};
	
	var tryFunctionObject = function tryFunctionObject(value) {
		try {
			if (isES6ClassFn(value)) { return false; }
			fnToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ },
/* 286 */
/***/ function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
	
	if (hasSymbols) {
		var symToStr = Symbol.prototype.toString;
		var symStringRegex = /^Symbol\(.*\)$/;
		var isSymbolObject = function isSymbolObject(value) {
			if (typeof value.valueOf() !== 'symbol') { return false; }
			return symStringRegex.test(symToStr.call(value));
		};
		module.exports = function isSymbol(value) {
			if (typeof value === 'symbol') { return true; }
			if (toStr.call(value) !== '[object Symbol]') { return false; }
			try {
				return isSymbolObject(value);
			} catch (e) {
				return false;
			}
		};
	} else {
		module.exports = function isSymbol(value) {
			// this environment does not support Symbols.
			return false;
		};
	}


/***/ },
/* 287 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return function () {
	    if (funcs.length === 0) {
	      return arguments.length <= 0 ? undefined : arguments[0];
	    }
	
	    var last = funcs[funcs.length - 1];
	    var rest = funcs.slice(0, -1);
	
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;
	
	var _isPlainObject = __webpack_require__(290);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, initialState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all states changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 289 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	var isHostObject = __webpack_require__(467),
	    isObjectLike = __webpack_require__(468);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = objectProto;
	  if (typeof value.constructor == 'function') {
	    proto = getPrototypeOf(value);
	  }
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */
[906, 194],
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var TodoRemote_1 = __webpack_require__(319);
	var TodoItem = (function () {
	    function TodoItem() {
	        this.editMode = false;
	        this.done = new core_1.EventEmitter();
	        this.edit = new core_1.EventEmitter();
	    }
	    TodoItem.prototype.doneClicked = function () {
	        this.done.next(this.item);
	    };
	    TodoItem.prototype.editClicked = function () {
	        this.editMode = !this.editMode;
	        if (this.editMode)
	            return;
	        this.edit.next(this.item);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', TodoRemote_1.TodoItemModel)
	    ], TodoItem.prototype, "item", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], TodoItem.prototype, "done", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], TodoItem.prototype, "edit", void 0);
	    TodoItem = __decorate([
	        core_1.Component({
	            selector: 'todo-item',
	            template: "\n                <div class=\"view\">\n                    <input [(ngModel)]=\"item.task\" class=\"editInput\" *ngIf=\"editMode\" value=\"{{item.task}}\"/>\n                    <label  *ngIf=\"!editMode\">{{item.task}}</label>\n                    <button (click)=\"doneClicked()\"  class=\"fa fa-minus buttonsDone\"></button>\n                    <button (click)=\"editClicked()\" [ngClass]=\"{'fa-check-square': editMode}\" class=\"fa fa-edit buttonsEdit\"></button>\n                </div>\n    ",
	            styles: [__webpack_require__(433)],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TodoItem);
	    return TodoItem;
	})();
	exports.TodoItem = TodoItem;


/***/ },
/* 321 */
[906, 131],
/* 322 */
[923, 321, 453, 438],
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(17);
	var Lib_1 = __webpack_require__(126);
	__webpack_require__(83);
	var TodoStatsModel_1 = __webpack_require__(134);
	var url = 'http://secure.digitalsignage.com';
	var urlBaseMySQL = 'http://onion-local/app/api/trans/Rest';
	var urlUserBase = 'http://onion-local/app/api/trans/user';
	var urlBaseRest = 'http://onion-local/app/api/trans/Rest';
	var TodoItemModel = (function () {
	    function TodoItemModel(text, id) {
	        this.task = text;
	        this.id = id || Lib_1.Lib.guid();
	    }
	    Object.defineProperty(TodoItemModel.prototype, "text", {
	        get: function () {
	            console.log('getting value for task', this.task);
	            return this.task;
	        },
	        set: function (value) {
	            this.task = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TodoItemModel.prototype.getTask = function () {
	        return this.task;
	    };
	    return TodoItemModel;
	})();
	exports.TodoItemModel = TodoItemModel;
	var TodosService = (function () {
	    function TodosService(_http, todoStatsModel, window) {
	        this._http = _http;
	        this.todoStatsModel = todoStatsModel;
	        this.window = window;
	        var vm = this;
	        this.m_dataStore = { todos: [] };
	        this.loadTodos();
	        this._window = window;
	    }
	    TodosService.prototype.addItem = function (newItem) {
	        var todo = new TodoItemModel(newItem);
	        this.m_dataStore.todos.push(todo);
	        this.createTodo(todo);
	    };
	    TodosService.prototype.removeItem = function (item) {
	        var index = this.m_dataStore.todos.indexOf(item);
	        this.m_dataStore.todos.splice(index, 1);
	        this.deleteTodo(item);
	    };
	    TodosService.prototype.removeItems = function () {
	        this.m_dataStore.todos.length = 0;
	        this.m_dataStore.todos = [];
	    };
	    TodosService.prototype.editItem = function (item) {
	        var index = this.m_dataStore.todos.indexOf(item);
	        this.m_dataStore.todos[index].text = item.getTask();
	        this.updateTodo(item);
	    };
	    TodosService.prototype.getDataStore = function () {
	        return this.m_dataStore;
	    };
	    TodosService.prototype.logerr = function (err) {
	        console.error(err);
	    };
	    TodosService.prototype.logmsg = function (msg) {
	        console.log(msg);
	    };
	    TodosService.prototype.processLoginResponse = function (data) {
	        console.log("processLoginResponse(data) {...");
	        console.log(data);
	        if (data) {
	            localStorage.setItem('id_token', data);
	        }
	    };
	    TodosService.prototype.ng2Login = function (loginname, pw_md5) {
	        var vm = this;
	        var creds = 'loginname=' + loginname + '&pw_md5=' + pw_md5;
	        return vm.doLogin(creds, loginname, pw_md5);
	    };
	    TodosService.prototype.doLogin = function (creds, loginname, pw_md5) {
	        var vm = this;
	        console.log("doLogin(creds, loginname, pw_md5) { ... ");
	        var functionPromise = new Promise(function (resolve, reject) {
	            var headers = new http_1.Headers();
	            headers.append('Content-Type', 'application/x-www-form-urlencoded');
	            var loginChannel = vm._http.post(urlBaseMySQL + "/handle_ajax_login", creds, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (loginResponseSuccessObject) {
	                var php_session_cookie_name = 'ZENDPHPSESSID';
	                var ang_user_cookie_name = 'user';
	                var response = _.clone(loginResponseSuccessObject);
	                if (response.status !== "success") {
	                    console.log("response.message: ");
	                    console.log(response.message);
	                    if (response.message != undefined && response.message != "") {
	                        console.log("Benutzerdaten fehlerhaft!");
	                        reject(false);
	                    }
	                }
	                else {
	                    console.log(response);
	                    response.user[0].pw_md5 = pw_md5;
	                    response.user[0].loginname = loginname;
	                    var user_base_64 = vm._window.btoa(JSON.stringify(response.user[0]));
	                    document.cookie = ang_user_cookie_name + "=" + user_base_64;
	                    resolve(true);
	                }
	                loginChannel.unsubscribe();
	            }, function (loginResponseErrorObject) {
	                vm.logerr('Could not login: ' + loginResponseErrorObject);
	                reject(false);
	            }, function () {
	                console.log('Authentication Complete');
	            });
	        });
	        return functionPromise;
	    };
	    TodosService.prototype.getCookie = function (name) {
	        console.log("getCookie(" + name + ": string) { ... ");
	        var ca = document.cookie.split(';');
	        var caLen = ca.length;
	        var cookieName = name + "=";
	        var c;
	        for (var i = 0; i < caLen; i += 1) {
	            c = ca[i].replace(/(^\s+|\s+$)/g, "");
	            if (c.indexOf(cookieName) == 0) {
	                return c.substring(cookieName.length, c.length);
	            }
	        }
	        return "";
	    };
	    TodosService.prototype.loadApi = function (base, reduction, controllerName) {
	        var vm = this;
	        vm.logmsg("loadApi(base, reduction, controllerName) { ... ");
	        var functionPromise = new Promise(function (resolve, reject) {
	            var sendData = JSON.stringify({
	                'controllerName': controllerName,
	                'base': base,
	                'reduction': reduction
	            });
	            var channel = vm._http.post(urlBaseMySQL + "/restsql", sendData).map(function (response) { return response.json(); }).subscribe(function (responseObject) {
	                var responseObject = JSON.stringify(responseObject);
	                try {
	                    responseObject = JSON.parse(responseObject);
	                    console.log("responseObject.ack");
	                    console.log(responseObject.ack);
	                    if (responseObject.ack != "OK") {
	                        reject(false);
	                        return false;
	                    }
	                    var foundItems = [];
	                    try {
	                        var len = responseObject.payload.data.length;
	                        for (var i = 0; i < len; i++) {
	                            foundItems.push(responseObject.payload.data[i]);
	                        }
	                    }
	                    catch (e) {
	                    }
	                }
	                catch (e) {
	                    vm.logmsg("e");
	                    vm.logmsg(e);
	                    channel.unsubscribe();
	                    reject(false);
	                    return false;
	                }
	                var len = foundItems.length;
	                for (var i = 0; i < len; i++) {
	                    var todoItem = new TodoItemModel(foundItems[i].prod_num, foundItems[i].cpr_id);
	                    vm.m_dataStore.todos.push(todoItem);
	                }
	                channel.unsubscribe();
	                resolve(foundItems);
	            }, function (error) { return console.log("Could not load todos " + error); });
	        });
	        return functionPromise;
	    };
	    TodosService.prototype.loadApiRest = function (reduction, controllerName) {
	        var vm = this;
	        vm.logmsg("loadApi(reduction, controllerName) { ... ");
	        var php_session_cookie_name = 'ZENDPHPSESSID';
	        var ang_user_cookie_name = 'user';
	        var functionPromise = new Promise(function (resolve, reject) {
	            var user_base_64 = vm.getCookie(ang_user_cookie_name);
	            console.log("user_base_64 for " + ang_user_cookie_name + " found:");
	            console.log(user_base_64);
	            var userObject = JSON.parse(vm._window.atob(user_base_64));
	            console.log(userObject);
	            var loginname = userObject.loginname;
	            console.log(loginname);
	            var pw_md5 = userObject.pw_md5;
	            console.log(pw_md5);
	            var usr_session = userObject.usr_session;
	            console.log(usr_session);
	            var sendData = JSON.stringify({
	                'controllerName': controllerName,
	                'reduction': reduction,
	                'usr_session': usr_session,
	                'loginname': loginname,
	                'pw_md5': pw_md5
	            });
	            console.log("sendData");
	            console.log(sendData);
	            var channel = vm._http.post(urlBaseRest + "/restsql", sendData).map(function (response) { return response.json(); }).subscribe(function (responseObject) {
	                var responseObject = JSON.stringify(responseObject);
	                try {
	                    responseObject = JSON.parse(responseObject);
	                    console.log("responseObject.ack");
	                    console.log(responseObject.ack);
	                    if (responseObject.ack != "OK") {
	                        reject(false);
	                        return false;
	                    }
	                    var foundItems = [];
	                    try {
	                        var len = responseObject.payload.data.length;
	                        for (var i = 0; i < len; i++) {
	                            foundItems.push(responseObject.payload.data[i]);
	                        }
	                    }
	                    catch (e) {
	                    }
	                }
	                catch (e) {
	                    vm.logmsg("e");
	                    vm.logmsg(e);
	                    channel.unsubscribe();
	                    reject(false);
	                    return false;
	                }
	                var len = foundItems.length;
	                for (var i = 0; i < len; i++) {
	                    var todoItem = new TodoItemModel(foundItems[i].prod_num, foundItems[i].cpr_id);
	                    vm.m_dataStore.todos.push(todoItem);
	                }
	                channel.unsubscribe();
	                resolve(foundItems);
	            }, function (error) { return console.log("Could not load todos " + error); });
	        });
	        return functionPromise;
	    };
	    TodosService.prototype.loadApiSQLite = function (base, reduction, controllerName) {
	        var vm = this;
	        vm.logmsg("loadApiSQLite(base, reduction, controllerName) { ... ");
	        var functionPromise = new Promise(function (resolve, reject) {
	            var db = window.sqlitePlugin.openDatabase({ name: "onion.db", location: 0 });
	            db.transaction(function (tx) {
	                vm.logmsg(base + reduction.clause);
	                vm.logerr(reduction);
	                tx.executeSql(base + reduction.clause, reduction.params, function (tx, responseObject) {
	                    vm.logmsg("sqliteSuccess(tx, responseObject) { ... ");
	                    vm.logmsg("responseObject");
	                    vm.logerr(responseObject);
	                    var foundItems = [];
	                    try {
	                        var len = responseObject.rows.length;
	                        console.log("len: " + len);
	                        for (var i = 0; i < len; i++) {
	                            foundItems.push(responseObject.rows.item(i));
	                        }
	                    }
	                    catch (e) {
	                    }
	                    var len = foundItems.length;
	                    for (var i = 0; i < len; i++) {
	                        var todoItem = new TodoItemModel(responseObject.rows.item(i).prod_num, responseObject.rows.item(i).cpr_id);
	                        vm.m_dataStore.todos.push(todoItem);
	                    }
	                    resolve(responseObject);
	                }, function (tx, responseError) {
	                    vm.logmsg("responseError hr8c4g5rf9o4e5rf");
	                    vm.logerr(responseError);
	                    reject(false);
	                    return false;
	                });
	            }, vm.logerr);
	        });
	        return functionPromise;
	    };
	    TodosService.prototype.loadTodos = function () {
	        var vm = this;
	        this.todoStatsModel.reads++;
	        var channel = this._http.get(url + "/todos").map(function (response) { return response.json(); }).subscribe(function (data) {
	            try {
	                data = JSON.parse(data);
	            }
	            catch (e) {
	                channel.unsubscribe();
	                return;
	            }
	            for (var i in data) {
	                var todoItem = new TodoItemModel(data[i].task, data[i].id);
	                vm.m_dataStore.todos.push(todoItem);
	            }
	            channel.unsubscribe();
	        }, function (error) { return console.log("Could not load todos " + error); });
	    };
	    TodosService.prototype.createTodo = function (todo) {
	        this.todoStatsModel.creates++;
	        var sendData = JSON.stringify(todo);
	        var channel = this._http.post(url + "/todos", sendData)
	            .map(function (response) { return response.json(); }).subscribe(function (sendData) {
	            channel.unsubscribe();
	        }, function (error) { return console.log('Could not create todo.'); });
	    };
	    TodosService.prototype.updateTodo = function (todo) {
	        this.todoStatsModel.updates++;
	        var channel = this._http.put(url + "/todos/" + todo.id, JSON.stringify(todo))
	            .map(function (response) { return response.json(); }).subscribe(function (data) {
	            channel.unsubscribe();
	        }, function (error) { return console.log('Could not update todo.'); });
	    };
	    TodosService.prototype.deleteTodo = function (todo) {
	        var _this = this;
	        this.todoStatsModel.deletes++;
	        var channel = this._http.delete(url + "/todos/" + todo.id).subscribe(function (response) {
	            _this.m_dataStore.todos.forEach(function (t, index) {
	                if (t.id === todo.id) {
	                    _this.m_dataStore.todos.splice(index, 1);
	                }
	            });
	            channel.unsubscribe();
	        }, function (error) { return console.log('Could not delete todo.'); });
	    };
	    TodosService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, TodoStatsModel_1.default, Window])
	    ], TodosService);
	    return TodosService;
	})();
	exports.TodosService = TodosService;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ },
/* 324 */
[923, 323, 459, 442],
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var browser_1 = __webpack_require__(48);
	var router_1 = __webpack_require__(14);
	var CommBroker_1 = __webpack_require__(7);
	var Conts_1 = __webpack_require__(11);
	var Filemenu = (function () {
	    function Filemenu(viewContainer, router, commBroker) {
	        this.dom = new browser_1.BrowserDomAdapter();
	        var self = this;
	        self.m_commBroker = commBroker;
	        self.m_items = [];
	        self.m_renderedItems = [];
	        self.viewContainer = viewContainer;
	        self.el = viewContainer.element.nativeElement;
	        self.m_fileMenuWrap = self.dom.getElementsByClassName(self.el, 'm_fileMenuWrap');
	        router.subscribe(function (currentRoute) {
	            console.log("currentRoute: " + currentRoute);
	            self.m_renderedItems = [];
	            for (var item in self.m_items) {
	                if (self.m_items[item]['app'] == currentRoute)
	                    self.m_renderedItems.push(self.m_items[item]);
	            }
	            if (self.m_renderedItems.length == 0) {
	                jQuery(self.m_fileMenuWrap).fadeOut('slow', function () {
	                    self.dom.setStyle(self.el, 'opacity', '0');
	                });
	            }
	            else {
	                jQuery(self.m_fileMenuWrap).fadeIn('slow', function () {
	                    self.dom.setStyle(self.el, 'opacity', '1');
	                });
	                var app = self.m_commBroker.getService(Conts_1.Consts.Services().App);
	                app.appResized();
	            }
	        });
	        jQuery('.navbar-nav').css({
	            display: 'block'
	        });
	    }
	    Filemenu.prototype.listenMenuSelected = function (event) {
	        this.m_commBroker.fire({
	            fromInstance: self,
	            event: Conts_1.Consts.Events().MENU_SELECTION,
	            context: null,
	            message: event.target.text
	        });
	        event.preventDefault();
	        return false;
	    };
	    Filemenu.prototype.addFileMenuItem = function (i_item) {
	        this.m_items.push(i_item);
	    };
	    Filemenu = __decorate([
	        core_1.Component({
	            selector: 'Filemenu',
	            inputs: ['appPrefix'],
	            template: __webpack_require__(463)
	        }), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef, router_1.Router, CommBroker_1.CommBroker])
	    ], Filemenu);
	    return Filemenu;
	})();
	exports.Filemenu = Filemenu;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */
/***/ function(module, exports) {

	/**
	 * abstract class to provide utility methods for action creators
	 */
	var Actions = (function () {
	    function Actions() {
	    }
	    Actions.prototype.createDispatcher = function (appStore, action) {
	        var _this = this;
	        return function () {
	            var n = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                n[_i - 0] = arguments[_i];
	            }
	            return appStore.dispatch(action.call.apply(action, [_this].concat(n)));
	        };
	    };
	    return Actions;
	})();
	exports.Actions = Actions;
	//# sourceMappingURL=actions.js.map

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Wrapper for app store
	 */
	var isEqual = __webpack_require__(425);
	var getValue = __webpack_require__(431).get;
	var AppStore = (function () {
	    function AppStore(store) {
	        this.store = store;
	        this.getState = function () {
	            return store.getState();
	        };
	        this.subscribe = function (subscriber, filter, useIsEqual) {
	            // decorate the subscriber with the state passed in as a parameter
	            if (!filter)
	                return store.subscribe(function () { return subscriber(store.getState()); });
	            function defaultCompare(a, b) {
	                return a === b;
	            }
	            function watch(getState, objectPath, compare) {
	                compare = compare || defaultCompare;
	                var baseVal = getValue(getState(), objectPath);
	                return function w(fn) {
	                    return function () {
	                        var newVal = getValue(getState(), objectPath);
	                        if (compare(baseVal, newVal))
	                            return;
	                        fn(newVal, baseVal, objectPath);
	                        baseVal = newVal;
	                    };
	                };
	            }
	            var w = watch(store.getState, filter, useIsEqual ? isEqual : undefined);
	            return store.subscribe(w(function (newVal, oldVal, objectPath) {
	                subscriber(objectPath, oldVal, newVal);
	            }));
	        };
	        this.replaceReducer = function (nextReducer) {
	            return store.replaceReducer(nextReducer);
	        };
	        this.dispatch = function (action) {
	            return store.dispatch(action);
	        };
	        this.createDispatcher = function (actionCreator, context) {
	            return function () {
	                var args = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    args[_i - 0] = arguments[_i];
	                }
	                return store.dispatch(actionCreator.call.apply(actionCreator, [context].concat(args)));
	            };
	        };
	    }
	    return AppStore;
	})();
	exports.AppStore = AppStore;
	//# sourceMappingURL=app-store.js.map

/***/ },
/* 331 */
/***/ function(module, exports) {

	function LoggerMiddleware(store) {
	    return function (next) {
	        return function (action) {
	            console.log("MID ACTION: ", action.type + ' ' + store.getState());
	            var result = next(action);
	            return result;
	        };
	    };
	}
	exports.LoggerMiddleware = LoggerMiddleware;
	//# sourceMappingURL=logger.js.map

/***/ },
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */
/***/ function(module, exports) {

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice = Array.prototype.slice;
	var toStr = Object.prototype.toString;
	var funcType = '[object Function]';
	
	module.exports = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);
	
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                args.concat(slice.call(arguments))
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(
	                that,
	                args.concat(slice.call(arguments))
	            );
	        }
	    };
	
	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }
	
	    var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
	
	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }
	
	    return bound;
	};
	


/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	var bind = __webpack_require__(418);
	
	module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isCallable = __webpack_require__(285);
	var fnToStr = Function.prototype.toString;
	var isNonArrowFnRegex = /^\s*function/;
	var isArrowFnWithParensRegex = /^\([^\)]*\) *=>/;
	var isArrowFnWithoutParensRegex = /^[^=]*=>/;
	
	module.exports = function isArrowFunction(fn) {
		if (!isCallable(fn)) { return false; }
		var fnStr = fnToStr.call(fn);
		return fnStr.length > 0 &&
			!isNonArrowFnRegex.test(fnStr) &&
			(isArrowFnWithParensRegex.test(fnStr) || isArrowFnWithoutParensRegex.test(fnStr));
	};


/***/ },
/* 421 */
/***/ function(module, exports) {

	'use strict';
	
	var boolToStr = Boolean.prototype.toString;
	
	var tryBooleanObject = function tryBooleanObject(value) {
		try {
			boolToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var boolClass = '[object Boolean]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isBoolean(value) {
		if (typeof value === 'boolean') { return true; }
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryBooleanObject(value) : toStr.call(value) === boolClass;
	};


/***/ },
/* 422 */
/***/ function(module, exports) {

	'use strict';
	
	var getDay = Date.prototype.getDay;
	var tryDateObject = function tryDateObject(value) {
		try {
			getDay.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	
	var toStr = Object.prototype.toString;
	var dateClass = '[object Date]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isDateObject(value) {
		if (typeof value !== 'object' || value === null) { return false; }
		return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
	};


/***/ },
/* 423 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function () {
		var mapForEach = (function () {
			if (typeof Map !== 'function') { return null; }
			try {
				Map.prototype.forEach.call({}, function () {});
			} catch (e) {
				return Map.prototype.forEach;
			}
			return null;
		}());
	
		var setForEach = (function () {
			if (typeof Set !== 'function') { return null; }
			try {
				Set.prototype.forEach.call({}, function () {});
			} catch (e) {
				return Set.prototype.forEach;
			}
			return null;
		}());
	
		return { Map: mapForEach, Set: setForEach };
	};


/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isSymbol = __webpack_require__(286);
	
	module.exports = function getSymbolIterator() {
		var symbolIterator = typeof Symbol === 'function' && isSymbol(Symbol.iterator) ? Symbol.iterator : null;
	
		if (typeof Object.getOwnPropertyNames === 'function' && typeof Map === 'function' && typeof Map.prototype.entries === 'function') {
			Object.getOwnPropertyNames(Map.prototype).forEach(function (name) {
				if (name !== 'entries' && name !== 'size' && Map.prototype[name] === Map.prototype.entries) {
					symbolIterator = name;
				}
			});
		}
	
		return symbolIterator;
	};


/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ObjectPrototype = Object.prototype;
	var toStr = ObjectPrototype.toString;
	var booleanValue = Boolean.prototype.valueOf;
	var has = __webpack_require__(419);
	var isArrowFunction = __webpack_require__(420);
	var isBoolean = __webpack_require__(421);
	var isDate = __webpack_require__(422);
	var isGenerator = __webpack_require__(426);
	var isNumber = __webpack_require__(427);
	var isRegex = __webpack_require__(428);
	var isString = __webpack_require__(429);
	var isSymbol = __webpack_require__(286);
	var isCallable = __webpack_require__(285);
	
	var isProto = Object.prototype.isPrototypeOf;
	
	var foo = function foo() {};
	var functionsHaveNames = foo.name === 'foo';
	
	var symbolValue = typeof Symbol === 'function' ? Symbol.prototype.valueOf : null;
	var symbolIterator = __webpack_require__(424)();
	
	var collectionsForEach = __webpack_require__(423)();
	
	var getPrototypeOf = Object.getPrototypeOf;
	if (!getPrototypeOf) {
		/* eslint-disable no-proto */
		if (typeof 'test'.__proto__ === 'object') {
			getPrototypeOf = function (obj) {
				return obj.__proto__;
			};
		} else {
			getPrototypeOf = function (obj) {
				var constructor = obj.constructor,
					oldConstructor;
				if (has(obj, 'constructor')) {
					oldConstructor = constructor;
					if (!(delete obj.constructor)) { // reset constructor
						return null; // can't delete obj.constructor, return null
					}
					constructor = obj.constructor; // get real constructor
					obj.constructor = oldConstructor; // restore constructor
				}
				return constructor ? constructor.prototype : ObjectPrototype; // needed for IE
			};
		}
		/* eslint-enable no-proto */
	}
	
	var isArray = Array.isArray || function (value) {
		return toStr.call(value) === '[object Array]';
	};
	
	var normalizeFnWhitespace = function normalizeFnWhitespace(fnStr) {
		// this is needed in IE 9, at least, which has inconsistencies here.
		return fnStr.replace(/^function ?\(/, 'function (').replace('){', ') {');
	};
	
	var tryMapSetEntries = function tryMapSetEntries(collection) {
		var foundEntries = [];
		try {
			collectionsForEach.Map.call(collection, function (key, value) {
				foundEntries.push([key, value]);
			});
		} catch (notMap) {
			try {
				collectionsForEach.Set.call(collection, function (value) {
					foundEntries.push([value]);
				});
			} catch (notSet) {
				return false;
			}
		}
		return foundEntries;
	};
	
	module.exports = function isEqual(value, other) {
		if (value === other) { return true; }
		if (value == null || other == null) { return value === other; }
	
		if (toStr.call(value) !== toStr.call(other)) { return false; }
	
		var valIsBool = isBoolean(value);
		var otherIsBool = isBoolean(other);
		if (valIsBool || otherIsBool) {
			return valIsBool && otherIsBool && booleanValue.call(value) === booleanValue.call(other);
		}
	
		var valIsNumber = isNumber(value);
		var otherIsNumber = isNumber(value);
		if (valIsNumber || otherIsNumber) {
			return valIsNumber && otherIsNumber && (Number(value) === Number(other) || (isNaN(value) && isNaN(other)));
		}
	
		var valIsString = isString(value);
		var otherIsString = isString(other);
		if (valIsString || otherIsString) {
			return valIsString && otherIsString && String(value) === String(other);
		}
	
		var valIsDate = isDate(value);
		var otherIsDate = isDate(other);
		if (valIsDate || otherIsDate) {
			return valIsDate && otherIsDate && +value === +other;
		}
	
		var valIsRegex = isRegex(value);
		var otherIsRegex = isRegex(other);
		if (valIsRegex || otherIsRegex) {
			return valIsRegex && otherIsRegex && String(value) === String(other);
		}
	
		var valIsArray = isArray(value);
		var otherIsArray = isArray(other);
		if (valIsArray || otherIsArray) {
			if (!valIsArray || !otherIsArray) { return false; }
			if (value.length !== other.length) { return false; }
			if (String(value) !== String(other)) { return false; }
	
			var index = value.length - 1;
			var equal = true;
			while (equal && index >= 0) {
				equal = has(value, index) && has(other, index) && isEqual(value[index], other[index]);
				index -= 1;
			}
			return equal;
		}
	
		var valueIsSym = isSymbol(value);
		var otherIsSym = isSymbol(other);
		if (valueIsSym !== otherIsSym) { return false; }
		if (valueIsSym && otherIsSym) {
			return symbolValue.call(value) === symbolValue.call(other);
		}
	
		var valueIsGen = isGenerator(value);
		var otherIsGen = isGenerator(other);
		if (valueIsGen !== otherIsGen) { return false; }
	
		var valueIsArrow = isArrowFunction(value);
		var otherIsArrow = isArrowFunction(other);
		if (valueIsArrow !== otherIsArrow) { return false; }
	
		if (isCallable(value) || isCallable(other)) {
			if (functionsHaveNames && !isEqual(value.name, other.name)) { return false; }
			if (!isEqual(value.length, other.length)) { return false; }
	
			var valueStr = normalizeFnWhitespace(String(value));
			var otherStr = normalizeFnWhitespace(String(other));
			if (isEqual(valueStr, otherStr)) { return true; }
	
			if (!valueIsGen && !valueIsArrow) {
				return isEqual(valueStr.replace(/\)\s*\{/, '){'), otherStr.replace(/\)\s*\{/, '){'));
			}
			return isEqual(valueStr, otherStr);
		}
	
		if (typeof value === 'object' || typeof other === 'object') {
			if (typeof value !== typeof other) { return false; }
			if (isProto.call(value, other) || isProto.call(other, value)) { return false; }
			if (getPrototypeOf(value) !== getPrototypeOf(other)) { return false; }
	
			if (symbolIterator) {
				var valueIteratorFn = value[symbolIterator];
				var valueIsIterable = isCallable(valueIteratorFn);
				var otherIteratorFn = other[symbolIterator];
				var otherIsIterable = isCallable(otherIteratorFn);
				if (valueIsIterable !== otherIsIterable) {
					return false;
				}
				if (valueIsIterable && otherIsIterable) {
					var valueIterator = valueIteratorFn.call(value);
					var otherIterator = otherIteratorFn.call(other);
					var valueNext, otherNext;
					do {
						valueNext = valueIterator.next();
						otherNext = otherIterator.next();
						if (!valueNext.done && !otherNext.done && !isEqual(valueNext, otherNext)) {
							return false;
						}
					} while (!valueNext.done && !otherNext.done);
					return valueNext.done === otherNext.done;
				}
			} else if (collectionsForEach.Map || collectionsForEach.Set) {
				var valueEntries = tryMapSetEntries(value);
				var otherEntries = tryMapSetEntries(other);
				if (isArray(valueEntries) !== isArray(otherEntries)) {
					return false; // either: neither is a Map/Set, or one is and the other isn't.
				}
				if (valueEntries && otherEntries) {
					return isEqual(valueEntries, otherEntries);
				}
			}
	
			var key, valueKeyIsRecursive, otherKeyIsRecursive;
			for (key in value) {
				if (has(value, key)) {
					if (!has(other, key)) { return false; }
					valueKeyIsRecursive = value[key] && value[key][key] === value;
					otherKeyIsRecursive = other[key] && other[key][key] === other;
					if (valueKeyIsRecursive !== otherKeyIsRecursive) {
						return false;
					}
					if (!valueKeyIsRecursive && !otherKeyIsRecursive && !isEqual(value[key], other[key])) {
						return false;
					}
				}
			}
			for (key in other) {
				if (has(other, key)) {
					if (!has(value, key)) { return false; }
					valueKeyIsRecursive = value[key] && value[key][key] === value;
					otherKeyIsRecursive = other[key] && other[key][key] === other;
					if (valueKeyIsRecursive !== otherKeyIsRecursive) {
						return false;
					}
					if (!valueKeyIsRecursive && !otherKeyIsRecursive && !isEqual(other[key], value[key])) {
						return false;
					}
				}
			}
			return true;
		}
	
		return false;
	};


/***/ },
/* 426 */
/***/ function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	var fnToStr = Function.prototype.toString;
	var isFnRegex = /^\s*function\*/;
	
	module.exports = function isGeneratorFunction(fn) {
		if (typeof fn !== 'function') { return false; }
		var fnStr = toStr.call(fn);
		return (fnStr === '[object Function]' || fnStr === '[object GeneratorFunction]') && isFnRegex.test(fnToStr.call(fn));
	};
	


/***/ },
/* 427 */
/***/ function(module, exports) {

	'use strict';
	
	var numToStr = Number.prototype.toString;
	var tryNumberObject = function tryNumberObject(value) {
		try {
			numToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var numClass = '[object Number]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isNumberObject(value) {
		if (typeof value === 'number') { return true; }
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
	};


/***/ },
/* 428 */
/***/ function(module, exports) {

	'use strict';
	
	var regexExec = RegExp.prototype.exec;
	var tryRegexExec = function tryRegexExec(value) {
		try {
			regexExec.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var regexClass = '[object RegExp]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isRegex(value) {
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryRegexExec(value) : toStr.call(value) === regexClass;
	};


/***/ },
/* 429 */
/***/ function(module, exports) {

	'use strict';
	
	var strValue = String.prototype.valueOf;
	var tryStringObject = function tryStringObject(value) {
		try {
			strValue.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var strClass = '[object String]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isString(value) {
		if (typeof value === 'string') { return true; }
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
	};


/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global, _) {/**
	 * @license
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern -d -o ./index.js`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	;(function() {
	
	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined;
	
	  /** Used as the semantic version number. */
	  var VERSION = '3.10.1';
	
	  /** Used to compose bitmasks for wrapper metadata. */
	  var BIND_FLAG = 1,
	      BIND_KEY_FLAG = 2,
	      CURRY_BOUND_FLAG = 4,
	      CURRY_FLAG = 8,
	      CURRY_RIGHT_FLAG = 16,
	      PARTIAL_FLAG = 32,
	      PARTIAL_RIGHT_FLAG = 64,
	      ARY_FLAG = 128,
	      REARG_FLAG = 256;
	
	  /** Used as default options for `_.trunc`. */
	  var DEFAULT_TRUNC_LENGTH = 30,
	      DEFAULT_TRUNC_OMISSION = '...';
	
	  /** Used to detect when a function becomes hot. */
	  var HOT_COUNT = 150,
	      HOT_SPAN = 16;
	
	  /** Used as the size to enable large array optimizations. */
	  var LARGE_ARRAY_SIZE = 200;
	
	  /** Used to indicate the type of lazy iteratees. */
	  var LAZY_FILTER_FLAG = 1,
	      LAZY_MAP_FLAG = 2;
	
	  /** Used as the `TypeError` message for "Functions" methods. */
	  var FUNC_ERROR_TEXT = 'Expected a function';
	
	  /** Used as the internal argument placeholder. */
	  var PLACEHOLDER = '__lodash_placeholder__';
	
	  /** `Object#toString` result references. */
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      mapTag = '[object Map]',
	      numberTag = '[object Number]',
	      objectTag = '[object Object]',
	      regexpTag = '[object RegExp]',
	      setTag = '[object Set]',
	      stringTag = '[object String]',
	      weakMapTag = '[object WeakMap]';
	
	  var arrayBufferTag = '[object ArrayBuffer]',
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';
	
	  /** Used to match empty string literals in compiled template source. */
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
	
	  /** Used to match HTML entities and HTML characters. */
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
	      reUnescapedHtml = /[&<>"'`]/g,
	      reHasEscapedHtml = RegExp(reEscapedHtml.source),
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
	
	  /** Used to match template delimiters. */
	  var reEscape = /<%-([\s\S]+?)%>/g,
	      reEvaluate = /<%([\s\S]+?)%>/g,
	      reInterpolate = /<%=([\s\S]+?)%>/g;
	
	  /** Used to match property names within property paths. */
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
	
	  /**
	   * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
	   * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
	   */
	  var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
	      reHasRegExpChars = RegExp(reRegExpChars.source);
	
	  /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
	  var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;
	
	  /** Used to match backslashes in property paths. */
	  var reEscapeChar = /\\(\\)?/g;
	
	  /** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
	
	  /** Used to match `RegExp` flags from their coerced string values. */
	  var reFlags = /\w*$/;
	
	  /** Used to detect hexadecimal string values. */
	  var reHasHexPrefix = /^0[xX]/;
	
	  /** Used to detect host constructors (Safari > 5). */
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	  /** Used to detect unsigned integer values. */
	  var reIsUint = /^\d+$/;
	
	  /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
	  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
	
	  /** Used to ensure capturing order of template delimiters. */
	  var reNoMatch = /($^)/;
	
	  /** Used to match unescaped characters in compiled string literals. */
	  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
	
	  /** Used to match words to create compound words. */
	  var reWords = (function() {
	    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
	        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';
	
	    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
	  }());
	
	  /** Used to assign default `context` object properties. */
	  var contextProps = [
	    'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
	    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
	    'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite',
	    'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array',
	    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap'
	  ];
	
	  /** Used to make template sourceURLs easier to identify. */
	  var templateCounter = -1;
	
	  /** Used to identify `toStringTag` values of typed arrays. */
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	  typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	  typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	  typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	  typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	  typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	  typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	  /** Used to identify `toStringTag` values supported by `_.clone`. */
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] =
	  cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	  cloneableTags[dateTag] = cloneableTags[float32Tag] =
	  cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	  cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	  cloneableTags[numberTag] = cloneableTags[objectTag] =
	  cloneableTags[regexpTag] = cloneableTags[stringTag] =
	  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] =
	  cloneableTags[mapTag] = cloneableTags[setTag] =
	  cloneableTags[weakMapTag] = false;
	
	  /** Used to map latin-1 supplementary letters to basic latin letters. */
	  var deburredLetters = {
	    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	    '\xc7': 'C',  '\xe7': 'c',
	    '\xd0': 'D',  '\xf0': 'd',
	    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	    '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	    '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	    '\xd1': 'N',  '\xf1': 'n',
	    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	    '\xc6': 'Ae', '\xe6': 'ae',
	    '\xde': 'Th', '\xfe': 'th',
	    '\xdf': 'ss'
	  };
	
	  /** Used to map characters to HTML entities. */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '`': '&#96;'
	  };
	
	  /** Used to map HTML entities to characters. */
	  var htmlUnescapes = {
	    '&amp;': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&#39;': "'",
	    '&#96;': '`'
	  };
	
	  /** Used to determine if values are of the language type `Object`. */
	  var objectTypes = {
	    'function': true,
	    'object': true
	  };
	
	  /** Used to escape characters for inclusion in compiled regexes. */
	  var regexpEscapes = {
	    '0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
	    '5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
	    'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
	    'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
	    'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
	  };
	
	  /** Used to escape characters for inclusion in compiled string literals. */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  /** Detect free variable `exports`. */
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	
	  /** Detect free variable `module`. */
	  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
	
	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;
	
	  /** Detect free variable `self`. */
	  var freeSelf = objectTypes[typeof self] && self && self.Object && self;
	
	  /** Detect free variable `window`. */
	  var freeWindow = objectTypes[typeof window] && window && window.Object && window;
	
	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;
	
	  /**
	   * Used as a reference to the global object.
	   *
	   * The `this` value is used if it's the global object to avoid Greasemonkey's
	   * restricted `window` object, otherwise the `window` object is used.
	   */
	  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * The base implementation of `compareAscending` which compares values and
	   * sorts them in ascending order without guaranteeing a stable sort.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {number} Returns the sort order indicator for `value`.
	   */
	  function baseCompareAscending(value, other) {
	    if (value !== other) {
	      var valIsNull = value === null,
	          valIsUndef = value === undefined,
	          valIsReflexive = value === value;
	
	      var othIsNull = other === null,
	          othIsUndef = other === undefined,
	          othIsReflexive = other === other;
	
	      if ((value > other && !othIsNull) || !valIsReflexive ||
	          (valIsNull && !othIsUndef && othIsReflexive) ||
	          (valIsUndef && othIsReflexive)) {
	        return 1;
	      }
	      if ((value < other && !valIsNull) || !othIsReflexive ||
	          (othIsNull && !valIsUndef && valIsReflexive) ||
	          (othIsUndef && valIsReflexive)) {
	        return -1;
	      }
	    }
	    return 0;
	  }
	
	  /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseFindIndex(array, predicate, fromRight) {
	    var length = array.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * The base implementation of `_.indexOf` without support for binary searches.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    if (value !== value) {
	      return indexOfNaN(array, fromIndex);
	    }
	    var index = fromIndex - 1,
	        length = array.length;
	
	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * The base implementation of `_.isFunction` without support for environments
	   * with incorrect `typeof` results.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	   */
	  function baseIsFunction(value) {
	    // Avoid a Chakra JIT bug in compatibility modes of IE 11.
	    // See https://github.com/jashkenas/underscore/issues/1621 for more details.
	    return typeof value == 'function' || false;
	  }
	
	  /**
	   * Converts `value` to a string if it's not one. An empty string is returned
	   * for `null` or `undefined` values.
	   *
	   * @private
	   * @param {*} value The value to process.
	   * @returns {string} Returns the string.
	   */
	  function baseToString(value) {
	    return value == null ? '' : (value + '');
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the first character not found in `chars`.
	   */
	  function charsLeftIndex(string, chars) {
	    var index = -1,
	        length = string.length;
	
	    while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the last character not found in `chars`.
	   */
	  function charsRightIndex(string, chars) {
	    var index = string.length;
	
	    while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }
	
	  /**
	   * Used by `_.sortBy` to compare transformed elements of a collection and stable
	   * sort them in ascending order.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareAscending(object, other) {
	    return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
	  }
	
	  /**
	   * Used by `_.sortByOrder` to compare multiple properties of a value to another
	   * and stable sort them.
	   *
	   * If `orders` is unspecified, all valuess are sorted in ascending order. Otherwise,
	   * a value is sorted in ascending order if its corresponding order is "asc", and
	   * descending if "desc".
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {boolean[]} orders The order to sort by for each property.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareMultiple(object, other, orders) {
	    var index = -1,
	        objCriteria = object.criteria,
	        othCriteria = other.criteria,
	        length = objCriteria.length,
	        ordersLength = orders.length;
	
	    while (++index < length) {
	      var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
	      if (result) {
	        if (index >= ordersLength) {
	          return result;
	        }
	        var order = orders[index];
	        return result * ((order === 'asc' || order === true) ? 1 : -1);
	      }
	    }
	    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	    // that causes it, under certain circumstances, to provide the same value for
	    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	    // for more details.
	    //
	    // This also ensures a stable sort in V8 and other engines.
	    // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
	    return object.index - other.index;
	  }
	
	  /**
	   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */
	  function deburrLetter(letter) {
	    return deburredLetters[letter];
	  }
	
	  /**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeHtmlChar(chr) {
	    return htmlEscapes[chr];
	  }
	
	  /**
	   * Used by `_.escapeRegExp` to escape characters for inclusion in compiled regexes.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @param {string} leadingChar The capture group for a leading character.
	   * @param {string} whitespaceChar The capture group for a whitespace character.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
	    if (leadingChar) {
	      chr = regexpEscapes[chr];
	    } else if (whitespaceChar) {
	      chr = stringEscapes[chr];
	    }
	    return '\\' + chr;
	  }
	
	  /**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(chr) {
	    return '\\' + stringEscapes[chr];
	  }
	
	  /**
	   * Gets the index at which the first occurrence of `NaN` is found in `array`.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	   */
	  function indexOfNaN(array, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 0 : -1);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var other = array[index];
	      if (other !== other) {
	        return index;
	      }
	    }
	    return -1;
	  }
	
	  /**
	   * Checks if `value` is object-like.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	   */
	  function isObjectLike(value) {
	    return !!value && typeof value == 'object';
	  }
	
	  /**
	   * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
	   * character code is whitespace.
	   *
	   * @private
	   * @param {number} charCode The character code to inspect.
	   * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
	   */
	  function isSpace(charCode) {
	    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
	      (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
	  }
	
	  /**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */
	  function replaceHolders(array, placeholder) {
	    var index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];
	
	    while (++index < length) {
	      if (array[index] === placeholder) {
	        array[index] = PLACEHOLDER;
	        result[++resIndex] = index;
	      }
	    }
	    return result;
	  }
	
	  /**
	   * An implementation of `_.uniq` optimized for sorted arrays without support
	   * for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} [iteratee] The function invoked per iteration.
	   * @returns {Array} Returns the new duplicate-value-free array.
	   */
	  function sortedUniq(array, iteratee) {
	    var seen,
	        index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];
	
	    while (++index < length) {
	      var value = array[index],
	          computed = iteratee ? iteratee(value, index, array) : value;
	
	      if (!index || seen !== computed) {
	        seen = computed;
	        result[++resIndex] = value;
	      }
	    }
	    return result;
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the first non-whitespace character.
	   */
	  function trimmedLeftIndex(string) {
	    var index = -1,
	        length = string.length;
	
	    while (++index < length && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }
	
	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the last non-whitespace character.
	   */
	  function trimmedRightIndex(string) {
	    var index = string.length;
	
	    while (index-- && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }
	
	  /**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  function unescapeHtmlChar(chr) {
	    return htmlUnescapes[chr];
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  /**
	   * Create a new pristine `lodash` function using the given `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Utility
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // using `context` to mock `Date#getTime` use in `_.now`
	   * var mock = _.runInContext({
	   *   'Date': function() {
	   *     return { 'getTime': getTimeMock };
	   *   }
	   * });
	   *
	   * // or creating a suped-up `defer` in Node.js
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */
	  function runInContext(context) {
	    // Avoid issues with some ES3 environments that attempt to use values, named
	    // after built-in constructors like `Object`, for the creation of literals.
	    // ES5 clears this up by stating that literals must use built-in constructors.
	    // See https://es5.github.io/#x11.1.5 for more details.
	    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;
	
	    /** Native constructor references. */
	    var Array = context.Array,
	        Date = context.Date,
	        Error = context.Error,
	        Function = context.Function,
	        Math = context.Math,
	        Number = context.Number,
	        Object = context.Object,
	        RegExp = context.RegExp,
	        String = context.String,
	        TypeError = context.TypeError;
	
	    /** Used for native method references. */
	    var arrayProto = Array.prototype,
	        objectProto = Object.prototype,
	        stringProto = String.prototype;
	
	    /** Used to resolve the decompiled source of functions. */
	    var fnToString = Function.prototype.toString;
	
	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto.hasOwnProperty;
	
	    /** Used to generate unique IDs. */
	    var idCounter = 0;
	
	    /**
	     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objToString = objectProto.toString;
	
	    /** Used to restore the original `_` reference in `_.noConflict`. */
	    var oldDash = root._;
	
	    /** Used to detect if a method is native. */
	    var reIsNative = RegExp('^' +
	      fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	    );
	
	    /** Native method references. */
	    var ArrayBuffer = context.ArrayBuffer,
	        clearTimeout = context.clearTimeout,
	        parseFloat = context.parseFloat,
	        pow = Math.pow,
	        propertyIsEnumerable = objectProto.propertyIsEnumerable,
	        Set = getNative(context, 'Set'),
	        setTimeout = context.setTimeout,
	        splice = arrayProto.splice,
	        Uint8Array = context.Uint8Array,
	        WeakMap = getNative(context, 'WeakMap');
	
	    /* Native method references for those with the same name as other `lodash` methods. */
	    var nativeCeil = Math.ceil,
	        nativeCreate = getNative(Object, 'create'),
	        nativeFloor = Math.floor,
	        nativeIsArray = getNative(Array, 'isArray'),
	        nativeIsFinite = context.isFinite,
	        nativeKeys = getNative(Object, 'keys'),
	        nativeMax = Math.max,
	        nativeMin = Math.min,
	        nativeNow = getNative(Date, 'now'),
	        nativeParseInt = context.parseInt,
	        nativeRandom = Math.random;
	
	    /** Used as references for `-Infinity` and `Infinity`. */
	    var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
	        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
	
	    /** Used as references for the maximum length and index of an array. */
	    var MAX_ARRAY_LENGTH = 4294967295,
	        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
	
	    /**
	     * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	     * of an array-like value.
	     */
	    var MAX_SAFE_INTEGER = 9007199254740991;
	
	    /** Used to store function metadata. */
	    var metaMap = WeakMap && new WeakMap;
	
	    /** Used to lookup unminified function names. */
	    var realNames = {};
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a `lodash` object which wraps `value` to enable implicit chaining.
	     * Methods that operate on and return arrays, collections, and functions can
	     * be chained together. Methods that retrieve a single value or may return a
	     * primitive value will automatically end the chain returning the unwrapped
	     * value. Explicit chaining may be enabled using `_.chain`. The execution of
	     * chained methods is lazy, that is, execution is deferred until `_#value`
	     * is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
	     * fusion is an optimization strategy which merge iteratee calls; this can help
	     * to avoid the creation of intermediate data structures and greatly reduce the
	     * number of iteratee executions.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
	     * `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
	     * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
	     * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
	     * and `where`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
	     * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
	     * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
	     * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
	     * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
	     * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
	     * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
	     * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
	     * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
	     * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
	     * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
	     * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
	     * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
	     * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
	     * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
	     * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
	     * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
	     * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
	     * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
	     * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
	     * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
	     * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
	     * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
	     * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
	     * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
	     * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
	     * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
	     * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
	     * `unescape`, `uniqueId`, `value`, and `words`
	     *
	     * The wrapper method `sample` will return a wrapped value when `n` is provided,
	     * otherwise an unwrapped value is returned.
	     *
	     * @name _
	     * @constructor
	     * @category Chain
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // returns an unwrapped value
	     * wrapped.reduce(function(total, n) {
	     *   return total + n;
	     * });
	     * // => 6
	     *
	     * // returns a wrapped value
	     * var squares = wrapped.map(function(n) {
	     *   return n * n;
	     * });
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */
	    function lodash(value) {
	      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	        if (value instanceof LodashWrapper) {
	          return value;
	        }
	        if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
	          return wrapperClone(value);
	        }
	      }
	      return new LodashWrapper(value);
	    }
	
	    /**
	     * The function whose prototype all chaining wrappers inherit from.
	     *
	     * @private
	     */
	    function baseLodash() {
	      // No operation performed.
	    }
	
	    /**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
	     * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
	     */
	    function LodashWrapper(value, chainAll, actions) {
	      this.__wrapped__ = value;
	      this.__actions__ = actions || [];
	      this.__chain__ = !!chainAll;
	    }
	
	    /**
	     * An object environment feature flags.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    var support = lodash.support = {};
	
	    /**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB). Change the following template settings to use
	     * alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    lodash.templateSettings = {
	
	      /**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'escape': reEscape,
	
	      /**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'evaluate': reEvaluate,
	
	      /**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'interpolate': reInterpolate,
	
	      /**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type string
	       */
	      'variable': '',
	
	      /**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type Object
	       */
	      'imports': {
	
	        /**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type Function
	         */
	        '_': lodash
	      }
	    };
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     */
	    function LazyWrapper(value) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__dir__ = 1;
	      this.__filtered__ = false;
	      this.__iteratees__ = [];
	      this.__takeCount__ = POSITIVE_INFINITY;
	      this.__views__ = [];
	    }
	
	    /**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */
	    function lazyClone() {
	      var result = new LazyWrapper(this.__wrapped__);
	      result.__actions__ = arrayCopy(this.__actions__);
	      result.__dir__ = this.__dir__;
	      result.__filtered__ = this.__filtered__;
	      result.__iteratees__ = arrayCopy(this.__iteratees__);
	      result.__takeCount__ = this.__takeCount__;
	      result.__views__ = arrayCopy(this.__views__);
	      return result;
	    }
	
	    /**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */
	    function lazyReverse() {
	      if (this.__filtered__) {
	        var result = new LazyWrapper(this);
	        result.__dir__ = -1;
	        result.__filtered__ = true;
	      } else {
	        result = this.clone();
	        result.__dir__ *= -1;
	      }
	      return result;
	    }
	
	    /**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */
	    function lazyValue() {
	      var array = this.__wrapped__.value(),
	          dir = this.__dir__,
	          isArr = isArray(array),
	          isRight = dir < 0,
	          arrLength = isArr ? array.length : 0,
	          view = getView(0, arrLength, this.__views__),
	          start = view.start,
	          end = view.end,
	          length = end - start,
	          index = isRight ? end : (start - 1),
	          iteratees = this.__iteratees__,
	          iterLength = iteratees.length,
	          resIndex = 0,
	          takeCount = nativeMin(length, this.__takeCount__);
	
	      if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
	        return baseWrapperValue((isRight && isArr) ? array.reverse() : array, this.__actions__);
	      }
	      var result = [];
	
	      outer:
	      while (length-- && resIndex < takeCount) {
	        index += dir;
	
	        var iterIndex = -1,
	            value = array[index];
	
	        while (++iterIndex < iterLength) {
	          var data = iteratees[iterIndex],
	              iteratee = data.iteratee,
	              type = data.type,
	              computed = iteratee(value);
	
	          if (type == LAZY_MAP_FLAG) {
	            value = computed;
	          } else if (!computed) {
	            if (type == LAZY_FILTER_FLAG) {
	              continue outer;
	            } else {
	              break outer;
	            }
	          }
	        }
	        result[resIndex++] = value;
	      }
	      return result;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a cache object to store key/value pairs.
	     *
	     * @private
	     * @static
	     * @name Cache
	     * @memberOf _.memoize
	     */
	    function MapCache() {
	      this.__data__ = {};
	    }
	
	    /**
	     * Removes `key` and its value from the cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
	     */
	    function mapDelete(key) {
	      return this.has(key) && delete this.__data__[key];
	    }
	
	    /**
	     * Gets the cached value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the cached value.
	     */
	    function mapGet(key) {
	      return key == '__proto__' ? undefined : this.__data__[key];
	    }
	
	    /**
	     * Checks if a cached value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function mapHas(key) {
	      return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
	    }
	
	    /**
	     * Sets `value` to `key` of the cache.
	     *
	     * @private
	     * @name set
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to cache.
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache object.
	     */
	    function mapSet(key, value) {
	      if (key != '__proto__') {
	        this.__data__[key] = value;
	      }
	      return this;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     *
	     * Creates a cache object to store unique values.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     */
	    function SetCache(values) {
	      var length = values ? values.length : 0;
	
	      this.data = { 'hash': nativeCreate(null), 'set': new Set };
	      while (length--) {
	        this.push(values[length]);
	      }
	    }
	
	    /**
	     * Checks if `value` is in `cache` mimicking the return signature of
	     * `_.indexOf` by returning `0` if the value is found, else `-1`.
	     *
	     * @private
	     * @param {Object} cache The cache to search.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `0` if `value` is found, else `-1`.
	     */
	    function cacheIndexOf(cache, value) {
	      var data = cache.data,
	          result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
	
	      return result ? 0 : -1;
	    }
	
	    /**
	     * Adds `value` to the cache.
	     *
	     * @private
	     * @name push
	     * @memberOf SetCache
	     * @param {*} value The value to cache.
	     */
	    function cachePush(value) {
	      var data = this.data;
	      if (typeof value == 'string' || isObject(value)) {
	        data.set.add(value);
	      } else {
	        data.hash[value] = true;
	      }
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a new array joining `array` with `other`.
	     *
	     * @private
	     * @param {Array} array The array to join.
	     * @param {Array} other The other array to join.
	     * @returns {Array} Returns the new concatenated array.
	     */
	    function arrayConcat(array, other) {
	      var index = -1,
	          length = array.length,
	          othIndex = -1,
	          othLength = other.length,
	          result = Array(length + othLength);
	
	      while (++index < length) {
	        result[index] = array[index];
	      }
	      while (++othIndex < othLength) {
	        result[index++] = other[othIndex];
	      }
	      return result;
	    }
	
	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayCopy(source, array) {
	      var index = -1,
	          length = source.length;
	
	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }
	
	    /**
	     * A specialized version of `_.forEach` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEach(array, iteratee) {
	      var index = -1,
	          length = array.length;
	
	      while (++index < length) {
	        if (iteratee(array[index], index, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }
	
	    /**
	     * A specialized version of `_.forEachRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEachRight(array, iteratee) {
	      var length = array.length;
	
	      while (length--) {
	        if (iteratee(array[length], length, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }
	
	    /**
	     * A specialized version of `_.every` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     */
	    function arrayEvery(array, predicate) {
	      var index = -1,
	          length = array.length;
	
	      while (++index < length) {
	        if (!predicate(array[index], index, array)) {
	          return false;
	        }
	      }
	      return true;
	    }
	
	    /**
	     * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
	     * with one argument: (value).
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function arrayExtremum(array, iteratee, comparator, exValue) {
	      var index = -1,
	          length = array.length,
	          computed = exValue,
	          result = computed;
	
	      while (++index < length) {
	        var value = array[index],
	            current = +iteratee(value);
	
	        if (comparator(current, computed)) {
	          computed = current;
	          result = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * A specialized version of `_.filter` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function arrayFilter(array, predicate) {
	      var index = -1,
	          length = array.length,
	          resIndex = -1,
	          result = [];
	
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * A specialized version of `_.map` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function arrayMap(array, iteratee) {
	      var index = -1,
	          length = array.length,
	          result = Array(length);
	
	      while (++index < length) {
	        result[index] = iteratee(array[index], index, array);
	      }
	      return result;
	    }
	
	    /**
	     * Appends the elements of `values` to `array`.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to append.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayPush(array, values) {
	      var index = -1,
	          length = values.length,
	          offset = array.length;
	
	      while (++index < length) {
	        array[offset + index] = values[index];
	      }
	      return array;
	    }
	
	    /**
	     * A specialized version of `_.reduce` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the first element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduce(array, iteratee, accumulator, initFromArray) {
	      var index = -1,
	          length = array.length;
	
	      if (initFromArray && length) {
	        accumulator = array[++index];
	      }
	      while (++index < length) {
	        accumulator = iteratee(accumulator, array[index], index, array);
	      }
	      return accumulator;
	    }
	
	    /**
	     * A specialized version of `_.reduceRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the last element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
	      var length = array.length;
	      if (initFromArray && length) {
	        accumulator = array[--length];
	      }
	      while (length--) {
	        accumulator = iteratee(accumulator, array[length], length, array);
	      }
	      return accumulator;
	    }
	
	    /**
	     * A specialized version of `_.some` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function arraySome(array, predicate) {
	      var index = -1,
	          length = array.length;
	
	      while (++index < length) {
	        if (predicate(array[index], index, array)) {
	          return true;
	        }
	      }
	      return false;
	    }
	
	    /**
	     * A specialized version of `_.sum` for arrays without support for callback
	     * shorthands and `this` binding..
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function arraySum(array, iteratee) {
	      var length = array.length,
	          result = 0;
	
	      while (length--) {
	        result += +iteratee(array[length]) || 0;
	      }
	      return result;
	    }
	
	    /**
	     * Used by `_.defaults` to customize its `_.assign` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : objectValue;
	    }
	
	    /**
	     * Used by `_.template` to customize its `_.assign` use.
	     *
	     * **Note:** This function is like `assignDefaults` except that it ignores
	     * inherited property values when checking if a property is `undefined`.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @param {string} key The key associated with the object and source values.
	     * @param {Object} object The destination object.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignOwnDefaults(objectValue, sourceValue, key, object) {
	      return (objectValue === undefined || !hasOwnProperty.call(object, key))
	        ? sourceValue
	        : objectValue;
	    }
	
	    /**
	     * A specialized version of `_.assign` for customizing assigned values without
	     * support for argument juggling, multiple sources, and `this` binding `customizer`
	     * functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     */
	    function assignWith(object, source, customizer) {
	      var index = -1,
	          props = keys(source),
	          length = props.length;
	
	      while (++index < length) {
	        var key = props[index],
	            value = object[key],
	            result = customizer(value, source[key], key, object, source);
	
	        if ((result === result ? (result !== value) : (value === value)) ||
	            (value === undefined && !(key in object))) {
	          object[key] = result;
	        }
	      }
	      return object;
	    }
	
	    /**
	     * The base implementation of `_.assign` without support for argument juggling,
	     * multiple sources, and `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssign(object, source) {
	      return source == null
	        ? object
	        : baseCopy(source, keys(source), object);
	    }
	
	    /**
	     * The base implementation of `_.at` without support for string collections
	     * and individual key arguments.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {number[]|string[]} props The property names or indexes of elements to pick.
	     * @returns {Array} Returns the new array of picked elements.
	     */
	    function baseAt(collection, props) {
	      var index = -1,
	          isNil = collection == null,
	          isArr = !isNil && isArrayLike(collection),
	          length = isArr ? collection.length : 0,
	          propsLength = props.length,
	          result = Array(propsLength);
	
	      while(++index < propsLength) {
	        var key = props[index];
	        if (isArr) {
	          result[index] = isIndex(key, length) ? collection[key] : undefined;
	        } else {
	          result[index] = isNil ? undefined : collection[key];
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property names to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @returns {Object} Returns `object`.
	     */
	    function baseCopy(source, props, object) {
	      object || (object = {});
	
	      var index = -1,
	          length = props.length;
	
	      while (++index < length) {
	        var key = props[index];
	        object[key] = source[key];
	      }
	      return object;
	    }
	
	    /**
	     * The base implementation of `_.callback` which supports specifying the
	     * number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function baseCallback(func, thisArg, argCount) {
	      var type = typeof func;
	      if (type == 'function') {
	        return thisArg === undefined
	          ? func
	          : bindCallback(func, thisArg, argCount);
	      }
	      if (func == null) {
	        return identity;
	      }
	      if (type == 'object') {
	        return baseMatches(func);
	      }
	      return thisArg === undefined
	        ? property(func)
	        : baseMatchesProperty(func, thisArg);
	    }
	
	    /**
	     * The base implementation of `_.clone` without support for argument juggling
	     * and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The object `value` belongs to.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates clones with source counterparts.
	     * @returns {*} Returns the cloned value.
	     */
	    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	      var result;
	      if (customizer) {
	        result = object ? customizer(value, key, object) : customizer(value);
	      }
	      if (result !== undefined) {
	        return result;
	      }
	      if (!isObject(value)) {
	        return value;
	      }
	      var isArr = isArray(value);
	      if (isArr) {
	        result = initCloneArray(value);
	        if (!isDeep) {
	          return arrayCopy(value, result);
	        }
	      } else {
	        var tag = objToString.call(value),
	            isFunc = tag == funcTag;
	
	        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	          result = initCloneObject(isFunc ? {} : value);
	          if (!isDeep) {
	            return baseAssign(result, value);
	          }
	        } else {
	          return cloneableTags[tag]
	            ? initCloneByTag(value, tag, isDeep)
	            : (object ? value : {});
	        }
	      }
	      // Check for circular references and return its corresponding clone.
	      stackA || (stackA = []);
	      stackB || (stackB = []);
	
	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == value) {
	          return stackB[length];
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate it with its clone.
	      stackA.push(value);
	      stackB.push(result);
	
	      // Recursively populate clone (susceptible to call stack limits).
	      (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	        result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} prototype The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */
	    var baseCreate = (function() {
	      function object() {}
	      return function(prototype) {
	        if (isObject(prototype)) {
	          object.prototype = prototype;
	          var result = new object;
	          object.prototype = undefined;
	        }
	        return result || {};
	      };
	    }());
	
	    /**
	     * The base implementation of `_.delay` and `_.defer` which accepts an index
	     * of where to slice the arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Object} args The arguments provide to `func`.
	     * @returns {number} Returns the timer id.
	     */
	    function baseDelay(func, wait, args) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return setTimeout(function() { func.apply(undefined, args); }, wait);
	    }
	
	    /**
	     * The base implementation of `_.difference` which accepts a single array
	     * of values to exclude.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     */
	    function baseDifference(array, values) {
	      var length = array ? array.length : 0,
	          result = [];
	
	      if (!length) {
	        return result;
	      }
	      var index = -1,
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	          valuesLength = values.length;
	
	      if (cache) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	        values = cache;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index];
	
	        if (isCommon && value === value) {
	          var valuesIndex = valuesLength;
	          while (valuesIndex--) {
	            if (values[valuesIndex] === value) {
	              continue outer;
	            }
	          }
	          result.push(value);
	        }
	        else if (indexOf(values, value, 0) < 0) {
	          result.push(value);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.forEach` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEach = createBaseEach(baseForOwn);
	
	    /**
	     * The base implementation of `_.forEachRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEachRight = createBaseEach(baseForOwnRight, true);
	
	    /**
	     * The base implementation of `_.every` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */
	    function baseEvery(collection, predicate) {
	      var result = true;
	      baseEach(collection, function(value, index, collection) {
	        result = !!predicate(value, index, collection);
	        return result;
	      });
	      return result;
	    }
	
	    /**
	     * Gets the extremum value of `collection` invoking `iteratee` for each value
	     * in `collection` to generate the criterion by which the value is ranked.
	     * The `iteratee` is invoked with three arguments: (value, index|key, collection).
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function baseExtremum(collection, iteratee, comparator, exValue) {
	      var computed = exValue,
	          result = computed;
	
	      baseEach(collection, function(value, index, collection) {
	        var current = +iteratee(value, index, collection);
	        if (comparator(current, computed) || (current === exValue && current === result)) {
	          computed = current;
	          result = value;
	        }
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */
	    function baseFill(array, value, start, end) {
	      var length = array.length;
	
	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : (end >>> 0);
	      start >>>= 0;
	
	      while (start < length) {
	        array[start++] = value;
	      }
	      return array;
	    }
	
	    /**
	     * The base implementation of `_.filter` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function baseFilter(collection, predicate) {
	      var result = [];
	      baseEach(collection, function(value, index, collection) {
	        if (predicate(value, index, collection)) {
	          result.push(value);
	        }
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
	     * without support for callback shorthands and `this` binding, which iterates
	     * over `collection` using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @param {boolean} [retKey] Specify returning the key of the found element
	     *  instead of the element itself.
	     * @returns {*} Returns the found element or its key, else `undefined`.
	     */
	    function baseFind(collection, predicate, eachFunc, retKey) {
	      var result;
	      eachFunc(collection, function(value, key, collection) {
	        if (predicate(value, key, collection)) {
	          result = retKey ? key : value;
	          return false;
	        }
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.flatten` with added support for restricting
	     * flattening and specifying the start index.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */
	    function baseFlatten(array, isDeep, isStrict, result) {
	      result || (result = []);
	
	      var index = -1,
	          length = array.length;
	
	      while (++index < length) {
	        var value = array[index];
	        if (isObjectLike(value) && isArrayLike(value) &&
	            (isStrict || isArray(value) || isArguments(value))) {
	          if (isDeep) {
	            // Recursively flatten arrays (susceptible to call stack limits).
	            baseFlatten(value, isDeep, isStrict, result);
	          } else {
	            arrayPush(result, value);
	          }
	        } else if (!isStrict) {
	          result[result.length] = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `baseForIn` and `baseForOwn` which iterates
	     * over `object` properties returned by `keysFunc` invoking `iteratee` for
	     * each property. Iteratee functions may exit iteration early by explicitly
	     * returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();
	
	    /**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseForRight = createBaseFor(true);
	
	    /**
	     * The base implementation of `_.forIn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForIn(object, iteratee) {
	      return baseFor(object, iteratee, keysIn);
	    }
	
	    /**
	     * The base implementation of `_.forOwn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	      return baseFor(object, iteratee, keys);
	    }
	
	    /**
	     * The base implementation of `_.forOwnRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwnRight(object, iteratee) {
	      return baseForRight(object, iteratee, keys);
	    }
	
	    /**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from those provided.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the new array of filtered property names.
	     */
	    function baseFunctions(object, props) {
	      var index = -1,
	          length = props.length,
	          resIndex = -1,
	          result = [];
	
	      while (++index < length) {
	        var key = props[index];
	        if (isFunction(object[key])) {
	          result[++resIndex] = key;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `get` without support for string paths
	     * and default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path of the property to get.
	     * @param {string} [pathKey] The key representation of path.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseGet(object, path, pathKey) {
	      if (object == null) {
	        return;
	      }
	      if (pathKey !== undefined && pathKey in toObject(object)) {
	        path = [pathKey];
	      }
	      var index = 0,
	          length = path.length;
	
	      while (object != null && index < length) {
	        object = object[path[index++]];
	      }
	      return (index && index == length) ? object : undefined;
	    }
	
	    /**
	     * The base implementation of `_.isEqual` without support for `this` binding
	     * `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */
	    function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	      if (value === other) {
	        return true;
	      }
	      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	        return value !== value && other !== other;
	      }
	      return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	    }
	
	    /**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	     * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objIsArr = isArray(object),
	          othIsArr = isArray(other),
	          objTag = arrayTag,
	          othTag = arrayTag;
	
	      if (!objIsArr) {
	        objTag = objToString.call(object);
	        if (objTag == argsTag) {
	          objTag = objectTag;
	        } else if (objTag != objectTag) {
	          objIsArr = isTypedArray(object);
	        }
	      }
	      if (!othIsArr) {
	        othTag = objToString.call(other);
	        if (othTag == argsTag) {
	          othTag = objectTag;
	        } else if (othTag != objectTag) {
	          othIsArr = isTypedArray(other);
	        }
	      }
	      var objIsObj = objTag == objectTag,
	          othIsObj = othTag == objectTag,
	          isSameTag = objTag == othTag;
	
	      if (isSameTag && !(objIsArr || objIsObj)) {
	        return equalByTag(object, other, objTag);
	      }
	      if (!isLoose) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	        if (objIsWrapped || othIsWrapped) {
	          return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	        }
	      }
	      if (!isSameTag) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      // For more information on detecting circular references see https://es5.github.io/#JO.
	      stackA || (stackA = []);
	      stackB || (stackB = []);
	
	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == object) {
	          return stackB[length] == other;
	        }
	      }
	      // Add `object` and `other` to the stack of traversed objects.
	      stackA.push(object);
	      stackB.push(other);
	
	      var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
	
	      stackA.pop();
	      stackB.pop();
	
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.isMatch` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} matchData The propery names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */
	    function baseIsMatch(object, matchData, customizer) {
	      var index = matchData.length,
	          length = index,
	          noCustomizer = !customizer;
	
	      if (object == null) {
	        return !length;
	      }
	      object = toObject(object);
	      while (index--) {
	        var data = matchData[index];
	        if ((noCustomizer && data[2])
	              ? data[1] !== object[data[0]]
	              : !(data[0] in object)
	            ) {
	          return false;
	        }
	      }
	      while (++index < length) {
	        data = matchData[index];
	        var key = data[0],
	            objValue = object[key],
	            srcValue = data[1];
	
	        if (noCustomizer && data[2]) {
	          if (objValue === undefined && !(key in object)) {
	            return false;
	          }
	        } else {
	          var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	          if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }
	
	    /**
	     * The base implementation of `_.map` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function baseMap(collection, iteratee) {
	      var index = -1,
	          result = isArrayLike(collection) ? Array(collection.length) : [];
	
	      baseEach(collection, function(value, key, collection) {
	        result[++index] = iteratee(value, key, collection);
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.matches` which does not clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatches(source) {
	      var matchData = getMatchData(source);
	      if (matchData.length == 1 && matchData[0][2]) {
	        var key = matchData[0][0],
	            value = matchData[0][1];
	
	        return function(object) {
	          if (object == null) {
	            return false;
	          }
	          return object[key] === value && (value !== undefined || (key in toObject(object)));
	        };
	      }
	      return function(object) {
	        return baseIsMatch(object, matchData);
	      };
	    }
	
	    /**
	     * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to compare.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatchesProperty(path, srcValue) {
	      var isArr = isArray(path),
	          isCommon = isKey(path) && isStrictComparable(srcValue),
	          pathKey = (path + '');
	
	      path = toPath(path);
	      return function(object) {
	        if (object == null) {
	          return false;
	        }
	        var key = pathKey;
	        object = toObject(object);
	        if ((isArr || !isCommon) && !(key in object)) {
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          if (object == null) {
	            return false;
	          }
	          key = last(path);
	          object = toObject(object);
	        }
	        return object[key] === srcValue
	          ? (srcValue !== undefined || (key in object))
	          : baseIsEqual(srcValue, object[key], undefined, true);
	      };
	    }
	
	    /**
	     * The base implementation of `_.merge` without support for argument juggling,
	     * multiple sources, and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {Object} Returns `object`.
	     */
	    function baseMerge(object, source, customizer, stackA, stackB) {
	      if (!isObject(object)) {
	        return object;
	      }
	      var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	          props = isSrcArr ? undefined : keys(source);
	
	      arrayEach(props || source, function(srcValue, key) {
	        if (props) {
	          key = srcValue;
	          srcValue = source[key];
	        }
	        if (isObjectLike(srcValue)) {
	          stackA || (stackA = []);
	          stackB || (stackB = []);
	          baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	        }
	        else {
	          var value = object[key],
	              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	              isCommon = result === undefined;
	
	          if (isCommon) {
	            result = srcValue;
	          }
	          if ((result !== undefined || (isSrcArr && !(key in object))) &&
	              (isCommon || (result === result ? (result !== value) : (value === value)))) {
	            object[key] = result;
	          }
	        }
	      });
	      return object;
	    }
	
	    /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	      var length = stackA.length,
	          srcValue = source[key];
	
	      while (length--) {
	        if (stackA[length] == srcValue) {
	          object[key] = stackB[length];
	          return;
	        }
	      }
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;
	
	      if (isCommon) {
	        result = srcValue;
	        if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	          result = isArray(value)
	            ? value
	            : (isArrayLike(value) ? arrayCopy(value) : []);
	        }
	        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          result = isArguments(value)
	            ? toPlainObject(value)
	            : (isPlainObject(value) ? value : {});
	        }
	        else {
	          isCommon = false;
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate
	      // it with its merged value.
	      stackA.push(srcValue);
	      stackB.push(result);
	
	      if (isCommon) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	      } else if (result === result ? (result !== value) : (value === value)) {
	        object[key] = result;
	      }
	    }
	
	    /**
	     * The base implementation of `_.property` without support for deep paths.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function baseProperty(key) {
	      return function(object) {
	        return object == null ? undefined : object[key];
	      };
	    }
	
	    /**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function basePropertyDeep(path) {
	      var pathKey = (path + '');
	      path = toPath(path);
	      return function(object) {
	        return baseGet(object, path, pathKey);
	      };
	    }
	
	    /**
	     * The base implementation of `_.pullAt` without support for individual
	     * index arguments and capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAt(array, indexes) {
	      var length = array ? indexes.length : 0;
	      while (length--) {
	        var index = indexes[length];
	        if (index != previous && isIndex(index)) {
	          var previous = index;
	          splice.call(array, index, 1);
	        }
	      }
	      return array;
	    }
	
	    /**
	     * The base implementation of `_.random` without support for argument juggling
	     * and returning floating-point numbers.
	     *
	     * @private
	     * @param {number} min The minimum possible value.
	     * @param {number} max The maximum possible value.
	     * @returns {number} Returns the random number.
	     */
	    function baseRandom(min, max) {
	      return min + nativeFloor(nativeRandom() * (max - min + 1));
	    }
	
	    /**
	     * The base implementation of `_.reduce` and `_.reduceRight` without support
	     * for callback shorthands and `this` binding, which iterates over `collection`
	     * using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} accumulator The initial value.
	     * @param {boolean} initFromCollection Specify using the first or last element
	     *  of `collection` as the initial value.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @returns {*} Returns the accumulated value.
	     */
	    function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
	      eachFunc(collection, function(value, index, collection) {
	        accumulator = initFromCollection
	          ? (initFromCollection = false, value)
	          : iteratee(accumulator, value, index, collection);
	      });
	      return accumulator;
	    }
	
	    /**
	     * The base implementation of `setData` without support for hot loop detection.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetData = !metaMap ? identity : function(func, data) {
	      metaMap.set(func, data);
	      return func;
	    };
	
	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;
	
	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;
	
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.some` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function baseSome(collection, predicate) {
	      var result;
	
	      baseEach(collection, function(value, index, collection) {
	        result = predicate(value, index, collection);
	        return !result;
	      });
	      return !!result;
	    }
	
	    /**
	     * The base implementation of `_.sortBy` which uses `comparer` to define
	     * the sort order of `array` and replaces criteria objects with their
	     * corresponding values.
	     *
	     * @private
	     * @param {Array} array The array to sort.
	     * @param {Function} comparer The function to define sort order.
	     * @returns {Array} Returns `array`.
	     */
	    function baseSortBy(array, comparer) {
	      var length = array.length;
	
	      array.sort(comparer);
	      while (length--) {
	        array[length] = array[length].value;
	      }
	      return array;
	    }
	
	    /**
	     * The base implementation of `_.sortByOrder` without param guards.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */
	    function baseSortByOrder(collection, iteratees, orders) {
	      var callback = getCallback(),
	          index = -1;
	
	      iteratees = arrayMap(iteratees, function(iteratee) { return callback(iteratee); });
	
	      var result = baseMap(collection, function(value) {
	        var criteria = arrayMap(iteratees, function(iteratee) { return iteratee(value); });
	        return { 'criteria': criteria, 'index': ++index, 'value': value };
	      });
	
	      return baseSortBy(result, function(object, other) {
	        return compareMultiple(object, other, orders);
	      });
	    }
	
	    /**
	     * The base implementation of `_.sum` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function baseSum(collection, iteratee) {
	      var result = 0;
	      baseEach(collection, function(value, index, collection) {
	        result += +iteratee(value, index, collection) || 0;
	      });
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.uniq` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The function invoked per iteration.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     */
	    function baseUniq(array, iteratee) {
	      var index = -1,
	          indexOf = getIndexOf(),
	          length = array.length,
	          isCommon = indexOf == baseIndexOf,
	          isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
	          seen = isLarge ? createCache() : null,
	          result = [];
	
	      if (seen) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	      } else {
	        isLarge = false;
	        seen = iteratee ? [] : result;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value, index, array) : value;
	
	        if (isCommon && value === value) {
	          var seenIndex = seen.length;
	          while (seenIndex--) {
	            if (seen[seenIndex] === computed) {
	              continue outer;
	            }
	          }
	          if (iteratee) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	        else if (indexOf(seen, computed, 0) < 0) {
	          if (iteratee || isLarge) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.values` and `_.valuesIn` which creates an
	     * array of `object` property values corresponding to the property names
	     * of `props`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} props The property names to get values for.
	     * @returns {Object} Returns the array of property values.
	     */
	    function baseValues(object, props) {
	      var index = -1,
	          length = props.length,
	          result = Array(length);
	
	      while (++index < length) {
	        result[index] = object[props[index]];
	      }
	      return result;
	    }
	
	    /**
	     * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
	     * and `_.takeWhile` without support for callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseWhile(array, predicate, isDrop, fromRight) {
	      var length = array.length,
	          index = fromRight ? length : -1;
	
	      while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
	      return isDrop
	        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
	        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	    }
	
	    /**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to peform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseWrapperValue(value, actions) {
	      var result = value;
	      if (result instanceof LazyWrapper) {
	        result = result.value();
	      }
	      var index = -1,
	          length = actions.length;
	
	      while (++index < length) {
	        var action = actions[index];
	        result = action.func.apply(action.thisArg, arrayPush([result], action.args));
	      }
	      return result;
	    }
	
	    /**
	     * Performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndex(array, value, retHighest) {
	      var low = 0,
	          high = array ? array.length : low;
	
	      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
	        while (low < high) {
	          var mid = (low + high) >>> 1,
	              computed = array[mid];
	
	          if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
	            low = mid + 1;
	          } else {
	            high = mid;
	          }
	        }
	        return high;
	      }
	      return binaryIndexBy(array, value, identity, retHighest);
	    }
	
	    /**
	     * This function is like `binaryIndex` except that it invokes `iteratee` for
	     * `value` and each element of `array` to compute their sort ranking. The
	     * iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndexBy(array, value, iteratee, retHighest) {
	      value = iteratee(value);
	
	      var low = 0,
	          high = array ? array.length : 0,
	          valIsNaN = value !== value,
	          valIsNull = value === null,
	          valIsUndef = value === undefined;
	
	      while (low < high) {
	        var mid = nativeFloor((low + high) / 2),
	            computed = iteratee(array[mid]),
	            isDef = computed !== undefined,
	            isReflexive = computed === computed;
	
	        if (valIsNaN) {
	          var setLow = isReflexive || retHighest;
	        } else if (valIsNull) {
	          setLow = isReflexive && isDef && (retHighest || computed != null);
	        } else if (valIsUndef) {
	          setLow = isReflexive && (retHighest || isDef);
	        } else if (computed == null) {
	          setLow = false;
	        } else {
	          setLow = retHighest ? (computed <= value) : (computed < value);
	        }
	        if (setLow) {
	          low = mid + 1;
	        } else {
	          high = mid;
	        }
	      }
	      return nativeMin(high, MAX_ARRAY_INDEX);
	    }
	
	    /**
	     * A specialized version of `baseCallback` which only supports `this` binding
	     * and specifying the number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function bindCallback(func, thisArg, argCount) {
	      if (typeof func != 'function') {
	        return identity;
	      }
	      if (thisArg === undefined) {
	        return func;
	      }
	      switch (argCount) {
	        case 1: return function(value) {
	          return func.call(thisArg, value);
	        };
	        case 3: return function(value, index, collection) {
	          return func.call(thisArg, value, index, collection);
	        };
	        case 4: return function(accumulator, value, index, collection) {
	          return func.call(thisArg, accumulator, value, index, collection);
	        };
	        case 5: return function(value, other, key, object, source) {
	          return func.call(thisArg, value, other, key, object, source);
	        };
	      }
	      return function() {
	        return func.apply(thisArg, arguments);
	      };
	    }
	
	    /**
	     * Creates a clone of the given array buffer.
	     *
	     * @private
	     * @param {ArrayBuffer} buffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */
	    function bufferClone(buffer) {
	      var result = new ArrayBuffer(buffer.byteLength),
	          view = new Uint8Array(result);
	
	      view.set(new Uint8Array(buffer));
	      return result;
	    }
	
	    /**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgs(args, partials, holders) {
	      var holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          leftIndex = -1,
	          leftLength = partials.length,
	          result = Array(leftLength + argsLength);
	
	      while (++leftIndex < leftLength) {
	        result[leftIndex] = partials[leftIndex];
	      }
	      while (++argsIndex < holdersLength) {
	        result[holders[argsIndex]] = args[argsIndex];
	      }
	      while (argsLength--) {
	        result[leftIndex++] = args[argsIndex++];
	      }
	      return result;
	    }
	
	    /**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgsRight(args, partials, holders) {
	      var holdersIndex = -1,
	          holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          rightIndex = -1,
	          rightLength = partials.length,
	          result = Array(argsLength + rightLength);
	
	      while (++argsIndex < argsLength) {
	        result[argsIndex] = args[argsIndex];
	      }
	      var offset = argsIndex;
	      while (++rightIndex < rightLength) {
	        result[offset + rightIndex] = partials[rightIndex];
	      }
	      while (++holdersIndex < holdersLength) {
	        result[offset + holders[holdersIndex]] = args[argsIndex++];
	      }
	      return result;
	    }
	
	    /**
	     * Creates a `_.countBy`, `_.groupBy`, `_.indexBy`, or `_.partition` function.
	     *
	     * @private
	     * @param {Function} setter The function to set keys and values of the accumulator object.
	     * @param {Function} [initializer] The function to initialize the accumulator object.
	     * @returns {Function} Returns the new aggregator function.
	     */
	    function createAggregator(setter, initializer) {
	      return function(collection, iteratee, thisArg) {
	        var result = initializer ? initializer() : {};
	        iteratee = getCallback(iteratee, thisArg, 3);
	
	        if (isArray(collection)) {
	          var index = -1,
	              length = collection.length;
	
	          while (++index < length) {
	            var value = collection[index];
	            setter(result, value, iteratee(value, index, collection), collection);
	          }
	        } else {
	          baseEach(collection, function(value, key, collection) {
	            setter(result, value, iteratee(value, key, collection), collection);
	          });
	        }
	        return result;
	      };
	    }
	
	    /**
	     * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */
	    function createAssigner(assigner) {
	      return restParam(function(object, sources) {
	        var index = -1,
	            length = object == null ? 0 : sources.length,
	            customizer = length > 2 ? sources[length - 2] : undefined,
	            guard = length > 2 ? sources[2] : undefined,
	            thisArg = length > 1 ? sources[length - 1] : undefined;
	
	        if (typeof customizer == 'function') {
	          customizer = bindCallback(customizer, thisArg, 5);
	          length -= 2;
	        } else {
	          customizer = typeof thisArg == 'function' ? thisArg : undefined;
	          length -= (customizer ? 1 : 0);
	        }
	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined : customizer;
	          length = 1;
	        }
	        while (++index < length) {
	          var source = sources[index];
	          if (source) {
	            assigner(object, source, customizer);
	          }
	        }
	        return object;
	      });
	    }
	
	    /**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseEach(eachFunc, fromRight) {
	      return function(collection, iteratee) {
	        var length = collection ? getLength(collection) : 0;
	        if (!isLength(length)) {
	          return eachFunc(collection, iteratee);
	        }
	        var index = fromRight ? length : -1,
	            iterable = toObject(collection);
	
	        while ((fromRight ? index-- : ++index < length)) {
	          if (iteratee(iterable[index], index, iterable) === false) {
	            break;
	          }
	        }
	        return collection;
	      };
	    }
	
	    /**
	     * Creates a base function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var iterable = toObject(object),
	            props = keysFunc(object),
	            length = props.length,
	            index = fromRight ? length : -1;
	
	        while ((fromRight ? index-- : ++index < length)) {
	          var key = props[index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }
	
	    /**
	     * Creates a function that wraps `func` and invokes it with the `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createBindWrapper(func, thisArg) {
	      var Ctor = createCtorWrapper(func);
	
	      function wrapper() {
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(thisArg, arguments);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates a `Set` cache object to optimize linear searches of large arrays.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	     */
	    function createCache(values) {
	      return (nativeCreate && Set) ? new SetCache(values) : null;
	    }
	
	    /**
	     * Creates a function that produces compound words out of the words in a
	     * given string.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */
	    function createCompounder(callback) {
	      return function(string) {
	        var index = -1,
	            array = words(deburr(string)),
	            length = array.length,
	            result = '';
	
	        while (++index < length) {
	          result = callback(result, array[index], index);
	        }
	        return result;
	      };
	    }
	
	    /**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCtorWrapper(Ctor) {
	      return function() {
	        // Use a `switch` statement to work with class constructors.
	        // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	        // for more details.
	        var args = arguments;
	        switch (args.length) {
	          case 0: return new Ctor;
	          case 1: return new Ctor(args[0]);
	          case 2: return new Ctor(args[0], args[1]);
	          case 3: return new Ctor(args[0], args[1], args[2]);
	          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	        }
	        var thisBinding = baseCreate(Ctor.prototype),
	            result = Ctor.apply(thisBinding, args);
	
	        // Mimic the constructor's `return` behavior.
	        // See https://es5.github.io/#x13.2.2 for more details.
	        return isObject(result) ? result : thisBinding;
	      };
	    }
	
	    /**
	     * Creates a `_.curry` or `_.curryRight` function.
	     *
	     * @private
	     * @param {boolean} flag The curry bit flag.
	     * @returns {Function} Returns the new curry function.
	     */
	    function createCurry(flag) {
	      function curryFunc(func, arity, guard) {
	        if (guard && isIterateeCall(func, arity, guard)) {
	          arity = undefined;
	        }
	        var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
	        result.placeholder = curryFunc.placeholder;
	        return result;
	      }
	      return curryFunc;
	    }
	
	    /**
	     * Creates a `_.defaults` or `_.defaultsDeep` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Function} Returns the new defaults function.
	     */
	    function createDefaults(assigner, customizer) {
	      return restParam(function(args) {
	        var object = args[0];
	        if (object == null) {
	          return object;
	        }
	        args.push(customizer);
	        return assigner.apply(undefined, args);
	      });
	    }
	
	    /**
	     * Creates a `_.max` or `_.min` function.
	     *
	     * @private
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {Function} Returns the new extremum function.
	     */
	    function createExtremum(comparator, exValue) {
	      return function(collection, iteratee, thisArg) {
	        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	          iteratee = undefined;
	        }
	        iteratee = getCallback(iteratee, thisArg, 3);
	        if (iteratee.length == 1) {
	          collection = isArray(collection) ? collection : toIterable(collection);
	          var result = arrayExtremum(collection, iteratee, comparator, exValue);
	          if (!(collection.length && result === exValue)) {
	            return result;
	          }
	        }
	        return baseExtremum(collection, iteratee, comparator, exValue);
	      };
	    }
	
	    /**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFind(eachFunc, fromRight) {
	      return function(collection, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        if (isArray(collection)) {
	          var index = baseFindIndex(collection, predicate, fromRight);
	          return index > -1 ? collection[index] : undefined;
	        }
	        return baseFind(collection, predicate, eachFunc);
	      };
	    }
	
	    /**
	     * Creates a `_.findIndex` or `_.findLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindIndex(fromRight) {
	      return function(array, predicate, thisArg) {
	        if (!(array && array.length)) {
	          return -1;
	        }
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFindIndex(array, predicate, fromRight);
	      };
	    }
	
	    /**
	     * Creates a `_.findKey` or `_.findLastKey` function.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindKey(objectFunc) {
	      return function(object, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFind(object, predicate, objectFunc, true);
	      };
	    }
	
	    /**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */
	    function createFlow(fromRight) {
	      return function() {
	        var wrapper,
	            length = arguments.length,
	            index = fromRight ? length : -1,
	            leftIndex = 0,
	            funcs = Array(length);
	
	        while ((fromRight ? index-- : ++index < length)) {
	          var func = funcs[leftIndex++] = arguments[index];
	          if (typeof func != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
	            wrapper = new LodashWrapper([], true);
	          }
	        }
	        index = wrapper ? -1 : length;
	        while (++index < length) {
	          func = funcs[index];
	
	          var funcName = getFuncName(func),
	              data = funcName == 'wrapper' ? getData(func) : undefined;
	
	          if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
	            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	          } else {
	            wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
	          }
	        }
	        return function() {
	          var args = arguments,
	              value = args[0];
	
	          if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
	            return wrapper.plant(value).value();
	          }
	          var index = 0,
	              result = length ? funcs[index].apply(this, args) : value;
	
	          while (++index < length) {
	            result = funcs[index].call(this, result);
	          }
	          return result;
	        };
	      };
	    }
	
	    /**
	     * Creates a function for `_.forEach` or `_.forEachRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForEach(arrayFunc, eachFunc) {
	      return function(collection, iteratee, thisArg) {
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee)
	          : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	      };
	    }
	
	    /**
	     * Creates a function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForIn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee, keysIn);
	      };
	    }
	
	    /**
	     * Creates a function for `_.forOwn` or `_.forOwnRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForOwn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee);
	      };
	    }
	
	    /**
	     * Creates a function for `_.mapKeys` or `_.mapValues`.
	     *
	     * @private
	     * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	     * @returns {Function} Returns the new map function.
	     */
	    function createObjectMapper(isMapKeys) {
	      return function(object, iteratee, thisArg) {
	        var result = {};
	        iteratee = getCallback(iteratee, thisArg, 3);
	
	        baseForOwn(object, function(value, key, object) {
	          var mapped = iteratee(value, key, object);
	          key = isMapKeys ? mapped : key;
	          value = isMapKeys ? value : mapped;
	          result[key] = value;
	        });
	        return result;
	      };
	    }
	
	    /**
	     * Creates a function for `_.padLeft` or `_.padRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify padding from the right.
	     * @returns {Function} Returns the new pad function.
	     */
	    function createPadDir(fromRight) {
	      return function(string, length, chars) {
	        string = baseToString(string);
	        return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
	      };
	    }
	
	    /**
	     * Creates a `_.partial` or `_.partialRight` function.
	     *
	     * @private
	     * @param {boolean} flag The partial bit flag.
	     * @returns {Function} Returns the new partial function.
	     */
	    function createPartial(flag) {
	      var partialFunc = restParam(function(func, partials) {
	        var holders = replaceHolders(partials, partialFunc.placeholder);
	        return createWrapper(func, flag, undefined, partials, holders);
	      });
	      return partialFunc;
	    }
	
	    /**
	     * Creates a function for `_.reduce` or `_.reduceRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createReduce(arrayFunc, eachFunc) {
	      return function(collection, iteratee, accumulator, thisArg) {
	        var initFromArray = arguments.length < 3;
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee, accumulator, initFromArray)
	          : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
	      };
	    }
	
	    /**
	     * Creates a function that wraps `func` and invokes it with optional `this`
	     * binding of, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	      var isAry = bitmask & ARY_FLAG,
	          isBind = bitmask & BIND_FLAG,
	          isBindKey = bitmask & BIND_KEY_FLAG,
	          isCurry = bitmask & CURRY_FLAG,
	          isCurryBound = bitmask & CURRY_BOUND_FLAG,
	          isCurryRight = bitmask & CURRY_RIGHT_FLAG,
	          Ctor = isBindKey ? undefined : createCtorWrapper(func);
	
	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it to other functions.
	        var length = arguments.length,
	            index = length,
	            args = Array(length);
	
	        while (index--) {
	          args[index] = arguments[index];
	        }
	        if (partials) {
	          args = composeArgs(args, partials, holders);
	        }
	        if (partialsRight) {
	          args = composeArgsRight(args, partialsRight, holdersRight);
	        }
	        if (isCurry || isCurryRight) {
	          var placeholder = wrapper.placeholder,
	              argsHolders = replaceHolders(args, placeholder);
	
	          length -= argsHolders.length;
	          if (length < arity) {
	            var newArgPos = argPos ? arrayCopy(argPos) : undefined,
	                newArity = nativeMax(arity - length, 0),
	                newsHolders = isCurry ? argsHolders : undefined,
	                newHoldersRight = isCurry ? undefined : argsHolders,
	                newPartials = isCurry ? args : undefined,
	                newPartialsRight = isCurry ? undefined : args;
	
	            bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	            bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
	
	            if (!isCurryBound) {
	              bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	            }
	            var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
	                result = createHybridWrapper.apply(undefined, newData);
	
	            if (isLaziable(func)) {
	              setData(result, newData);
	            }
	            result.placeholder = placeholder;
	            return result;
	          }
	        }
	        var thisBinding = isBind ? thisArg : this,
	            fn = isBindKey ? thisBinding[func] : func;
	
	        if (argPos) {
	          args = reorder(args, argPos);
	        }
	        if (isAry && ary < args.length) {
	          args.length = ary;
	        }
	        if (this && this !== root && this instanceof wrapper) {
	          fn = Ctor || createCtorWrapper(func);
	        }
	        return fn.apply(thisBinding, args);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates the padding required for `string` based on the given `length`.
	     * The `chars` string is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {string} string The string to create padding for.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the pad for `string`.
	     */
	    function createPadding(string, length, chars) {
	      var strLength = string.length;
	      length = +length;
	
	      if (strLength >= length || !nativeIsFinite(length)) {
	        return '';
	      }
	      var padLength = length - strLength;
	      chars = chars == null ? ' ' : (chars + '');
	      return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
	    }
	
	    /**
	     * Creates a function that wraps `func` and invokes it with the optional `this`
	     * binding of `thisArg` and the `partials` prepended to those provided to
	     * the wrapper.
	     *
	     * @private
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to the new function.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createPartialWrapper(func, bitmask, thisArg, partials) {
	      var isBind = bitmask & BIND_FLAG,
	          Ctor = createCtorWrapper(func);
	
	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it `func`.
	        var argsIndex = -1,
	            argsLength = arguments.length,
	            leftIndex = -1,
	            leftLength = partials.length,
	            args = Array(leftLength + argsLength);
	
	        while (++leftIndex < leftLength) {
	          args[leftIndex] = partials[leftIndex];
	        }
	        while (argsLength--) {
	          args[leftIndex++] = arguments[++argsIndex];
	        }
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(isBind ? thisArg : this, args);
	      }
	      return wrapper;
	    }
	
	    /**
	     * Creates a `_.ceil`, `_.floor`, or `_.round` function.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */
	    function createRound(methodName) {
	      var func = Math[methodName];
	      return function(number, precision) {
	        precision = precision === undefined ? 0 : (+precision || 0);
	        if (precision) {
	          precision = pow(10, precision);
	          return func(number * precision) / precision;
	        }
	        return func(number);
	      };
	    }
	
	    /**
	     * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {Function} Returns the new index function.
	     */
	    function createSortedIndex(retHighest) {
	      return function(array, value, iteratee, thisArg) {
	        var callback = getCallback(iteratee);
	        return (iteratee == null && callback === baseCallback)
	          ? binaryIndex(array, value, retHighest)
	          : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
	      };
	    }
	
	    /**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - `_.bind`
	     *     2 - `_.bindKey`
	     *     4 - `_.curry` or `_.curryRight` of a bound function
	     *     8 - `_.curry`
	     *    16 - `_.curryRight`
	     *    32 - `_.partial`
	     *    64 - `_.partialRight`
	     *   128 - `_.rearg`
	     *   256 - `_.ary`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	      var isBindKey = bitmask & BIND_KEY_FLAG;
	      if (!isBindKey && typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = partials ? partials.length : 0;
	      if (!length) {
	        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	        partials = holders = undefined;
	      }
	      length -= (holders ? holders.length : 0);
	      if (bitmask & PARTIAL_RIGHT_FLAG) {
	        var partialsRight = partials,
	            holdersRight = holders;
	
	        partials = holders = undefined;
	      }
	      var data = isBindKey ? undefined : getData(func),
	          newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
	
	      if (data) {
	        mergeData(newData, data);
	        bitmask = newData[1];
	        arity = newData[9];
	      }
	      newData[9] = arity == null
	        ? (isBindKey ? 0 : func.length)
	        : (nativeMax(arity - length, 0) || 0);
	
	      if (bitmask == BIND_FLAG) {
	        var result = createBindWrapper(newData[0], newData[2]);
	      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
	        result = createPartialWrapper.apply(undefined, newData);
	      } else {
	        result = createHybridWrapper.apply(undefined, newData);
	      }
	      var setter = data ? baseSetData : setData;
	      return setter(result, newData);
	    }
	
	    /**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing arrays.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */
	    function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var index = -1,
	          arrLength = array.length,
	          othLength = other.length;
	
	      if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	        return false;
	      }
	      // Ignore non-index properties.
	      while (++index < arrLength) {
	        var arrValue = array[index],
	            othValue = other[index],
	            result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
	
	        if (result !== undefined) {
	          if (result) {
	            continue;
	          }
	          return false;
	        }
	        // Recursively compare arrays (susceptible to call stack limits).
	        if (isLoose) {
	          if (!arraySome(other, function(othValue) {
	                return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	              })) {
	            return false;
	          }
	        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	          return false;
	        }
	      }
	      return true;
	    }
	
	    /**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalByTag(object, other, tag) {
	      switch (tag) {
	        case boolTag:
	        case dateTag:
	          // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	          return +object == +other;
	
	        case errorTag:
	          return object.name == other.name && object.message == other.message;
	
	        case numberTag:
	          // Treat `NaN` vs. `NaN` as equal.
	          return (object != +object)
	            ? other != +other
	            : object == +other;
	
	        case regexpTag:
	        case stringTag:
	          // Coerce regexes to strings and treat strings primitives and string
	          // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	          return object == (other + '');
	      }
	      return false;
	    }
	
	    /**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objProps = keys(object),
	          objLength = objProps.length,
	          othProps = keys(other),
	          othLength = othProps.length;
	
	      if (objLength != othLength && !isLoose) {
	        return false;
	      }
	      var index = objLength;
	      while (index--) {
	        var key = objProps[index];
	        if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	          return false;
	        }
	      }
	      var skipCtor = isLoose;
	      while (++index < objLength) {
	        key = objProps[index];
	        var objValue = object[key],
	            othValue = other[key],
	            result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
	
	        // Recursively compare objects (susceptible to call stack limits).
	        if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	          return false;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	      }
	      if (!skipCtor) {
	        var objCtor = object.constructor,
	            othCtor = other.constructor;
	
	        // Non `Object` object instances with different constructors are not equal.
	        if (objCtor != othCtor &&
	            ('constructor' in object && 'constructor' in other) &&
	            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	          return false;
	        }
	      }
	      return true;
	    }
	
	    /**
	     * Gets the appropriate "callback" function. If the `_.callback` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseCallback` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function} Returns the chosen function or its result.
	     */
	    function getCallback(func, thisArg, argCount) {
	      var result = lodash.callback || callback;
	      result = result === callback ? baseCallback : result;
	      return argCount ? result(func, thisArg, argCount) : result;
	    }
	
	    /**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */
	    var getData = !metaMap ? noop : function(func) {
	      return metaMap.get(func);
	    };
	
	    /**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */
	    function getFuncName(func) {
	      var result = func.name,
	          array = realNames[result],
	          length = array ? array.length : 0;
	
	      while (length--) {
	        var data = array[length],
	            otherFunc = data.func;
	        if (otherFunc == null || otherFunc == func) {
	          return data.name;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseIndexOf` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function|number} Returns the chosen function or its result.
	     */
	    function getIndexOf(collection, target, fromIndex) {
	      var result = lodash.indexOf || indexOf;
	      result = result === indexOf ? baseIndexOf : result;
	      return collection ? result(collection, target, fromIndex) : result;
	    }
	
	    /**
	     * Gets the "length" property value of `object`.
	     *
	     * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	     * that affects Safari on at least iOS 8.1-8.3 ARM64.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {*} Returns the "length" value.
	     */
	    var getLength = baseProperty('length');
	
	    /**
	     * Gets the propery names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */
	    function getMatchData(object) {
	      var result = pairs(object),
	          length = result.length;
	
	      while (length--) {
	        result[length][2] = isStrictComparable(result[length][1]);
	      }
	      return result;
	    }
	
	    /**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */
	    function getNative(object, key) {
	      var value = object == null ? undefined : object[key];
	      return isNative(value) ? value : undefined;
	    }
	
	    /**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */
	    function getView(start, end, transforms) {
	      var index = -1,
	          length = transforms.length;
	
	      while (++index < length) {
	        var data = transforms[index],
	            size = data.size;
	
	        switch (data.type) {
	          case 'drop':      start += size; break;
	          case 'dropRight': end -= size; break;
	          case 'take':      end = nativeMin(end, start + size); break;
	          case 'takeRight': start = nativeMax(start, end - size); break;
	        }
	      }
	      return { 'start': start, 'end': end };
	    }
	
	    /**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */
	    function initCloneArray(array) {
	      var length = array.length,
	          result = new array.constructor(length);
	
	      // Add array properties assigned by `RegExp#exec`.
	      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	        result.index = array.index;
	        result.input = array.input;
	      }
	      return result;
	    }
	
	    /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneObject(object) {
	      var Ctor = object.constructor;
	      if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	        Ctor = Object;
	      }
	      return new Ctor;
	    }
	
	    /**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneByTag(object, tag, isDeep) {
	      var Ctor = object.constructor;
	      switch (tag) {
	        case arrayBufferTag:
	          return bufferClone(object);
	
	        case boolTag:
	        case dateTag:
	          return new Ctor(+object);
	
	        case float32Tag: case float64Tag:
	        case int8Tag: case int16Tag: case int32Tag:
	        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	          var buffer = object.buffer;
	          return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);
	
	        case numberTag:
	        case stringTag:
	          return new Ctor(object);
	
	        case regexpTag:
	          var result = new Ctor(object.source, reFlags.exec(object));
	          result.lastIndex = object.lastIndex;
	      }
	      return result;
	    }
	
	    /**
	     * Invokes the method at `path` on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */
	    function invokePath(object, path, args) {
	      if (object != null && !isKey(path, object)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        path = last(path);
	      }
	      var func = object == null ? object : object[path];
	      return func == null ? undefined : func.apply(object, args);
	    }
	
	    /**
	     * Checks if `value` is array-like.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     */
	    function isArrayLike(value) {
	      return value != null && isLength(getLength(value));
	    }
	
	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
	    function isIndex(value, length) {
	      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	      length = length == null ? MAX_SAFE_INTEGER : length;
	      return value > -1 && value % 1 == 0 && value < length;
	    }
	
	    /**
	     * Checks if the provided arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	     */
	    function isIterateeCall(value, index, object) {
	      if (!isObject(object)) {
	        return false;
	      }
	      var type = typeof index;
	      if (type == 'number'
	          ? (isArrayLike(object) && isIndex(index, object.length))
	          : (type == 'string' && index in object)) {
	        var other = object[index];
	        return value === value ? (value === other) : (other !== other);
	      }
	      return false;
	    }
	
	    /**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */
	    function isKey(value, object) {
	      var type = typeof value;
	      if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	        return true;
	      }
	      if (isArray(value)) {
	        return false;
	      }
	      var result = !reIsDeepProp.test(value);
	      return result || (object != null && value in toObject(object));
	    }
	
	    /**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
	     */
	    function isLaziable(func) {
	      var funcName = getFuncName(func);
	      if (!(funcName in LazyWrapper.prototype)) {
	        return false;
	      }
	      var other = lodash[funcName];
	      if (func === other) {
	        return true;
	      }
	      var data = getData(other);
	      return !!data && func === data[0];
	    }
	
	    /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     */
	    function isLength(value) {
	      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }
	
	    /**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */
	    function isStrictComparable(value) {
	      return value === value && !isObject(value);
	    }
	
	    /**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers required to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
	     * augment function arguments, making the order in which they are executed important,
	     * preventing the merging of metadata. However, we make an exception for a safe
	     * common case where curried functions have `_.ary` and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */
	    function mergeData(data, source) {
	      var bitmask = data[1],
	          srcBitmask = source[1],
	          newBitmask = bitmask | srcBitmask,
	          isCommon = newBitmask < ARY_FLAG;
	
	      var isCombo =
	        (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
	        (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
	        (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);
	
	      // Exit early if metadata can't be merged.
	      if (!(isCommon || isCombo)) {
	        return data;
	      }
	      // Use source `thisArg` if available.
	      if (srcBitmask & BIND_FLAG) {
	        data[2] = source[2];
	        // Set when currying a bound function.
	        newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
	      }
	      // Compose partial arguments.
	      var value = source[3];
	      if (value) {
	        var partials = data[3];
	        data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
	        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
	      }
	      // Compose partial right arguments.
	      value = source[5];
	      if (value) {
	        partials = data[5];
	        data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
	        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
	      }
	      // Use source `argPos` if available.
	      value = source[7];
	      if (value) {
	        data[7] = arrayCopy(value);
	      }
	      // Use source `ary` if it's smaller.
	      if (srcBitmask & ARY_FLAG) {
	        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	      }
	      // Use source `arity` if one is not provided.
	      if (data[9] == null) {
	        data[9] = source[9];
	      }
	      // Use source `func` and merge bitmasks.
	      data[0] = source[0];
	      data[1] = newBitmask;
	
	      return data;
	    }
	
	    /**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function mergeDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
	    }
	
	    /**
	     * A specialized version of `_.pick` which picks `object` properties specified
	     * by `props`.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property names to pick.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByArray(object, props) {
	      object = toObject(object);
	
	      var index = -1,
	          length = props.length,
	          result = {};
	
	      while (++index < length) {
	        var key = props[index];
	        if (key in object) {
	          result[key] = object[key];
	        }
	      }
	      return result;
	    }
	
	    /**
	     * A specialized version of `_.pick` which picks `object` properties `predicate`
	     * returns truthy for.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByCallback(object, predicate) {
	      var result = {};
	      baseForIn(object, function(value, key, object) {
	        if (predicate(value, key, object)) {
	          result[key] = value;
	        }
	      });
	      return result;
	    }
	
	    /**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */
	    function reorder(array, indexes) {
	      var arrLength = array.length,
	          length = nativeMin(indexes.length, arrLength),
	          oldArray = arrayCopy(array);
	
	      while (length--) {
	        var index = indexes[length];
	        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	      }
	      return array;
	    }
	
	    /**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity function
	     * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var setData = (function() {
	      var count = 0,
	          lastCalled = 0;
	
	      return function(key, value) {
	        var stamp = now(),
	            remaining = HOT_SPAN - (stamp - lastCalled);
	
	        lastCalled = stamp;
	        if (remaining > 0) {
	          if (++count >= HOT_COUNT) {
	            return key;
	          }
	        } else {
	          count = 0;
	        }
	        return baseSetData(key, value);
	      };
	    }());
	
	    /**
	     * A fallback implementation of `Object.keys` which creates an array of the
	     * own enumerable property names of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function shimKeys(object) {
	      var props = keysIn(object),
	          propsLength = props.length,
	          length = propsLength && object.length;
	
	      var allowIndexes = !!length && isLength(length) &&
	        (isArray(object) || isArguments(object));
	
	      var index = -1,
	          result = [];
	
	      while (++index < propsLength) {
	        var key = props[index];
	        if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Converts `value` to an array-like object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array|Object} Returns the array-like object.
	     */
	    function toIterable(value) {
	      if (value == null) {
	        return [];
	      }
	      if (!isArrayLike(value)) {
	        return values(value);
	      }
	      return isObject(value) ? value : Object(value);
	    }
	
	    /**
	     * Converts `value` to an object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Object} Returns the object.
	     */
	    function toObject(value) {
	      return isObject(value) ? value : Object(value);
	    }
	
	    /**
	     * Converts `value` to property path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array} Returns the property path array.
	     */
	    function toPath(value) {
	      if (isArray(value)) {
	        return value;
	      }
	      var result = [];
	      baseToString(value).replace(rePropName, function(match, number, quote, string) {
	        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	      });
	      return result;
	    }
	
	    /**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */
	    function wrapperClone(wrapper) {
	      return wrapper instanceof LazyWrapper
	        ? wrapper.clone()
	        : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `collection` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new array containing chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */
	    function chunk(array, size, guard) {
	      if (guard ? isIterateeCall(array, size, guard) : size == null) {
	        size = 1;
	      } else {
	        size = nativeMax(nativeFloor(size) || 1, 1);
	      }
	      var index = 0,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = Array(nativeCeil(length / size));
	
	      while (index < length) {
	        result[++resIndex] = baseSlice(array, index, (index += size));
	      }
	      return result;
	    }
	
	    /**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */
	    function compact(array) {
	      var index = -1,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = [];
	
	      while (++index < length) {
	        var value = array[index];
	        if (value) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Creates an array of unique `array` values not included in the other
	     * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The arrays of values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.difference([1, 2, 3], [4, 2]);
	     * // => [1, 3]
	     */
	    var difference = restParam(function(array, values) {
	      return (isObjectLike(array) && isArrayLike(array))
	        ? baseDifference(array, baseFlatten(values, false, true))
	        : [];
	    });
	
	    /**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function drop(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function dropRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that match the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [1]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true)
	        : [];
	    }
	
	    /**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active', false), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true)
	        : [];
	    }
	
	    /**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8], '*', 1, 2);
	     * // => [4, '*', 8]
	     */
	    function fill(array, value, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
	        start = 0;
	        end = length;
	      }
	      return baseFill(array, value, start, end);
	    }
	
	    /**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(chr) {
	     *   return chr.user == 'barney';
	     * });
	     * // => 0
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findIndex(users, 'active', false);
	     * // => 0
	     *
	     * // using the `_.property` callback shorthand
	     * _.findIndex(users, 'active');
	     * // => 2
	     */
	    var findIndex = createFindIndex();
	
	    /**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(chr) {
	     *   return chr.user == 'pebbles';
	     * });
	     * // => 2
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastIndex(users, 'active', false);
	     * // => 2
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */
	    var findLastIndex = createFindIndex(true);
	
	    /**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias head
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.first([1, 2, 3]);
	     * // => 1
	     *
	     * _.first([]);
	     * // => undefined
	     */
	    function first(array) {
	      return array ? array[0] : undefined;
	    }
	
	    /**
	     * Flattens a nested array. If `isDeep` is `true` the array is recursively
	     * flattened, otherwise it is only flattened a single level.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, [4]]
	     *
	     * // using `isDeep`
	     * _.flatten([1, [2, 3, [4]]], true);
	     * // => [1, 2, 3, 4]
	     */
	    function flatten(array, isDeep, guard) {
	      var length = array ? array.length : 0;
	      if (guard && isIterateeCall(array, isDeep, guard)) {
	        isDeep = false;
	      }
	      return length ? baseFlatten(array, isDeep) : [];
	    }
	
	    /**
	     * Recursively flattens a nested array.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to recursively flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, 4]
	     */
	    function flattenDeep(array) {
	      var length = array ? array.length : 0;
	      return length ? baseFlatten(array, true) : [];
	    }
	
	    /**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
	     * performs a faster binary search.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
	     *  to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // using `fromIndex`
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     *
	     * // performing a binary search
	     * _.indexOf([1, 1, 2, 2], 2, true);
	     * // => 2
	     */
	    function indexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      if (typeof fromIndex == 'number') {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
	      } else if (fromIndex) {
	        var index = binaryIndex(array, value);
	        if (index < length &&
	            (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
	          return index;
	        }
	        return -1;
	      }
	      return baseIndexOf(array, value, fromIndex || 0);
	    }
	
	    /**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */
	    function initial(array) {
	      return dropRight(array, 1);
	    }
	
	    /**
	     * Creates an array of unique values that are included in all of the provided
	     * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of shared values.
	     * @example
	     * _.intersection([1, 2], [4, 2], [2, 1]);
	     * // => [2]
	     */
	    var intersection = restParam(function(arrays) {
	      var othLength = arrays.length,
	          othIndex = othLength,
	          caches = Array(length),
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          result = [];
	
	      while (othIndex--) {
	        var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
	        caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
	      }
	      var array = arrays[0],
	          index = -1,
	          length = array ? array.length : 0,
	          seen = caches[0];
	
	      outer:
	      while (++index < length) {
	        value = array[index];
	        if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
	          var othIndex = othLength;
	          while (--othIndex) {
	            var cache = caches[othIndex];
	            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
	              continue outer;
	            }
	          }
	          if (seen) {
	            seen.push(value);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    });
	
	    /**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */
	    function last(array) {
	      var length = array ? array.length : 0;
	      return length ? array[length - 1] : undefined;
	    }
	
	    /**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=array.length-1] The index to search from
	     *  or `true` to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // using `fromIndex`
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     *
	     * // performing a binary search
	     * _.lastIndexOf([1, 1, 2, 2], 2, true);
	     * // => 3
	     */
	    function lastIndexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      var index = length;
	      if (typeof fromIndex == 'number') {
	        index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
	      } else if (fromIndex) {
	        index = binaryIndex(array, value, true) - 1;
	        var other = array[index];
	        if (value === value ? (value === other) : (other !== other)) {
	          return index;
	        }
	        return -1;
	      }
	      if (value !== value) {
	        return indexOfNaN(array, index, true);
	      }
	      while (index--) {
	        if (array[index] === value) {
	          return index;
	        }
	      }
	      return -1;
	    }
	
	    /**
	     * Removes all provided values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3, 1, 2, 3];
	     *
	     * _.pull(array, 2, 3);
	     * console.log(array);
	     * // => [1, 1]
	     */
	    function pull() {
	      var args = arguments,
	          array = args[0];
	
	      if (!(array && array.length)) {
	        return array;
	      }
	      var index = 0,
	          indexOf = getIndexOf(),
	          length = args.length;
	
	      while (++index < length) {
	        var fromIndex = 0,
	            value = args[index];
	
	        while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
	          splice.call(array, fromIndex, 1);
	        }
	      }
	      return array;
	    }
	
	    /**
	     * Removes elements from `array` corresponding to the given indexes and returns
	     * an array of the removed elements. Indexes may be specified as an array of
	     * indexes or as individual arguments.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [5, 10, 15, 20];
	     * var evens = _.pullAt(array, 1, 3);
	     *
	     * console.log(array);
	     * // => [5, 15]
	     *
	     * console.log(evens);
	     * // => [10, 20]
	     */
	    var pullAt = restParam(function(array, indexes) {
	      indexes = baseFlatten(indexes);
	
	      var result = baseAt(array, indexes);
	      basePullAt(array, indexes.sort(baseCompareAscending));
	      return result;
	    });
	
	    /**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */
	    function remove(array, predicate, thisArg) {
	      var result = [];
	      if (!(array && array.length)) {
	        return result;
	      }
	      var index = -1,
	          indexes = [],
	          length = array.length;
	
	      predicate = getCallback(predicate, thisArg, 3);
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result.push(value);
	          indexes.push(index);
	        }
	      }
	      basePullAt(array, indexes);
	      return result;
	    }
	
	    /**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias tail
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.rest([1, 2, 3]);
	     * // => [2, 3]
	     */
	    function rest(array) {
	      return drop(array, 1);
	    }
	
	    /**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of `Array#slice` to support node
	     * lists in IE < 9 and to ensure dense arrays are returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function slice(array, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
	        start = 0;
	        end = length;
	      }
	      return baseSlice(array, start, end);
	    }
	
	    /**
	     * Uses a binary search to determine the lowest index at which `value` should
	     * be inserted into `array` in order to maintain its sort order. If an iteratee
	     * function is provided it is invoked for `value` and each element of `array`
	     * to compute their sort ranking. The iteratee is bound to `thisArg` and
	     * invoked with one argument; (value).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     *
	     * _.sortedIndex([4, 4, 5, 5], 5);
	     * // => 2
	     *
	     * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
	     *
	     * // using an iteratee function
	     * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
	     *   return this.data[word];
	     * }, dict);
	     * // => 1
	     *
	     * // using the `_.property` callback shorthand
	     * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
	     * // => 1
	     */
	    var sortedIndex = createSortedIndex();
	
	    /**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 4, 5, 5], 5);
	     * // => 4
	     */
	    var sortedLastIndex = createSortedIndex(true);
	
	    /**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */
	    function take(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */
	    function takeRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, n < 0 ? 0 : n);
	    }
	
	    /**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
	     * and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [2, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true)
	        : [];
	    }
	
	    /**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [1, 2]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false},
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active', false), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3))
	        : [];
	    }
	
	    /**
	     * Creates an array of unique values, in order, from all of the provided arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([1, 2], [4, 2], [2, 1]);
	     * // => [1, 2, 4]
	     */
	    var union = restParam(function(arrays) {
	      return baseUniq(baseFlatten(arrays, false, true));
	    });
	
	    /**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurence of each element
	     * is kept. Providing `true` for `isSorted` performs a faster search algorithm
	     * for sorted arrays. If an iteratee function is provided it is invoked for
	     * each element in the array to generate the criterion by which uniqueness
	     * is computed. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, array).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias unique
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {boolean} [isSorted] Specify the array is sorted.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     *
	     * // using `isSorted`
	     * _.uniq([1, 1, 2], true);
	     * // => [1, 2]
	     *
	     * // using an iteratee function
	     * _.uniq([1, 2.5, 1.5, 2], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => [1, 2.5]
	     *
	     * // using the `_.property` callback shorthand
	     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    function uniq(array, isSorted, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (isSorted != null && typeof isSorted != 'boolean') {
	        thisArg = iteratee;
	        iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
	        isSorted = false;
	      }
	      var callback = getCallback();
	      if (!(iteratee == null && callback === baseCallback)) {
	        iteratee = callback(iteratee, thisArg, 3);
	      }
	      return (isSorted && getIndexOf() == baseIndexOf)
	        ? sortedUniq(array, iteratee)
	        : baseUniq(array, iteratee);
	    }
	
	    /**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['fred', 'barney'], [30, 40], [true, false]]
	     */
	    function unzip(array) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var index = -1,
	          length = 0;
	
	      array = arrayFilter(array, function(group) {
	        if (isArrayLike(group)) {
	          length = nativeMax(group.length, length);
	          return true;
	        }
	      });
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = arrayMap(array, baseProperty(index));
	      }
	      return result;
	    }
	
	    /**
	     * This method is like `_.unzip` except that it accepts an iteratee to specify
	     * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee] The function to combine regrouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */
	    function unzipWith(array, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      var result = unzip(array);
	      if (iteratee == null) {
	        return result;
	      }
	      iteratee = bindCallback(iteratee, thisArg, 4);
	      return arrayMap(result, function(group) {
	        return arrayReduce(group, iteratee, undefined, true);
	      });
	    }
	
	    /**
	     * Creates an array excluding all provided values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to filter.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.without([1, 2, 1, 3], 1, 2);
	     * // => [3]
	     */
	    var without = restParam(function(array, values) {
	      return isArrayLike(array)
	        ? baseDifference(array, values)
	        : [];
	    });
	
	    /**
	     * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the provided arrays.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of values.
	     * @example
	     *
	     * _.xor([1, 2], [4, 2]);
	     * // => [1, 4]
	     */
	    function xor() {
	      var index = -1,
	          length = arguments.length;
	
	      while (++index < length) {
	        var array = arguments[index];
	        if (isArrayLike(array)) {
	          var result = result
	            ? arrayPush(baseDifference(result, array), baseDifference(array, result))
	            : array;
	        }
	      }
	      return result ? baseUniq(result) : [];
	    }
	
	    /**
	     * Creates an array of grouped elements, the first of which contains the first
	     * elements of the given arrays, the second of which contains the second elements
	     * of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     */
	    var zip = restParam(unzip);
	
	    /**
	     * The inverse of `_.pairs`; this method returns an object composed from arrays
	     * of property names and values. Provide either a single two dimensional array,
	     * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
	     * and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @alias object
	     * @category Array
	     * @param {Array} props The property names.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject([['fred', 30], ['barney', 40]]);
	     * // => { 'fred': 30, 'barney': 40 }
	     *
	     * _.zipObject(['fred', 'barney'], [30, 40]);
	     * // => { 'fred': 30, 'barney': 40 }
	     */
	    function zipObject(props, values) {
	      var index = -1,
	          length = props ? props.length : 0,
	          result = {};
	
	      if (length && !values && !isArray(props[0])) {
	        values = [];
	      }
	      while (++index < length) {
	        var key = props[index];
	        if (values) {
	          result[key] = values[index];
	        } else if (key) {
	          result[key[0]] = key[1];
	        }
	      }
	      return result;
	    }
	
	    /**
	     * This method is like `_.zip` except that it accepts an iteratee to specify
	     * how grouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee] The function to combine grouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
	     * // => [111, 222]
	     */
	    var zipWith = restParam(function(arrays) {
	      var length = arrays.length,
	          iteratee = length > 2 ? arrays[length - 2] : undefined,
	          thisArg = length > 1 ? arrays[length - 1] : undefined;
	
	      if (length > 2 && typeof iteratee == 'function') {
	        length -= 2;
	      } else {
	        iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
	        thisArg = undefined;
	      }
	      arrays.length = length;
	      return unzipWith(arrays, iteratee, thisArg);
	    });
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a `lodash` object that wraps `value` with explicit method
	     * chaining enabled.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _.chain(users)
	     *   .sortBy('age')
	     *   .map(function(chr) {
	     *     return chr.user + ' is ' + chr.age;
	     *   })
	     *   .first()
	     *   .value();
	     * // => 'pebbles is 1'
	     */
	    function chain(value) {
	      var result = lodash(value);
	      result.__chain__ = true;
	      return result;
	    }
	
	    /**
	     * This method invokes `interceptor` and returns `value`. The interceptor is
	     * bound to `thisArg` and invoked with one argument; (value). The purpose of
	     * this method is to "tap into" a method chain in order to perform operations
	     * on intermediate results within the chain.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */
	    function tap(value, interceptor, thisArg) {
	      interceptor.call(thisArg, value);
	      return value;
	    }
	
	    /**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */
	    function thru(value, interceptor, thisArg) {
	      return interceptor.call(thisArg, value);
	    }
	
	    /**
	     * Enables explicit method chaining on the wrapper object.
	     *
	     * @name chain
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // without explicit chaining
	     * _(users).first();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // with explicit chaining
	     * _(users).chain()
	     *   .first()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */
	    function wrapperChain() {
	      return chain(this);
	    }
	
	    /**
	     * Executes the chained sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */
	    function wrapperCommit() {
	      return new LodashWrapper(this.value(), this.__chain__);
	    }
	
	    /**
	     * Creates a new array joining a wrapped array with any additional arrays
	     * and/or values.
	     *
	     * @name concat
	     * @memberOf _
	     * @category Chain
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var wrapped = _(array).concat(2, [3], [[4]]);
	     *
	     * console.log(wrapped.value());
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */
	    var wrapperConcat = restParam(function(values) {
	      values = baseFlatten(values);
	      return this.thru(function(array) {
	        return arrayConcat(isArray(array) ? array : [toObject(array)], values);
	      });
	    });
	
	    /**
	     * Creates a clone of the chained sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).map(function(value) {
	     *   return Math.pow(value, 2);
	     * });
	     *
	     * var other = [3, 4];
	     * var otherWrapped = wrapped.plant(other);
	     *
	     * otherWrapped.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */
	    function wrapperPlant(value) {
	      var result,
	          parent = this;
	
	      while (parent instanceof baseLodash) {
	        var clone = wrapperClone(parent);
	        if (result) {
	          previous.__wrapped__ = clone;
	        } else {
	          result = clone;
	        }
	        var previous = clone;
	        parent = parent.__wrapped__;
	      }
	      previous.__wrapped__ = value;
	      return result;
	    }
	
	    /**
	     * Reverses the wrapped array so the first element becomes the last, the
	     * second element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new reversed `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function wrapperReverse() {
	      var value = this.__wrapped__;
	
	      var interceptor = function(value) {
	        return (wrapped && wrapped.__dir__ < 0) ? value : value.reverse();
	      };
	      if (value instanceof LazyWrapper) {
	        var wrapped = value;
	        if (this.__actions__.length) {
	          wrapped = new LazyWrapper(this);
	        }
	        wrapped = wrapped.reverse();
	        wrapped.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
	        return new LodashWrapper(wrapped, this.__chain__);
	      }
	      return this.thru(interceptor);
	    }
	
	    /**
	     * Produces the result of coercing the unwrapped value to a string.
	     *
	     * @name toString
	     * @memberOf _
	     * @category Chain
	     * @returns {string} Returns the coerced string value.
	     * @example
	     *
	     * _([1, 2, 3]).toString();
	     * // => '1,2,3'
	     */
	    function wrapperToString() {
	      return (this.value() + '');
	    }
	
	    /**
	     * Executes the chained sequence to extract the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @alias run, toJSON, valueOf
	     * @category Chain
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */
	    function wrapperValue() {
	      return baseWrapperValue(this.__wrapped__, this.__actions__);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates an array of elements corresponding to the given keys, or indexes,
	     * of `collection`. Keys may be specified as individual arguments or as arrays
	     * of keys.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(number|number[]|string|string[])} [props] The property names
	     *  or indexes of elements to pick, specified individually or in arrays.
	     * @returns {Array} Returns the new array of picked elements.
	     * @example
	     *
	     * _.at(['a', 'b', 'c'], [0, 2]);
	     * // => ['a', 'c']
	     *
	     * _.at(['barney', 'fred', 'pebbles'], 0, 2);
	     * // => ['barney', 'pebbles']
	     */
	    var at = restParam(function(collection, props) {
	      return baseAt(collection, baseFlatten(props));
	    });
	
	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the number of times the key was returned by `iteratee`.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */
	    var countBy = createAggregator(function(result, value, key) {
	      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
	    });
	
	    /**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * The predicate is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias all
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': false },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.every(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.every(users, 'active');
	     * // => false
	     */
	    function every(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayEvery : baseEvery;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }
	
	    /**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias select
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.filter([4, 5, 6], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 6]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.filter(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.filter(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function filter(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, predicate);
	    }
	
	    /**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias detect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.result(_.find(users, function(chr) {
	     *   return chr.age < 40;
	     * }), 'user');
	     * // => 'barney'
	     *
	     * // using the `_.matches` callback shorthand
	     * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.result(_.find(users, 'active', false), 'user');
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.result(_.find(users, 'active'), 'user');
	     * // => 'barney'
	     */
	    var find = createFind(baseEach);
	
	    /**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */
	    var findLast = createFind(baseEachRight, true);
	
	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning the first element that has equivalent property
	     * values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
	     * // => 'barney'
	     *
	     * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
	     * // => 'fred'
	     */
	    function findWhere(collection, source) {
	      return find(collection, baseMatches(source));
	    }
	
	    /**
	     * Iterates over elements of `collection` invoking `iteratee` for each element.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection). Iteratee functions may exit iteration early
	     * by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length" property
	     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	     * may be used for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @alias each
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEach(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from left to right and returns the array
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	     *   console.log(n, key);
	     * });
	     * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	     */
	    var forEach = createForEach(arrayEach, baseEach);
	
	    /**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEachRight(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from right to left and returns the array
	     */
	    var forEachRight = createForEach(arrayEachRight, baseEachRight);
	
	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is an array of the elements responsible for generating the key.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * // using the `_.property` callback shorthand
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */
	    var groupBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        result[key].push(value);
	      } else {
	        result[key] = [value];
	      }
	    });
	
	    /**
	     * Checks if `value` is in `collection` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @alias contains, include
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {*} target The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {boolean} Returns `true` if a matching element is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
	     * // => true
	     *
	     * _.includes('pebbles', 'eb');
	     * // => true
	     */
	    function includes(collection, target, fromIndex, guard) {
	      var length = collection ? getLength(collection) : 0;
	      if (!isLength(length)) {
	        collection = values(collection);
	        length = collection.length;
	      }
	      if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
	        fromIndex = 0;
	      } else {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
	      }
	      return (typeof collection == 'string' || !isArray(collection) && isString(collection))
	        ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
	        : (!!length && getIndexOf(collection, target, fromIndex) > -1);
	    }
	
	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the last element responsible for generating the key. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var keyData = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.indexBy(keyData, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return String.fromCharCode(object.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return this.fromCharCode(object.code);
	     * }, String);
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     */
	    var indexBy = createAggregator(function(result, value, key) {
	      result[key] = value;
	    });
	
	    /**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `methodName` is a function it is
	     * invoked for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invoke([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */
	    var invoke = restParam(function(collection, path, args) {
	      var index = -1,
	          isFunc = typeof path == 'function',
	          isProp = isKey(path),
	          result = isArrayLike(collection) ? Array(collection.length) : [];
	
	      baseEach(collection, function(value) {
	        var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
	        result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
	      });
	      return result;
	    });
	
	    /**
	     * Creates an array of values by running each element in `collection` through
	     * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
	     * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
	     * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
	     * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
	     * `sum`, `uniq`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @alias collect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function timesThree(n) {
	     *   return n * 3;
	     * }
	     *
	     * _.map([1, 2], timesThree);
	     * // => [3, 6]
	     *
	     * _.map({ 'a': 1, 'b': 2 }, timesThree);
	     * // => [3, 6] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */
	    function map(collection, iteratee, thisArg) {
	      var func = isArray(collection) ? arrayMap : baseMap;
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return func(collection, iteratee);
	    }
	
	    /**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, while the second of which
	     * contains elements `predicate` returns falsey for. The predicate is bound
	     * to `thisArg` and invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * _.partition([1, 2, 3], function(n) {
	     *   return n % 2;
	     * });
	     * // => [[1, 3], [2]]
	     *
	     * _.partition([1.2, 2.3, 3.4], function(n) {
	     *   return this.floor(n) % 2;
	     * }, Math);
	     * // => [[1.2, 3.4], [2.3]]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * var mapper = function(array) {
	     *   return _.pluck(array, 'user');
	     * };
	     *
	     * // using the `_.matches` callback shorthand
	     * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
	     * // => [['pebbles'], ['barney', 'fred']]
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.map(_.partition(users, 'active', false), mapper);
	     * // => [['barney', 'pebbles'], ['fred']]
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(_.partition(users, 'active'), mapper);
	     * // => [['fred'], ['barney', 'pebbles']]
	     */
	    var partition = createAggregator(function(result, value, key) {
	      result[key ? 0 : 1].push(value);
	    }, function() { return [[], []]; });
	
	    /**
	     * Gets the property value of `path` from all elements in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|string} path The path of the property to pluck.
	     * @returns {Array} Returns the property values.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.pluck(users, 'user');
	     * // => ['barney', 'fred']
	     *
	     * var userIndex = _.indexBy(users, 'user');
	     * _.pluck(userIndex, 'age');
	     * // => [36, 40] (iteration order is not guaranteed)
	     */
	    function pluck(collection, path) {
	      return map(collection, property(path));
	    }
	
	    /**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` through `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not provided the first element of `collection` is used as the initial
	     * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
	     * and `sortByOrder`
	     *
	     * @static
	     * @memberOf _
	     * @alias foldl, inject
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.reduce([1, 2], function(total, n) {
	     *   return total + n;
	     * });
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     *   return result;
	     * }, {});
	     * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
	     */
	    var reduce = createReduce(arrayReduce, baseEach);
	
	    /**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias foldr
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */
	    var reduceRight = createReduce(arrayReduceRight, baseEachRight);
	
	    /**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.reject([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [1, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.reject(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.reject(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function reject(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, function(value, index, collection) {
	        return !predicate(value, index, collection);
	      });
	    }
	
	    /**
	     * Gets a random element or `n` random elements from a collection.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to sample.
	     * @param {number} [n] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {*} Returns the random sample(s).
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     *
	     * _.sample([1, 2, 3, 4], 2);
	     * // => [3, 1]
	     */
	    function sample(collection, n, guard) {
	      if (guard ? isIterateeCall(collection, n, guard) : n == null) {
	        collection = toIterable(collection);
	        var length = collection.length;
	        return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
	      }
	      var index = -1,
	          result = toArray(collection),
	          length = result.length,
	          lastIndex = length - 1;
	
	      n = nativeMin(n < 0 ? 0 : (+n || 0), length);
	      while (++index < n) {
	        var rand = baseRandom(index, lastIndex),
	            value = result[rand];
	
	        result[rand] = result[index];
	        result[index] = value;
	      }
	      result.length = n;
	      return result;
	    }
	
	    /**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */
	    function shuffle(collection) {
	      return sample(collection, POSITIVE_INFINITY);
	    }
	
	    /**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the size of `collection`.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */
	    function size(collection) {
	      var length = collection ? getLength(collection) : 0;
	      return isLength(length) ? length : keys(collection).length;
	    }
	
	    /**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * The function returns as soon as it finds a passing value and does not iterate
	     * over the entire collection. The predicate is bound to `thisArg` and invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias any
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.some(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.some(users, 'active');
	     * // => true
	     */
	    function some(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arraySome : baseSome;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }
	
	    /**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection through `iteratee`. This method performs
	     * a stable sort, that is, it preserves the original sort order of equal elements.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return Math.sin(n);
	     * });
	     * // => [3, 1, 2]
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return this.sin(n);
	     * }, Math);
	     * // => [3, 1, 2]
	     *
	     * var users = [
	     *   { 'user': 'fred' },
	     *   { 'user': 'pebbles' },
	     *   { 'user': 'barney' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.sortBy(users, 'user'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function sortBy(collection, iteratee, thisArg) {
	      if (collection == null) {
	        return [];
	      }
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      var index = -1;
	      iteratee = getCallback(iteratee, thisArg, 3);
	
	      var result = baseMap(collection, function(value, key, collection) {
	        return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
	      });
	      return baseSortBy(result, compareAscending);
	    }
	
	    /**
	     * This method is like `_.sortBy` except that it can sort by multiple iteratees
	     * or property names.
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
	     *  The iteratees to sort by, specified as individual values or arrays of values.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.map(_.sortByAll(users, ['user', 'age']), _.values);
	     * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
	     *
	     * _.map(_.sortByAll(users, 'user', function(chr) {
	     *   return Math.floor(chr.age / 10);
	     * }), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    var sortByAll = restParam(function(collection, iteratees) {
	      if (collection == null) {
	        return [];
	      }
	      var guard = iteratees[2];
	      if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
	        iteratees.length = 1;
	      }
	      return baseSortByOrder(collection, baseFlatten(iteratees), []);
	    });
	
	    /**
	     * This method is like `_.sortByAll` except that it allows specifying the
	     * sort orders of the iteratees to sort by. If `orders` is unspecified, all
	     * values are sorted in ascending order. Otherwise, a value is sorted in
	     * ascending order if its corresponding order is "asc", and descending if "desc".
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // sort by `user` in ascending order and by `age` in descending order
	     * _.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    function sortByOrder(collection, iteratees, orders, guard) {
	      if (collection == null) {
	        return [];
	      }
	      if (guard && isIterateeCall(iteratees, orders, guard)) {
	        orders = undefined;
	      }
	      if (!isArray(iteratees)) {
	        iteratees = iteratees == null ? [] : [iteratees];
	      }
	      if (!isArray(orders)) {
	        orders = orders == null ? [] : [orders];
	      }
	      return baseSortByOrder(collection, iteratees, orders);
	    }
	
	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning an array of all elements that have equivalent
	     * property values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
	     *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
	     * ];
	     *
	     * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
	     * // => ['fred']
	     */
	    function where(collection, source) {
	      return filter(collection, baseMatches(source));
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Gets the number of milliseconds that have elapsed since the Unix epoch
	     * (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @category Date
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => logs the number of milliseconds it took for the deferred function to be invoked
	     */
	    var now = nativeNow || function() {
	      return new Date().getTime();
	    };
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it is called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => logs 'done saving!' after the two async saves have completed
	     */
	    function after(n, func) {
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      n = nativeIsFinite(n = +n) ? n : 0;
	      return function() {
	        if (--n < 1) {
	          return func.apply(this, arguments);
	        }
	      };
	    }
	
	    /**
	     * Creates a function that accepts up to `n` arguments ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */
	    function ary(func, n, guard) {
	      if (guard && isIterateeCall(func, n, guard)) {
	        n = undefined;
	      }
	      n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
	      return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
	    }
	
	    /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it is called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery('#add').on('click', _.before(5, addContactToList));
	     * // => allows adding up to 4 contacts to the list
	     */
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = undefined;
	        }
	        return result;
	      };
	    }
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and prepends any additional `_.bind` arguments to those provided to the
	     * bound function.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind` this method does not set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var greet = function(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * };
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // using placeholders
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */
	    var bind = restParam(function(func, thisArg, partials) {
	      var bitmask = BIND_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bind.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(func, bitmask, thisArg, partials, holders);
	    });
	
	    /**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method. Method names may be specified as individual arguments or as arrays
	     * of method names. If no method names are provided all enumerable function
	     * properties, own and inherited, of `object` are bound.
	     *
	     * **Note:** This method does not set the "length" property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} [methodNames] The object method names to bind,
	     *  specified as individual method names or arrays of method names.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'onClick': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view);
	     * jQuery('#docs').on('click', view.onClick);
	     * // => logs 'clicked docs' when the element is clicked
	     */
	    var bindAll = restParam(function(object, methodNames) {
	      methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);
	
	      var index = -1,
	          length = methodNames.length;
	
	      while (++index < length) {
	        var key = methodNames[index];
	        object[key] = createWrapper(object[key], BIND_FLAG, object);
	      }
	      return object;
	    });
	
	    /**
	     * Creates a function that invokes the method at `object[key]` and prepends
	     * any additional `_.bindKey` arguments to those provided to the bound function.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist.
	     * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object the method belongs to.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // using placeholders
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */
	    var bindKey = restParam(function(object, key, partials) {
	      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bindKey.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(key, bitmask, object, partials, holders);
	    });
	
	    /**
	     * Creates a function that accepts one or more arguments of `func` that when
	     * called either invokes `func` returning its result, if all `func` arguments
	     * have been provided, or returns a function that accepts one or more of the
	     * remaining `func` arguments, and so on. The arity of `func` may be specified
	     * if `func.length` is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */
	    var curry = createCurry(CURRY_FLAG);
	
	    /**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */
	    var curryRight = createCurry(CURRY_RIGHT_FLAG);
	
	    /**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed invocations. Provide an options object to indicate that `func`
	     * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	     * Subsequent calls to the debounced function return the result of the last
	     * `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the debounced function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=false] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	     *  delayed before it is invoked.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // avoid costly calculations while the window size is in flux
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // ensure `batchLog` is invoked once after 1 second of debounced calls
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', _.debounce(batchLog, 250, {
	     *   'maxWait': 1000
	     * }));
	     *
	     * // cancel a debounced call
	     * var todoChanges = _.debounce(batchLog, 1000);
	     * Object.observe(models.todo, todoChanges);
	     *
	     * Object.observe(models, function(changes) {
	     *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	     *     todoChanges.cancel();
	     *   }
	     * }, ['delete']);
	     *
	     * // ...at some point `models.todo` is changed
	     * models.todo.completed = true;
	     *
	     * // ...before 1 second has passed `models.todo` is deleted
	     * // which cancels the debounced `todoChanges` call
	     * delete models.todo;
	     */
	    function debounce(func, wait, options) {
	      var args,
	          maxTimeoutId,
	          result,
	          stamp,
	          thisArg,
	          timeoutId,
	          trailingCall,
	          lastCalled = 0,
	          maxWait = false,
	          trailing = true;
	
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      wait = wait < 0 ? 0 : (+wait || 0);
	      if (options === true) {
	        var leading = true;
	        trailing = false;
	      } else if (isObject(options)) {
	        leading = !!options.leading;
	        maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	
	      function cancel() {
	        if (timeoutId) {
	          clearTimeout(timeoutId);
	        }
	        if (maxTimeoutId) {
	          clearTimeout(maxTimeoutId);
	        }
	        lastCalled = 0;
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	      }
	
	      function complete(isCalled, id) {
	        if (id) {
	          clearTimeout(id);
	        }
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	        if (isCalled) {
	          lastCalled = now();
	          result = func.apply(thisArg, args);
	          if (!timeoutId && !maxTimeoutId) {
	            args = thisArg = undefined;
	          }
	        }
	      }
	
	      function delayed() {
	        var remaining = wait - (now() - stamp);
	        if (remaining <= 0 || remaining > wait) {
	          complete(trailingCall, maxTimeoutId);
	        } else {
	          timeoutId = setTimeout(delayed, remaining);
	        }
	      }
	
	      function maxDelayed() {
	        complete(trailing, timeoutId);
	      }
	
	      function debounced() {
	        args = arguments;
	        stamp = now();
	        thisArg = this;
	        trailingCall = trailing && (timeoutId || !leading);
	
	        if (maxWait === false) {
	          var leadingCall = leading && !timeoutId;
	        } else {
	          if (!maxTimeoutId && !leading) {
	            lastCalled = stamp;
	          }
	          var remaining = maxWait - (stamp - lastCalled),
	              isCalled = remaining <= 0 || remaining > maxWait;
	
	          if (isCalled) {
	            if (maxTimeoutId) {
	              maxTimeoutId = clearTimeout(maxTimeoutId);
	            }
	            lastCalled = stamp;
	            result = func.apply(thisArg, args);
	          }
	          else if (!maxTimeoutId) {
	            maxTimeoutId = setTimeout(maxDelayed, remaining);
	          }
	        }
	        if (isCalled && timeoutId) {
	          timeoutId = clearTimeout(timeoutId);
	        }
	        else if (!timeoutId && wait !== maxWait) {
	          timeoutId = setTimeout(delayed, wait);
	        }
	        if (leadingCall) {
	          isCalled = true;
	          result = func.apply(thisArg, args);
	        }
	        if (isCalled && !timeoutId && !maxTimeoutId) {
	          args = thisArg = undefined;
	        }
	        return result;
	      }
	      debounced.cancel = cancel;
	      return debounced;
	    }
	
	    /**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // logs 'deferred' after one or more milliseconds
	     */
	    var defer = restParam(function(func, args) {
	      return baseDelay(func, 1, args);
	    });
	
	    /**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => logs 'later' after one second
	     */
	    var delay = restParam(function(func, wait, args) {
	      return baseDelay(func, wait, args);
	    });
	
	    /**
	     * Creates a function that returns the result of invoking the provided
	     * functions with the `this` binding of the created function, where each
	     * successive invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow(_.add, square);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flow = createFlow();
	
	    /**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the provided functions from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias backflow, compose
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight(square, _.add);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flowRight = createFlow(true);
	
	    /**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is coerced to a string and used as the
	     * cache key. The `func` is invoked with the `this` binding of the memoized
	     * function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoizing function.
	     * @example
	     *
	     * var upperCase = _.memoize(function(string) {
	     *   return string.toUpperCase();
	     * });
	     *
	     * upperCase('fred');
	     * // => 'FRED'
	     *
	     * // modifying the result cache
	     * upperCase.cache.set('fred', 'BARNEY');
	     * upperCase('fred');
	     * // => 'BARNEY'
	     *
	     * // replacing `_.memoize.Cache`
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'barney' };
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'fred' }
	     *
	     * _.memoize.Cache = WeakMap;
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'barney' }
	     */
	    function memoize(func, resolver) {
	      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var memoized = function() {
	        var args = arguments,
	            key = resolver ? resolver.apply(this, args) : args[0],
	            cache = memoized.cache;
	
	        if (cache.has(key)) {
	          return cache.get(key);
	        }
	        var result = func.apply(this, args);
	        memoized.cache = cache.set(key, result);
	        return result;
	      };
	      memoized.cache = new memoize.Cache;
	      return memoized;
	    }
	
	    /**
	     * Creates a function that runs each argument through a corresponding
	     * transform function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms] The functions to transform
	     * arguments, specified as individual functions or arrays of functions.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var modded = _.modArgs(function(x, y) {
	     *   return [x, y];
	     * }, square, doubled);
	     *
	     * modded(1, 2);
	     * // => [1, 4]
	     *
	     * modded(5, 10);
	     * // => [25, 20]
	     */
	    var modArgs = restParam(function(func, transforms) {
	      transforms = baseFlatten(transforms);
	      if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = transforms.length;
	      return restParam(function(args) {
	        var index = nativeMin(args.length, length);
	        while (index--) {
	          args[index] = transforms[index](args[index]);
	        }
	        return func.apply(this, args);
	      });
	    });
	
	    /**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */
	    function negate(predicate) {
	      if (typeof predicate != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function() {
	        return !predicate.apply(this, arguments);
	      };
	    }
	
	    /**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first call. The `func` is invoked
	     * with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // `initialize` invokes `createApplication` once
	     */
	    function once(func) {
	      return before(2, func);
	    }
	
	    /**
	     * Creates a function that invokes `func` with `partial` arguments prepended
	     * to those provided to the new function. This method is like `_.bind` except
	     * it does **not** alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // using placeholders
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */
	    var partial = createPartial(PARTIAL_FLAG);
	
	    /**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to those provided to the new function.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // using placeholders
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */
	    var partialRight = createPartial(PARTIAL_RIGHT_FLAG);
	
	    /**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified indexes where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, 2, 0, 1);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     *
	     * var map = _.rearg(_.map, [1, 0]);
	     * map(function(n) {
	     *   return n * 3;
	     * }, [1, 2, 3]);
	     * // => [3, 6, 9]
	     */
	    var rearg = restParam(function(func, indexes) {
	      return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
	    });
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as an array.
	     *
	     * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.restParam(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */
	    function restParam(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            rest = Array(length);
	
	        while (++index < length) {
	          rest[index] = args[start + index];
	        }
	        switch (start) {
	          case 0: return func.call(this, rest);
	          case 1: return func.call(this, args[0], rest);
	          case 2: return func.call(this, args[0], args[1], rest);
	        }
	        var otherArgs = Array(start + 1);
	        index = -1;
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = rest;
	        return func.apply(this, otherArgs);
	      };
	    }
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of the created
	     * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
	     *
	     * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * // with a Promise
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */
	    function spread(func) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function(array) {
	        return func.apply(this, array);
	      };
	    }
	
	    /**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed invocations. Provide an options object to indicate
	     * that `func` should be invoked on the leading and/or trailing edge of the
	     * `wait` timeout. Subsequent calls to the throttled function return the
	     * result of the last `func` call.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the throttled function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=true] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // avoid excessively updating the position while scrolling
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	     *   'trailing': false
	     * }));
	     *
	     * // cancel a trailing throttled call
	     * jQuery(window).on('popstate', throttled.cancel);
	     */
	    function throttle(func, wait, options) {
	      var leading = true,
	          trailing = true;
	
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (options === false) {
	        leading = false;
	      } else if (isObject(options)) {
	        leading = 'leading' in options ? !!options.leading : leading;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	      return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
	    }
	
	    /**
	     * Creates a function that provides `value` to the wrapper function as its
	     * first argument. Any additional arguments provided to the function are
	     * appended to those provided to the wrapper function. The wrapper is invoked
	     * with the `this` binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} wrapper The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */
	    function wrap(value, wrapper) {
	      wrapper = wrapper == null ? identity : wrapper;
	      return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
	     * otherwise they are assigned by reference. If `customizer` is provided it is
	     * invoked to produce the cloned values. If `customizer` returns `undefined`
	     * cloning is handled by the method instead. The `customizer` is bound to
	     * `thisArg` and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var shallow = _.clone(users);
	     * shallow[0] === users[0];
	     * // => true
	     *
	     * var deep = _.clone(users, true);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.clone(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 0
	     */
	    function clone(value, isDeep, customizer, thisArg) {
	      if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
	        isDeep = false;
	      }
	      else if (typeof isDeep == 'function') {
	        thisArg = customizer;
	        customizer = isDeep;
	        isDeep = false;
	      }
	      return typeof customizer == 'function'
	        ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, isDeep);
	    }
	
	    /**
	     * Creates a deep clone of `value`. If `customizer` is provided it is invoked
	     * to produce the cloned values. If `customizer` returns `undefined` cloning
	     * is handled by the method instead. The `customizer` is bound to `thisArg`
	     * and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the deep cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var deep = _.cloneDeep(users);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.cloneDeep(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 20
	     */
	    function cloneDeep(value, customizer, thisArg) {
	      return typeof customizer == 'function'
	        ? baseClone(value, true, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, true);
	    }
	
	    /**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */
	    function gt(value, other) {
	      return value > other;
	    }
	
	    /**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */
	    function gte(value, other) {
	      return value >= other;
	    }
	
	    /**
	     * Checks if `value` is classified as an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */
	    function isArguments(value) {
	      return isObjectLike(value) && isArrayLike(value) &&
	        hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	    }
	
	    /**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(function() { return arguments; }());
	     * // => false
	     */
	    var isArray = nativeIsArray || function(value) {
	      return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	    };
	
	    /**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */
	    function isBoolean(value) {
	      return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
	    }
	
	    /**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */
	    function isDate(value) {
	      return isObjectLike(value) && objToString.call(value) == dateTag;
	    }
	
	    /**
	     * Checks if `value` is a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */
	    function isElement(value) {
	      return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
	    }
	
	    /**
	     * Checks if `value` is empty. A value is considered empty unless it is an
	     * `arguments` object, array, string, or jQuery-like collection with a length
	     * greater than `0` or an object with own enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Array|Object|string} value The value to inspect.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */
	    function isEmpty(value) {
	      if (value == null) {
	        return true;
	      }
	      if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
	          (isObjectLike(value) && isFunction(value.splice)))) {
	        return !value.length;
	      }
	      return !keys(value).length;
	    }
	
	    /**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent. If `customizer` is provided it is invoked to compare values.
	     * If `customizer` returns `undefined` comparisons are handled by the method
	     * instead. The `customizer` is bound to `thisArg` and invoked with three
	     * arguments: (value, other [, index|key]).
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. Functions and DOM nodes
	     * are **not** supported. Provide a customizer function to extend support
	     * for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @alias eq
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'fred' };
	     *
	     * object == other;
	     * // => false
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * // using a customizer callback
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqual(array, other, function(value, other) {
	     *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
	     *     return true;
	     *   }
	     * });
	     * // => true
	     */
	    function isEqual(value, other, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      var result = customizer ? customizer(value, other) : undefined;
	      return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	    }
	
	    /**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */
	    function isError(value) {
	      return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
	    }
	
	    /**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(10);
	     * // => true
	     *
	     * _.isFinite('10');
	     * // => false
	     *
	     * _.isFinite(true);
	     * // => false
	     *
	     * _.isFinite(Object(10));
	     * // => false
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     */
	    function isFinite(value) {
	      return typeof value == 'number' && nativeIsFinite(value);
	    }
	
	    /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
	    function isFunction(value) {
	      // The use of `Object#toString` avoids issues with the `typeof` operator
	      // in older versions of Chrome and Safari which return 'function' for regexes
	      // and Safari 8 equivalents which return 'object' for typed array constructors.
	      return isObject(value) && objToString.call(value) == funcTag;
	    }
	
	    /**
	     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(1);
	     * // => false
	     */
	    function isObject(value) {
	      // Avoid a V8 JIT bug in Chrome 19-20.
	      // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	      var type = typeof value;
	      return !!value && (type == 'object' || type == 'function');
	    }
	
	    /**
	     * Performs a deep comparison between `object` and `source` to determine if
	     * `object` contains equivalent property values. If `customizer` is provided
	     * it is invoked to compare values. If `customizer` returns `undefined`
	     * comparisons are handled by the method instead. The `customizer` is bound
	     * to `thisArg` and invoked with three arguments: (value, other, index|key).
	     *
	     * **Note:** This method supports comparing properties of arrays, booleans,
	     * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
	     * and DOM nodes are **not** supported. Provide a customizer function to extend
	     * support for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.isMatch(object, { 'age': 40 });
	     * // => true
	     *
	     * _.isMatch(object, { 'age': 36 });
	     * // => false
	     *
	     * // using a customizer callback
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatch(object, source, function(value, other) {
	     *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
	     * });
	     * // => true
	     */
	    function isMatch(object, source, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      return baseIsMatch(object, getMatchData(source), customizer);
	    }
	
	    /**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
	     * which returns `true` for `undefined` and other non-numeric values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */
	    function isNaN(value) {
	      // An `NaN` primitive is the only value that is not equal to itself.
	      // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
	      return isNumber(value) && value != +value;
	    }
	
	    /**
	     * Checks if `value` is a native function.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */
	    function isNative(value) {
	      if (value == null) {
	        return false;
	      }
	      if (isFunction(value)) {
	        return reIsNative.test(fnToString.call(value));
	      }
	      return isObjectLike(value) && reIsHostCtor.test(value);
	    }
	
	    /**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */
	    function isNull(value) {
	      return value === null;
	    }
	
	    /**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
	     * as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isNumber(8.4);
	     * // => true
	     *
	     * _.isNumber(NaN);
	     * // => true
	     *
	     * _.isNumber('8.4');
	     * // => false
	     */
	    function isNumber(value) {
	      return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
	    }
	
	    /**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * **Note:** This method assumes objects created by the `Object` constructor
	     * have no inherited enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */
	    function isPlainObject(value) {
	      var Ctor;
	
	      // Exit early for non `Object` objects.
	      if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	          (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	        return false;
	      }
	      // IE < 9 iterates inherited properties before own properties. If the first
	      // iterated property is an object's own property then there are no inherited
	      // enumerable properties.
	      var result;
	      // In most environments an object's own properties are iterated before
	      // its inherited properties. If the last iterated property is an object's
	      // own property then there are no inherited enumerable properties.
	      baseForIn(value, function(subValue, key) {
	        result = key;
	      });
	      return result === undefined || hasOwnProperty.call(value, result);
	    }
	
	    /**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */
	    function isRegExp(value) {
	      return isObject(value) && objToString.call(value) == regexpTag;
	    }
	
	    /**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */
	    function isString(value) {
	      return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	    }
	
	    /**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */
	    function isTypedArray(value) {
	      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	    }
	
	    /**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */
	    function isUndefined(value) {
	      return value === undefined;
	    }
	
	    /**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */
	    function lt(value, other) {
	      return value < other;
	    }
	
	    /**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */
	    function lte(value, other) {
	      return value <= other;
	    }
	
	    /**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * (function() {
	     *   return _.toArray(arguments).slice(1);
	     * }(1, 2, 3));
	     * // => [2, 3]
	     */
	    function toArray(value) {
	      var length = value ? getLength(value) : 0;
	      if (!isLength(length)) {
	        return values(value);
	      }
	      if (!length) {
	        return [];
	      }
	      return arrayCopy(value);
	    }
	
	    /**
	     * Converts `value` to a plain object flattening inherited enumerable
	     * properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */
	    function toPlainObject(value) {
	      return baseCopy(value, keysIn(value));
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Recursively merges own enumerable properties of the source object(s), that
	     * don't resolve to `undefined` into the destination object. Subsequent sources
	     * overwrite property assignments of previous sources. If `customizer` is
	     * provided it is invoked to produce the merged values of the destination and
	     * source properties. If `customizer` returns `undefined` merging is handled
	     * by the method instead. The `customizer` is bound to `thisArg` and invoked
	     * with five arguments: (objectValue, sourceValue, key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var users = {
	     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	     * };
	     *
	     * var ages = {
	     *   'data': [{ 'age': 36 }, { 'age': 40 }]
	     * };
	     *
	     * _.merge(users, ages);
	     * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	     *
	     * // using a customizer callback
	     * var object = {
	     *   'fruits': ['apple'],
	     *   'vegetables': ['beet']
	     * };
	     *
	     * var other = {
	     *   'fruits': ['banana'],
	     *   'vegetables': ['carrot']
	     * };
	     *
	     * _.merge(object, other, function(a, b) {
	     *   if (_.isArray(a)) {
	     *     return a.concat(b);
	     *   }
	     * });
	     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	     */
	    var merge = createAssigner(baseMerge);
	
	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object. Subsequent sources overwrite property assignments of previous sources.
	     * If `customizer` is provided it is invoked to produce the assigned values.
	     * The `customizer` is bound to `thisArg` and invoked with five arguments:
	     * (objectValue, sourceValue, key, object, source).
	     *
	     * **Note:** This method mutates `object` and is based on
	     * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	     *
	     * @static
	     * @memberOf _
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using a customizer callback
	     * var defaults = _.partialRight(_.assign, function(value, other) {
	     *   return _.isUndefined(value) ? other : value;
	     * });
	     *
	     * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var assign = createAssigner(function(object, source, customizer) {
	      return customizer
	        ? assignWith(object, source, customizer)
	        : baseAssign(object, source);
	    });
	
	    /**
	     * Creates an object that inherits from the given `prototype` object. If a
	     * `properties` object is provided its own enumerable properties are assigned
	     * to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */
	    function create(prototype, properties, guard) {
	      var result = baseCreate(prototype);
	      if (guard && isIterateeCall(prototype, properties, guard)) {
	        properties = undefined;
	      }
	      return properties ? baseAssign(result, properties) : result;
	    }
	
	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object for all destination properties that resolve to `undefined`. Once a
	     * property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var defaults = createDefaults(assign, assignDefaults);
	
	    /**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
	     * // => { 'user': { 'name': 'barney', 'age': 36 } }
	     *
	     */
	    var defaultsDeep = createDefaults(merge, mergeDefaults);
	
	    /**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */
	    var findKey = createFindKey(baseForOwn);
	
	    /**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => returns `pebbles` assuming `_.findKey` returns `barney`
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */
	    var findLastKey = createFindKey(baseForOwnRight);
	
	    /**
	     * Iterates over own and inherited enumerable properties of an object invoking
	     * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
	     */
	    var forIn = createForIn(baseFor);
	
	    /**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
	     */
	    var forInRight = createForIn(baseForRight);
	
	    /**
	     * Iterates over own enumerable properties of an object invoking `iteratee`
	     * for each property. The `iteratee` is bound to `thisArg` and invoked with
	     * three arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a' and 'b' (iteration order is not guaranteed)
	     */
	    var forOwn = createForOwn(baseForOwn);
	
	    /**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
	     */
	    var forOwnRight = createForOwn(baseForOwnRight);
	
	    /**
	     * Creates an array of function property names from all enumerable properties,
	     * own and inherited, of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @alias methods
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the new array of property names.
	     * @example
	     *
	     * _.functions(_);
	     * // => ['after', 'ary', 'assign', ...]
	     */
	    function functions(object) {
	      return baseFunctions(object, keysIn(object));
	    }
	
	    /**
	     * Gets the property value at `path` of `object`. If the resolved value is
	     * `undefined` the `defaultValue` is used in its place.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */
	    function get(object, path, defaultValue) {
	      var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
	      return result === undefined ? defaultValue : result;
	    }
	
	    /**
	     * Checks if `path` is a direct property.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': { 'c': 3 } } };
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b.c');
	     * // => true
	     *
	     * _.has(object, ['a', 'b', 'c']);
	     * // => true
	     */
	    function has(object, path) {
	      if (object == null) {
	        return false;
	      }
	      var result = hasOwnProperty.call(object, path);
	      if (!result && !isKey(path)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        if (object == null) {
	          return false;
	        }
	        path = last(path);
	        result = hasOwnProperty.call(object, path);
	      }
	      return result || (isLength(object.length) && isIndex(path, object.length) &&
	        (isArray(object) || isArguments(object)));
	    }
	
	    /**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite property
	     * assignments of previous values unless `multiValue` is `true`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {boolean} [multiValue] Allow multiple values per key.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     *
	     * // with `multiValue`
	     * _.invert(object, true);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */
	    function invert(object, multiValue, guard) {
	      if (guard && isIterateeCall(object, multiValue, guard)) {
	        multiValue = undefined;
	      }
	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = {};
	
	      while (++index < length) {
	        var key = props[index],
	            value = object[key];
	
	        if (multiValue) {
	          if (hasOwnProperty.call(result, value)) {
	            result[value].push(key);
	          } else {
	            result[value] = [key];
	          }
	        }
	        else {
	          result[value] = key;
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
	    var keys = !nativeKeys ? shimKeys : function(object) {
	      var Ctor = object == null ? undefined : object.constructor;
	      if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	          (typeof object != 'function' && isArrayLike(object))) {
	        return shimKeys(object);
	      }
	      return isObject(object) ? nativeKeys(object) : [];
	    };
	
	    /**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */
	    function keysIn(object) {
	      if (object == null) {
	        return [];
	      }
	      if (!isObject(object)) {
	        object = Object(object);
	      }
	      var length = object.length;
	      length = (length && isLength(length) &&
	        (isArray(object) || isArguments(object)) && length) || 0;
	
	      var Ctor = object.constructor,
	          index = -1,
	          isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	          result = Array(length),
	          skipIndexes = length > 0;
	
	      while (++index < length) {
	        result[index] = (index + '');
	      }
	      for (var key in object) {
	        if (!(skipIndexes && isIndex(key, length)) &&
	            !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * property of `object` through `iteratee`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */
	    var mapKeys = createObjectMapper(true);
	
	    /**
	     * Creates an object with the same keys as `object` and values generated by
	     * running each own enumerable property of `object` through `iteratee`. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, key, object).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	     *   return n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * // using the `_.property` callback shorthand
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */
	    var mapValues = createObjectMapper();
	
	    /**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable properties of `object` that are not omitted.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to omit, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.omit(object, 'age');
	     * // => { 'user': 'fred' }
	     *
	     * _.omit(object, _.isNumber);
	     * // => { 'user': 'fred' }
	     */
	    var omit = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      if (typeof props[0] != 'function') {
	        var props = arrayMap(baseFlatten(props), String);
	        return pickByArray(object, baseDifference(keysIn(object), props));
	      }
	      var predicate = bindCallback(props[0], props[1], 3);
	      return pickByCallback(object, function(value, key, object) {
	        return !predicate(value, key, object);
	      });
	    });
	
	    /**
	     * Creates a two dimensional array of the key-value pairs for `object`,
	     * e.g. `[[key1, value1], [key2, value2]]`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the new array of key-value pairs.
	     * @example
	     *
	     * _.pairs({ 'barney': 36, 'fred': 40 });
	     * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	     */
	    function pairs(object) {
	      object = toObject(object);
	
	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = Array(length);
	
	      while (++index < length) {
	        var key = props[index];
	        result[index] = [key, object[key]];
	      }
	      return result;
	    }
	
	    /**
	     * Creates an object composed of the picked `object` properties. Property
	     * names may be specified as individual arguments or as arrays of property
	     * names. If `predicate` is provided it is invoked for each property of `object`
	     * picking the properties `predicate` returns truthy for. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to pick, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.pick(object, 'user');
	     * // => { 'user': 'fred' }
	     *
	     * _.pick(object, _.isString);
	     * // => { 'user': 'fred' }
	     */
	    var pick = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      return typeof props[0] == 'function'
	        ? pickByCallback(object, bindCallback(props[0], props[1], 3))
	        : pickByArray(object, baseFlatten(props));
	    });
	
	    /**
	     * This method is like `_.get` except that if the resolved value is a function
	     * it is invoked with the `this` binding of its parent object and its result
	     * is returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a.b.c', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a.b.c', _.constant('default'));
	     * // => 'default'
	     */
	    function result(object, path, defaultValue) {
	      var result = object == null ? undefined : object[path];
	      if (result === undefined) {
	        if (object != null && !isKey(path, object)) {
	          path = toPath(path);
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          result = object == null ? undefined : object[last(path)];
	        }
	        result = result === undefined ? defaultValue : result;
	      }
	      return isFunction(result) ? result.call(object) : result;
	    }
	
	    /**
	     * Sets the property value of `path` on `object`. If a portion of `path`
	     * does not exist it is created.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to augment.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, 'x[0].y.z', 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */
	    function set(object, path, value) {
	      if (object == null) {
	        return object;
	      }
	      var pathKey = (path + '');
	      path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);
	
	      var index = -1,
	          length = path.length,
	          lastIndex = length - 1,
	          nested = object;
	
	      while (nested != null && ++index < length) {
	        var key = path[index];
	        if (isObject(nested)) {
	          if (index == lastIndex) {
	            nested[key] = value;
	          } else if (nested[key] == null) {
	            nested[key] = isIndex(path[index + 1]) ? [] : {};
	          }
	        }
	        nested = nested[key];
	      }
	      return object;
	    }
	
	    /**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own enumerable
	     * properties through `iteratee`, with each invocation potentially mutating
	     * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
	     * with four arguments: (accumulator, value, key, object). Iteratee functions
	     * may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Array|Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     */
	    function transform(object, iteratee, accumulator, thisArg) {
	      var isArr = isArray(object) || isTypedArray(object);
	      iteratee = getCallback(iteratee, thisArg, 4);
	
	      if (accumulator == null) {
	        if (isArr || isObject(object)) {
	          var Ctor = object.constructor;
	          if (isArr) {
	            accumulator = isArray(object) ? new Ctor : [];
	          } else {
	            accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
	          }
	        } else {
	          accumulator = {};
	        }
	      }
	      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
	        return iteratee(accumulator, value, index, object);
	      });
	      return accumulator;
	    }
	
	    /**
	     * Creates an array of the own enumerable property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */
	    function values(object) {
	      return baseValues(object, keys(object));
	    }
	
	    /**
	     * Creates an array of the own and inherited enumerable property values
	     * of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */
	    function valuesIn(object) {
	      return baseValues(object, keysIn(object));
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Checks if `n` is between `start` and up to but not including, `end`. If
	     * `end` is not specified it is set to `start` with `start` then set to `0`.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} n The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     */
	    function inRange(value, start, end) {
	      start = +start || 0;
	      if (end === undefined) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      return value >= nativeMin(start, end) && value < nativeMax(start, end);
	    }
	
	    /**
	     * Produces a random number between `min` and `max` (inclusive). If only one
	     * argument is provided a number between `0` and the given number is returned.
	     * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
	     * number is returned instead of an integer.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} [min=0] The minimum possible value.
	     * @param {number} [max=1] The maximum possible value.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */
	    function random(min, max, floating) {
	      if (floating && isIterateeCall(min, max, floating)) {
	        max = floating = undefined;
	      }
	      var noMin = min == null,
	          noMax = max == null;
	
	      if (floating == null) {
	        if (noMax && typeof min == 'boolean') {
	          floating = min;
	          min = 1;
	        }
	        else if (typeof max == 'boolean') {
	          floating = max;
	          noMax = true;
	        }
	      }
	      if (noMin && noMax) {
	        max = 1;
	        noMax = false;
	      }
	      min = +min || 0;
	      if (noMax) {
	        max = min;
	        min = 0;
	      } else {
	        max = +max || 0;
	      }
	      if (floating || min % 1 || max % 1) {
	        var rand = nativeRandom();
	        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
	      }
	      return baseRandom(min, max);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__foo_bar__');
	     * // => 'fooBar'
	     */
	    var camelCase = createCompounder(function(result, word, index) {
	      word = word.toLowerCase();
	      return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
	    });
	
	    /**
	     * Capitalizes the first character of `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('fred');
	     * // => 'Fred'
	     */
	    function capitalize(string) {
	      string = baseToString(string);
	      return string && (string.charAt(0).toUpperCase() + string.slice(1));
	    }
	
	    /**
	     * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */
	    function deburr(string) {
	      string = baseToString(string);
	      return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
	    }
	
	    /**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search from.
	     * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */
	    function endsWith(string, target, position) {
	      string = baseToString(string);
	      target = (target + '');
	
	      var length = string.length;
	      position = position === undefined
	        ? length
	        : nativeMin(position < 0 ? 0 : (+position || 0), length);
	
	      position -= target.length;
	      return position >= 0 && string.indexOf(target, position) == position;
	    }
	
	    /**
	     * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
	     * their corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional characters
	     * use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value.
	     * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * Backticks are escaped because in Internet Explorer < 9, they can break out
	     * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
	     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
	     * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
	     * for more details.
	     *
	     * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
	     * to reduce XSS vectors.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */
	    function escape(string) {
	      // Reset `lastIndex` because in IE < 9 `String#replace` does not.
	      string = baseToString(string);
	      return (string && reHasUnescapedHtml.test(string))
	        ? string.replace(reUnescapedHtml, escapeHtmlChar)
	        : string;
	    }
	
	    /**
	     * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
	     * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
	     */
	    function escapeRegExp(string) {
	      string = baseToString(string);
	      return (string && reHasRegExpChars.test(string))
	        ? string.replace(reRegExpChars, escapeRegExpChar)
	        : (string || '(?:)');
	    }
	
	    /**
	     * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__foo_bar__');
	     * // => 'foo-bar'
	     */
	    var kebabCase = createCompounder(function(result, word, index) {
	      return result + (index ? '-' : '') + word.toLowerCase();
	    });
	
	    /**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */
	    function pad(string, length, chars) {
	      string = baseToString(string);
	      length = +length;
	
	      var strLength = string.length;
	      if (strLength >= length || !nativeIsFinite(length)) {
	        return string;
	      }
	      var mid = (length - strLength) / 2,
	          leftLength = nativeFloor(mid),
	          rightLength = nativeCeil(mid);
	
	      chars = createPadding('', rightLength, chars);
	      return chars.slice(0, leftLength) + string + chars;
	    }
	
	    /**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padLeft('abc', 6);
	     * // => '   abc'
	     *
	     * _.padLeft('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padLeft('abc', 3);
	     * // => 'abc'
	     */
	    var padLeft = createPadDir();
	
	    /**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padRight('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padRight('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padRight('abc', 3);
	     * // => 'abc'
	     */
	    var padRight = createPadDir(true);
	
	    /**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
	     * in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
	     * of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */
	    function parseInt(string, radix, guard) {
	      // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
	      // Chrome fails to trim leading <BOM> whitespace characters.
	      // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
	      if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
	        radix = 0;
	      } else if (radix) {
	        radix = +radix;
	      }
	      string = trim(string);
	      return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
	    }
	
	    /**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=0] The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */
	    function repeat(string, n) {
	      var result = '';
	      string = baseToString(string);
	      n = +n;
	      if (n < 1 || !string || !nativeIsFinite(n)) {
	        return result;
	      }
	      // Leverage the exponentiation by squaring algorithm for a faster repeat.
	      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	      do {
	        if (n % 2) {
	          result += string;
	        }
	        n = nativeFloor(n / 2);
	        string += string;
	      } while (n);
	
	      return result;
	    }
	
	    /**
	     * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--foo-bar');
	     * // => 'foo_bar'
	     */
	    var snakeCase = createCompounder(function(result, word, index) {
	      return result + (index ? '_' : '') + word.toLowerCase();
	    });
	
	    /**
	     * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__foo_bar__');
	     * // => 'Foo Bar'
	     */
	    var startCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
	    });
	
	    /**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */
	    function startsWith(string, target, position) {
	      string = baseToString(string);
	      position = position == null
	        ? 0
	        : nativeMin(position < 0 ? 0 : (+position || 0), string.length);
	
	      return string.lastIndexOf(target, position) == position;
	    }
	
	    /**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is provided it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options] The options object.
	     * @param {RegExp} [options.escape] The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
	     * @param {Object} [options.imports] An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
	     * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
	     * @param {string} [options.variable] The data object variable name.
	     * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // using the "interpolate" delimiter to create a compiled template
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // using the HTML "escape" delimiter to escape data property values
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // using the "evaluate" delimiter to execute JavaScript and generate HTML
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the internal `print` function in "evaluate" delimiters
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // using the ES delimiter as an alternative to the default "interpolate" delimiter
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // using custom template delimiters
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // using backslashes to treat delimiters as plain text
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // using the `imports` option to import `jQuery` as `jq`
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the `sourceURL` option to specify a custom sourceURL for the template
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
	     *
	     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // using the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and a stack trace
	     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */
	    function template(string, options, otherOptions) {
	      // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
	      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
	      var settings = lodash.templateSettings;
	
	      if (otherOptions && isIterateeCall(string, options, otherOptions)) {
	        options = otherOptions = undefined;
	      }
	      string = baseToString(string);
	      options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);
	
	      var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
	          importsKeys = keys(imports),
	          importsValues = baseValues(imports, importsKeys);
	
	      var isEscaping,
	          isEvaluating,
	          index = 0,
	          interpolate = options.interpolate || reNoMatch,
	          source = "__p += '";
	
	      // Compile the regexp to match each delimiter.
	      var reDelimiters = RegExp(
	        (options.escape || reNoMatch).source + '|' +
	        interpolate.source + '|' +
	        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	        (options.evaluate || reNoMatch).source + '|$'
	      , 'g');
	
	      // Use a sourceURL for easier debugging.
	      var sourceURL = '//# sourceURL=' +
	        ('sourceURL' in options
	          ? options.sourceURL
	          : ('lodash.templateSources[' + (++templateCounter) + ']')
	        ) + '\n';
	
	      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	        interpolateValue || (interpolateValue = esTemplateValue);
	
	        // Escape characters that can't be included in string literals.
	        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
	
	        // Replace delimiters with snippets.
	        if (escapeValue) {
	          isEscaping = true;
	          source += "' +\n__e(" + escapeValue + ") +\n'";
	        }
	        if (evaluateValue) {
	          isEvaluating = true;
	          source += "';\n" + evaluateValue + ";\n__p += '";
	        }
	        if (interpolateValue) {
	          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	        }
	        index = offset + match.length;
	
	        // The JS engine embedded in Adobe products requires returning the `match`
	        // string in order to produce the correct `offset` value.
	        return match;
	      });
	
	      source += "';\n";
	
	      // If `variable` is not specified wrap a with-statement around the generated
	      // code to add the data object to the top of the scope chain.
	      var variable = options.variable;
	      if (!variable) {
	        source = 'with (obj) {\n' + source + '\n}\n';
	      }
	      // Cleanup code by stripping empty strings.
	      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	        .replace(reEmptyStringMiddle, '$1')
	        .replace(reEmptyStringTrailing, '$1;');
	
	      // Frame code as the function body.
	      source = 'function(' + (variable || 'obj') + ') {\n' +
	        (variable
	          ? ''
	          : 'obj || (obj = {});\n'
	        ) +
	        "var __t, __p = ''" +
	        (isEscaping
	           ? ', __e = _.escape'
	           : ''
	        ) +
	        (isEvaluating
	          ? ', __j = Array.prototype.join;\n' +
	            "function print() { __p += __j.call(arguments, '') }\n"
	          : ';\n'
	        ) +
	        source +
	        'return __p\n}';
	
	      var result = attempt(function() {
	        return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
	      });
	
	      // Provide the compiled function's source by its `toString` method or
	      // the `source` property as a convenience for inlining compiled templates.
	      result.source = source;
	      if (isError(result)) {
	        throw result;
	      }
	      return result;
	    }
	
	    /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
	    function trim(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
	      }
	      chars = (chars + '');
	      return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
	    }
	
	    /**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimLeft('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimLeft('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */
	    function trimLeft(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string));
	      }
	      return string.slice(charsLeftIndex(string, (chars + '')));
	    }
	
	    /**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimRight('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimRight('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */
	    function trimRight(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(0, trimmedRightIndex(string) + 1);
	      }
	      return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
	    }
	
	    /**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object|number} [options] The options object or maximum string length.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.trunc('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', 24);
	     * // => 'hi-diddly-ho there, n...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */
	    function trunc(string, options, guard) {
	      if (guard && isIterateeCall(string, options, guard)) {
	        options = undefined;
	      }
	      var length = DEFAULT_TRUNC_LENGTH,
	          omission = DEFAULT_TRUNC_OMISSION;
	
	      if (options != null) {
	        if (isObject(options)) {
	          var separator = 'separator' in options ? options.separator : separator;
	          length = 'length' in options ? (+options.length || 0) : length;
	          omission = 'omission' in options ? baseToString(options.omission) : omission;
	        } else {
	          length = +options || 0;
	        }
	      }
	      string = baseToString(string);
	      if (length >= string.length) {
	        return string;
	      }
	      var end = length - omission.length;
	      if (end < 1) {
	        return omission;
	      }
	      var result = string.slice(0, end);
	      if (separator == null) {
	        return result + omission;
	      }
	      if (isRegExp(separator)) {
	        if (string.slice(end).search(separator)) {
	          var match,
	              newEnd,
	              substring = string.slice(0, end);
	
	          if (!separator.global) {
	            separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
	          }
	          separator.lastIndex = 0;
	          while ((match = separator.exec(substring))) {
	            newEnd = match.index;
	          }
	          result = result.slice(0, newEnd == null ? end : newEnd);
	        }
	      } else if (string.indexOf(separator, end) != end) {
	        var index = result.lastIndexOf(separator);
	        if (index > -1) {
	          result = result.slice(0, index);
	        }
	      }
	      return result + omission;
	    }
	
	    /**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
	     * corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional HTML
	     * entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */
	    function unescape(string) {
	      string = baseToString(string);
	      return (string && reHasEscapedHtml.test(string))
	        ? string.replace(reEscapedHtml, unescapeHtmlChar)
	        : string;
	    }
	
	    /**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */
	    function words(string, pattern, guard) {
	      if (guard && isIterateeCall(string, pattern, guard)) {
	        pattern = undefined;
	      }
	      string = baseToString(string);
	      return string.match(pattern || reWords) || [];
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function} func The function to attempt.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // avoid throwing errors for invalid selectors
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */
	    var attempt = restParam(function(func, args) {
	      try {
	        return func.apply(undefined, args);
	      } catch(e) {
	        return isError(e) ? e : new Error(e);
	      }
	    });
	
	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and arguments of the created function. If `func` is a property name the
	     * created callback returns the property value for a given element. If `func`
	     * is an object the created callback returns `true` for elements that contain
	     * the equivalent object properties, otherwise it returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias iteratee
	     * @category Utility
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // wrap to create custom callback shorthands
	     * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
	     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
	     *   if (!match) {
	     *     return callback(func, thisArg);
	     *   }
	     *   return function(object) {
	     *     return match[2] == 'gt'
	     *       ? object[match[1]] > match[3]
	     *       : object[match[1]] < match[3];
	     *   };
	     * });
	     *
	     * _.filter(users, 'age__gt36');
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     */
	    function callback(func, thisArg, guard) {
	      if (guard && isIterateeCall(func, thisArg, guard)) {
	        thisArg = undefined;
	      }
	      return isObjectLike(func)
	        ? matches(func)
	        : baseCallback(func, thisArg);
	    }
	
	    /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var getter = _.constant(object);
	     *
	     * getter() === object;
	     * // => true
	     */
	    function constant(value) {
	      return function() {
	        return value;
	      };
	    }
	
	    /**
	     * This method returns the first argument provided to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.identity(object) === object;
	     * // => true
	     */
	    function identity(value) {
	      return value;
	    }
	
	    /**
	     * Creates a function that performs a deep comparison between a given object
	     * and `source`, returning `true` if the given object has equivalent property
	     * values, else `false`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, _.matches({ 'age': 40, 'active': false }));
	     * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
	     */
	    function matches(source) {
	      return baseMatches(baseClone(source, true));
	    }
	
	    /**
	     * Creates a function that compares the property value of `path` on a given
	     * object to `value`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * _.find(users, _.matchesProperty('user', 'fred'));
	     * // => { 'user': 'fred' }
	     */
	    function matchesProperty(path, srcValue) {
	      return baseMatchesProperty(path, baseClone(srcValue, true));
	    }
	
	    /**
	     * Creates a function that invokes the method at `path` on a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': _.constant(2) } } },
	     *   { 'a': { 'b': { 'c': _.constant(1) } } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    var method = restParam(function(path, args) {
	      return function(object) {
	        return invokePath(object, path, args);
	      };
	    });
	
	    /**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path on `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */
	    var methodOf = restParam(function(object, args) {
	      return function(path) {
	        return invokePath(object, path, args);
	      };
	    });
	
	    /**
	     * Adds all own enumerable function properties of a source object to the
	     * destination object. If `object` is a function then methods are added to
	     * its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.chain=true] Specify whether the functions added
	     *  are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */
	    function mixin(object, source, options) {
	      if (options == null) {
	        var isObj = isObject(source),
	            props = isObj ? keys(source) : undefined,
	            methodNames = (props && props.length) ? baseFunctions(source, props) : undefined;
	
	        if (!(methodNames ? methodNames.length : isObj)) {
	          methodNames = false;
	          options = source;
	          source = object;
	          object = this;
	        }
	      }
	      if (!methodNames) {
	        methodNames = baseFunctions(source, keys(source));
	      }
	      var chain = true,
	          index = -1,
	          isFunc = isFunction(object),
	          length = methodNames.length;
	
	      if (options === false) {
	        chain = false;
	      } else if (isObject(options) && 'chain' in options) {
	        chain = options.chain;
	      }
	      while (++index < length) {
	        var methodName = methodNames[index],
	            func = source[methodName];
	
	        object[methodName] = func;
	        if (isFunc) {
	          object.prototype[methodName] = (function(func) {
	            return function() {
	              var chainAll = this.__chain__;
	              if (chain || chainAll) {
	                var result = object(this.__wrapped__),
	                    actions = result.__actions__ = arrayCopy(this.__actions__);
	
	                actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
	                result.__chain__ = chainAll;
	                return result;
	              }
	              return func.apply(object, arrayPush([this.value()], arguments));
	            };
	          }(func));
	        }
	      }
	      return object;
	    }
	
	    /**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */
	    function noConflict() {
	      root._ = oldDash;
	      return this;
	    }
	
	    /**
	     * A no-operation function that returns `undefined` regardless of the
	     * arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.noop(object) === undefined;
	     * // => true
	     */
	    function noop() {
	      // No operation performed.
	    }
	
	    /**
	     * Creates a function that returns the property value at `path` on a
	     * given object.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': 2 } } },
	     *   { 'a': { 'b': { 'c': 1 } } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    function property(path) {
	      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	    }
	
	    /**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the property value at a given path on `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */
	    function propertyOf(object) {
	      return function(path) {
	        return baseGet(object, toPath(path), path + '');
	      };
	    }
	
	    /**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. If `end` is not specified it is
	     * set to `start` with `start` then set to `0`. If `end` is less than `start`
	     * a zero-length range is created unless a negative `step` is specified.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the new array of numbers.
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */
	    function range(start, end, step) {
	      if (step && isIterateeCall(start, end, step)) {
	        end = step = undefined;
	      }
	      start = +start || 0;
	      step = step == null ? 1 : (+step || 0);
	
	      if (end == null) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
	      // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
	      var index = -1,
	          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	          result = Array(length);
	
	      while (++index < length) {
	        result[index] = start;
	        start += step;
	      }
	      return result;
	    }
	
	    /**
	     * Invokes the iteratee function `n` times, returning an array of the results
	     * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
	     * one argument; (index).
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
	     * // => [3, 6, 4]
	     *
	     * _.times(3, function(n) {
	     *   mage.castSpell(n);
	     * });
	     * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
	     *
	     * _.times(3, function(n) {
	     *   this.cast(n);
	     * }, mage);
	     * // => also invokes `mage.castSpell(n)` three times
	     */
	    function times(n, iteratee, thisArg) {
	      n = nativeFloor(n);
	
	      // Exit early to avoid a JSC JIT bug in Safari 8
	      // where `Array(0)` is treated as `Array(1)`.
	      if (n < 1 || !nativeIsFinite(n)) {
	        return [];
	      }
	      var index = -1,
	          result = Array(nativeMin(n, MAX_ARRAY_LENGTH));
	
	      iteratee = bindCallback(iteratee, thisArg, 1);
	      while (++index < n) {
	        if (index < MAX_ARRAY_LENGTH) {
	          result[index] = iteratee(index);
	        } else {
	          iteratee(index);
	        }
	      }
	      return result;
	    }
	
	    /**
	     * Generates a unique ID. If `prefix` is provided the ID is appended to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {string} [prefix] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */
	    function uniqueId(prefix) {
	      var id = ++idCounter;
	      return baseToString(prefix) + id;
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} augend The first number to add.
	     * @param {number} addend The second number to add.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */
	    function add(augend, addend) {
	      return (+augend || 0) + (+addend || 0);
	    }
	
	    /**
	     * Calculates `n` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */
	    var ceil = createRound('ceil');
	
	    /**
	     * Calculates `n` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */
	    var floor = createRound('floor');
	
	    /**
	     * Gets the maximum value of `collection`. If `collection` is empty or falsey
	     * `-Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => -Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.max(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.max(users, 'age');
	     * // => { 'user': 'fred', 'age': 40 }
	     */
	    var max = createExtremum(gt, NEGATIVE_INFINITY);
	
	    /**
	     * Gets the minimum value of `collection`. If `collection` is empty or falsey
	     * `Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.min(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.min(users, 'age');
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var min = createExtremum(lt, POSITIVE_INFINITY);
	
	    /**
	     * Calculates `n` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */
	    var round = createRound('round');
	
	    /**
	     * Gets the sum of the values in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 6]);
	     * // => 10
	     *
	     * _.sum({ 'a': 4, 'b': 6 });
	     * // => 10
	     *
	     * var objects = [
	     *   { 'n': 4 },
	     *   { 'n': 6 }
	     * ];
	     *
	     * _.sum(objects, function(object) {
	     *   return object.n;
	     * });
	     * // => 10
	     *
	     * // using the `_.property` callback shorthand
	     * _.sum(objects, 'n');
	     * // => 10
	     */
	    function sum(collection, iteratee, thisArg) {
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return iteratee.length == 1
	        ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee)
	        : baseSum(collection, iteratee);
	    }
	
	    /*------------------------------------------------------------------------*/
	
	    // Ensure wrappers are instances of `baseLodash`.
	    lodash.prototype = baseLodash.prototype;
	
	    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	    LodashWrapper.prototype.constructor = LodashWrapper;
	
	    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	    LazyWrapper.prototype.constructor = LazyWrapper;
	
	    // Add functions to the `Map` cache.
	    MapCache.prototype['delete'] = mapDelete;
	    MapCache.prototype.get = mapGet;
	    MapCache.prototype.has = mapHas;
	    MapCache.prototype.set = mapSet;
	
	    // Add functions to the `Set` cache.
	    SetCache.prototype.push = cachePush;
	
	    // Assign cache to `_.memoize`.
	    memoize.Cache = MapCache;
	
	    // Add functions that return wrapped values when chaining.
	    lodash.after = after;
	    lodash.ary = ary;
	    lodash.assign = assign;
	    lodash.at = at;
	    lodash.before = before;
	    lodash.bind = bind;
	    lodash.bindAll = bindAll;
	    lodash.bindKey = bindKey;
	    lodash.callback = callback;
	    lodash.chain = chain;
	    lodash.chunk = chunk;
	    lodash.compact = compact;
	    lodash.constant = constant;
	    lodash.countBy = countBy;
	    lodash.create = create;
	    lodash.curry = curry;
	    lodash.curryRight = curryRight;
	    lodash.debounce = debounce;
	    lodash.defaults = defaults;
	    lodash.defaultsDeep = defaultsDeep;
	    lodash.defer = defer;
	    lodash.delay = delay;
	    lodash.difference = difference;
	    lodash.drop = drop;
	    lodash.dropRight = dropRight;
	    lodash.dropRightWhile = dropRightWhile;
	    lodash.dropWhile = dropWhile;
	    lodash.fill = fill;
	    lodash.filter = filter;
	    lodash.flatten = flatten;
	    lodash.flattenDeep = flattenDeep;
	    lodash.flow = flow;
	    lodash.flowRight = flowRight;
	    lodash.forEach = forEach;
	    lodash.forEachRight = forEachRight;
	    lodash.forIn = forIn;
	    lodash.forInRight = forInRight;
	    lodash.forOwn = forOwn;
	    lodash.forOwnRight = forOwnRight;
	    lodash.functions = functions;
	    lodash.groupBy = groupBy;
	    lodash.indexBy = indexBy;
	    lodash.initial = initial;
	    lodash.intersection = intersection;
	    lodash.invert = invert;
	    lodash.invoke = invoke;
	    lodash.keys = keys;
	    lodash.keysIn = keysIn;
	    lodash.map = map;
	    lodash.mapKeys = mapKeys;
	    lodash.mapValues = mapValues;
	    lodash.matches = matches;
	    lodash.matchesProperty = matchesProperty;
	    lodash.memoize = memoize;
	    lodash.merge = merge;
	    lodash.method = method;
	    lodash.methodOf = methodOf;
	    lodash.mixin = mixin;
	    lodash.modArgs = modArgs;
	    lodash.negate = negate;
	    lodash.omit = omit;
	    lodash.once = once;
	    lodash.pairs = pairs;
	    lodash.partial = partial;
	    lodash.partialRight = partialRight;
	    lodash.partition = partition;
	    lodash.pick = pick;
	    lodash.pluck = pluck;
	    lodash.property = property;
	    lodash.propertyOf = propertyOf;
	    lodash.pull = pull;
	    lodash.pullAt = pullAt;
	    lodash.range = range;
	    lodash.rearg = rearg;
	    lodash.reject = reject;
	    lodash.remove = remove;
	    lodash.rest = rest;
	    lodash.restParam = restParam;
	    lodash.set = set;
	    lodash.shuffle = shuffle;
	    lodash.slice = slice;
	    lodash.sortBy = sortBy;
	    lodash.sortByAll = sortByAll;
	    lodash.sortByOrder = sortByOrder;
	    lodash.spread = spread;
	    lodash.take = take;
	    lodash.takeRight = takeRight;
	    lodash.takeRightWhile = takeRightWhile;
	    lodash.takeWhile = takeWhile;
	    lodash.tap = tap;
	    lodash.throttle = throttle;
	    lodash.thru = thru;
	    lodash.times = times;
	    lodash.toArray = toArray;
	    lodash.toPlainObject = toPlainObject;
	    lodash.transform = transform;
	    lodash.union = union;
	    lodash.uniq = uniq;
	    lodash.unzip = unzip;
	    lodash.unzipWith = unzipWith;
	    lodash.values = values;
	    lodash.valuesIn = valuesIn;
	    lodash.where = where;
	    lodash.without = without;
	    lodash.wrap = wrap;
	    lodash.xor = xor;
	    lodash.zip = zip;
	    lodash.zipObject = zipObject;
	    lodash.zipWith = zipWith;
	
	    // Add aliases.
	    lodash.backflow = flowRight;
	    lodash.collect = map;
	    lodash.compose = flowRight;
	    lodash.each = forEach;
	    lodash.eachRight = forEachRight;
	    lodash.extend = assign;
	    lodash.iteratee = callback;
	    lodash.methods = functions;
	    lodash.object = zipObject;
	    lodash.select = filter;
	    lodash.tail = rest;
	    lodash.unique = uniq;
	
	    // Add functions to `lodash.prototype`.
	    mixin(lodash, lodash);
	
	    /*------------------------------------------------------------------------*/
	
	    // Add functions that return unwrapped values when chaining.
	    lodash.add = add;
	    lodash.attempt = attempt;
	    lodash.camelCase = camelCase;
	    lodash.capitalize = capitalize;
	    lodash.ceil = ceil;
	    lodash.clone = clone;
	    lodash.cloneDeep = cloneDeep;
	    lodash.deburr = deburr;
	    lodash.endsWith = endsWith;
	    lodash.escape = escape;
	    lodash.escapeRegExp = escapeRegExp;
	    lodash.every = every;
	    lodash.find = find;
	    lodash.findIndex = findIndex;
	    lodash.findKey = findKey;
	    lodash.findLast = findLast;
	    lodash.findLastIndex = findLastIndex;
	    lodash.findLastKey = findLastKey;
	    lodash.findWhere = findWhere;
	    lodash.first = first;
	    lodash.floor = floor;
	    lodash.get = get;
	    lodash.gt = gt;
	    lodash.gte = gte;
	    lodash.has = has;
	    lodash.identity = identity;
	    lodash.includes = includes;
	    lodash.indexOf = indexOf;
	    lodash.inRange = inRange;
	    lodash.isArguments = isArguments;
	    lodash.isArray = isArray;
	    lodash.isBoolean = isBoolean;
	    lodash.isDate = isDate;
	    lodash.isElement = isElement;
	    lodash.isEmpty = isEmpty;
	    lodash.isEqual = isEqual;
	    lodash.isError = isError;
	    lodash.isFinite = isFinite;
	    lodash.isFunction = isFunction;
	    lodash.isMatch = isMatch;
	    lodash.isNaN = isNaN;
	    lodash.isNative = isNative;
	    lodash.isNull = isNull;
	    lodash.isNumber = isNumber;
	    lodash.isObject = isObject;
	    lodash.isPlainObject = isPlainObject;
	    lodash.isRegExp = isRegExp;
	    lodash.isString = isString;
	    lodash.isTypedArray = isTypedArray;
	    lodash.isUndefined = isUndefined;
	    lodash.kebabCase = kebabCase;
	    lodash.last = last;
	    lodash.lastIndexOf = lastIndexOf;
	    lodash.lt = lt;
	    lodash.lte = lte;
	    lodash.max = max;
	    lodash.min = min;
	    lodash.noConflict = noConflict;
	    lodash.noop = noop;
	    lodash.now = now;
	    lodash.pad = pad;
	    lodash.padLeft = padLeft;
	    lodash.padRight = padRight;
	    lodash.parseInt = parseInt;
	    lodash.random = random;
	    lodash.reduce = reduce;
	    lodash.reduceRight = reduceRight;
	    lodash.repeat = repeat;
	    lodash.result = result;
	    lodash.round = round;
	    lodash.runInContext = runInContext;
	    lodash.size = size;
	    lodash.snakeCase = snakeCase;
	    lodash.some = some;
	    lodash.sortedIndex = sortedIndex;
	    lodash.sortedLastIndex = sortedLastIndex;
	    lodash.startCase = startCase;
	    lodash.startsWith = startsWith;
	    lodash.sum = sum;
	    lodash.template = template;
	    lodash.trim = trim;
	    lodash.trimLeft = trimLeft;
	    lodash.trimRight = trimRight;
	    lodash.trunc = trunc;
	    lodash.unescape = unescape;
	    lodash.uniqueId = uniqueId;
	    lodash.words = words;
	
	    // Add aliases.
	    lodash.all = every;
	    lodash.any = some;
	    lodash.contains = includes;
	    lodash.eq = isEqual;
	    lodash.detect = find;
	    lodash.foldl = reduce;
	    lodash.foldr = reduceRight;
	    lodash.head = first;
	    lodash.include = includes;
	    lodash.inject = reduce;
	
	    mixin(lodash, (function() {
	      var source = {};
	      baseForOwn(lodash, function(func, methodName) {
	        if (!lodash.prototype[methodName]) {
	          source[methodName] = func;
	        }
	      });
	      return source;
	    }()), false);
	
	    /*------------------------------------------------------------------------*/
	
	    // Add functions capable of returning wrapped and unwrapped values when chaining.
	    lodash.sample = sample;
	
	    lodash.prototype.sample = function(n) {
	      if (!this.__chain__ && n == null) {
	        return sample(this.value());
	      }
	      return this.thru(function(value) {
	        return sample(value, n);
	      });
	    };
	
	    /*------------------------------------------------------------------------*/
	
	    /**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type string
	     */
	    lodash.VERSION = VERSION;
	
	    // Assign default placeholders.
	    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
	      lodash[methodName].placeholder = lodash;
	    });
	
	    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	    arrayEach(['drop', 'take'], function(methodName, index) {
	      LazyWrapper.prototype[methodName] = function(n) {
	        var filtered = this.__filtered__;
	        if (filtered && !index) {
	          return new LazyWrapper(this);
	        }
	        n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);
	
	        var result = this.clone();
	        if (filtered) {
	          result.__takeCount__ = nativeMin(result.__takeCount__, n);
	        } else {
	          result.__views__.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
	        }
	        return result;
	      };
	
	      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
	        return this.reverse()[methodName](n).reverse();
	      };
	    });
	
	    // Add `LazyWrapper` methods that accept an `iteratee` value.
	    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
	      var type = index + 1,
	          isFilter = type != LAZY_MAP_FLAG;
	
	      LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
	        var result = this.clone();
	        result.__iteratees__.push({ 'iteratee': getCallback(iteratee, thisArg, 1), 'type': type });
	        result.__filtered__ = result.__filtered__ || isFilter;
	        return result;
	      };
	    });
	
	    // Add `LazyWrapper` methods for `_.first` and `_.last`.
	    arrayEach(['first', 'last'], function(methodName, index) {
	      var takeName = 'take' + (index ? 'Right' : '');
	
	      LazyWrapper.prototype[methodName] = function() {
	        return this[takeName](1).value()[0];
	      };
	    });
	
	    // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
	    arrayEach(['initial', 'rest'], function(methodName, index) {
	      var dropName = 'drop' + (index ? '' : 'Right');
	
	      LazyWrapper.prototype[methodName] = function() {
	        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
	      };
	    });
	
	    // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
	    arrayEach(['pluck', 'where'], function(methodName, index) {
	      var operationName = index ? 'filter' : 'map',
	          createCallback = index ? baseMatches : property;
	
	      LazyWrapper.prototype[methodName] = function(value) {
	        return this[operationName](createCallback(value));
	      };
	    });
	
	    LazyWrapper.prototype.compact = function() {
	      return this.filter(identity);
	    };
	
	    LazyWrapper.prototype.reject = function(predicate, thisArg) {
	      predicate = getCallback(predicate, thisArg, 1);
	      return this.filter(function(value) {
	        return !predicate(value);
	      });
	    };
	
	    LazyWrapper.prototype.slice = function(start, end) {
	      start = start == null ? 0 : (+start || 0);
	
	      var result = this;
	      if (result.__filtered__ && (start > 0 || end < 0)) {
	        return new LazyWrapper(result);
	      }
	      if (start < 0) {
	        result = result.takeRight(-start);
	      } else if (start) {
	        result = result.drop(start);
	      }
	      if (end !== undefined) {
	        end = (+end || 0);
	        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
	      }
	      return result;
	    };
	
	    LazyWrapper.prototype.takeRightWhile = function(predicate, thisArg) {
	      return this.reverse().takeWhile(predicate, thisArg).reverse();
	    };
	
	    LazyWrapper.prototype.toArray = function() {
	      return this.take(POSITIVE_INFINITY);
	    };
	
	    // Add `LazyWrapper` methods to `lodash.prototype`.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
	          retUnwrapped = /^(?:first|last)$/.test(methodName),
	          lodashFunc = lodash[retUnwrapped ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName];
	
	      if (!lodashFunc) {
	        return;
	      }
	      lodash.prototype[methodName] = function() {
	        var args = retUnwrapped ? [1] : arguments,
	            chainAll = this.__chain__,
	            value = this.__wrapped__,
	            isHybrid = !!this.__actions__.length,
	            isLazy = value instanceof LazyWrapper,
	            iteratee = args[0],
	            useLazy = isLazy || isArray(value);
	
	        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
	          // Avoid lazy use if the iteratee has a "length" value other than `1`.
	          isLazy = useLazy = false;
	        }
	        var interceptor = function(value) {
	          return (retUnwrapped && chainAll)
	            ? lodashFunc(value, 1)[0]
	            : lodashFunc.apply(undefined, arrayPush([value], args));
	        };
	
	        var action = { 'func': thru, 'args': [interceptor], 'thisArg': undefined },
	            onlyLazy = isLazy && !isHybrid;
	
	        if (retUnwrapped && !chainAll) {
	          if (onlyLazy) {
	            value = value.clone();
	            value.__actions__.push(action);
	            return func.call(value);
	          }
	          return lodashFunc.call(undefined, this.value())[0];
	        }
	        if (!retUnwrapped && useLazy) {
	          value = onlyLazy ? value : new LazyWrapper(this);
	          var result = func.apply(value, args);
	          result.__actions__.push(action);
	          return new LodashWrapper(result, chainAll);
	        }
	        return this.thru(interceptor);
	      };
	    });
	
	    // Add `Array` and `String` methods to `lodash.prototype`.
	    arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
	      var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
	          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
	          retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);
	
	      lodash.prototype[methodName] = function() {
	        var args = arguments;
	        if (retUnwrapped && !this.__chain__) {
	          return func.apply(this.value(), args);
	        }
	        return this[chainName](function(value) {
	          return func.apply(value, args);
	        });
	      };
	    });
	
	    // Map minified function names to their real names.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var lodashFunc = lodash[methodName];
	      if (lodashFunc) {
	        var key = lodashFunc.name,
	            names = realNames[key] || (realNames[key] = []);
	
	        names.push({ 'name': methodName, 'func': lodashFunc });
	      }
	    });
	
	    realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': undefined }];
	
	    // Add functions to the lazy wrapper.
	    LazyWrapper.prototype.clone = lazyClone;
	    LazyWrapper.prototype.reverse = lazyReverse;
	    LazyWrapper.prototype.value = lazyValue;
	
	    // Add chaining functions to the `lodash` wrapper.
	    lodash.prototype.chain = wrapperChain;
	    lodash.prototype.commit = wrapperCommit;
	    lodash.prototype.concat = wrapperConcat;
	    lodash.prototype.plant = wrapperPlant;
	    lodash.prototype.reverse = wrapperReverse;
	    lodash.prototype.toString = wrapperToString;
	    lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
	
	    // Add function aliases to the `lodash` wrapper.
	    lodash.prototype.collect = lodash.prototype.map;
	    lodash.prototype.head = lodash.prototype.first;
	    lodash.prototype.select = lodash.prototype.filter;
	    lodash.prototype.tail = lodash.prototype.rest;
	
	    return lodash;
	  }
	
	  /*--------------------------------------------------------------------------*/
	
	  // Export lodash.
	  var _ = runInContext();
	
	  // Some AMD build optimizers like r.js check for condition patterns like the following:
	  if (true) {
	    // Expose lodash to the global object when an AMD loader is present to avoid
	    // errors in cases where lodash is loaded by a script tag and not intended
	    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
	    // more details.
	    root._ = _;
	
	    // Define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
	  else if (freeExports && freeModule) {
	    // Export for Node.js or RingoJS.
	    if (moduleExports) {
	      (freeModule.exports = _)._ = _;
	    }
	    // Export for Rhino with CommonJS support.
	    else {
	      freeExports._ = _;
	    }
	  }
	  else {
	    // Export for a browser or Rhino.
	    root._ = _;
	  }
	}.call(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(327)(module), (function() { return this; }()), __webpack_require__(39)))

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
	  'use strict';
	
	  /*istanbul ignore next:cant test*/
	  if (typeof module === 'object' && typeof module.exports === 'object') {
	    module.exports = factory();
	  } else if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    // Browser globals
	    root.objectPath = factory();
	  }
	})(this, function(){
	  'use strict';
	
	  var
	    toStr = Object.prototype.toString,
	    _hasOwnProperty = Object.prototype.hasOwnProperty;
	
	  function isEmpty(value){
	    if (!value) {
	      return true;
	    }
	    if (isArray(value) && value.length === 0) {
	        return true;
	    } else if (!isString(value)) {
	        for (var i in value) {
	            if (_hasOwnProperty.call(value, i)) {
	                return false;
	            }
	        }
	        return true;
	    }
	    return false;
	  }
	
	  function toString(type){
	    return toStr.call(type);
	  }
	
	  function isNumber(value){
	    return typeof value === 'number' || toString(value) === "[object Number]";
	  }
	
	  function isString(obj){
	    return typeof obj === 'string' || toString(obj) === "[object String]";
	  }
	
	  function isObject(obj){
	    return typeof obj === 'object' && toString(obj) === "[object Object]";
	  }
	
	  function isArray(obj){
	    return typeof obj === 'object' && typeof obj.length === 'number' && toString(obj) === '[object Array]';
	  }
	
	  function isBoolean(obj){
	    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
	  }
	
	  function getKey(key){
	    var intKey = parseInt(key);
	    if (intKey.toString() === key) {
	      return intKey;
	    }
	    return key;
	  }
	
	  function set(obj, path, value, doNotReplace){
	    if (isNumber(path)) {
	      path = [path];
	    }
	    if (isEmpty(path)) {
	      return obj;
	    }
	    if (isString(path)) {
	      return set(obj, path.split('.').map(getKey), value, doNotReplace);
	    }
	    var currentPath = path[0];
	
	    if (path.length === 1) {
	      var oldVal = obj[currentPath];
	      if (oldVal === void 0 || !doNotReplace) {
	        obj[currentPath] = value;
	      }
	      return oldVal;
	    }
	
	    if (obj[currentPath] === void 0) {
	      //check if we assume an array
	      if(isNumber(path[1])) {
	        obj[currentPath] = [];
	      } else {
	        obj[currentPath] = {};
	      }
	    }
	
	    return set(obj[currentPath], path.slice(1), value, doNotReplace);
	  }
	
	  function del(obj, path) {
	    if (isNumber(path)) {
	      path = [path];
	    }
	
	    if (isEmpty(obj)) {
	      return void 0;
	    }
	
	    if (isEmpty(path)) {
	      return obj;
	    }
	    if(isString(path)) {
	      return del(obj, path.split('.'));
	    }
	
	    var currentPath = getKey(path[0]);
	    var oldVal = obj[currentPath];
	
	    if(path.length === 1) {
	      if (oldVal !== void 0) {
	        if (isArray(obj)) {
	          obj.splice(currentPath, 1);
	        } else {
	          delete obj[currentPath];
	        }
	      }
	    } else {
	      if (obj[currentPath] !== void 0) {
	        return del(obj[currentPath], path.slice(1));
	      }
	    }
	
	    return obj;
	  }
	
	  var objectPath = function(obj) {
	    return Object.keys(objectPath).reduce(function(proxy, prop) {
	      if (typeof objectPath[prop] === 'function') {
	        proxy[prop] = objectPath[prop].bind(objectPath, obj);
	      }
	
	      return proxy;
	    }, {});
	  };
	
	  objectPath.has = function (obj, path) {
	    if (isEmpty(obj)) {
	      return false;
	    }
	
	    if (isNumber(path)) {
	      path = [path];
	    } else if (isString(path)) {
	      path = path.split('.');
	    }
	
	    if (isEmpty(path) || path.length === 0) {
	      return false;
	    }
	
	    for (var i = 0; i < path.length; i++) {
	      var j = path[i];
	      if ((isObject(obj) || isArray(obj)) && _hasOwnProperty.call(obj, j)) {
	        obj = obj[j];
	      } else {
	        return false;
	      }
	    }
	
	    return true;
	  };
	
	  objectPath.ensureExists = function (obj, path, value){
	    return set(obj, path, value, true);
	  };
	
	  objectPath.set = function (obj, path, value, doNotReplace){
	    return set(obj, path, value, doNotReplace);
	  };
	
	  objectPath.insert = function (obj, path, value, at){
	    var arr = objectPath.get(obj, path);
	    at = ~~at;
	    if (!isArray(arr)) {
	      arr = [];
	      objectPath.set(obj, path, arr);
	    }
	    arr.splice(at, 0, value);
	  };
	
	  objectPath.empty = function(obj, path) {
	    if (isEmpty(path)) {
	      return obj;
	    }
	    if (isEmpty(obj)) {
	      return void 0;
	    }
	
	    var value, i;
	    if (!(value = objectPath.get(obj, path))) {
	      return obj;
	    }
	
	    if (isString(value)) {
	      return objectPath.set(obj, path, '');
	    } else if (isBoolean(value)) {
	      return objectPath.set(obj, path, false);
	    } else if (isNumber(value)) {
	      return objectPath.set(obj, path, 0);
	    } else if (isArray(value)) {
	      value.length = 0;
	    } else if (isObject(value)) {
	      for (i in value) {
	        if (_hasOwnProperty.call(value, i)) {
	          delete value[i];
	        }
	      }
	    } else {
	      return objectPath.set(obj, path, null);
	    }
	  };
	
	  objectPath.push = function (obj, path /*, values */){
	    var arr = objectPath.get(obj, path);
	    if (!isArray(arr)) {
	      arr = [];
	      objectPath.set(obj, path, arr);
	    }
	
	    arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
	  };
	
	  objectPath.coalesce = function (obj, paths, defaultValue) {
	    var value;
	
	    for (var i = 0, len = paths.length; i < len; i++) {
	      if ((value = objectPath.get(obj, paths[i])) !== void 0) {
	        return value;
	      }
	    }
	
	    return defaultValue;
	  };
	
	  objectPath.get = function (obj, path, defaultValue){
	    if (isNumber(path)) {
	      path = [path];
	    }
	    if (isEmpty(path)) {
	      return obj;
	    }
	    if (isEmpty(obj)) {
	      return defaultValue;
	    }
	    if (isString(path)) {
	      return objectPath.get(obj, path.split('.'), defaultValue);
	    }
	
	    var currentPath = getKey(path[0]);
	
	    if (path.length === 1) {
	      if (obj[currentPath] === void 0) {
	        return defaultValue;
	      }
	      return obj[currentPath];
	    }
	
	    return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
	  };
	
	  objectPath.del = function(obj, path) {
	    return del(obj, path);
	  };
	
	  return objectPath;
	});


/***/ },
/* 432 */
/***/ function(module, exports) {

	module.exports = ".update-nag{\n    display: inline-block;\n    font-size: 14px;\n    text-align: left;\n    background-color: #fff;\n    height: 40px;\n    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);\n    margin-bottom: 10px;\n}\n\n.update-nag:hover{\n    cursor: pointer;\n    box-shadow: 0 1px 1px 0 rgba(0,0,0,.3);\n}\n\n.update-nag > .update-split{\n    background: #337ab7;\n    width: 33px;\n    float: left;\n    color: #fff!important;\n    height: 100%;\n    text-align: center;\n}\n\n.update-nag > .update-split > .glyphicon{\n    position:relative;\n    top: calc(50% - 9px)!important; /* 50% - 3/4 of icon height */\n}\n.update-nag > .update-split.update-success{\n    background: #5cb85c!important;\n}\n\n.update-nag > .update-split.update-danger{\n    background: #d9534f!important;\n}\n\n.update-nag > .update-split.update-info{\n    background: #5bc0de!important;\n}\n\n\n\n.update-nag > .update-text{\n    line-height: 19px;\n    padding-top: 11px;\n    padding-left: 45px;\n    padding-right: 20px;\n}"

/***/ },
/* 433 */
/***/ function(module, exports) {

	module.exports = "label {\n    white-space: pre;\n    word-break: break-word;\n    padding: 15px 60px 15px 15px;\n    margin-left: 45px;\n    display: block;\n    line-height: 1.2;\n    transition: color 0.4s;\n}\n\nlabel.completed {\n    color: #d9d9d9;\n    text-decoration: line-through;\n}\n\n.buttonsDone, .buttonsEdit {\n    display: none;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    opacity: 0;\n    background-color: transparent;\n    padding: 10px;\n    margin: 10px;\n    color: #585858;\n    transition: opacity 2s ease-out;\n    border: 0;\n}\n\n.buttonsDone {\n    right: 10px;\n}\n\n.buttonsEdit {\n    right: 40px;\n}\n\n.view:hover .buttonsDone {\n    display: block;\n    opacity: 1;\n}\n\n.view:hover .buttonsEdit {\n    display: block;\n    opacity: 1;\n}\n\n.editInput {\n    margin-left: 45px;\n    width: 100%;\n    height: 70px;\n}\n\n.toggle {\n    text-align: center;\n    width: 40px;\n    /* auto, since non-WebKit browsers doesn't support input styling */\n    height: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto 0;\n    border: none; /* Mobile Safari */\n    -webkit-appearance: none;\n    -moz-appearance: none;\n         appearance: none;\n}\n\n.toggle:after {\n    content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.toggle:checked:after {\n    content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.toggle {\n    background: none;\n    height: 40px;\n}\n"

/***/ },
/* 434 */
/***/ function(module, exports) {

	module.exports = "\n\n.hidden {\n  display: none;\n}\n\n.todoapp {\n  background: #fff;\n  margin: 130px 0 40px 0;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n              0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.todoapp h1 {\n  position: absolute;\n  top: -155px;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n  position: relative;\n  margin: 0;\n  width: 90%;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  outline: none;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n}\n\n.new-todo {\n  padding: 16px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\n\n.todo-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.todo-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n  border-bottom: none;\n}\n\nlabel {\n  white-space: pre;\n  word-break: break-word;\n  padding: 15px 60px 15px 15px;\n  margin-left: 45px;\n  display: block;\n  line-height: 1.2;\n  transition: color 0.4s;\n}\n"

/***/ },
/* 435 */
/***/ function(module, exports) {

	module.exports = ".ng-valid[required] {\n    border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid {\n    border-left: 5px solid #a94442; /* red */\n}\n.form-control {\n    width: 20%;\n}\n#totalChar {\n    border: none;\n}\n#summary {\n    width: 20%;\n}\n.myNotes {\n    width: 50%;\n    height: 200px;\n}\n.panelColorError {\n    background-color: #ffe4e4;\n}\n.longInput {\n    width: 570px;\n}"

/***/ },
/* 436 */
435,
/* 437 */
432,
/* 438 */
/***/ function(module, exports) {

	module.exports = "label {\n    white-space: pre;\n    word-break: break-word;\n    padding: 15px 60px 15px 15px;\n    /* margin-left: 45px; */\n    display: block;\n    line-height: 1.2;\n    transition: color 0.4s;\n}\n\nlabel.completed {\n    color: #d9d9d9;\n    text-decoration: line-through;\n}\n\n.buttonsDone, .buttonsEdit {\n    display: none;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    opacity: 0;\n    background-color: transparent;\n    padding: 10px;\n    margin: 10px;\n    color: #585858;\n    transition: opacity 2s ease-out;\n    border: 0;\n}\n\n.buttonsDone {\n    right: 10px;\n}\n\n.buttonsEdit {\n    right: 40px;\n}\n\n.view:hover .buttonsDone {\n    display: block;\n    opacity: 1;\n}\n\n.view:hover .buttonsEdit {\n    display: block;\n    opacity: 1;\n}\n\n.editInput {\n    /* margin-left: 45px; */\n    width: 100%;\n    height: 70px;\n}\n\n.toggle {\n    text-align: center;\n    width: 40px;\n    /* auto, since non-WebKit browsers doesn't support input styling */\n    height: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto 0;\n    border: none; /* Mobile Safari */\n    -webkit-appearance: none;\n    -moz-appearance: none;\n         appearance: none;\n}\n\n.toggle:after {\n    content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.toggle:checked:after {\n    content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.toggle {\n    background: none;\n    height: 40px;\n}\n"

/***/ },
/* 439 */
/***/ function(module, exports) {

	module.exports = "\n\n.hidden {\n  display: none;\n}\n\n.todoapp {\n  background: #fff;\n  /* margin: 130px 0 40px 0; */\n  margin: 0px 0 40px 0;\n  position: relative;\n  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n              0 25px 50px 0 rgba(0, 0, 0, 0.1); */\n}\n\n.todoapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.todoapp h1 {\n  position: absolute;\n  top: -155px;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n  position: relative;\n  margin: 0;\n  /* width: 90%; */\n  width: 100%;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  outline: none;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n}\n\n.new-todo {\n  /* padding: 16px 16px 16px 60px; */\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  /* box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03); */\n}\n\n.main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\n\n.todo-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.todo-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n  border-bottom: none;\n}\n\nlabel {\n  white-space: pre;\n  word-break: break-word;\n  padding: 15px 60px 15px 15px;\n  /* margin-left: 45px; */\n  display: block;\n  line-height: 1.2;\n  transition: color 0.4s;\n}\n"

/***/ },
/* 440 */
435,
/* 441 */
432,
/* 442 */
438,
/* 443 */
439,
/* 444 */
/***/ function(module, exports) {

	module.exports = "        <div id=\"domRoot\">\n          <div id=\"headerPad\"></div>\n          <nav id=\"fileMenu\" class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n            <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n              <span id=\"angularText\">\n                ION 2\n                <Logo></Logo>\n              </span>\n              <!--\n              <a href=\"#\" [routerLink]=\"['/Welcome']\">\n                <span id=\"router\">\n                  <i class=\"fa fa-arrows-alt\"></i>\n                  <span>Routes</span>\n                </span>\n                <span id=\"appHeaderName\"></span>\n              </a>\n              -->\n\n            </div>\n            <div xstyle=\"height: 1px;\" class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n              <Filemenu appPrefix=\"App\">\n\n                <FilemenuItem app=\"App1\" title=\"Todos\"></FilemenuItem>\n                <FilemenuItem app=\"App1\" title=\"Digg\"></FilemenuItem>\n                <FilemenuItem app=\"App1\" title=\"Settings\"></FilemenuItem>\n                <FilemenuItem app=\"App1\" title=\"Help\"></FilemenuItem>\n                <FilemenuItem app=\"App1\" title=\"Logout\"></FilemenuItem>\n\n                <FilemenuItem app=\"App2\" title=\"Notes\"></FilemenuItem>\n                <FilemenuItem app=\"App2\" title=\"Weather\"></FilemenuItem>\n                <FilemenuItem app=\"App2\" title=\"Digg\"></FilemenuItem>\n                <FilemenuItem app=\"App2\" title=\"Contact\"></FilemenuItem>\n                <FilemenuItem app=\"App2\" title=\"Logout\"></FilemenuItem>\n\n                <FilemenuItem app=\"App3\" title=\"Movies\"></FilemenuItem>\n\n                <!--\n                <FilemenuItem app=\"App6\" title=\"Todos\"></FilemenuItem>\n                <FilemenuItem app=\"App6\" title=\"Pouchmessages\"></FilemenuItem>\n                -->\n\n              </Filemenu>\n            </div>\n          </nav>\n          <div id=\"appEntry\">\n\n            <router-outlet></router-outlet>\n\n            <div id=\"waitScreenEntryApp\" style=\"display: none\">\n              <span style=\"position: absolute; left: 45%; top: 20%\"> <img src=\"./assets/preload5.gif\"> </span>\n            </div>\n            <div id=\"appLogout\" style=\"display: none\"> <span style=\"position: absolute; left: 40%; top: 20%\">\n              <h3 data-localize=\"haveNiceDay\">Have a nice day :)</h3>\n              </span>\n            </div>\n            <div id=\"appSelector\" class=\"noScroll container\" style=\"display: none\">\n              <div align=\"center\" style=\"padding-top: 100px\">\n                <button type=\"button\" name=\"mailWasp\" class=\"btn btn-default\">\n                  <i style=\"margin: 20px; padding: 20px; font-size: 5em\" class=\"fa fa-envelope\"></i>\n                  <span data-localize=\"none\"></span>\n                </button>\n                <button type=\"button\" name=\"everNodes\" class=\"btn btn-default\">\n                  <i style=\"margin: 20px; padding: 20px ; font-size: 5em\" class=\"fa fa-sitemap\"></i>\n                  <span data-localize=\"none\"></span>\n                </button>\n              </div>\n            </div>\n            <div id=\"appMailWaspContent\" class=\"noScroll container\" style=\"display: none\"></div>\n            <div id=\"appEverNodesContent\" class=\"noScroll container\" style=\"display: none\"></div>\n          </div>\n        </div>\n\n\n\n        <!--\n        <a [routerLink]=\"['/Welcome', 'Login']\">To Welcome page</a><br/>\n        <a [routerLink]=\"['/Login', 'Login']\">To Login screen</a><br/>\n        <a [routerLink]=\"['/Login', {id: 'lion.demo'}, 'Login']\">To Login screen with demo user args</a><br/>\n        <a [routerLink]=\"['/ForgotPass', 'ForgotPass']\">To Forgot Password screen</a><br/>\n        <a [routerLink]=\"['/AppManager']\">To App manager</a><br/>\n        <a [routerLink]=\"['/App1']\">To App1</a><br/>\n        <a [routerLink]=\"['/App2']\">To App2</a><br/>\n        <a [routerLink]=\"['/App3']\">To App3</a><br/>\n        <a [routerLink]=\"['/App6']\">To App6</a><br/>\n        -->\n\n        <div class=\"navbar navbar-default navbar-fixed-bottom\">\n          <div class=\"container\">\n            <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".bottom-collapse\"> <!-- NOTE! data-target was changed to .bottom-collapse -->\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n              <a class=\"navbar-brand\" [routerLink]=\"['/AppManager']\">Start</a>\n              <!-- <a class=\"navbar-brand\" href=\"#\">Bottom Bar</a> -->\n            </div>\n            <div class=\"navbar-collapse collapse bottom-collapse\"> <!-- NOTE! The extra bottom-collapse class put on here -->\n              <ul class=\"nav navbar-nav\">\n                <li><a [routerLink]=\"['/Welcome', 'Login']\">Sitemap</a><br/></li>\n                <li xclass=\"active\"><a [routerLink]=\"['/App6']\">Scan</a></li>\n                <li xclass=\"active\"><a [routerLink]=\"['/App7']\">SQLite</a></li>\n              </ul>\n              <ul class=\"nav navbar-nav navbar-right\">\n                <li><a [routerLink]=\"['/Help']\">Help me!</a></li>\n                <!--\n                <li><a href=\"../navbar-fixed-top/\">Legals</a></li>\n                -->\n              </ul>\n            </div><!--/.nav-collapse -->\n          </div>\n        </div>\n\n\n        <!--\n            <div class=\"navbar navbar-default navbar-fixed-bottom\">\n                <p class=\"navbar-text pull-left\">Site Built By Neil Rowe</p>\n                <p>\n                    <button type=\"button\" class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#bsModal\">\n                        Launch demo modal\n                    </button>\n                </p>\n                    <a href=\"http://youtube.com/codersguide\" class=\"navbar-btn btn-danger btn pull-right\">Subscribe on YouTube</a>\n                    <div class=\"container\">\n                    </div>\n            </div>\n        -->\n\n        <!--\n            <div id=\"footer\">\n              <br>\n              <span id=\"footerText\"><i style=\"font-size: 2em; padding-left: 20px; padding-right: 5px; color: #358ac9\" class=\"fa fa-github\"></i>\n                <a href=\"https://github.com/born2net/ng2Boilerplate\" target=\"_blank\" style=\"position: relative; top: -5px\">ng2BoilerPlate | version: 1.201</a>\n              </span>\n            </div>\n\n            <footer>\n              <div class=\"container\">\n                <p class=\"text-muted\">Place sticky footer content here.</p>\n              </div>\n            </footer>\n        -->\n\n\n\n        <!-- Modal -->\n\n        <div class=\"modal modal-static fade\" id=\"bsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button id=\"toggleProperties\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                <h4 class=\"modal-title\" id=\"myModalLabel\" data-localize=\"ModalTitle\">Modal title</h4>\n              </div>\n              <div class=\"modal-body\">\n                <h3 data-localize=\"someContent\">some content</h3>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" data-localize=\"close\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-localize=\"saveChanges\">Save changes</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n        <div id=\"popModal\" style=\"display: none\"></div>\n\n        <div id=\"popupProperties\" style=\"display: none\">\n          <button style=\"float: right; margin: 20px\" type=\"button\" class=\"btn btn-default btn-sm modal_close\" data-dismiss=\"modal\">\n            <span class=\"glyphicon glyphicon-remove\"></span>\n          </button>\n        </div>\n\n        <div id=\"aboutUS\" style=\"display: none\">\n          <h1 data-localize=\"aboutUs\">StackView Rocks, this is a sample StackView Popup</h1>\n          <button type=\"button\" class=\"btn btn-primary modal_close\" data-dismiss=\"modal\" data-localize=\"colse\">Close</button>\n        </div>\n        <div id=\"languageSelector\" class=\"dropdownlang\" style=\"display: none\">\n          <dt>\n            <a href=\"#\"><span>Select language</span></a>\n          </dt>\n          <dd>\n            <ul>\n              <li>\n                <a href=\"#\"><img class=\"flag\" src=\"assets/us.png\" alt=\"\"/>United States<span class=\"value\">en</span></a>\n              </li>\n            </ul>\n          </dd>\n          <small>Let us know if you wish to help us add your native language</small>\n        </div>\n        <div id=\"stackWaitModalView\" style=\"display: none\"></div>\n"

/***/ },
/* 445 */
/***/ function(module, exports) {

	module.exports = "\n  <!--\n  <Menu #appMennu class=\"noSpace\">\n    <MenuItem [fontAwesome]=\"'fa-pencil-square-o'\" [tabtitle]=\"'Todos'\"></MenuItem>\n    <MenuItem [fontAwesome]=\"'fa-newspaper-o'\" [tabtitle]=\"'News'\"></MenuItem>\n  </Menu>\n  -->\n\n  <div xclass=\"container\">\n\n    <div xclass=\"row\" style=\"margin-left: 15px !important; margin-right: 15px !important;\">\n\n      <section class=\"todoapp\">\n\n        <header class=\"header\">\n          <h1>You need help?</h1>\n        </header>\n\n        <section class=\"main\">\n\n          <hr/>\n          Here we're going to help you...<br/>\n\n        </section>\n\n      </section>\n\n        <!--\n        <Todos *ngIf=\"screens.todos\">\n            <todo-list>\n            </todo-list>\n        </Todos>\n        -->\n    </div>\n\n  </div>\n\n"

/***/ },
/* 446 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\" style=\"margin-left: 0; margin-right: 0;\">\n  <Menu #appMennu class=\"noSpace\">\n    <MenuItem [fontAwesome]=\"'fa-pencil-square-o'\" [tabtitle]=\"'Todos'\"></MenuItem>\n    <MenuItem [fontAwesome]=\"'fa-digg'\" [tabtitle]=\"'Digg'\"></MenuItem>\n    <MenuItem [fontAwesome]=\"'fa-cogs'\" [tabtitle]=\"'Settings'\"></MenuItem>\n    <MenuItem [fontAwesome]=\"'fa-life-buoy'\" [tabtitle]=\"'Help'\"></MenuItem>\n    <MenuItem [fontAwesome]=\"'fa-power-off'\" [tabtitle]=\"'Logout'\"></MenuItem>\n  </Menu>\n  <div id=\"mainPanelWrapWasp\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-11 appHeight\">\n    <Todos *ngIf=\"screens.todos\">\n      <Sliderpanel>\n        <div class=\"campaignSlider noScroll\">\n          <Todo1 class=\"page center todo1 selected\">\n            <div class=\"yScroll\">\n              <hr/>\n              <h3>To do sample application with remote server save</h3>\n              <h5>uses your ip address as unique token and keeps data on server for 2 days</h5>\n              <hr/>\n              <todo-list>\n              </todo-list>\n            </div>\n          </Todo1>\n          <Todo2 class=\"page right todo2\">\n            <hr/>\n            <h3>To do remote server statistics</h3>\n            <h5>display your total CRUD operations to remote node server</h5>\n            <hr/>\n          </Todo2>\n        </div>\n      </Sliderpanel>\n    </Todos>\n    <Digg *ngIf=\"screens.digg\" mode=\"tiles\">\n      <small>Digg component tile style</small>\n    </Digg>\n    <Settings *ngIf=\"screens.settings\">\n      <h5>Settings</h5>\n    </Settings>\n    <Help *ngIf=\"screens.help\">\n      <br/>\n      <tabs>\n        <tab [tabtitle]=\"'About this app'\">\n          <h4>\n            This App was created as both a starting point for anyone looking to create a scalable application in Angular 2\n          as it focuses on key concepts of object oriented / component programming.</h4>\n          <hr/>\n          <h4>We also try and touch all the major aspects\n          of the language to give new commers a sample code base to reference for help (well at least until Angular 2 takes over\n          the universe | Angular 2 - one framework baby!!!).</h4>\n          <hr/>\n          <h5>Want to help? visit me on Github</h5>\n          <center>\n            <a id=\"largeGit\" href=\"https://github.com/born2net/ng2Boilerplate\" target=\"_blank\" class=\"fa fa-github\"></a>\n          </center>\n\n        </tab>\n        <tab [tabtitle]=\"'Contributors'\" >\n          <Contributors></Contributors>\n        </tab>\n        <tab tabtitle=\"Angular 2 Resources\">\n          <div class=\"container\">\n            <div class=\"notice notice-info\">\n              <strong>videos</strong> <a target=\"_blank\" href=\"https://youtube.com\">Watch the video tutorial on this project</a>\n            </div>\n            <div class=\"notice notice-success\">\n              <strong>home page</strong> <a target=\"_blank\" href=\"https://angular.io/\">Angular 2 home page</a>\n            </div>\n            <div class=\"notice notice-danger\">\n              <strong>docs</strong> <a target=\"_blank\" href=\"https://angular.io/docs/js/latest//\">Angular 2 docs</a>\n            </div>\n            <div class=\"notice notice-info\">\n              <strong>videos</strong> <a target=\"_blank\" href=\"https://egghead.io/technologies/angular2\">EggHead Angular 2 tutorials</a>\n            </div>\n            <div class=\"notice notice-warning\">\n              <strong>books</strong> <a target=\"_blank\" href=\"https://pragprog.com/book/smreactjs/reactive-programming-with-rxjs\">rx.js book</a>\n            </div>\n            <div class=\"notice notice-warning\">\n              <strong>books</strong> <a target=\"_blank\" href=\"https://www.ng-book.com/2/\">ng2 book</a>\n            </div>\n          </div>\n        </tab>\n      </tabs>\n    </Help>\n    <Logout *ngIf=\"screens.logout\">\n      <h5>logout 1</h5>\n    </Logout>\n  </div>\n</div>"

/***/ },
/* 447 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\" style=\"margin-left: 0; margin-right: 0;\">\n  <h1>StarWars store</h1>\n  <small>I am App3 component powered by Redux</small>\n  <Starwars></Starwars>\n</div>\n"

/***/ },
/* 448 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <admin></admin>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <shopping></shopping>\r\n        <hr/>\r\n        <films-component></films-component>\r\n    </div>\r\n</div>"

/***/ },
/* 449 */
/***/ function(module, exports) {

	module.exports = "\n  <!--\n  <Menu #appMennu class=\"noSpace\">\n    <MenuItem [fontAwesome]=\"'fa-pencil-square-o'\" [tabtitle]=\"'Todos'\"></MenuItem>\n    <MenuItem [fontAwesome]=\"'fa-newspaper-o'\" [tabtitle]=\"'News'\"></MenuItem>\n  </Menu>\n  -->\n\n  <div class=\"row\" style=\"margin-left: 0; margin-right: 0;\">\n      <Todos *ngIf=\"screens.todos\">\n          <todo-list>\n          </todo-list>\n      </Todos>\n      <!--\n      <Pouchmessages *ngIf=\"screens.pouchmessages\">\n          <pouchmessage-list>\n          </pouchmessage-list>\n      </Pouchmessages>\n      -->\n  </div>\n\n"

/***/ },
/* 450 */
/***/ function(module, exports) {

	module.exports = "        <h3>Users</h3>\r\n        <a href=\"\" (click)=\"$event.preventDefault(); setFilmFilter(!filmFilter)\" [class.hidden]=\"!usersToShow\">\r\n            Turn filter {{filmFilter?\"off\":\"on\"}}\r\n        </a>\r\n        <users [data]=\"usersToShow\" (current)=\"setCurrentUser($event)\">\r\n        </users>\r\n        <hr/>\r\n        <h3>Current User</h3>\r\n        <br/>\r\n        <user [data]=\"currentUser\"></user>\r\n"

/***/ },
/* 451 */
448,
/* 452 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm goNext\">\n  <span class=\"fa fa-arrow-right\"></span>\n</button>\n<hr/>\n<small>I am notes1 component</small>\n<hr/>\n<h1>Notes 1</h1>\n<div class=\"container\">\n  <div [hidden]=\"submitted\">\n\n    <!-- special tx to ng2-book via http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/ -->\n\n    <!-- create a form and bind it directly to the ControlGroup we created manually instantiated in the controller below (i.e.: notesForm) -->\n    <!-- this is different from what we did in Contact.ts where we had Angualar automatically create a control group for us -->\n    <!-- and we just created a local variable their-->\n\n    <!-- To create a new ControlGroup and Controls implicitly use (used here in Contact.ts): -->\n    <!--  -->\n    <!-- ngForm and -->\n    <!-- ngControl -->\n    <!-- But to bind to an existing ControlGroup and Controls use explicitly via FormBuilder (used in this component): -->\n    <!--  -->\n    <!-- ngFormModel and -->\n    <!-- ngFormControl -->\n\n    <div [class.panelColorError]=\"!notesForm.valid\">\n      <!-- here we are mapping the ControlGroup via the directive ngFormModel to the instance of notesForm -->\n      <form [ngFormModel]=\"notesForm\" (ngSubmit)=\"onSubmit(notesForm.value)\">\n        <div class=\"form-group\">\n          <!-- here we are mapping the Control via the directive ngFormControl to the instance of notesForm.controls['userName'] -->\n\n          <!-- user name -->\n          <input type=\"text\" class=\"form-control\" placeholder=\"user name\" required [ngFormControl]=\"notesForm.controls['userName']\">\n          <div *ngIf=\"!userName.valid\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n            <strong>Warning!</strong> are you a robot?\n          </div>\n\n          <!-- login name -->\n          <input type=\"text\" class=\"longInput form-control\" placeholder=\"check server for free name (try: Sean)\" required [ngFormControl]=\"notesForm.controls['login']\">\n          <p *ngIf=\"login.pending\">Fetching data from the server...</p>\n          <div *ngIf=\"login.hasError('taken')\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n            <strong>Warning!</strong> Login is taken\n          </div>\n          <div *ngIf=\"login.hasError('notCapped') && login.touched\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n            <strong>Warning!</strong> Must start with first capital letter\n          </div>\n\n          <!-- phone -->\n          <input type=\"text\" class=\"longInput form-control\" placeholder=\"phone\" required [ngFormControl]=\"notesForm.controls['phone']\">\n          <div *ngIf=\"!phone.valid\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n            <strong>Warning!</strong> please use valid phone\n          </div>\n          <label for=\"name\">Enter your notes</label>\n\n          <!-- bind the textarea control to our manually created notesTextArea control -->\n                            <textarea type=\"text\" placeholder=\"enter some notes\" class=\"myNotes form-control\" [ngFormControl]=\"notesForm.controls['notesTextArea']\" required [(ngModel)]=\"model.name\" (change)=\"onChange($event)\"></textarea>\n          <div *ngIf=\"notesTextArea.hasError('notCapped') && notesTextArea.touched\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n            <strong>Warning!</strong> Must start with first capital letter (Validators are working :)\n          </div>\n          <div *ngIf=\"!notesForm.valid && notesTextArea.touched\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n            <strong>Warning!</strong> something is not right with the form\n          </div>\n          <span>Total characters via Pipes: {{model.name | CharCount}}</span>\n          <br/>\n        </div>\n        <br/>\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!notesForm.valid\">Submit</button>\n      </form>\n    </div>"

/***/ },
/* 453 */
/***/ function(module, exports) {

	module.exports = "                <div class=\"flipcard_100\">\n                    <div class=\"face_100 front_100 bg_info\">\n                        <!-- <img class=\"img-responsive\" src=\"assets/logo_s.png\"/> -->\n                        <p>\n                            {{item.task}}\n                        </p>\n                    </div>\n                    <div class=\"face_100 back_100 bg_danger\">\n                        <!-- <img class=\"img-responsive\" src=\"assets/logo_b.png\"/> -->\n                        <div class=\"height_100_i\">\n\n                              <div class=\"col-fixed_right height_100_i\">\n                                <button (click)=\"doneClicked($event)\" class=\"btn btn-block btn-danger btn-lg height_100_i\">\n                                    <i class=\"fa fa-trash-o\"></i>\n                                </button>\n                              </div>\n                              <div class=\"row_split_2 no-gutter height_100_i\">\n                                <div class=\"col-md-12 height_100_i\">\n                                  .col-md-12\n                                </div>\n                              </div>\n\n                            <!-- \n                            <div class=\"container\">\n                            </div> \n                            -->\n                            \n\n                            <!--\n                            <button (click)=\"doneClicked()\" class=\"fa fa-minus buttonsDone\"></button>\n                            <button (click)=\"editClicked()\" [ngClass]=\"{'fa-check-square': editMode}\" class=\"fa fa-edit buttonsEdit\"></button>\n                            -->\n                        </div>\n                    </div>\n                </div>"

/***/ },
/* 454 */
/***/ function(module, exports) {

	module.exports = "\r\n<section class=\"todoapp\">\r\n\r\n  <header class=\"header\">\r\n    <!--\r\n    <h1>your to-do's</h1>\r\n    -->\r\n  </header>\r\n\r\n  <section class=\"main\">\r\n\r\n    <!--\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"db_info()\">db_info()</button>\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"countPouchObjects()\">countPouchObjects()</button>\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"findPouchObjects()\">findPouchObjects()</button>\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"findPouchObjectsByAllDocs()\">findPouchObjectsByAllDocs()</button>\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"getPouchObjectsById()\">getPouchObjectsById()</button>\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"addItems()\">addItems()</button>\r\n    <hr/>\r\n    -->\r\n\r\n\r\n\r\n\r\n    <!--\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"scannerOnClicked()\">scannerOnClicked()</button>\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"scannerOffClicked()\">scannerOffClicked()</button>\r\n\r\n    <hr/>\r\n    <hr/>\r\n    <hr/>\r\n\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"softScanOnClicked()\">softScanOnClicked()</button>\r\n    <hr/>\r\n    \r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"softScanOffClicked()\">softScanOffClicked()</button>\r\n    <hr/>\r\n\r\n\r\n    <hr/>\r\n    <hr/>\r\n    <hr/>\r\n    -->\r\n\r\n    <!--\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"exportDatabase('batch')\">exportDatabase('batch')</button>\r\n    \r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"readFileContent('batch.txt')\">readFileContent('batch.txt')</button>\r\n\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"syncFile('http://www.burosch.de/avec.jpg', 'testimage.jpg')\">syncFile('http://www.burosch.de/avec.jpg', 'testimage.jpg')</button>\r\n    <hr/>\r\n    <img [src]=\"imageSource\" style=\"width:100%;\">\r\n    <hr/>\r\n    {{ imageSource }}\r\n\r\n\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"openBarcodeScanner()\">openBarcodeScanner() (via camera)</button>\r\n    \r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"goSearch('batch.db', {'barcode':'04027301060003'})\">goSearch('batch.db','04027301060003')</button>\r\n    -->\r\n\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"registerAndScan()\">registerAndScan()</button>\r\n\r\n    <input class=\"new-todo\" placeholder=\"Enter share between devices\" autofocus_disabled [(ngModel)]=\"newItem\" (keyup.enter)=\"addItem()\">\r\n\r\n    <button class=\"btn btn-block btn-success btn-lg\" (click)=\"addItem()\">Add item</button>\r\n    <hr/>\r\n\r\n    <!--\r\n    <hr>/\r\n    {{ todoStatModel.flist | json }}\r\n    <hr>/\r\n    -->\r\n\r\n    <!--\r\n    <div class=\"row no-gutter\" *ngFor=\"#fitem of todoStatModel.flist\">\r\n      <div class=\"col-sm-12\">\r\n        <div>\r\n          <p>{{ fitem.task }}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    -->\r\n\r\n    <!--\r\n    <div class=\"row no-gutter\" *ngFor=\"#fitem of todoStatModel.flist\">\r\n        <div class=\"reshid flip_100 col-sm-12\">\r\n            <div class=\"todo-item height_100_i\" [item]=\"fitem\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <hr/>\r\n    <hr/>\r\n    -->\r\n\r\n    <!-- <div class=\"todo-list\"> -->\r\n      <div class=\"row no-gutter\" *ngFor=\"#item of m_dataStore.todos\">\r\n        <div class=\"reshid flip_100 col-sm-12\">\r\n            <div class=\"todo-item height_100_i\" [item]=\"item\" (done)=\"removeItem($event)\" (edit)=\"editItem($event)\">\r\n            </div>\r\n        </div>\r\n      </div>\r\n    <!-- </div> -->\r\n\r\n    \r\n\r\n    <div id=\"debugging\" style=\"padding-top:200px;font-size:9px;color:#909090;\"><u>Debugging active:</u></div>\r\n\r\n\r\n  </section>\r\n\r\n</section>\r\n\r\n\r\n    <!--\r\n    <hr/>\r\n    <hr/>\r\n    <hr/>\r\n    <hr/>\r\n\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"handleFileAction('read','fremdwaehrung.txt')\">handleFileAction('read','fremdwaehrung.txt')</button>\r\n\r\n\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"writeToFile('example.txt','thisisanexampletext')\">writeToFileFunction('thisisatesttext')</button>\r\n    -->\r\n\r\n    <!--\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"readFromFile()\">readFromFile()</button>\r\n    -->\r\n\r\n    <!--\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"writeFile('fremdwaehrung.txt','blafoopeng')\">writeFile('fremdwaehrung.txt','blafoopeng')</button>\r\n    \r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"handleFileAction('write','blafoopeng','fremdwaehrung.txt')\">handleFileAction('write','blafoopeng','fremdwaehrung.txt')</button>\r\n    \r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"getFileSystem()\">getFileSystem()</button>\r\n    -->\r\n    \r\n    <!--\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"createTable('batch')\">createTable('batch')</button>\r\n    -->\r\n\r\n    <!--\r\n    <div id=\"file_details\">file_details nothing yet...</div>\r\n    <hr/>\r\n\r\n\r\n    <hr/>\r\n    <hr/>\r\n    <div id=\"file_content\">no file_content yet...</div>\r\n    File Content: {{ todoStatModel.file_content }} <br/>\r\n    <hr/>\r\n    <hr/>\r\n\r\n\r\n\r\n    <div id=\"dirContent\">dirContent nothing yet...</div>\r\n    <hr/>\r\n    -->\r\n\r\n\r\n    <!--\r\n    <hr/>\r\n\r\n    {{ todoStatModel.flist | json }}\r\n\r\n    <hr>/\r\n    -->\r\n\r\n\r\n\r\n    <!--\r\n    <hr/>\r\n    <ul id=\"filelist\" > aaa </ul>\r\n    <hr/>\r\n    -->\r\n\r\n    <!--\r\n    <h5>\r\n      todoStatModel.barcode_scanner_info: <br/>\r\n      {{ todoStatModel.barcode_scanner_info | json }} \r\n      <hr/>\r\n      todoStatModel.product_info: <br/>\r\n      {{ todoStatModel.product_info | json }} \r\n    </h5>\r\n    -->\r\n\r\n    <!--\r\n\r\n    DB Status: {{ todoStatModel.status }} <br/>\r\n\r\n    <hr/>\r\n    <div id=\"tblDiv\">nothing yet...</div>\r\n    <hr/>\r\n\r\n    <h3 style=\"width:100%;text-align:center;\">\r\n      View Quantity: {{ todoStatModel.qty }} <br/>\r\n      Query Duration: {{ todoStatModel.query_duration }} ms\r\n    </h3>\r\n\r\n    <hr/>\r\n\r\n    <h5>\r\n      todoStatModel.db_info: {{ todoStatModel.db_info | json }} \r\n      <hr/>\r\n      todoStatModel.allDocs: {{ todoStatModel.allDocs | json }}\r\n      <hr/>\r\n      todoStatModel.storesizes: {{ todoStatModel.storesizes | json }}\r\n    </h5>\r\n\r\n    <hr/>\r\n    -->\r\n    \r\n"

/***/ },
/* 455 */
449,
/* 456 */
450,
/* 457 */
448,
/* 458 */
452,
/* 459 */
453,
/* 460 */
/***/ function(module, exports) {

	module.exports = "\r\n<section class=\"todoapp\">\r\n\r\n  <header class=\"header\">\r\n    <!--\r\n    <h1>your to-do's</h1>\r\n    -->\r\n  </header>\r\n\r\n  <section class=\"main\">\r\n\r\n\r\n    <!--\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"db_info()\">db_info()</button>\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"countPouchObjects()\">countPouchObjects()</button>\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"findPouchObjects()\">findPouchObjects()</button>\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"findPouchObjectsByAllDocs()\">findPouchObjectsByAllDocs()</button>\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"getPouchObjectsById()\">getPouchObjectsById()</button>\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"addItems()\">addItems()</button>\r\n    <hr/>\r\n    -->\r\n\r\n    <!--\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"scannerOnClicked()\">scannerOnClicked()</button>\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"scannerOffClicked()\">scannerOffClicked()</button>\r\n    <hr/>\r\n    <hr/>\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"softScanOnClicked()\">softScanOnClicked()</button>\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"softScanOffClicked()\">softScanOffClicked()</button>\r\n    <hr/>\r\n    -->\r\n\r\n    <!--\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"openBarcodeScanner()\">openBarcodeScanner() (via camera)</button>\r\n    -->\r\n\r\n\r\n    <!--\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"importDatabase('kontakt.sql')\">importDatabase('kontakt.sql')</button>\r\n\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"importDatabase('pictures.sql')\">importDatabase('pictures.sql')</button>\r\n\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"importDatabase('complex_dump.sql')\">importDatabase('complex_dump.sql')</button>\r\n\r\n\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"getDatabasePath('onion')\">getDatabasePath('onion')</button>\r\n    \r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"exportDatabase('onion')\">exportDatabase('onion')</button>\r\n    \r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"readFileContent('onion.txt')\">readFileContent('onion.txt')</button>\r\n    -->\r\n\r\n\r\n    <!--\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"requestDatabaseApi('batch', {'barcode':'04027301060003'})\">requestDatabaseApi('batch', {'barcode':'04027301060003'})</button>\r\n\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"requestDatabaseApi('pictures', {'barcode':'04027301060003'})\">requestDatabaseApi('pictures', {'barcode':'04027301060003'})</button>\r\n\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"requestDatabaseApi('tiles', {'barcode':'04027301060003'})\">requestDatabaseApi('tiles', {'barcode':'04027301060003'})</button>\r\n    -->\r\n\r\n\r\n    <hr/>\r\n    requestDatabaseApi('cards') <br/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"requestDatabaseApi('cards')\">Load 5 articles</button>\r\n\r\n    <hr/>\r\n    requestDatabaseApi('card_by_gtin') <br/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"requestDatabaseApi('card_by_gtin')\">Load 1 article by gtin</button>\r\n\r\n    <hr/>\r\n    clearArticles() <br/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"clearArticles()\">Artikelliste leeren</button>\r\n\r\n    <hr/>\r\n    clearDebug() <br/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"clearDebug()\">Debugliste leeren</button>\r\n\r\n\r\n    <hr/>\r\n    <!--\r\n    DB Status: {{ todoStatModel.status }} <br/>\r\n    View Quantity: {{ todoStatModel.qty }} <br/>\r\n    -->\r\n    Query Duration: {{ todoStatModel.query_duration }} ms <br/>\r\n\r\n    <hr/>\r\n    Query Result: <br/>\r\n    <!--\r\n    {{ m_dataStore.todos | json }}\r\n    -->\r\n    <table *ngIf=\"m_dataStore.todos.length>0\">\r\n        <tr>\r\n            <td style=\"padding-right:20px;\">\r\n                cpr_id\r\n            </td>\r\n            <td>\r\n                prod_num\r\n            </td>\r\n        </tr>\r\n        <tr *ngFor=\"#tile of m_dataStore.todos\">\r\n            <td style=\"padding-right:20px;\">\r\n                {{ tile.id }}\r\n            </td>\r\n            <td>\r\n                {{ tile.task }}\r\n            </td>\r\n        </tr>\r\n    </table>\r\n\r\n    <table *ngIf=\"m_dataStore.todos.length==0\">\r\n        Noch keine Ergebnisse gefunden\r\n    </table>\r\n\r\n    <!--\r\n    <hr/>\r\n    todoStatModel.barcode_scanner_info: <br/>\r\n    {{ todoStatModel.barcode_scanner_info | json }} \r\n\r\n    <hr/>\r\n    todoStatModel.product_info: <br/>\r\n    {{ todoStatModel.product_info | json }} \r\n    -->\r\n    <hr/>\r\n    <div id=\"debugging\" style=\"padding-top:100px;font-size:14px;color:#909090;\"><u>Debugging active:</u></div>\r\n\r\n\r\n    <!--\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"syncFile('http://www.burosch.de/avec.jpg', 'testimage.jpg')\">syncFile('http://www.burosch.de/avec.jpg', 'testimage.jpg')</button>\r\n    <hr/>\r\n    <img [src]=\"imageSource\" style=\"width:100%;\">\r\n    <hr/>\r\n    {{ imageSource }}\r\n    -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!-- WORKING SCAMNMER FUNCTIONS -->\r\n    <!--\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"registerAndScan()\">registerAndScan()</button>\r\n    <input class=\"new-todo\" placeholder=\"What are the items?\" autofocus_disabled [(ngModel)]=\"newItem\" (keyup.enter)=\"addItem()\">\r\n    <button class=\"btn btn-block btn-success btn-lg\" (click)=\"addItem()\">Add item</button>\r\n    -->\r\n    <!-- <div class=\"todo-list\"> -->\r\n    <!--\r\n      <div class=\"row no-gutter\" *ngFor=\"#item of m_dataStore.todos\">\r\n        <div class=\"reshid flip_100 col-sm-12\">\r\n            <div class=\"todo-item height_100_i\" [item]=\"item\" (done)=\"removeItem($event)\" (edit)=\"editItem($event)\">\r\n            </div>\r\n        </div>\r\n      </div>\r\n    -->\r\n    <!-- </div> -->\r\n    <!--\r\n    <hr>/\r\n    {{ todoStatModel.flist | json }}\r\n    <hr>/\r\n    -->\r\n    <!--\r\n    <div class=\"row no-gutter\" *ngFor=\"#fitem of todoStatModel.flist\">\r\n      <div class=\"col-sm-12\">\r\n        <div>\r\n          <p>{{ fitem.task }}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    -->\r\n    <!--\r\n    <div class=\"row no-gutter\" *ngFor=\"#fitem of todoStatModel.flist\">\r\n        <div class=\"reshid flip_100 col-sm-12\">\r\n            <div class=\"todo-item height_100_i\" [item]=\"fitem\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <hr/>\r\n    <hr/>\r\n    -->\r\n\r\n\r\n\r\n  </section>\r\n\r\n</section>\r\n\r\n\r\n    <!--\r\n    <hr/>\r\n    <hr/>\r\n    <hr/>\r\n    <hr/>\r\n\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"handleFileAction('read','fremdwaehrung.txt')\">handleFileAction('read','fremdwaehrung.txt')</button>\r\n\r\n\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"writeToFile('example.txt','thisisanexampletext')\">writeToFileFunction('thisisatesttext')</button>\r\n    -->\r\n\r\n    <!--\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"readFromFile()\">readFromFile()</button>\r\n    -->\r\n\r\n    <!--\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"writeFile('fremdwaehrung.txt','blafoopeng')\">writeFile('fremdwaehrung.txt','blafoopeng')</button>\r\n    \r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"handleFileAction('write','blafoopeng','fremdwaehrung.txt')\">handleFileAction('write','blafoopeng','fremdwaehrung.txt')</button>\r\n    \r\n    <hr/>\r\n    <button class=\"btn btn-block btn-info btn-lg\" (click)=\"getFileSystem()\">getFileSystem()</button>\r\n    -->\r\n    \r\n    <!--\r\n    <hr/>\r\n    <button class=\"btn btn-block btn-danger btn-lg\" (click)=\"createTable('batch')\">createTable('batch')</button>\r\n    -->\r\n\r\n    <!--\r\n    <div id=\"file_details\">file_details nothing yet...</div>\r\n    <hr/>\r\n\r\n\r\n    <hr/>\r\n    <hr/>\r\n    <div id=\"file_content\">no file_content yet...</div>\r\n    File Content: {{ todoStatModel.file_content }} <br/>\r\n    <hr/>\r\n    <hr/>\r\n\r\n\r\n\r\n    <div id=\"dirContent\">dirContent nothing yet...</div>\r\n    <hr/>\r\n    -->\r\n\r\n\r\n    <!--\r\n    <hr/>\r\n\r\n    {{ todoStatModel.flist | json }}\r\n\r\n    <hr>/\r\n    -->\r\n\r\n\r\n\r\n    <!--\r\n    <hr/>\r\n    <ul id=\"filelist\" > aaa </ul>\r\n    <hr/>\r\n    -->\r\n\r\n    \r\n    \r\n\r\n\r\n    <!--\r\n\r\n    <hr/>\r\n    <div id=\"tblDiv\">nothing yet...</div>\r\n    <hr/>\r\n\r\n    <h3 style=\"width:100%;text-align:center;\">\r\n      View Quantity: {{ todoStatModel.qty }} <br/>\r\n      Query Duration: {{ todoStatModel.query_duration }} ms\r\n    </h3>\r\n\r\n    <hr/>\r\n\r\n    <h5>\r\n      todoStatModel.db_info: {{ todoStatModel.db_info | json }} \r\n      <hr/>\r\n      todoStatModel.allDocs: {{ todoStatModel.allDocs | json }}\r\n      <hr/>\r\n      todoStatModel.storesizes: {{ todoStatModel.storesizes | json }}\r\n    </h5>\r\n\r\n    <hr/>\r\n    -->\r\n    \r\n"

/***/ },
/* 461 */
/***/ function(module, exports) {

	module.exports = "    <div id=\"appEntry\">\r\n        <!-- <small>I am AppManager component</small> -->\r\n        <div id=\"appSelector\" class=\"noScroll container\" >\r\n            <div align=\"center\" style=\"padding-top: 100px\">\r\n\r\n                <!--\r\n                <button (click)=\"goToApp1(event)\" data-ripple-color=\"black\" type=\"button\" name=\"mailWasp\" class=\"btn btn-default\">\r\n                <i style=\"margin: 20px; padding: 20px; font-size: 5em\" class=\"fa fa-paper-plane\"></i> <span\r\n                        data-localize=\"none\"></span>\r\n                        <small>App 1</small>\r\n                </button>\r\n\r\n                <button (click)=\"goToApp2(event)\" data-ripple-color=\"black\" type=\"button\" name=\"everNodes\" class=\"btn btn-default\">\r\n                <i style=\"margin: 20px; padding: 20px ; font-size: 5em\" class=\"fa fa-rocket\"></i> <span\r\n                        data-localize=\"none\"></span>\r\n                        <small>App 2</small>\r\n                </button>\r\n\r\n                <button (click)=\"goToApp3(event)\" data-ripple-color=\"black\" type=\"button\" name=\"everNodes\" class=\"btn btn-default\">\r\n                <i style=\"margin: 20px; padding: 20px ; font-size: 5em\" class=\"fa fa-film\"></i> <span\r\n                        data-localize=\"none\"></span>\r\n                        <small>App 3</small>\r\n                </button>\r\n                -->\r\n\r\n                <button (click)=\"goToApp(event,'App6')\" data-ripple-color=\"black\" type=\"button\" name=\"everNodes\" class=\"btn btn-default\">\r\n                <i style=\"margin: 20px; padding: 20px ; font-size: 5em\" class=\"fa fa-barcode\"></i>\r\n                        <span data-localize=\"none\"></span>\r\n                        <small>Scanner Test</small>\r\n                </button>\r\n\r\n                <button (click)=\"goToApp(event,'App7')\" data-ripple-color=\"black\" type=\"button\" name=\"everNodes\" class=\"btn btn-default\">\r\n                <i style=\"margin: 20px; padding: 20px ; font-size: 5em\" class=\"fa fa-server\"></i>\r\n                        <span data-localize=\"none\"></span>\r\n                        <small>SQLite Test</small>\r\n                </button>\r\n\r\n                <button (click)=\"goToApp(event,'Help')\" data-ripple-color=\"black\" type=\"button\" name=\"everNodes\" class=\"btn btn-default\">\r\n                <i style=\"margin: 20px; padding: 20px ; font-size: 5em\" class=\"fa fa-question-circle\"></i>\r\n                        <span data-localize=\"none\"></span>\r\n                        <small>Help</small>\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n        <div id=\"appMailWaspContent\" class=\"noScroll container\" style=\"display: none\">\r\n        </div>\r\n        <div id=\"appEverNodesContent\" class=\"noScroll container\" style=\"display: none\">\r\n        </div>\r\n    </div>"

/***/ },
/* 462 */
/***/ function(module, exports) {

	module.exports = "                <div id=\"appLogin\" style=\"\">\r\n                  <form class=\"form-signin\" role=\"form\">\r\n                    <h2 class=\"form-signin-heading\"></h2>\r\n                    <input id=\"userName\" type=\"text\" value=\"{{user}}\" class=\"form-control\" data-localize=\"username\" placeholder=\"Your username...\" required autofocus>\r\n                    <input id=\"userPass\" type=\"password\" value=\"{{pass}}\" class=\"form-control\" data-localize=\"password\" placeholder=\"Your password...\" required>\r\n                    <label class=\"checkbox\">\r\n                      <input id=\"rememberMe\" type=\"checkbox\" checked value=\"remember-me\">\r\n                      <span> Remember me </span></label>\r\n                    <button id=\"loginButton\" (click)=\"onLogin($event)\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\r\n                      Sign in\r\n                    </button>\r\n                    <hr class=\"hrThin\"/>\r\n                    <a [routerLink]=\"['/ForgotPass', 'ForgotPass']\">Forgot password</a>\r\n                    <div id=\"languageSelectionLogin\"></div>\r\n                  </form>\r\n                </div>\r\n                <!--\r\n                <small>I am Login component and I am inside EntryPanel</small>\r\n                -->"

/***/ },
/* 463 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n     <div class=\"m_fileMenuWrap\" style=\"float:right;text-align:right;\">\r\n         <ul class=\"nav navbar-nav\">\r\n            <!--\r\n            <li id=\"commonFileMenu\" class=\"hidden-lg\" dropdown>\r\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Navigator<b class=\"caret\"></b></a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li class=\"divider\"></li>\r\n                    <li *ngFor=\"#item of m_renderedItems\" (click)=\"listenMenuSelected($event)\">\r\n                       <a href=\"#\">{{item.title}}</a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                </ul>\r\n            </li>\r\n            -->\r\n\r\n            <li *ngFor=\"#item of m_renderedItems\" (click)=\"listenMenuSelected($event)\">\r\n                <!-- <a href=\"#\">{{item.title}}</a> -->\r\n                <button class=\"btn btn-block btn-info btn-sm\">{{item.title}}</button>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports["default"] = applyMiddleware;
	
	var _compose = __webpack_require__(287);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 465 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports["default"] = combineReducers;
	
	var _createStore = __webpack_require__(288);
	
	var _isPlainObject = __webpack_require__(290);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(289);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(180)))

/***/ },
/* 467 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 468 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var router_2 = __webpack_require__(14);
	var http_1 = __webpack_require__(17);
	var Menu_1 = __webpack_require__(64);
	var MenuItem_1 = __webpack_require__(90);
	var CommBroker_1 = __webpack_require__(7);
	var Conts_1 = __webpack_require__(11);
	var tabs_1 = __webpack_require__(91);
	var tab_1 = __webpack_require__(137);
	var Logout_1 = __webpack_require__(89);
	var HelpCommon_1 = __webpack_require__(661);
	var RefreshTheme_1 = __webpack_require__(28);
	var DividerPanel_1 = __webpack_require__(136);
	var Help = (function (_super) {
	    __extends(Help, _super);
	    function Help(params, commBroker, Consts) {
	        _super.call(this);
	        var self = this;
	        jQuery('.navbar-nav').css({
	            display: 'block'
	        });
	        self.commBroker = commBroker;
	        self.screens = {
	            todos: true
	        };
	        self.listenMenuChanges();
	    }
	    Help.prototype.listenMenuChanges = function () {
	        var self = this;
	        self.commBroker.onEvent(Conts_1.Consts.Events().MENU_SELECTION).subscribe(function (e) {
	            var screen = (e.message).toLowerCase();
	            if (!self.screens.hasOwnProperty(screen)) {
	                console.log('no screen by the name of ' + screen);
	                return;
	            }
	            for (var screen_1 in self.screens)
	                self.screens[screen_1] = false;
	            self.screens[screen] = true;
	        });
	    };
	    Help = __decorate([
	        core_1.Component({
	            providers: [http_1.HTTP_PROVIDERS],
	            template: __webpack_require__(445),
	            directives: [
	                router_1.ROUTER_DIRECTIVES, router_2.RouterLink,
	                Menu_1.Menu, MenuItem_1.MenuItem,
	                Logout_1.Logout, HelpCommon_1.HelpCommon, tabs_1.Tabs, tab_1.Tab,
	                DividerPanel_1.DividerPanel,
	                Logout_1.Logout
	            ]
	        }), 
	        __metadata('design:paramtypes', [router_2.RouteParams, CommBroker_1.CommBroker, Conts_1.Consts])
	    ], Help);
	    return Help;
	})(RefreshTheme_1.RefreshTheme);
	exports.Help = Help;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 661 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var contributors_1 = __webpack_require__(662);
	var RefreshTheme_1 = __webpack_require__(28);
	var ng2_bootstrap_1 = __webpack_require__(85);
	var HelpCommon = (function (_super) {
	    __extends(HelpCommon, _super);
	    function HelpCommon(contributors) {
	        _super.call(this);
	    }
	    HelpCommon = __decorate([
	        core_1.Component({
	            selector: 'Help',
	            providers: [contributors_1.Contributors],
	            directives: [ng2_bootstrap_1.Alert, ng2_bootstrap_1.Rating],
	            styleUrls: ['src/comps/Help/common/HelpCommon.css'],
	            template: " <small>I am Help component</small>\n                <br/>\n                <alert type=\"info\">Welcome to Angular2 Bootstrap starter pack!</alert>\n                <!--\n                <rating [(ngModel)]=\"rate\" [max]=\"max\" [readonly]=\"isReadonly\" [titles]=\"['one','two','three']\" ></rating>\n                -->\n                <ng-content></ng-content>\n                "
	        }), 
	        __metadata('design:paramtypes', [contributors_1.Contributors])
	    ], HelpCommon);
	    return HelpCommon;
	})(RefreshTheme_1.RefreshTheme);
	exports.HelpCommon = HelpCommon;


/***/ },
/* 662 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Contributors = (function () {
	    function Contributors() {
	    }
	    Contributors = __decorate([
	        core_1.Component({
	            selector: 'Contributors',
	            styleUrls: ['src/comps/app1/help/contributors/contributors.css'],
	            templateUrl: 'src/comps/app1/help/contributors/contributors.html'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Contributors);
	    return Contributors;
	})();
	exports.Contributors = Contributors;


/***/ },
/* 663 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var http_1 = __webpack_require__(17);
	var router_2 = __webpack_require__(14);
	var Menu_1 = __webpack_require__(64);
	var MenuItem_1 = __webpack_require__(90);
	var CommBroker_1 = __webpack_require__(7);
	var Conts_1 = __webpack_require__(11);
	var Sliderpanel_1 = __webpack_require__(16);
	var Digg_1 = __webpack_require__(135);
	var tabs_1 = __webpack_require__(91);
	var tab_1 = __webpack_require__(137);
	var Logout_1 = __webpack_require__(89);
	var Settings_1 = __webpack_require__(666);
	var Help_1 = __webpack_require__(664);
	var Todo1_1 = __webpack_require__(667);
	var Todo2_1 = __webpack_require__(668);
	var Todolist_1 = __webpack_require__(669);
	var Todoitem_1 = __webpack_require__(320);
	var TodoStatsModel_1 = __webpack_require__(194);
	var RefreshTheme_1 = __webpack_require__(28);
	var App1 = (function (_super) {
	    __extends(App1, _super);
	    function App1(params, commBroker, Consts) {
	        _super.call(this);
	        var self = this;
	        self.commBroker = commBroker;
	        self.screens = {
	            todos: true,
	            digg: false,
	            settings: false,
	            help: false,
	            logout: false
	        };
	        self.listenMenuChanges();
	    }
	    App1.prototype.listenMenuChanges = function () {
	        var self = this;
	        self.commBroker.onEvent(Conts_1.Consts.Events().MENU_SELECTION).subscribe(function (e) {
	            var screen = (e.message).toLowerCase();
	            if (!self.screens.hasOwnProperty(screen)) {
	                console.log('no screen by the name of ' + screen);
	                return;
	            }
	            for (var screen_1 in self.screens)
	                self.screens[screen_1] = false;
	            self.screens[screen] = true;
	        });
	    };
	    App1 = __decorate([
	        core_1.Component({
	            providers: [http_1.HTTP_PROVIDERS, TodoStatsModel_1.default],
	            template: __webpack_require__(446),
	            directives: [
	                router_1.ROUTER_DIRECTIVES, router_2.RouterLink,
	                Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg,
	                Todo1_1.Todo1, Todo2_1.Todo2, Todolist_1.TodoList, Todoitem_1.TodoItem, Logout_1.Logout, Settings_1.Settings, Help_1.Help, tabs_1.Tabs, tab_1.Tab
	            ]
	        }), 
	        __metadata('design:paramtypes', [router_2.RouteParams, CommBroker_1.CommBroker, Conts_1.Consts])
	    ], App1);
	    return App1;
	})(RefreshTheme_1.RefreshTheme);
	exports.App1 = App1;


/***/ },
/* 664 */
[904, 665],
/* 665 */
662,
/* 666 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var StyleModel_1 = __webpack_require__(138);
	var StyleService_1 = __webpack_require__(139);
	var Settings = (function () {
	    function Settings(styleService) {
	        this.styleService = styleService;
	    }
	    Settings = __decorate([
	        core_1.Component({
	            selector: 'Settings',
	            providers: [StyleModel_1.StyleModel],
	            template: "\n                <small>I am Settings component</small>\n                <hr/>\n                <h3>Choose your theme</h3>\n                <hr/>\n                  <div class=\"clearfix\" style=\"padding-bottom: 13px\">\n                  </div>\n                  <select class=\"form-control\"\n                    [(ngModel)]=\"styleService.model.theme\"\n                    (change)=\"styleService.model.theme=$event.value; styleService.onUpdate()\">\n                      <option *ngFor=\"#theme of styleService.model.themes\">{{theme}}</option>\n                  </select>\n                  <hr/>\n                  <h3>Auto load theme on start</h3>\n                  <div class=\"clearfix\" style=\"padding-bottom: 30px\">\n                  <div style=\"position: relative\" class=\"material-switch pull-left\">\n                    <input id=\"changeStyle\" name=\"someSwitchOption003\"\n                     [(ngModel)]=\"styleService.model.remember\"\n                     (change)=\"styleService.onUpdate()\" type=\"checkbox\"/>\n                    <label for=\"changeStyle\" class=\"label-primary\"></label>\n                  </div>\n                  <div class=\"clearfix\" style=\"padding-bottom: 13px\">\n                  <h1 style=\"color: gray\">{{styleService.model.remember == true ? 'On' : 'Off'}}</h1>\n                "
	        }), 
	        __metadata('design:paramtypes', [StyleService_1.StyleService])
	    ], Settings);
	    return Settings;
	})();
	exports.Settings = Settings;


/***/ },
/* 667 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Sliderpanel_1 = __webpack_require__(16);
	var Todo1 = (function () {
	    function Todo1(sliderPanel) {
	        this.sliderPanel = sliderPanel;
	    }
	    Todo1.prototype.onNext = function (event) {
	        this.sliderPanel.slideToPage('todo2', 'left');
	    };
	    Todo1 = __decorate([
	        core_1.Component({
	            selector: 'Todo1',
	            template: " <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm goNext\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <small>I am todo1 component</small>\n                <ng-content></ng-content>\n                "
	        }), 
	        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel])
	    ], Todo1);
	    return Todo1;
	})();
	exports.Todo1 = Todo1;


/***/ },
/* 668 */
[905, 194, 432],
/* 669 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var TodoRemote_1 = __webpack_require__(319);
	var Todoitem_1 = __webpack_require__(320);
	var TodoList = (function () {
	    function TodoList(todoService) {
	        this.todoService = todoService;
	        this.newItem = '';
	        this.m_dataStore = todoService.getDataStore();
	    }
	    TodoList.prototype.addItem = function () {
	        if (this.newItem.length == 0)
	            return;
	        this.todoService.addItem(this.newItem);
	        this.newItem = '';
	    };
	    TodoList.prototype.removeItem = function (item) {
	        this.todoService.removeItem(item);
	    };
	    TodoList.prototype.editItem = function (item) {
	        this.todoService.editItem(item);
	    };
	    TodoList = __decorate([
	        core_1.Component({
	            selector: 'todo-list',
	            template: "\n                <section class=\"todoapp\">\n                  <header class=\"header\">\n                    <h1>your to-do's</h1>\n                    <input class=\"new-todo\" placeholder=\"What needs to be done?\"\n                    autofocus [(ngModel)]=\"newItem\" (keyup.enter)=\"addItem()\">\n                    <button class=\"btn btn-default btn-lg\" (click)=\"addItem()\">Add todo</button>\n                  </header>\n                  <section class=\"main\">\n                    <ul class=\"todo-list\">\n                      <li *ngFor=\"#item of m_dataStore.todos\">\n                        <todo-item [item]=\"item\" (done)=\"removeItem($event)\" (edit)=\"editItem($event)\">\n                        </todo-item>\n                      </li>\n                    </ul>\n                  </section>\n                </section>\n    ",
	            styles: [__webpack_require__(434)],
	            directives: [Todoitem_1.TodoItem],
	            providers: [TodoRemote_1.TodosService]
	        }), 
	        __metadata('design:paramtypes', [TodoRemote_1.TodosService])
	    ], TodoList);
	    return TodoList;
	})();
	exports.TodoList = TodoList;


/***/ },
/* 670 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var router_2 = __webpack_require__(14);
	var MenuItem_1 = __webpack_require__(90);
	var Menu_1 = __webpack_require__(64);
	var CommBroker_1 = __webpack_require__(7);
	var Conts_1 = __webpack_require__(11);
	var Sliderpanel_1 = __webpack_require__(16);
	var Notes_1 = __webpack_require__(672);
	var Notes1_1 = __webpack_require__(673);
	var Notes2_1 = __webpack_require__(675);
	var Notes3_1 = __webpack_require__(676);
	var Notes4_1 = __webpack_require__(677);
	var Notes5_1 = __webpack_require__(678);
	var Digg_1 = __webpack_require__(135);
	var http_1 = __webpack_require__(17);
	var Logout_1 = __webpack_require__(89);
	var Contact_1 = __webpack_require__(671);
	var DividerPanel_1 = __webpack_require__(136);
	var ModalDialog_1 = __webpack_require__(36);
	var Properties_1 = __webpack_require__(679);
	var Weather_1 = __webpack_require__(681);
	var RefreshTheme_1 = __webpack_require__(28);
	var App2 = (function (_super) {
	    __extends(App2, _super);
	    function App2(params, commBroker, Consts) {
	        _super.call(this);
	        var self = this;
	        jQuery(".navbar-header .navbar-toggle").trigger("click");
	        jQuery('.navbar-nav').css({
	            display: 'block'
	        });
	        self.commBroker = commBroker;
	        self.screens = {
	            notes: true,
	            weather: false,
	            digg: false,
	            contact: false,
	            logout: false
	        };
	        self.listenMenuChanges();
	    }
	    App2.prototype.listenMenuChanges = function () {
	        var self = this;
	        self.commBroker.onEvent(Conts_1.Consts.Events().MENU_SELECTION).subscribe(function (e) {
	            var screen = (e.message).toLowerCase();
	            if (!self.screens.hasOwnProperty(screen)) {
	                console.log('no screen by the name of ' + screen);
	                return;
	            }
	            for (var screen_1 in self.screens)
	                self.screens[screen_1] = false;
	            self.screens[screen] = true;
	        });
	    };
	    App2 = __decorate([
	        core_1.Component({
	            template: "\n        <div class=\"row\" style=\"margin-left: 0; margin-right: 0;\">\n          <Menu #appMennu class=\"noSpace\">\n            <MenuItem [fontAwesome]=\"'fa-dot-circle-o'\" [tabtitle]=\"'Notes'\"></MenuItem>\n            <MenuItem [fontAwesome]=\"'fa-digg'\" [tabtitle]=\"'Digg'\"></MenuItem>\n            <MenuItem [fontAwesome]=\"'fa-sun-o'\" [tabtitle]=\"'Weather'\"></MenuItem>\n            <MenuItem [fontAwesome]=\"'fa-comment'\" [tabtitle]=\"'Contact'\"></MenuItem>\n            <MenuItem [fontAwesome]=\"'fa-power-off'\" [tabtitle]=\"'Logout'\"></MenuItem>\n          </Menu>\n          <DividerPanel>\n            <div id=\"mainPanelWrap\" class=\"col-xs-9 col-sm-9 col-md-9 col-lg-8\">\n              <Notes *ngIf=\"screens.notes\">\n                <Sliderpanel>\n                    <div class=\"campaignSlider noScroll\">\n                      <Notes1 class=\"page center notes1 selected\">\n                        <div class=\"yScroll\">\n                        </div>\n                      </Notes1>\n                      <Notes2 class=\"page right notes2\">\n                        <div class=\"yScroll\">\n                          <hr/>\n                          <h3>Notes 2</h3>\n                        </div>\n                      </Notes2>\n                      <Notes3 class=\"page right notes3\">\n                        <div class=\"yScroll\">\n                          <hr/>\n                          <h3>Notes 3</h3>\n                        </div>\n                      </Notes3>\n                      <Notes4 class=\"page right notes4\">\n                        <div class=\"yScroll\">\n                          <hr/>\n                          <h3>Notes 4</h3>\n                        </div>\n                      </Notes4>\n                      <Notes5 class=\"page right notes5\">\n                        <div class=\"yScroll\">\n                          <hr/>\n                          <h3>Notes 5</h3>\n                        </div>\n                      </Notes5>\n                    </div>\n                </Sliderpanel>\n              </Notes>\n              <Digg *ngIf=\"screens.digg\" mode=\"list\">\n                <small>Digg component list style</small>\n              </Digg>\n              <Weather *ngIf=\"screens.weather\">\n              </Weather>\n              <Contact class=\"yScroll\" *ngIf=\"screens.contact\">\n              </Contact>\n              <Logout *ngIf=\"screens.logout\">\n                <h5>logout 2</h5>\n              </Logout>\n            </div>\n            <div id=\"propPanelWrap\" class=\"appHeight col-xs-3 col-sm-3 col-lg-3\">\n              <Properties id=\"propPanel\" class=\"appHeight\">\n              </Properties>\n            </div>\n          </DividerPanel>\n        </div>\n    ",
	            providers: [http_1.HTTP_PROVIDERS],
	            directives: [
	                router_1.ROUTER_DIRECTIVES, router_2.RouterLink,
	                DividerPanel_1.DividerPanel,
	                Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, Properties_1.Properties,
	                Notes_1.Notes, Notes1_1.Notes1, Notes2_1.Notes2, Notes3_1.Notes3, Notes4_1.Notes4, Notes5_1.Notes5, Weather_1.Weather, Logout_1.Logout, Contact_1.Contact, ModalDialog_1.ModalDialog
	            ]
	        }), 
	        __metadata('design:paramtypes', [router_2.RouteParams, CommBroker_1.CommBroker, Conts_1.Consts])
	    ], App2);
	    return App2;
	})(RefreshTheme_1.RefreshTheme);
	exports.App2 = App2;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 671 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Conts_1 = __webpack_require__(11);
	var common_1 = __webpack_require__(12);
	var MailModel_1 = __webpack_require__(65);
	var CommBroker_1 = __webpack_require__(7);
	var Contact = (function () {
	    function Contact(commBroker) {
	        this.commBroker = commBroker;
	        this.contacts = ['Call me', 'Email me', 'Page me (old school)'];
	        this.model = new MailModel_1.MailModel(1, 'your name', true, this.contacts[0], 'how can we help you?');
	        this.submitted = false;
	        this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('Contact');
	    }
	    Contact.prototype.onSubmit = function (event) {
	        console.log(event);
	        if (event.contactMethod.indexOf('Page') > -1) {
	            alert('Paging is really old, get a cell phone');
	            this.submitted = false;
	            return;
	        }
	        this.submitted = true;
	    };
	    Contact.prototype.onChange = function (event) {
	        if (event.target.value.length < 3)
	            alert('text too short for subject');
	    };
	    Contact = __decorate([
	        core_1.Component({
	            selector: 'Contact',
	            directives: [common_1.FORM_DIRECTIVES],
	            styles: ["\n            .ng-invalid {\n              border-left: 5px solid #a94442; /* red */\n           }\n           .ng-valid[required] {\n                  border-left: 5px solid #42A948; /* green */\n           }\n           .form-control {\n                width: 20%;\n           }\n       "],
	            template: "\n                <small>I am Contact component</small>\n                <ng-content></ng-content>\n                <div class=\"container\">\n                  <div [hidden]=\"submitted\">\n                    <h1>Contact form</h1>\n\n                    <!-- special tx to ng2-book via http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/ -->\n\n                    <!-- Importing FORM_DIRECTIVES automatically binds form to ngForm (which is a ControlGroup) and ngSubmit for us -->\n                    <!-- To create a new ControlGroup and Controls implicitly use: -->\n                    <!--  -->\n                    <!-- ngForm and -->\n                    <!-- ngControl -->\n                    <!-- But to bind to an existing ControlGroup and Controls use: -->\n                    <!--  -->\n                    <!-- ngFormModel and -->\n                    <!-- ngFormControl -->\n\n                    <form (ngSubmit)=\"onSubmit(contactForm.value)\" #contactForm=\"ngForm\">\n                      <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"model.name\" (change)=\"onChange($event)\" ngControl=\"name\" #name=\"ngForm\">\n                        <div [hidden]=\"name.valid\" class=\"alert alert-danger\">\n                          Name is required\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"subject\">Subject</label>\n                        <input type=\"text\" class=\"form-control\" (change)=\"onChange($event)\" [(ngModel)]=\"model.subject\" ngControl=\"subject\" >\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"contactMethod\">How should we contact you?</label>\n                        <select class=\"form-control\" required (change)=\"onChange($event)\" [(ngModel)]=\"model.contactMethod\" ngControl=\"contactMethod\" #contactMethod=\"ngForm\" >\n                          <option *ngFor=\"#p of contacts\" [value]=\"p\">\n                            {{p}}\n                          </option>\n                        </select>\n                        <div [hidden]=\"contactMethod.valid\" class=\"alert alert-danger\">\n                          contact method is required\n                        </div>\n                      </div>\n                      <label class=\"pull-left\">\n                      </label>\n                      <br/>\n                      <br/>\n                      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!contactForm.form.valid\">Submit</button>\n                    </form>\n                  </div>\n                  <div [hidden]=\"!submitted\">\n                    <h2>You submitted the following:</h2>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Name</div>\n                      <div class=\"col-xs-9  pull-left\">{{ model.name }}</div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Subject</div>\n                      <div class=\"col-xs-9 pull-left\">{{ model.subject }}</div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Power</div>\n                      <div class=\"col-xs-9 pull-left\">{{ model.contactMethod }}</div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-xs-3\">Gender Male</div>\n                      <div class=\"col-xs-9 pull-left\">{{ model.male }}</div>\n                    </div>\n                    <br>\n                    <button class=\"btn btn-default\" (click)=\"submitted=false\">Edit</button>\n                  </div>\n                </div>\n                "
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
	    ], Contact);
	    return Contact;
	})();
	exports.Contact = Contact;


/***/ },
/* 672 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Notes = (function () {
	    function Notes() {
	    }
	    Notes = __decorate([
	        core_1.Component({
	            selector: 'Notes',
	            template: "<ng-content></ng-content>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Notes);
	    return Notes;
	})();
	exports.Notes = Notes;


/***/ },
/* 673 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(bootbox) {var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Sliderpanel_1 = __webpack_require__(16);
	var ModalDialog_1 = __webpack_require__(36);
	var CommBroker_1 = __webpack_require__(7);
	var Conts_1 = __webpack_require__(11);
	var NotesBase_1 = __webpack_require__(86);
	var MailModel_1 = __webpack_require__(65);
	var CharCount_1 = __webpack_require__(206);
	var common_1 = __webpack_require__(12);
	var StartCapValidator_1 = __webpack_require__(209);
	var NameTakenValidator_1 = __webpack_require__(208);
	var Notes1 = (function (_super) {
	    __extends(Notes1, _super);
	    function Notes1(fb, sliderPanel, commBroker) {
	        _super.call(this, sliderPanel, commBroker);
	        this.sliderPanel = sliderPanel;
	        this.commBroker = commBroker;
	        this.slideLeft = 'notes2';
	        this.notesForm = fb.group({
	            'userName': ['', common_1.Validators.required],
	            'phone': ['(xxx)-xxxx-xxx', common_1.Validators.minLength(10)],
	            'notesTextArea': ['enter text here',
	                common_1.Validators.compose([
	                    common_1.Validators.required,
	                    StartCapValidator_1.default])],
	            'login': ['',
	                common_1.Validators.compose([
	                    common_1.Validators.required,
	                    StartCapValidator_1.default]), NameTakenValidator_1.default]
	        });
	        this.notesTextArea = this.notesForm.controls['notesTextArea'];
	        this.userName = this.notesForm.controls['userName'];
	        this.login = this.notesForm.controls['login'];
	        this.phone = this.notesForm.controls['phone'];
	        this.model = new MailModel_1.MailModel(0, '', true, '', '');
	        this.mapModel = new Map();
	        this.mapModel.set('my name', 'Lion Demo');
	        this.observeNameChange();
	        this.observeFormChange();
	        this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('notes1');
	    }
	    Notes1.prototype.observeNameChange = function () {
	        this.userName.valueChanges.debounceTime(100).subscribe(function (value) {
	            console.log('name changed, notified via observable: ', value);
	        });
	    };
	    Notes1.prototype.observeFormChange = function () {
	        this.notesForm.valueChanges.debounceTime(100).subscribe(function (value) {
	            console.log('forum changed, notified via observable: ', value);
	        });
	    };
	    Notes1.prototype.onSubmit = function (event) {
	        bootbox.alert("sent " + event.notesTextArea);
	    };
	    Notes1.prototype.onChange = function (event) {
	        if (event.target.value.length < 3)
	            console.log('text too short for subject');
	    };
	    Notes1 = __decorate([
	        core_1.Component({
	            selector: 'Notes1',
	            directives: [ModalDialog_1.ModalDialog, common_1.FORM_DIRECTIVES],
	            pipes: [CharCount_1.CharCount],
	            styles: [__webpack_require__(435)],
	            template: "\n        <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm goNext\">\n          <span class=\"fa fa-arrow-right\"></span>\n        </button>\n        <hr/>\n        <small>I am notes1 component</small>\n        <hr/>\n        <h1>Notes 1</h1>\n        <div class=\"container\">\n          <div [hidden]=\"submitted\">\n\n            <!-- special tx to ng2-book via http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/ -->\n\n            <!-- create a form and bind it directly to the ControlGroup we created manually instantiated in the controller below (i.e.: notesForm) -->\n            <!-- this is different from what we did in Contact.ts where we had Angualar automatically create a control group for us -->\n            <!-- and we just created a local variable their-->\n\n            <!-- To create a new ControlGroup and Controls implicitly use (used here in Contact.ts): -->\n            <!--  -->\n            <!-- ngForm and -->\n            <!-- ngControl -->\n            <!-- But to bind to an existing ControlGroup and Controls use explicitly via FormBuilder (used in this component): -->\n            <!--  -->\n            <!-- ngFormModel and -->\n            <!-- ngFormControl -->\n\n            <div [class.panelColorError]=\"!notesForm.valid\">\n              <!-- here we are mapping the ControlGroup via the directive ngFormModel to the instance of notesForm -->\n              <form [ngFormModel]=\"notesForm\" (ngSubmit)=\"onSubmit(notesForm.value)\">\n                <div class=\"form-group\">\n                  <!-- here we are mapping the Control via the directive ngFormControl to the instance of notesForm.controls['userName'] -->\n\n                  <!-- user name -->\n                  <input type=\"text\" class=\"form-control\" placeholder=\"user name\" required [ngFormControl]=\"notesForm.controls['userName']\">\n                  <div *ngIf=\"!userName.valid\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n                    <strong>Warning!</strong> are you a robot?\n                  </div>\n\n                  <!-- login name -->\n                  <input type=\"text\" class=\"longInput form-control\" placeholder=\"check server for free name (try: Lion)\" required [ngFormControl]=\"notesForm.controls['login']\">\n                  <p *ngIf=\"login.pending\">Fetching data from the server...</p>\n                  <div *ngIf=\"login.hasError('taken')\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n                    <strong>Warning!</strong> Login is taken\n                  </div>\n                  <div *ngIf=\"login.hasError('notCapped') && login.touched\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n                    <strong>Warning!</strong> Must start with first capital letter\n                  </div>\n\n                  <!-- phone -->\n                  <input type=\"text\" class=\"longInput form-control\" placeholder=\"phone\" required [ngFormControl]=\"notesForm.controls['phone']\">\n                  <div *ngIf=\"!phone.valid\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n                    <strong>Warning!</strong> please use valid phone\n                  </div>\n                  <label for=\"name\">Enter your notes</label>\n\n                  <!-- bind the textarea control to our manually created notesTextArea control -->\n                                    <textarea type=\"text\" placeholder=\"enter some notes\" class=\"myNotes form-control\" [ngFormControl]=\"notesForm.controls['notesTextArea']\" required [(ngModel)]=\"model.name\" (change)=\"onChange($event)\"></textarea>\n                  <div *ngIf=\"notesTextArea.hasError('notCapped') && notesTextArea.touched\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n                    <strong>Warning!</strong> Must start with first capital letter (Validators are working :)\n                  </div>\n                  <div *ngIf=\"!notesForm.valid && notesTextArea.touched\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n                    <strong>Warning!</strong> something is not right with the form\n                  </div>\n                  <span>Total characters via Pipes: {{model.name | CharCount}}</span>\n                  <br/>\n                </div>\n                <br/>\n                <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!notesForm.valid\">Submit</button>\n              </form>\n            </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [common_1.FormBuilder, Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
	    ], Notes1);
	    return Notes1;
	})(NotesBase_1.NotesBase);
	exports.Notes1 = Notes1;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)))

/***/ },
/* 674 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Notes1Props = (function () {
	    function Notes1Props() {
	    }
	    Notes1Props = __decorate([
	        core_1.Component({
	            selector: 'Notes1Props',
	            template: "\n                <h1>Notes 1</h1>\n                <small>I am notes1 properties component</small>\n              "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Notes1Props);
	    return Notes1Props;
	})();
	exports.Notes1Props = Notes1Props;


/***/ },
/* 675 */
[907, 86],
/* 676 */
[908, 86],
/* 677 */
[909, 86],
/* 678 */
[910, 86],
/* 679 */
[911, 674],
/* 680 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(12);
	var SortableHeader = (function () {
	    function SortableHeader() {
	    }
	    SortableHeader.prototype.headerClicked = function () {
	        if (this.sort.field === this.fieldName) {
	            if (this.sort.desc === true) {
	                this.sort.desc = false;
	                this.sort.field = null;
	            }
	            else {
	                this.sort.desc = true;
	            }
	        }
	        else {
	            this.sort.field = this.fieldName;
	            this.sort.desc = false;
	        }
	    };
	    __decorate([
	        core_1.Input('sortableHeader'), 
	        __metadata('design:type', String)
	    ], SortableHeader.prototype, "fieldName", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], SortableHeader.prototype, "sort", void 0);
	    SortableHeader = __decorate([
	        core_1.Component({
	            selector: 'th[sortableHeader]',
	            directives: [common_1.COMMON_DIRECTIVES],
	            template: "\n    <div (click)=\"headerClicked()\">\n      <i class=\"fa fa-sort\" [hidden]=\"sort.field === fieldName\"></i>\n      <i class=\"fa fa-sort-asc\" [hidden]=\"sort.field !== fieldName || sort.desc\"></i>\n      <i class=\"fa fa-sort-desc\" [hidden]=\"sort.field !== fieldName || !sort.desc\"></i>\n      <ng-content></ng-content>\n    </div>\n  ",
	            styles: ["\n        div {\n          cursor: pointer;\n          width: 80px;\n        }\n  "]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SortableHeader);
	    return SortableHeader;
	})();
	exports.SortableHeader = SortableHeader;


/***/ },
/* 681 */
[912, 682, 680],
/* 682 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(17);
	var Observable_1 = __webpack_require__(3);
	__webpack_require__(21);
	__webpack_require__(43);
	__webpack_require__(43);
	var WeatherService = (function () {
	    function WeatherService(http) {
	        this.http = http;
	    }
	    WeatherService.prototype.search = function (query) {
	        return this.http
	            .get("" + WeatherService.BASE_URL + query)
	            .do(function (x) {
	            console.log("Weather response: " + x.status);
	        })
	            .map(function (res) { return res.json(); })
	            .map(function (e) {
	            var items = e[0].data.weather;
	            return items;
	        })
	            .catch(function (e) {
	            return Observable_1.Observable.empty();
	        });
	    };
	    WeatherService.BASE_URL = 'https://secure.digitalsignage.com/Weather/';
	    WeatherService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], WeatherService);
	    return WeatherService;
	})();
	exports.WeatherService = WeatherService;


/***/ },
/* 683 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var router_2 = __webpack_require__(14);
	var Starwars_1 = __webpack_require__(684);
	var App3 = (function () {
	    function App3() {
	    }
	    App3 = __decorate([
	        core_1.Component({
	            template: __webpack_require__(447),
	            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink, Starwars_1.Starwars]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App3);
	    return App3;
	})();
	exports.App3 = App3;


/***/ },
/* 684 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var redux_1 = __webpack_require__(182);
	var thunk = __webpack_require__(181);
	var parts_reducer_1 = __webpack_require__(698);
	var cart_reducer_1 = __webpack_require__(695);
	var films_reducer_1 = __webpack_require__(696);
	var users_reducer_1 = __webpack_require__(699);
	var angular2_redux_util_1 = __webpack_require__(20);
	var shopping_component_1 = __webpack_require__(692);
	var CommBroker_1 = __webpack_require__(7);
	var part_actions_1 = __webpack_require__(128);
	var cart_actions_1 = __webpack_require__(195);
	var Consts = __webpack_require__(127);
	var admin_component_1 = __webpack_require__(686);
	var films_component_1 = __webpack_require__(690);
	var user_actions_1 = __webpack_require__(197);
	var film_actions_1 = __webpack_require__(196);
	var appStoreFactory = function () {
	    var reducers = redux_1.combineReducers({ parts: parts_reducer_1.default, cart: cart_reducer_1.default, films: films_reducer_1.default, users: users_reducer_1.default });
	    var middlewareEnhancer = redux_1.applyMiddleware(thunk, angular2_redux_util_1.LoggerMiddleware);
	    var isDebug = window.devToolsExtension;
	    var applyDevTools = function () { return isDebug ? window.devToolsExtension() : function (f) { return f; }; };
	    var enhancers = redux_1.compose(middlewareEnhancer, applyDevTools());
	    var createStoreWithEnhancers = enhancers(redux_1.createStore);
	    var reduxAppStore = createStoreWithEnhancers(reducers);
	    return new angular2_redux_util_1.AppStore(reduxAppStore);
	};
	var Starwars = (function () {
	    function Starwars(commBroker) {
	        this.commBroker = commBroker;
	        var reduxAppStore = appStoreFactory();
	        this.commBroker.setService(Consts.APP_STORE, reduxAppStore);
	    }
	    Starwars = __decorate([
	        core_1.Component({
	            selector: 'Starwars',
	            directives: [shopping_component_1.ShoppingComponent, admin_component_1.AdminComponent, films_component_1.FilmsComponent],
	            template: __webpack_require__(448),
	            providers: [part_actions_1.PartActions, cart_actions_1.CartActions, part_actions_1.PartActions, user_actions_1.UserActions, film_actions_1.FilmActions]
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
	    ], Starwars);
	    return Starwars;
	})();
	exports.Starwars = Starwars;


/***/ },
/* 685 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var AddPartsView = (function () {
	    function AddPartsView() {
	        this.add = new core_1.EventEmitter();
	    }
	    AddPartsView.prototype.onSubmit = function ($event, value) {
	        $event.preventDefault();
	        this.add.next(value);
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], AddPartsView.prototype, "add", void 0);
	    AddPartsView = __decorate([
	        core_1.Component({
	            selector: 'add-part',
	            template: "\n        <form class=\"form-inline\" (submit)=\"onSubmit($event,name.value);name.value=''\">\n            <div class=\"form-group\">\n                <input #name type=\"text\" class=\"form-control\" placeholder=\"Part Name\" autocomplete=\"off\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Add</button>\n        </form>\n    ",
	            changeDetection: core_1.ChangeDetectionStrategy.CheckOnce
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AddPartsView);
	    return AddPartsView;
	})();
	exports.AddPartsView = AddPartsView;


/***/ },
/* 686 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var user_actions_1 = __webpack_require__(197);
	var users_view_1 = __webpack_require__(694);
	var user_view_1 = __webpack_require__(693);
	var reselect_1 = __webpack_require__(33);
	var CommBroker_1 = __webpack_require__(7);
	var Consts = __webpack_require__(127);
	var AdminComponent = (function () {
	    function AdminComponent(commBroker, userActions) {
	        this.usersToShow = null;
	        this.currentUser = null;
	        this.filmFilter = null;
	        var self = this;
	        var appStore = commBroker.getService(Consts.APP_STORE);
	        this.setCurrentUser = userActions.createDispatcher(appStore, userActions.setCurrentUser);
	        this.setFilmFilter = userActions.createDispatcher(appStore, userActions.setFilmFilter);
	        var usersToShowSelector = AdminComponent.createUsersToShowSelector();
	        appStore.subscribe(function (state) {
	            self.usersToShow = usersToShowSelector(state);
	            self.currentUser = state.users.current;
	            self.filmFilter = state.users.filmFilter;
	        });
	        appStore.dispatch(userActions.fetchUsers());
	    }
	    AdminComponent.createUsersToShowSelector = function () {
	        var currentFilmSelector = reselect_1.createSelector(function (state) { return state.users.filmFilter; }, function (state) { return state.films.currentFilm; }, function (filmFilter, currentFilm) { return filmFilter && currentFilm ? currentFilm : null; });
	        return reselect_1.createSelector(function (state) { return state.users.list; }, currentFilmSelector, function (users, currentFilm) { return currentFilm ? users.filter(AdminComponent.getFilter(currentFilm)) : users; });
	    };
	    ;
	    AdminComponent.getFilter = function (film) {
	        var ids = film.characters
	            .map(function (url) { return AdminComponent.getId(url); })
	            .reduce(function (idsMap, id) { return (idsMap[id] = true) && idsMap; }, {});
	        return function (user) { return ids[AdminComponent.getId(user.url)]; };
	    };
	    ;
	    AdminComponent.getId = function (url) {
	        return url.replace(/[a-z\/\.\:]*/g, "");
	    };
	    ;
	    AdminComponent = __decorate([
	        core_1.Component({
	            selector: 'admin',
	            template: "\n        <h3>Users</h3>\n        <a href=\"\" (click)=\"$event.preventDefault(); setFilmFilter(!filmFilter)\" [class.hidden]=\"!usersToShow\">\n            Turn filter {{filmFilter?\"off\":\"on\"}}\n        </a>\n        <users [data]=\"usersToShow\" (current)=\"setCurrentUser($event)\">\n        </users>\n        <hr/>\n        <h3>Current User</h3>\n        <br/>\n        <user [data]=\"currentUser\"></user>\n    ",
	            directives: [users_view_1.UsersView, user_view_1.UserView]
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker, user_actions_1.UserActions])
	    ], AdminComponent);
	    return AdminComponent;
	})();
	exports.AdminComponent = AdminComponent;


/***/ },
/* 687 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var CartView = (function () {
	    function CartView() {
	        this.parts = [];
	        this.removeFromCart = new core_1.EventEmitter();
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], CartView.prototype, "parts", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], CartView.prototype, "removeFromCart", void 0);
	    CartView = __decorate([
	        core_1.Component({
	            selector: 'cart',
	            template: "\n        <p [class.hidden]=\"parts.length>0\" class=\"text-muted\">Empty :(</p>\n        <table>\n            <tr *ngFor=\"#part of parts\">\n                <td>\n                    <button style=\"margin-right:10px;margin-bottom:3px;margin-top:3px\"\n                        (click)=\"removeFromCart.next(part.id)\">remove\n                    </button>\n                </td>\n                <td>{{part.name}}</td>\n            </tr>\n        </table>\n    ",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CartView);
	    return CartView;
	})();
	exports.CartView = CartView;


/***/ },
/* 688 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var FilmSelectionView = (function () {
	    function FilmSelectionView() {
	        this.count = 0;
	        this.current = new core_1.EventEmitter();
	        this.currentSelection = null;
	    }
	    FilmSelectionView.prototype.ngOnChanges = function () {
	        this.list = (this.count > 0 ? Array.apply(null, Array(this.count)).map(function (x, index) { return index; }) : []);
	    };
	    FilmSelectionView.prototype.select = function (item) {
	        this.currentSelection = item;
	        this.current.next(item);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FilmSelectionView.prototype, "count", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], FilmSelectionView.prototype, "current", void 0);
	    FilmSelectionView = __decorate([
	        core_1.Component({
	            selector: 'film-selection',
	            template: "\n        <button type=\"button\"\n            *ngFor=\"#item of list\"\n            class=\"vehicle-selection\"\n            [ngClass]=\"{'btn-primary':item==currentSelection}\"\n            (click)=\"select(item)\"\n            >\n            {{item+1}}\n        </button>\n    ",
	            styles: ["\n        .vehicle-selection {\n            margin-right:8px;\n        }\n    "],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FilmSelectionView);
	    return FilmSelectionView;
	})();
	exports.FilmSelectionView = FilmSelectionView;


/***/ },
/* 689 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var FilmView = (function () {
	    function FilmView() {
	        this.data = null;
	        this.loading = false;
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FilmView.prototype, "data", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FilmView.prototype, "loading", void 0);
	    FilmView = __decorate([
	        core_1.Component({
	            selector: 'film',
	            template: "\n        <label>{{data?.title}}</label><span *ngIf=\"loading\" class=\"blink\">loading...</span>\n        <p>{{data?.opening_crawl}}</p>\n    ",
	            styles: ["\n        .blink {\n            margin-left:10px;\n            animation: blink .75s linear infinite;\n        }\n        @keyframes blink {\n            0% { opacity: 1; }\n            50% { opacity: 1; }\n            50.01% { opacity: 0; }\n            100% { opacity: 0; }\n        }\n    "],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FilmView);
	    return FilmView;
	})();
	exports.FilmView = FilmView;


/***/ },
/* 690 */
[913, 196, 688, 689, 127],
/* 691 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var reselect_1 = __webpack_require__(33);
	var partsInCartLookupSelector = reselect_1.createSelector(function (changeRecord) { return changeRecord.partsInCart.currentValue; }, function (partsInCart) {
	    var red = partsInCart.reduce(function (map, part) { return (map[part.id] = true) && map; }, {});
	    return red;
	});
	var PartsView = (function () {
	    function PartsView() {
	        this.parts = [];
	        this.partsInCart = [];
	        this.partsInCartLookup = {};
	        this.addToCart = new core_1.EventEmitter();
	    }
	    PartsView.prototype.ngOnChanges = function (changeRecord) {
	        this.partsInCartLookup = partsInCartLookupSelector(changeRecord);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], PartsView.prototype, "parts", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], PartsView.prototype, "partsInCart", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], PartsView.prototype, "addToCart", void 0);
	    PartsView = __decorate([
	        core_1.Component({
	            selector: 'parts',
	            template: "\n        <table>\n            <tr *ngFor=\"#part of parts\">\n                <td>\n                    <button style=\"margin-right:10px;margin-bottom:3px;margin-top:3px\"\n                        [disabled]=\"partsInCartLookup[part.id]\"\n                        (click)=\"addToCart.next(part.id)\">add\n                    </button>\n                </td>\n                <td>{{part.name}}</td>\n            </tr>\n        </table>\n    ",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PartsView);
	    return PartsView;
	})();
	exports.PartsView = PartsView;


/***/ },
/* 692 */
[914, 195, 128, 691, 687, 685, 127],
/* 693 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var UserView = (function () {
	    function UserView() {
	        this.data = {};
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], UserView.prototype, "data", void 0);
	    UserView = __decorate([
	        core_1.Component({
	            selector: 'user',
	            template: "\n        <form *ngIf=\"data\" class=\"form\">\n            <div class=\"form-group\">\n                <span>Name:</span><label>{{data.name}}</label>\n            </div>\n            <div class=\"form-group\">\n                <span>Hair:</span><label>{{data.hair_color}}</label>\n            </div>\n            <div class=\"form-group\">\n                <span>Gender:</span><label>{{data.gender}}</label>\n            </div>\n            <div class=\"form-group\">\n                <span>Eyes:</span><label>{{data.eye_color}}</label>\n            </div>\n        </form>\n    ",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], UserView);
	    return UserView;
	})();
	exports.UserView = UserView;


/***/ },
/* 694 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Simplelist_1 = __webpack_require__(205);
	var UsersView = (function () {
	    function UsersView() {
	        this.data = {};
	        this.current = new core_1.EventEmitter();
	    }
	    UsersView.prototype.getContent = function (user) { return user.name; };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], UsersView.prototype, "data", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], UsersView.prototype, "current", void 0);
	    UsersView = __decorate([
	        core_1.Component({
	            selector: 'users',
	            template: "\n        <simple-list\n            [list]=\"data\"\n            [content]=\"getContent\"\n            (current)=\"current.next($event)\"></simple-list>\n    ",
	            directives: [Simplelist_1.SimpleList],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], UsersView);
	    return UsersView;
	})();
	exports.UsersView = UsersView;


/***/ },
/* 695 */
[915, 195],
/* 696 */
[916, 196],
/* 697 */
[917, 128],
/* 698 */
[918, 128, 697],
/* 699 */
[919, 197],
/* 700 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var router_2 = __webpack_require__(14);
	var Newsboard_1 = __webpack_require__(704);
	var http_1 = __webpack_require__(17);
	var Menu_1 = __webpack_require__(64);
	var MenuItem_1 = __webpack_require__(90);
	var CommBroker_1 = __webpack_require__(7);
	var Conts_1 = __webpack_require__(11);
	var Sliderpanel_1 = __webpack_require__(16);
	var Digg_1 = __webpack_require__(135);
	var tabs_1 = __webpack_require__(91);
	var tab_1 = __webpack_require__(137);
	var Logout_1 = __webpack_require__(89);
	var Settings_1 = __webpack_require__(728);
	var Help_1 = __webpack_require__(702);
	var Todo1_1 = __webpack_require__(729);
	var Todo2_1 = __webpack_require__(730);
	var Todolist_1 = __webpack_require__(731);
	var Todoitem_1 = __webpack_require__(322);
	var TodoStatsModel_1 = __webpack_require__(131);
	var RefreshTheme_1 = __webpack_require__(28);
	var Notes_1 = __webpack_require__(720);
	var Notes1_1 = __webpack_require__(721);
	var Notes2_1 = __webpack_require__(723);
	var Notes3_1 = __webpack_require__(724);
	var Notes4_1 = __webpack_require__(725);
	var Notes5_1 = __webpack_require__(726);
	var Contact_1 = __webpack_require__(701);
	var DividerPanel_1 = __webpack_require__(136);
	var ModalDialog_1 = __webpack_require__(36);
	var Properties_1 = __webpack_require__(727);
	var Weather_1 = __webpack_require__(733);
	var App6 = (function (_super) {
	    __extends(App6, _super);
	    function App6(params, commBroker, Consts) {
	        _super.call(this);
	        var self = this;
	        jQuery('.navbar-nav').css({
	            display: 'block'
	        });
	        self.commBroker = commBroker;
	        self.screens = {
	            todos: true,
	            pouchmessages: false
	        };
	        self.listenMenuChanges();
	    }
	    App6.prototype.listenMenuChanges = function () {
	        var self = this;
	        self.commBroker.onEvent(Conts_1.Consts.Events().MENU_SELECTION).subscribe(function (e) {
	            var screen = (e.message).toLowerCase();
	            if (!self.screens.hasOwnProperty(screen)) {
	                console.log('no screen by the name of ' + screen);
	                return;
	            }
	            for (var screen_1 in self.screens)
	                self.screens[screen_1] = false;
	            self.screens[screen] = true;
	        });
	    };
	    App6 = __decorate([
	        core_1.Component({
	            providers: [http_1.HTTP_PROVIDERS, TodoStatsModel_1.default],
	            template: __webpack_require__(449),
	            directives: [
	                router_1.ROUTER_DIRECTIVES, router_2.RouterLink,
	                Newsboard_1.Newsboard,
	                Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, Properties_1.Properties,
	                Todo1_1.Todo1, Todo2_1.Todo2, Todolist_1.TodoList, Todoitem_1.TodoItem, Logout_1.Logout, Settings_1.Settings, Help_1.Help, tabs_1.Tabs, tab_1.Tab,
	                DividerPanel_1.DividerPanel,
	                Notes_1.Notes, Notes1_1.Notes1, Notes2_1.Notes2, Notes3_1.Notes3, Notes4_1.Notes4, Notes5_1.Notes5, Weather_1.Weather, Logout_1.Logout, Contact_1.Contact, ModalDialog_1.ModalDialog
	            ]
	        }), 
	        __metadata('design:paramtypes', [router_2.RouteParams, CommBroker_1.CommBroker, Conts_1.Consts])
	    ], App6);
	    return App6;
	})(RefreshTheme_1.RefreshTheme);
	exports.App6 = App6;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 701 */
671,
/* 702 */
[904, 703],
/* 703 */
662,
/* 704 */
[920, 718, 715, 716, 719, 712, 130, 198, 129, 706, 710, 200, 199, 451],
/* 705 */
685,
/* 706 */
[921, 200, 714, 713, 129, 450],
/* 707 */
687,
/* 708 */
688,
/* 709 */
689,
/* 710 */
[913, 199, 708, 709, 129],
/* 711 */
691,
/* 712 */
[914, 198, 130, 711, 707, 705, 129],
/* 713 */
693,
/* 714 */
694,
/* 715 */
[915, 198],
/* 716 */
[916, 199],
/* 717 */
[917, 130],
/* 718 */
[918, 130, 717],
/* 719 */
[919, 200],
/* 720 */
672,
/* 721 */
[922, 87, 436, 452],
/* 722 */
674,
/* 723 */
[907, 87],
/* 724 */
[908, 87],
/* 725 */
[909, 87],
/* 726 */
[910, 87],
/* 727 */
[911, 722],
/* 728 */
666,
/* 729 */
667,
/* 730 */
[905, 131, 437],
/* 731 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var TodoRemote_1 = __webpack_require__(321);
	var TodoStatsModel_1 = __webpack_require__(131);
	var Todoitem_1 = __webpack_require__(322);
	var Conts_1 = __webpack_require__(11);
	var TodoList = (function () {
	    function TodoList(todoService, todoStatModel, zone) {
	        this.todoService = todoService;
	        this.todoStatModel = todoStatModel;
	        this.zone = zone;
	        this.newItem = '';
	        this.m_dataStore = todoService.getDataStore();
	        this.todoStatModel = todoStatModel;
	        this.fatalError = false;
	        this.a = 0;
	        this.explorer = {};
	        this.imageSource = "";
	        this.scannerResponse = "";
	        var vm = this;
	        var collection = {
	            "collectionUrl": "todos",
	            "docs": []
	        };
	        var PouchDB = Conts_1.Consts.Services().PouchDB;
	        this.db = new PouchDB(collection.collectionUrl, {
	            size: 4096,
	            skip_setup: true,
	            create_target: true,
	            revs_limit: 0,
	            adapter: 'websql'
	        });
	        vm.createDesignDocs();
	        function addChild(item) {
	            collection.docs.push(item);
	        }
	        function updateChild(item) {
	            console.log("got item");
	        }
	        function xxx_updateChild(item) {
	            _.each(collection.docs, function (value, key) {
	                if (collection.docs[key]['_id'] == item._id) {
	                    collection.docs[key] = item;
	                }
	            });
	        }
	        function removeChild(change) {
	            collection.docs = _.reject(collection.docs, function (doc) {
	                return doc._id == change.id;
	            });
	        }
	    }
	    TodoList.prototype.ngAfterContentInit = function () {
	        var vm = this;
	        vm.logmsg("ngOnInit() { ... ");
	        vm.registerScanner()
	            .then(function (result) {
	            vm.logmsg("SCANNER INITIALIZED");
	            vm.logerr(result);
	        }, function () {
	            vm.logmsg("Native functions are not active!");
	        });
	    };
	    TodoList.prototype.initializeScanner = function () {
	        var vm = this;
	        vm.logmsg("initializeScanner() { ... ");
	        function scanSuccess(response) {
	            var vm = this;
	            vm.logmsg("function scanSuccess(response) { ... ");
	            vm.logmsg("got a barcode scanner response!");
	            vm.logmsg("filling global scan variable with value:");
	            vm.logmsg(response);
	        }
	        function scanError(error) {
	            var vm = this;
	            vm.logmsg("failed to register barcode scanner");
	            vm.logerr(error);
	        }
	        vm.logerr("window.bluebirdBarcodeScanner");
	        vm.logerr(window.bluebirdBarcodeScanner);
	        vm.logmsg("trying to initialize barcode scanner");
	        try {
	            window.bluebirdBarcodeScanner.register(scanSuccess, scanError);
	        }
	        catch (err) {
	            vm.logmsg("Error: An unknown error occured during scanner registration. Probably you are using a not compatible device.");
	            vm.logerr(err);
	        }
	    };
	    TodoList.prototype.registerScanner = function () {
	        var vm = this;
	        vm.logmsg("registerScanner() { ... ");
	        return new Promise(function (resolve, reject) {
	            if (window.bluebirdBarcodeScanner) {
	                vm.logmsg("trying to initialize barcode scanner");
	                try {
	                    var scannerRegistration = window.bluebirdBarcodeScanner.register(function (response) {
	                        vm.logmsg("function scanSuccess(response) { ... ");
	                        vm.logmsg("got a barcode scanner response!");
	                        vm.logmsg("filling global scan variable with value:");
	                        vm.logmsg(response);
	                        vm.zone.run(function () {
	                            vm.logmsg("adding a new response");
	                            vm.logerr(response);
	                            vm.addItemIndividual(response);
	                        });
	                    }, function (error) {
	                        vm.logmsg("failed to register barcode scanner");
	                        vm.logerr(error);
	                    });
	                    vm.logmsg("scannerRegistration");
	                    vm.logerr(scannerRegistration);
	                    resolve(scannerRegistration);
	                }
	                catch (err) {
	                    reject(err);
	                }
	            }
	            else {
	                reject("Error: An unknown error occured during scanner registration.");
	            }
	        });
	    };
	    ;
	    TodoList.prototype.startSoftScan = function (inp) {
	        var vm = this;
	        vm.logmsg("startSoftScan() { ... ");
	        vm.logmsg("inp");
	        vm.logerr(inp);
	        return new Promise(function (resolve, reject) {
	            if (window.bluebirdBarcodeScanner) {
	                vm.logmsg("softScanOn triggered");
	                window.bluebirdBarcodeScanner.softScanOn(function (response) {
	                    vm.logmsg("function scanSuccess(response) { ... ");
	                    vm.logmsg("got a barcode scanner response!");
	                    vm.logmsg("filling global scan variable with value:");
	                    vm.logmsg(response);
	                    resolve();
	                }, function (error) {
	                    vm.logmsg("failed to register barcode scanner");
	                    vm.logerr(error);
	                    reject("Error: Could not access the window.bluebirdBarcodeScanner object.");
	                });
	            }
	            else {
	                reject("Error: Could not access the window.bluebirdBarcodeScanner object.");
	            }
	        });
	    };
	    TodoList.prototype.isNativeDevice = function () {
	        var vm = this;
	        vm.logmsg("isNativeDevice() { ... ");
	        return !!window.cordova;
	    };
	    TodoList.prototype.registerAndScan = function () {
	        var vm = this;
	        vm.logmsg("registerAndScan() { ... ");
	        if (!!window.cordova == false) {
	            alert("Error: Native functions not existing.");
	            return false;
	        }
	        vm.registerScanner()
	            .then(function (response) {
	            vm.logmsg("response");
	            vm.logerr(response);
	            return vm.startSoftScan(response);
	        })
	            .then(function (result) {
	            vm.logmsg("resolve from softScanOn triggered");
	            vm.logmsg("result");
	            vm.logerr(result);
	            vm.logmsg("vm.scannerResponse");
	            vm.logmsg(vm.scannerResponse);
	        }, function (error) {
	            vm.logmsg("Fehler bei der Aktivierung des Scanners!");
	            vm.logerr(error);
	        });
	    };
	    TodoList.prototype.logmsg = function (msg) {
	        var vm = this;
	        document.getElementById('debugging').innerHTML += "<br/>" + msg;
	    };
	    TodoList.prototype.logerr = function (error) {
	        var vm = this;
	        vm.logmsg(JSON.stringify(error));
	    };
	    TodoList.prototype.writeToFile = function (fileName, fileContent) {
	        var vm = this;
	        vm.logerr("window.cordova.file");
	        vm.logerr(window.cordova.file);
	        window.resolveLocalFileSystemURL(window.cordova.file.externalDataDirectory, function (directoryEntry) {
	            directoryEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {
	                fileEntry.createWriter(function (fileWriter) {
	                    fileWriter.onwriteend = function (e) {
	                        vm.logmsg('Write of ' + fileContent + ' to file "' + fileName + '"" completed.');
	                    };
	                    fileWriter.onwrite = function (e) {
	                        vm.logmsg('Write of ' + fileContent + ' to file "' + fileName + '"" completed.');
	                    };
	                    fileWriter.onerror = function (e) {
	                        vm.logmsg('Write failed: ' + e.toString());
	                    };
	                    fileWriter.write(fileContent);
	                }, vm.logerr);
	            }, vm.logerr);
	        }, vm.logerr);
	    };
	    TodoList.prototype.exportDatabase = function (dbname) {
	        var vm = this;
	        var dbid = dbname + '.db';
	        var fileName = dbname + '.txt';
	        var db = window.sqlitePlugin.openDatabase({ name: dbid });
	        var successFn = function (jsonObj, cnt) {
	            window.plugins.spinnerDialog.hide();
	            vm.logmsg("Exported JSON will contain equivalent of " + cnt + " JSON statements");
	            vm.writeToFile(fileName, JSON.stringify(jsonObj));
	        };
	        window.plugins.spinnerDialog.show(null, null, true);
	        window.cordova.plugins.sqlitePorter.exportDbToJson(db, {
	            successFn: successFn
	        });
	    };
	    TodoList.prototype.readFileContent = function (filename) {
	        var vm = this;
	        vm.logmsg("readFileContent(filename) {");
	        vm.logmsg("filename: " + filename);
	        window.requestFileSystem(window.LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
	            var reader = new XMLHttpRequest();
	            reader.open('GET', window.cordova.file.externalDataDirectory + filename);
	            reader.onreadystatechange = function (evt) {
	                if (reader.readyState == 4 && reader.status == 200) {
	                    vm.logmsg("CONTENT SUCCESSFULLY READEN, COUNTED ELEMENTs: ");
	                    vm.logmsg(_.size(JSON.parse(reader.responseText)));
	                }
	                else {
	                    vm.logmsg("ERROR! Could not finish the XMLHttpRequest request!!!");
	                    vm.logerr(reader);
	                }
	            };
	            reader.send();
	        }, vm.logerr);
	    };
	    TodoList.prototype.createDirectory = function (dirName) {
	        var vm = this;
	        window.requestFileSystem(window.LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
	            var newDir = fileSystem.root.getDirectory(dirName, { create: true, exclusive: true });
	        }, function (evt) {
	            vm.logmsg("evt");
	            vm.logerr(evt);
	            vm.logmsg("File System Error: " + JSON.stringify(evt.target.error));
	        });
	    };
	    TodoList.prototype.changeImageSource = function (imageSource) {
	        var vm = this;
	        vm.logmsg("changeImageSource(imageSource) { ... ");
	        vm.zone.run(function () {
	            vm.imageSource = imageSource;
	        });
	    };
	    TodoList.prototype.syncFile = function (filePathOnline, fileId) {
	        var vm = this;
	        vm.logmsg("syncFile(filePathOnline, fileId) {");
	        vm.logmsg(filePathOnline);
	        vm.logmsg(fileId);
	        window.resolveLocalFileSystemURL(window.cordova.file.externalDataDirectory, function (directoryEntry) {
	            directoryEntry.getFile(fileId, { create: true, exclusive: false }, function (fileEntry) {
	                var fileTransfer = new FileTransfer();
	                var uri = encodeURI(filePathOnline);
	                var fileURL = fileEntry.toURL();
	                fileTransfer.download(uri, fileURL, function (entry) {
	                    vm.logerr(entry);
	                    vm.logmsg("download complete: " + entry.toURI());
	                    vm.changeImageSource(entry.toURL());
	                }, function (error) {
	                    vm.logerr(error);
	                    vm.logmsg("download error source " + error.source);
	                    vm.logmsg("download error target " + error.target);
	                    vm.logmsg("download error code" + error.code);
	                }, true, {});
	            }, vm.logerr);
	        }, vm.logerr);
	    };
	    TodoList.prototype.createDesignDocs = function () {
	        var vm = this;
	        var ddoc = {
	            _id: '_design/by_index',
	            views: {
	                by_id: {
	                    map: function (doc) { emit(doc._id); }.toString()
	                }
	            }
	        };
	        vm.db.put(ddoc)
	            .then(function (result) {
	            console.log("result");
	            console.log(result);
	            vm.zone.run(function () {
	                vm.todoStatModel.status = "DesignDocs created";
	                vm.todoStatModel.storesizes = result;
	            });
	        })
	            .catch(function (err) {
	            console.log("some error (maybe a 409, because it already exists?)");
	            console.log(err);
	            vm.zone.run(function () {
	                vm.todoStatModel.status = "DesignDocs created";
	                vm.todoStatModel.storesizes = err;
	            });
	        });
	    };
	    TodoList.prototype.$add = function (item) {
	        var vm = this;
	        var idx = Math.round(Math.random() * 1000);
	        var item_new = _.extend(_.clone(item), {
	            "_id": idx + "" + Math.random()
	        });
	        vm.db.put(item_new)
	            .then(function (res) {
	        }, function (err) {
	            console.log("err woei843u94");
	            console.log(err);
	            vm.fatalError = true;
	            vm.zone.run(function () {
	                vm.todoStatModel.storesizes = err;
	            });
	        })
	            .catch(function (err) {
	            console.log("err 86io89743r523r");
	            console.log(err);
	            vm.fatalError = true;
	            vm.zone.run(function () {
	                vm.todoStatModel.storesizes = err;
	            });
	        });
	    };
	    ;
	    TodoList.prototype.onFatalError = function () {
	        console.log("vm.fatalError detected !!!");
	    };
	    TodoList.prototype.countPouchObjects = function () {
	        var vm = this;
	        console.log("countPouchObjects() { ... ");
	        console.log("a: " + vm.a);
	        var timeInMsA = new Date().getTime();
	        vm.zone.run(function () {
	            vm.todoStatModel.status = "counting...";
	        });
	        var myMapReduceFun = {
	            map: function (doc) { emit(doc._id); }.toString(),
	            reduce: '_count'
	        };
	        vm.db.query(myMapReduceFun, {
	            limit: 1,
	            reduce: true,
	            group: true,
	            stale: 'ok'
	        })
	            .then(function (result) {
	            console.log("result");
	            console.log(result);
	            console.log("result myMapReduceFun");
	            var timeInMsB = new Date().getTime();
	            console.log(">>>>>>>>>>> timeInMsB: " + (timeInMsB - timeInMsA));
	            var diff = (timeInMsB - timeInMsA);
	            vm.zone.run(function () {
	                console.log("result myMapReduceFun IN ZONE");
	                vm.todoStatModel.status = "ready!";
	                var qty = _.size(result.rows);
	                console.log("qty: " + _.size(result.rows));
	                vm.todoStatModel.qty = _.size(result.rows);
	                vm.todoStatModel.query_duration = diff;
	                vm.todoStatModel.storesizes = result;
	            });
	        })
	            .catch(function (err) {
	            console.log("err");
	            console.log(err);
	        });
	    };
	    TodoList.prototype.findPouchObjects = function () {
	        var vm = this;
	        console.log("findOnePouchObject() { ... ");
	        var timeInMsA = new Date().getTime();
	        vm.zone.run(function () {
	            vm.todoStatModel.status = "finding 10 documents vie db.query having string 100 in itself: ";
	        });
	        var myMapReduceFun = {
	            map: function (doc) { if ((doc._id).indexOf('100') > -1)
	                emit(doc._id); }.toString(),
	        };
	        vm.db.query(myMapReduceFun, {
	            limit: 10,
	            include_docs: true,
	            stale: 'ok'
	        })
	            .then(function (result) {
	            console.log("result");
	            console.log(result);
	            console.log("result myMapReduceFun");
	            var timeInMsB = new Date().getTime();
	            console.log(">>>>>>>>>>> timeInMsB: " + (timeInMsB - timeInMsA));
	            var diff = (timeInMsB - timeInMsA);
	            vm.zone.run(function () {
	                console.log("result myMapReduceFun IN ZONE");
	                var qty = _.size(result.rows);
	                console.log("qty: " + _.size(result.rows));
	                vm.todoStatModel.qty = _.size(result.rows);
	                vm.todoStatModel.query_duration = diff;
	                vm.todoStatModel.storesizes = result;
	            });
	        })
	            .catch(function (err) {
	            console.log("err");
	            console.log(err);
	        });
	    };
	    TodoList.prototype.findPouchObjectsByAllDocs = function () {
	        var vm = this;
	        vm.zone.run(function () {
	            vm.todoStatModel.status = "findPouchObjectsByAllDocs() { ...";
	        });
	        var timeInMsA = new Date().getTime();
	        vm.db.allDocs({
	            limit: 10,
	            include_docs: true,
	            stale: "ok"
	        })
	            .then(function (result) {
	            console.log("result allDocs - 9w834z9rw");
	            console.log(result);
	            vm.zone.run(function () {
	                var timeInMsB = new Date().getTime();
	                var diff = (timeInMsB - timeInMsA);
	                vm.todoStatModel.query_duration = diff;
	                vm.todoStatModel.storesizes = result;
	            });
	        }, function (err) {
	            console.log("err 1193z92iodjeu");
	            console.log(err);
	        })
	            .catch(function (err) {
	            console.log("err");
	            console.log(err);
	        });
	    };
	    TodoList.prototype.getPouchObjectsById = function () {
	        var vm = this;
	        vm.zone.run(function () {
	            vm.todoStatModel.status = "getPouchObjectsById() { ...";
	        });
	        var timeInMsA = new Date().getTime();
	        vm.db.allDocs({
	            keys: [
	                '00.1602300873491913',
	                '00.7026701082941145'
	            ],
	            include_docs: true,
	            limit: 10,
	            stale: "ok"
	        })
	            .then(function (result) {
	            console.log("result allDocs - 9w834z9rw");
	            console.log(result);
	            vm.zone.run(function () {
	                var timeInMsB = new Date().getTime();
	                var diff = (timeInMsB - timeInMsA);
	                vm.todoStatModel.query_duration = diff;
	                vm.todoStatModel.storesizes = result;
	            });
	        }, function (err) {
	            console.log("err 1193z92iodjeu");
	            console.log(err);
	            vm.todoStatModel.storesizes = err;
	        })
	            .catch(function (err) {
	            console.log("err");
	            console.log(err);
	            vm.todoStatModel.storesizes = err;
	        });
	    };
	    TodoList.prototype.addItems = function () {
	        var vm = this;
	        vm.startAddingLoop();
	    };
	    TodoList.prototype.db_info = function () {
	        var vm = this;
	        console.log(vm.db);
	        var timeInMsA = new Date().getTime();
	        vm.db.info()
	            .then(function (response) {
	            console.log("response info - iwurui93984r");
	            console.log(response);
	            vm.zone.run(function () {
	                vm.todoStatModel.db_info = response;
	                var timeInMsB = new Date().getTime();
	                var diff = (timeInMsB - timeInMsA);
	                vm.todoStatModel.query_duration = diff;
	            });
	        }, function (err) {
	            console.log("err 1193z92iodjeu");
	            console.log(err);
	            vm.zone.run(function () {
	                vm.todoStatModel.db_info = err;
	                var timeInMsB = new Date().getTime();
	                var diff = (timeInMsB - timeInMsA);
	                vm.todoStatModel.query_duration = diff;
	            });
	        })
	            .catch(function (err) {
	            console.log("err");
	            console.log(err);
	            vm.zone.run(function () {
	                vm.todoStatModel.db_info = err;
	                var timeInMsB = new Date().getTime();
	                var diff = (timeInMsB - timeInMsA);
	                vm.todoStatModel.query_duration = diff;
	            });
	        });
	    };
	    TodoList.prototype.startAddingLoop = function () {
	        var vm = this;
	        vm.a = 0;
	        var addNewItemLoop = function () {
	            console.log("vvvvvvvvvvvvvvvvvvvvvvvv adding...");
	            vm.zone.run(function () {
	                vm.todoStatModel.status = "adding element: " + (vm.a);
	            });
	            vm.a++;
	            if (vm.a >= 2) {
	                console.log("finished adding");
	                vm.zone.run(function () {
	                    vm.todoStatModel.status = "finished adding: " + (vm.a);
	                });
	                return false;
	            }
	            else {
	                vm.zone.run(function () {
	                    vm.todoStatModel.status = "step adding: " + (vm.a * 499);
	                });
	            }
	            var newItem = {};
	            var newItems = [];
	            for (var i = 0; i < 499; i++) {
	                var random_num = Math.random();
	                var idx = Math.round(Math.random() * 1000);
	                var newItem = _.extend(_.clone(newItem), {
	                    "_id": i + "" + idx + "" + Math.random(),
	                    "doctype": "todo",
	                    "random_number": "" + Math.random(),
	                    "cpr_id": 1687886271,
	                    "cpr_kund_id": 547,
	                    "cpr_prod_id": 44737,
	                    "cpr_vmi_active": 4,
	                    "cpr_prod_vmi_active_changed": 0,
	                    "cpr_kund_vmi_active_changed": 0,
	                    "cpr_fieldstaff_visible": null,
	                    "cpr_listing_sales": "default",
	                    "cpr_listing_rma": "default",
	                    "cpr_listing_warranty": "default",
	                    "cpr_cust_sku_no": null,
	                    "cpr_pcg_id": null,
	                    "cpr_qty_brick": 0,
	                    "cpr_qty_min": 0,
	                    "cpr_qty_quota": 0,
	                    "cpr_qty_quota_threshold": 0,
	                    "cpr_qty_backorder": 0,
	                    "cpr_qty_next_days_order": 0,
	                    "cpr_qty_reserved": 0,
	                    "cpr_qty_in_delivery": 0,
	                    "cpr_qty_demand": 0,
	                    "cpr_qty_open_orders": 0,
	                    "cpr_sales_value_backordered": 0.00,
	                    "cpr_sales_value_preordered_short_term": 0.00,
	                    "cpr_sales_value_preordered_long_term": 0.00,
	                    "cpr_sales_value_reserved": 0.00,
	                    "cpr_sales_value_in_delivery": 0.00,
	                    "cpr_stockreport_plausible": 2,
	                    "cpr_stockreport_get_data": 0,
	                    "cpr_stockreport_date": "2016-02-09",
	                    "cpr_stockreport_age": null,
	                    "cpr_stockreport_qty_on_stock": 1,
	                    "cpr_stockreport_qty_on_stock_offset": 0,
	                    "cpr_stockreport_qty_on_stock_status_date": "2016-02-09",
	                    "cpr_stock_coverage": 999.0,
	                    "cpr_stockreport_qty_backorder": 0,
	                    "cpr_stockreport_actual_grp": null,
	                    "cpr_stockreport_qty_min": 0,
	                    "cpr_stockreport_qty_max": 0,
	                    "cpr_stockreport_sellout_7d": 0,
	                    "cpr_stockreport_sellout_30d": 0,
	                    "cpr_stockreport_sellout_61d": 0,
	                    "cpr_stockreport_sellout_91d": 0,
	                    "cpr_stockreport_sellout_183d": 0,
	                    "cpr_stockreport_sellout_365d": 0,
	                    "cpr_stockreport_qty_on_stock_aged_91d": 1,
	                    "cpr_stockreport_qty_on_stock_aged_183d": 1,
	                    "cpr_stockreport_qty_on_stock_aged_365d": 1,
	                    "cpr_stockreport_qty_on_stock_aged_91_to_183d": 0,
	                    "cpr_stockreport_qty_on_stock_aged_183_to_365d": 0,
	                    "cpr_sellin_7d": 0,
	                    "cpr_sellin_30d": 0,
	                    "cpr_sellin_61d": 0,
	                    "cpr_sellin_91d": 0,
	                    "cpr_sellin_183d": 0,
	                    "cpr_sellin_365d": 0,
	                    "cpr_sellin_7d_credit_cleaned": 0,
	                    "cpr_sellin_30d_credit_cleaned": 0,
	                    "cpr_sellin_61d_credit_cleaned": 0,
	                    "cpr_sellin_91d_credit_cleaned": 0,
	                    "cpr_sellin_183d_credit_cleaned": 0,
	                    "cpr_sellin_365d_credit_cleaned": 0,
	                    "cpr_sellin_value_before_cn_deduction_30d": 0.00,
	                    "cpr_sellin_value_before_cn_deduction_61d": 0.00,
	                    "cpr_sellin_value_before_cn_deduction_91d": 0.00,
	                    "cpr_sellin_value_before_cn_deduction_183d": 0.00,
	                    "cpr_sellin_value_before_cn_deduction_365d": 0.00,
	                    "cpr_sellin_value_after_cn_deduction_30d": 0.00,
	                    "cpr_sellin_value_after_cn_deduction_61d": 0.00,
	                    "cpr_sellin_value_after_cn_deduction_91d": 0.00,
	                    "cpr_sellin_value_after_cn_deduction_183d": 0.00,
	                    "cpr_sellin_value_after_cn_deduction_365d": 0.00,
	                    "cpr_return_qty_30d": 0,
	                    "cpr_return_qty_61d": 0,
	                    "cpr_return_qty_91d": 0,
	                    "cpr_return_qty_183d": 0,
	                    "cpr_return_qty_365d": 0,
	                    "cpr_return_qty_goodwill_365d": 0,
	                    "cpr_return_qty_reclamation_365d": 0,
	                    "cpr_return_open_rma_qty": 0,
	                    "cpr_return_value_30d": 0.00,
	                    "cpr_return_value_61d": 0.00,
	                    "cpr_return_value_91d": 0.00,
	                    "cpr_return_value_183d": 0.00,
	                    "cpr_return_value_365d": 0.00,
	                    "cpr_last_vmi_order_creation": null,
	                    "cpr_last_vmi_o_c_sicherung": null,
	                    "cpr_last_delivery_date": null,
	                    "cpr_last_delivery_qty": 0,
	                    "cpr_last_delivery_price": null,
	                    "cpr_last_delivery_effective_price": null,
	                    "cpr_last_delivery_grp": null,
	                    "cpr_receipt_line_note_default": "",
	                    "cpr_data_status": "2016-02-10 08:40:59"
	                });
	                newItems.push(newItem);
	            }
	            vm.db.bulkDocs(newItems, function (err, res) {
	                console.log("vm.db.bulkDocs(newItems, function(err, res) { ... ");
	                if (err != undefined) {
	                    console.log("err uh78934ft589");
	                    console.log(err);
	                    vm.zone.run(function () {
	                        vm.todoStatModel.qty = (vm.a * 499) + i + 3;
	                        vm.todoStatModel.status = "bulkDocs error";
	                        vm.todoStatModel.storesizes = err;
	                    });
	                    return false;
	                }
	                setTimeout(function () {
	                    addNewItemLoop();
	                }, 10);
	            });
	        };
	        addNewItemLoop();
	    };
	    TodoList.prototype.getProductByBarcode = function (tx, valueObject, cbFunctionSuccess, cbFunctionError) {
	        console.log("getProductByBarcode(tx, valueObject, cbFunctionSuccess, cbFunctionError) { ... ");
	        var vm = this;
	        tx.executeSql("SELECT batch_gtin FROM `batch.db`.batch WHERE 1 AND batch_gtin LIKE ('%" + valueObject.barcode + "%') LIMIT 1", [], cbFunctionSuccess, cbFunctionError);
	    };
	    TodoList.prototype.goSearch = function (dbname, valueObject) {
	        console.log("goSearch(dbname, valueObject) { ... ");
	        var vm = this;
	        var db = window.sqlitePlugin.openDatabase("batch.db");
	        db.transaction(function (tx) {
	            vm.getProductByBarcode(tx, valueObject, function (tx, responseSuccess) {
	                console.log("tx");
	                console.log(JSON.stringify(tx));
	                console.log("responseSuccess");
	                console.log(JSON.stringify(responseSuccess));
	                vm.zone.run(function () {
	                    vm.todoStatModel.qty = _.size(responseSuccess.rows);
	                    var len = responseSuccess.rows.length;
	                    for (var i = 0; i < len; i++) {
	                        vm.todoStatModel.product_info = responseSuccess.rows.item(i);
	                    }
	                });
	            }, function (tx, responseError) {
	                console.log("tx");
	                console.log(JSON.stringify(tx));
	                console.log("responseError");
	                console.log(JSON.stringify(responseError));
	                vm.zone.run(function () {
	                    console.log('ERROR! Could not execute the SQL statement!');
	                    vm.todoStatModel.status = "Code " + responseError.code + ": " + responseError.message;
	                });
	            });
	        }, vm.logerr);
	    };
	    TodoList.prototype.openBarcodeScanner = function () {
	        var vm = this;
	        try {
	            window.cordova.plugins.barcodeScanner.scan(function (result) {
	                vm.zone.run(function () {
	                    vm.todoStatModel.barcode_scanner_info = result;
	                });
	                vm.goSearch("batch.db", { "barcode": (result.text) });
	            }, function (error) {
	                vm.zone.run(function () {
	                    vm.todoStatModel.barcode_scanner_info = error;
	                });
	            });
	        }
	        catch (err) {
	            console.log(err);
	            vm.zone.run(function () {
	                vm.todoStatModel.barcode_scanner_info = err;
	            });
	            alert("error cdrt54e62r36d36");
	            alert(err);
	        }
	    };
	    TodoList.prototype.addItemIndividual = function (item) {
	        var vm = this;
	        vm.todoService.addItem(item);
	    };
	    TodoList.prototype.addItem = function () {
	        if (this.newItem.length == 0) {
	            return;
	        }
	        this.todoService.addItem(this.newItem);
	        this.newItem = '';
	    };
	    TodoList.prototype.removeItem = function (item) {
	        this.todoService.removeItem(item);
	    };
	    TodoList.prototype.editItem = function (item) {
	        this.todoService.editItem(item);
	    };
	    TodoList = __decorate([
	        core_1.Component({
	            selector: 'todo-list',
	            template: __webpack_require__(454),
	            styles: [__webpack_require__(439)],
	            directives: [Todoitem_1.TodoItem],
	            providers: [TodoRemote_1.TodosService]
	        }), 
	        __metadata('design:paramtypes', [TodoRemote_1.TodosService, TodoStatsModel_1.default, core_1.NgZone])
	    ], TodoList);
	    return TodoList;
	})();
	exports.TodoList = TodoList;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ },
/* 732 */
680,
/* 733 */
[912, 734, 732],
/* 734 */
682,
/* 735 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var router_2 = __webpack_require__(14);
	var Newsboard_1 = __webpack_require__(739);
	var http_1 = __webpack_require__(17);
	var Menu_1 = __webpack_require__(64);
	var MenuItem_1 = __webpack_require__(90);
	var CommBroker_1 = __webpack_require__(7);
	var Conts_1 = __webpack_require__(11);
	var Sliderpanel_1 = __webpack_require__(16);
	var Digg_1 = __webpack_require__(135);
	var tabs_1 = __webpack_require__(91);
	var tab_1 = __webpack_require__(137);
	var Logout_1 = __webpack_require__(89);
	var Settings_1 = __webpack_require__(763);
	var Help_1 = __webpack_require__(737);
	var Todo1_1 = __webpack_require__(764);
	var Todo2_1 = __webpack_require__(765);
	var Todolist_1 = __webpack_require__(766);
	var Todoitem_1 = __webpack_require__(324);
	var TodoStatsModel_1 = __webpack_require__(134);
	var RefreshTheme_1 = __webpack_require__(28);
	var Notes_1 = __webpack_require__(755);
	var Notes1_1 = __webpack_require__(756);
	var Notes2_1 = __webpack_require__(758);
	var Notes3_1 = __webpack_require__(759);
	var Notes4_1 = __webpack_require__(760);
	var Notes5_1 = __webpack_require__(761);
	var Contact_1 = __webpack_require__(736);
	var DividerPanel_1 = __webpack_require__(136);
	var ModalDialog_1 = __webpack_require__(36);
	var Properties_1 = __webpack_require__(762);
	var Weather_1 = __webpack_require__(768);
	var App7 = (function (_super) {
	    __extends(App7, _super);
	    function App7(params, commBroker, Consts) {
	        _super.call(this);
	        var self = this;
	        jQuery('.navbar-nav').css({
	            display: 'block'
	        });
	        self.commBroker = commBroker;
	        self.screens = {
	            todos: true
	        };
	        self.listenMenuChanges();
	    }
	    App7.prototype.listenMenuChanges = function () {
	        var self = this;
	        self.commBroker.onEvent(Conts_1.Consts.Events().MENU_SELECTION).subscribe(function (e) {
	            var screen = (e.message).toLowerCase();
	            if (!self.screens.hasOwnProperty(screen)) {
	                console.log('no screen by the name of ' + screen);
	                return;
	            }
	            for (var screen_1 in self.screens)
	                self.screens[screen_1] = false;
	            self.screens[screen] = true;
	        });
	    };
	    App7 = __decorate([
	        core_1.Component({
	            providers: [http_1.HTTP_PROVIDERS, TodoStatsModel_1.default],
	            template: __webpack_require__(455),
	            directives: [
	                router_1.ROUTER_DIRECTIVES, router_2.RouterLink,
	                Newsboard_1.Newsboard,
	                Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, Properties_1.Properties,
	                Todo1_1.Todo1, Todo2_1.Todo2, Todolist_1.TodoList, Todoitem_1.TodoItem, Logout_1.Logout, Settings_1.Settings, Help_1.Help, tabs_1.Tabs, tab_1.Tab,
	                DividerPanel_1.DividerPanel,
	                Notes_1.Notes, Notes1_1.Notes1, Notes2_1.Notes2, Notes3_1.Notes3, Notes4_1.Notes4, Notes5_1.Notes5, Weather_1.Weather, Logout_1.Logout, Contact_1.Contact, ModalDialog_1.ModalDialog
	            ]
	        }), 
	        __metadata('design:paramtypes', [router_2.RouteParams, CommBroker_1.CommBroker, Conts_1.Consts])
	    ], App7);
	    return App7;
	})(RefreshTheme_1.RefreshTheme);
	exports.App7 = App7;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 736 */
671,
/* 737 */
[904, 738],
/* 738 */
662,
/* 739 */
[920, 753, 750, 751, 754, 747, 133, 201, 132, 741, 745, 203, 202, 457],
/* 740 */
685,
/* 741 */
[921, 203, 749, 748, 132, 456],
/* 742 */
687,
/* 743 */
688,
/* 744 */
689,
/* 745 */
[913, 202, 743, 744, 132],
/* 746 */
691,
/* 747 */
[914, 201, 133, 746, 742, 740, 132],
/* 748 */
693,
/* 749 */
694,
/* 750 */
[915, 201],
/* 751 */
[916, 202],
/* 752 */
[917, 133],
/* 753 */
[918, 133, 752],
/* 754 */
[919, 203],
/* 755 */
672,
/* 756 */
[922, 88, 440, 458],
/* 757 */
674,
/* 758 */
[907, 88],
/* 759 */
[908, 88],
/* 760 */
[909, 88],
/* 761 */
[910, 88],
/* 762 */
[911, 757],
/* 763 */
666,
/* 764 */
667,
/* 765 */
[905, 134, 441],
/* 766 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var TodoRemote_1 = __webpack_require__(323);
	var TodoStatsModel_1 = __webpack_require__(134);
	var Todoitem_1 = __webpack_require__(324);
	var TodoList = (function () {
	    function TodoList(todoService, todoStatModel, zone) {
	        this.todoService = todoService;
	        this.todoStatModel = todoStatModel;
	        this.zone = zone;
	        this.newItem = '';
	        this.m_dataStore = todoService.getDataStore();
	        this.todoStatModel = todoStatModel;
	        this.fatalError = false;
	        this.a = 0;
	        this.explorer = {};
	        this.imageSource = "";
	        this.scannerResponse = "";
	        var vm = this;
	        if (window.cordova) {
	            window.cordova.file.writeTextToFile = function (params, callback) {
	                window.resolveLocalFileSystemURL(params.path, function (dir) {
	                    dir.getFile(params.fileName, { create: true, exclusive: false }, function (file) {
	                        if (!file)
	                            return callback.error('dir.getFile failed');
	                        file.createWriter(function (fileWriter) {
	                            if (params.append == true)
	                                fileWriter.seek(fileWriter.length);
	                            var blob = new Blob(["thisisatesttext"], { type: 'text/plain' });
	                            fileWriter.write(blob);
	                            callback.success(file);
	                        }, function (error) {
	                            callback.error(error);
	                        });
	                    });
	                });
	            };
	        }
	        else {
	            vm.logmsg("Error: object window.cordova is not existing");
	        }
	    }
	    TodoList.prototype.logmsg = function (msg) {
	        var vm = this;
	        try {
	            document.getElementById('debugging').innerHTML += "<br/>" + msg;
	            console.log(msg);
	        }
	        catch (err) {
	            console.log(msg);
	        }
	    };
	    TodoList.prototype.logerr = function (error) {
	        var vm = this;
	        try {
	            vm.logmsg(JSON.stringify(error));
	        }
	        catch (err) {
	            vm.logmsg(err);
	        }
	    };
	    TodoList.prototype.writeToFile = function (fileName, fileContent) {
	        var vm = this;
	        if (window.cordova) {
	            window.resolveLocalFileSystemURL(window.cordova.file.externalDataDirectory, function (directoryEntry) {
	                directoryEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {
	                    fileEntry.createWriter(function (fileWriter) {
	                        fileWriter.onwriteend = function (e) {
	                            vm.logmsg('Write of ' + fileContent + ' to file "' + fileName + '"" completed.');
	                        };
	                        fileWriter.onwrite = function (e) {
	                            vm.logmsg('Write of ' + fileContent + ' to file "' + fileName + '"" completed.');
	                        };
	                        fileWriter.onerror = function (e) {
	                            vm.logmsg('Write failed: ' + e.toString());
	                        };
	                        fileWriter.write(fileContent);
	                    }, vm.logerr);
	                }, vm.logerr);
	            }, vm.logerr);
	        }
	        else {
	            vm.logmsg("Error: object window.cordova is not existing");
	        }
	    };
	    TodoList.prototype.showSpinner = function (title, message) {
	        var vm = this;
	    };
	    TodoList.prototype.hideSpinner = function () {
	        var vm = this;
	    };
	    TodoList.prototype.getDatabasePath = function (dbname) {
	        var vm = this;
	        try {
	            window.plugins.databasepath.getDatabasePath(function (response) {
	                vm.logmsg("window.plugins.getDatabasePath(function(response) { ... ");
	                vm.logmsg("response");
	                vm.logerr(response);
	                vm.logmsg("window.cordova.file:");
	                vm.logerr(window.cordova.file);
	            });
	        }
	        catch (err) {
	            vm.logmsg(err);
	        }
	    };
	    TodoList.prototype.exportDatabase = function (dbname) {
	        var vm = this;
	        var dbid = dbname + '.db';
	        var fileName = dbname + '.txt';
	        var db = window.sqlitePlugin.openDatabase({ name: dbid, location: 2 });
	        var successFn = function (jsonObj, cnt) {
	            vm.logmsg("Exported JSON created");
	        };
	        var errorFn = function (error) {
	            alert("The following error occurred: " + error.message);
	            vm.logmsg("The following error occurred: " + error.message);
	        };
	        var progressFn = function (current, total) {
	            vm.logmsg("Imported " + current + "/" + total + " statements");
	        };
	        window.cordova.plugins.sqlitePorter.exportDbToJson(db, {
	            successFn: successFn
	        });
	    };
	    TodoList.prototype.readFileContent = function (filename) {
	        var vm = this;
	        vm.logmsg("readFileContent(filename) {");
	        vm.logmsg("filename: " + filename);
	        window.requestFileSystem(window.LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
	            var reader = new XMLHttpRequest();
	            reader.open('GET', window.cordova.file.externalDataDirectory + filename);
	            reader.onreadystatechange = function (evt) {
	                if (reader.readyState == 4 && reader.status == 200) {
	                    vm.logmsg("CONTENT SUCCESSFULLY READEN, COUNTED ELEMENTs: ");
	                    vm.logmsg(_.size(JSON.parse(reader.responseText)));
	                }
	                else {
	                    vm.logmsg("ERROR! Could not finish the XMLHttpRequest request!!!");
	                    vm.logerr(reader);
	                }
	            };
	            reader.send();
	        }, vm.logerr);
	    };
	    TodoList.prototype.syncFile = function (filePathOnline, fileId) {
	        var vm = this;
	        vm.logmsg("syncFile(filePathOnline, fileId) {");
	        vm.logmsg(filePathOnline);
	        vm.logmsg(fileId);
	        window.resolveLocalFileSystemURL(window.cordova.file.externalDataDirectory, function (directoryEntry) {
	            directoryEntry.getFile(fileId, { create: true, exclusive: false }, function (fileEntry) {
	                var fileTransfer = new FileTransfer();
	                var uri = encodeURI(filePathOnline);
	                var fileURL = fileEntry.toURL();
	                fileTransfer.download(uri, fileURL, function (entry) {
	                    vm.logerr(entry);
	                    vm.logmsg("download complete: " + entry.toURI());
	                }, function (error) {
	                    vm.logerr(error);
	                    vm.logmsg("download error source " + error.source);
	                    vm.logmsg("download error target " + error.target);
	                    vm.logmsg("download error code" + error.code);
	                }, true, {});
	            }, vm.logerr);
	        }, vm.logerr);
	    };
	    TodoList.prototype.importDatabase = function (fileId) {
	        var vm = this;
	        vm.logmsg("importDatabase(fileId) { ... ");
	        vm.logmsg(fileId);
	        window.requestFileSystem(window.LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
	            var reader = new XMLHttpRequest();
	            vm.logmsg("window.cordova.file.externalDataDirectory:");
	            vm.logmsg(window.cordova.file.externalDataDirectory);
	            reader.open('GET', window.cordova.file.externalDataDirectory + fileId);
	            reader.onreadystatechange = function (evt) {
	                if (reader.readyState == 4) {
	                    vm.hideSpinner();
	                    var responseText = reader.responseText;
	                    vm.logmsg("CONTENT SUCCESSFULLY READEN !!!");
	                    vm.logmsg("size: " + _.size(responseText));
	                    vm.logmsg("IMPORTING TEXT TO DATABASE");
	                    vm.showSpinner(null, null);
	                    var db = window.sqlitePlugin.openDatabase({ name: "onion.db", location: 2 });
	                    window.cordova.plugins.sqlitePorter.importSqlToDb(db, responseText, {
	                        successFn: function (count) {
	                            vm.logmsg("END LOADING");
	                            vm.logmsg("Imported " + count + " SQL statements to DB");
	                            vm.hideSpinner();
	                        },
	                        errorFn: function (error) {
	                            var msg = "An error occurred: message=" + error.message;
	                            if (error.code) {
	                                msg += "; code=" + error.code;
	                            }
	                            vm.logmsg(msg);
	                            vm.hideSpinner();
	                        },
	                        progressFn: function (current, total) {
	                            vm.showSpinner("Imported", current + "/" + total);
	                        }
	                    });
	                }
	                else {
	                    vm.logmsg("ERROR! Could not (YET) finish the XMLHttpRequest request!!!");
	                }
	            };
	            vm.showSpinner(null, null);
	            reader.send();
	        }, vm.logerr);
	    };
	    TodoList.prototype.startPerformanceMessure = function () {
	        var vm = this;
	        vm.logmsg("startPerformanceMessure() { ... ");
	        vm.performanceMessureStartTimestamp = performance.now();
	    };
	    TodoList.prototype.endPerformanceMessure = function () {
	        var vm = this;
	        vm.logmsg("endPerformanceMessure() { ... ");
	        var functionPromise = new Promise(function (resolve, reject) {
	            vm.performanceMessureEndTimestamp = performance.now();
	            vm.performanceMessureResultMilliseconds = Math.round((vm.performanceMessureEndTimestamp - vm.performanceMessureStartTimestamp));
	            vm.zone.run(function () {
	                vm.todoStatModel.query_duration = vm.performanceMessureResultMilliseconds;
	            });
	            resolve(vm.performanceMessureResultMilliseconds);
	        });
	        return functionPromise;
	    };
	    TodoList.prototype.reduce = function (param) {
	        var vm = this;
	        var clause = [], params = [], nest, nestType;
	        if (param.clause !== undefined && param.params) {
	            return param;
	        }
	        if (param.clause !== undefined && param.param !== undefined) {
	            return { clause: param.clause, params: [param.param] };
	        }
	        if (param.clause) {
	            return { clause: param.clause, params: [] };
	        }
	        if (param.and) {
	            nest = param.and;
	            nestType = ' AND ';
	        }
	        else if (param.or) {
	            nest = param.or;
	            nestType = ' OR ';
	        }
	        else {
	            throw new Error('Invalid dynamic parameter found');
	        }
	        nest.forEach(function (p) {
	            p = vm.reduce(p);
	            clause.push(p.clause);
	            params.push.apply(params, p.params);
	        });
	        return {
	            clause: '(' + clause.join(nestType) + ')',
	            params: params
	        };
	    };
	    TodoList.prototype.queryReductionObjectGetter = function (queryParametersObject) {
	        if (queryParametersObject === void 0) { queryParametersObject = undefined; }
	        var vm = this;
	        vm.logmsg("queryReductionObjectGetter(queryParametersObject) { ... ");
	        var queryReductionObject = { 'clause': '', 'params': [] };
	        if (queryParametersObject != undefined)
	            var queryReductionObject = vm.reduce(queryParametersObject);
	        return queryReductionObject;
	    };
	    TodoList.prototype.queryApiGetter = function (controllerName) {
	        var vm = this;
	        vm.logmsg("queryApiGetter(controllerName, databasePlatformName) { ... ");
	        var functionPromise = new Promise(function (resolve, reject) {
	            if (window.cordova)
	                var databasePlatformName = "SQLite";
	            else
	                var databasePlatformName = "MySQL";
	            var queryParametersObject_api = {
	                and: [
	                    { clause: "qa_ctrl_name = ?", param: controllerName },
	                    { clause: "qa_type = ?", param: databasePlatformName }
	                ]
	            };
	            var queryReductionObject_api = vm.queryReductionObjectGetter(queryParametersObject_api);
	            queryReductionObject_api.clause += " LIMIT 1 ";
	            vm.logerr(queryReductionObject_api);
	            if (window.cordova)
	                var queryBaseUrl = "SELECT * FROM query_api WHERE 1 AND ";
	            else
	                var queryBaseUrl = "SELECT * FROM onion.query_api WHERE 1 ";
	            vm.logmsg(controllerName);
	            vm.logmsg(queryBaseUrl);
	            vm.logerr(queryReductionObject_api);
	            vm.executeDatabase(queryBaseUrl, queryReductionObject_api, queryParametersObject_api, controllerName)
	                .then(function (responseSuccess) {
	                vm.logmsg(".then(responseSuccess => { ... 234792342 ");
	                var foundItems = [];
	                try {
	                    if (window.cordova) {
	                        var len = responseSuccess['rows'].length;
	                        vm.logmsg("len: " + len);
	                        for (var i = 0; i < len; i++) {
	                            foundItems.push(responseSuccess['rows'].item(i));
	                        }
	                    }
	                    else {
	                        var len = responseSuccess['length'];
	                        vm.logmsg("len: " + len);
	                        for (var i = 0; i < len; i++) {
	                            foundItems.push(responseSuccess[i]);
	                        }
	                    }
	                }
	                catch (err) {
	                    vm.logmsg(err);
	                    alert("ERROR!");
	                    return false;
	                }
	                resolve(foundItems);
	            }, function (responseError) {
	                vm.logmsg('vm.executeDatabase(' + queryBaseUrl + ' was rejected');
	                vm.logmsg("}, responseError => { ... 8943937458zhuj SQLite ");
	                vm.logmsg(responseError);
	                reject(responseError);
	            });
	        });
	        return functionPromise;
	    };
	    TodoList.prototype.requestDatabaseApi = function (controllerName) {
	        var vm = this;
	        vm.logmsg("requestDatabaseApi(controllerName) { ... ");
	        vm.logmsg("controllerName: " + controllerName);
	        vm.startPerformanceMessure();
	        if (controllerName == "cards") {
	            var queryParametersObject = {
	                and: [
	                    { clause: "cpr_kund_id = ?", param: '497' },
	                    { clause: "cuvis_usr_id = ?", param: 'OND' },
	                    { clause: "cuvis_id = ?", param: 'OND2016031510382867718' },
	                    { clause: "cuvis_cust_id = ?", param: '497' }
	                ]
	            };
	        }
	        else if (controllerName == "card_by_gtin") {
	            var queryParametersObject = {
	                and: [
	                    { clause: "kund_id = ?", param: '497' },
	                    { clause: "batch_gtin = ?", param: '00722868569504' }
	                ]
	            };
	        }
	        var queryReductionObject = vm.queryReductionObjectGetter(queryParametersObject);
	        queryReductionObject.clause += " GROUP BY cpr_id LIMIT 5 ";
	        if (window.location.hostname == 'localhost') {
	            return vm.executeRest(queryReductionObject, controllerName)
	                .then(function (responseSuccessEnd) {
	                return vm.endPerformanceMessure();
	            }, function (responseError) {
	                vm.logmsg("vm.executeRest was rejected");
	                vm.logmsg("}, responseError => { ... w398z4hfdw4ir8 ");
	                return vm.endPerformanceMessure();
	            });
	        }
	        else {
	            return vm.queryApiGetter(controllerName)
	                .then(function (responseSuccess) {
	                vm.logmsg(".then(responseSuccess => { ... ksdhufw8z8 ");
	                return vm.executeDatabase(responseSuccess[0].qa_base, queryReductionObject, queryParametersObject, controllerName)
	                    .then(function (responseSuccessEnd) {
	                    return vm.endPerformanceMessure();
	                }, function (responseError) {
	                    vm.logmsg("vm.executeDatabase was rejected");
	                    vm.logmsg("}, responseError => { ... h4387r34rz5 ");
	                    return vm.endPerformanceMessure();
	                });
	            }, function (responseError) {
	                vm.logmsg("vm.queryApiGetter was rejected");
	                vm.logmsg("}, responseError => { ... sterfwtze894378r ");
	                vm.logerr(responseError);
	                return vm.endPerformanceMessure();
	            });
	        }
	    };
	    TodoList.prototype.executeRest = function (queryReductionObject, controllerName) {
	        var vm = this;
	        vm.logmsg("executeRest(queryReductionObject, controllerName) { ... ");
	        var functionPromise = new Promise(function (resolve, reject) {
	            vm.todoService.ng2Login('onion.demo', 'a05783f07a0c24763903298e936e83be')
	                .then(function (isLoggedIn) {
	                vm.logmsg("isLoggedIn:" + isLoggedIn);
	                vm.todoService.loadApiRest(queryReductionObject, controllerName)
	                    .then(function (responseSuccess) {
	                    vm.logmsg(".then(responseSuccess => { ... u3789dh4rf REST ");
	                    resolve(responseSuccess);
	                }, function (responseError) {
	                    vm.logmsg("vm.todoService.loadApiRest was rejected");
	                    vm.logmsg("}, responseError => { ... 987t634rz93ubgrf93 REST ");
	                    reject(responseError);
	                });
	            }, function (errorResponse) {
	                vm.logmsg("errorResponse: " + errorResponse);
	                reject(errorResponse);
	            });
	        });
	        return functionPromise;
	    };
	    TodoList.prototype.executeDatabase = function (queryBaseUrl, queryReductionObject, queryParametersObject, controllerName) {
	        var vm = this;
	        vm.logmsg("executeDatabase(queryBaseUrl, queryReductionObject, queryParametersObject, controllerName) { ... ");
	        if (window.cordova) {
	            vm.logmsg("THIS IS A mobile MACHINE");
	            return vm.executeSQLite(queryBaseUrl, queryReductionObject, controllerName);
	        }
	        else {
	            vm.logmsg("THIS IS A desktop MACHINE");
	            return vm.executeMySQL(queryBaseUrl, queryReductionObject, controllerName);
	        }
	    };
	    TodoList.prototype.executeMySQL = function (queryBaseUrl, queryReductionObject, controllerName) {
	        var vm = this;
	        vm.logmsg("executeMySQL(queryBaseUrl, queryReductionObject, controllerName) { ... ");
	        var functionPromise = new Promise(function (resolve, reject) {
	            vm.todoService.ng2Login('onion.demo', 'a05783f07a0c24763903298e936e83be')
	                .then(function (isLoggedIn) {
	                vm.logmsg("isLoggedIn:" + isLoggedIn);
	                vm.todoService.loadApi(queryBaseUrl, queryReductionObject, controllerName)
	                    .then(function (responseSuccess) {
	                    vm.logmsg(".then(responseSuccess => { ... u3789dh4rf ");
	                    resolve(responseSuccess);
	                }, function (responseError) {
	                    vm.logmsg("vm.todoService.loadApi was rejected");
	                    vm.logmsg("}, responseError => { ... 987t634rz93ubgrf93 MySQL ");
	                    reject(responseError);
	                });
	            }, function (errorResponse) {
	                vm.logmsg("errorResponse: " + errorResponse);
	                reject(errorResponse);
	            });
	        });
	        return functionPromise;
	    };
	    TodoList.prototype.executeSQLite = function (queryBaseUrl, queryReductionObject, controllerName) {
	        var vm = this;
	        vm.logmsg("executeSQLite(queryBaseUrl, queryReductionObject, controllerName) { ... ");
	        var functionPromise = new Promise(function (resolve, reject) {
	            vm.todoService.loadApiSQLite(queryBaseUrl, queryReductionObject, controllerName)
	                .then(function (responseSuccess) {
	                vm.logmsg(".then(responseSuccess => { ... ");
	                resolve(responseSuccess);
	            }, function (responseError) {
	                vm.logmsg("vm.todoService.loadApiSQLite was rejected");
	                vm.logmsg("}, responseError => { ... 987t634rz93ubgrf93 SQLite ");
	                reject(responseError);
	            });
	        });
	        return functionPromise;
	    };
	    TodoList.prototype.clearArticles = function () {
	        var vm = this;
	        vm.logmsg("clearArticles() { ... ");
	        vm.todoService.removeItems();
	    };
	    TodoList.prototype.clearDebug = function () {
	        var vm = this;
	        vm.logmsg("clearDebug() { ... ");
	        try {
	            document.getElementById('debugging').innerHTML = "";
	        }
	        catch (err) {
	        }
	    };
	    TodoList = __decorate([
	        core_1.Component({
	            selector: 'todo-list',
	            template: __webpack_require__(460),
	            styles: [__webpack_require__(443)],
	            directives: [Todoitem_1.TodoItem],
	            providers: [TodoRemote_1.TodosService]
	        }), 
	        __metadata('design:paramtypes', [TodoRemote_1.TodosService, TodoStatsModel_1.default, core_1.NgZone])
	    ], TodoList);
	    return TodoList;
	})();
	exports.TodoList = TodoList;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ },
/* 767 */
680,
/* 768 */
[912, 769, 767],
/* 769 */
682,
/* 770 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var router_2 = __webpack_require__(14);
	var RefreshTheme_1 = __webpack_require__(28);
	var AppManager = (function (_super) {
	    __extends(AppManager, _super);
	    function AppManager(router) {
	        _super.call(this);
	        this.myRouter = router;
	    }
	    AppManager.prototype.ngAfterViewInit = function () {
	    };
	    AppManager.prototype.goToApp1 = function () {
	        var _this = this;
	        setTimeout(function (e) { return _this.myRouter.navigate(['/App1']); }, 500);
	    };
	    AppManager.prototype.goToApp2 = function () {
	        var _this = this;
	        setTimeout(function (e) { return _this.myRouter.navigate(['/App2']); }, 500);
	    };
	    AppManager.prototype.goToApp3 = function () {
	        var _this = this;
	        setTimeout(function (e) { return _this.myRouter.navigate(['/App3']); }, 500);
	    };
	    AppManager.prototype.goToApp = function (evt, appName) {
	        this.myRouter.navigate(['/' + appName]);
	    };
	    AppManager = __decorate([
	        core_1.Component({
	            providers: [AppManager],
	            selector: 'AppManager',
	            template: __webpack_require__(461),
	            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink]
	        }), 
	        __metadata('design:paramtypes', [router_2.Router])
	    ], AppManager);
	    return AppManager;
	})(RefreshTheme_1.RefreshTheme);
	exports.AppManager = AppManager;


/***/ },
/* 771 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(17);
	__webpack_require__(29);
	__webpack_require__(82);
	__webpack_require__(294);
	__webpack_require__(295);
	var Observable_1 = __webpack_require__(3);
	var DiggLoader = (function () {
	    function DiggLoader(http) {
	        this.http = http;
	        this.m_http = http;
	    }
	    DiggLoader.prototype.loadDiggs = function (filter, diggs) {
	        filter = filter.toLowerCase();
	        var s = this.m_http.get('https://secure.digitalsignage.com/Digg').retry(2);
	        s.mergeMap(function (res) {
	            var news = JSON.parse(res._body);
	            return Observable_1.Observable.fromArray(news);
	        }).filter(function (data) {
	            if (data.title.toLowerCase().indexOf(filter) > -1) {
	                return true;
	            }
	        }).subscribe(function (v) {
	            diggs.push(v);
	        });
	    };
	    DiggLoader = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], DiggLoader);
	    return DiggLoader;
	})();
	exports.DiggLoader = DiggLoader;


/***/ },
/* 772 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var ForgotPass_1 = __webpack_require__(773);
	var LoginPanel_1 = __webpack_require__(774);
	var router_1 = __webpack_require__(14);
	var router_2 = __webpack_require__(14);
	var CommBroker_1 = __webpack_require__(7);
	var Conts_1 = __webpack_require__(11);
	var EntryPanel = (function () {
	    function EntryPanel(params, commBroker) {
	        if (params.get('id') != null) {
	            commBroker.setValue(Conts_1.Consts.Values().USER_NAME, params.get('id'));
	        }
	        else {
	            commBroker.setValue(Conts_1.Consts.Values().USER_NAME, '');
	        }
	    }
	    EntryPanel = __decorate([
	        router_2.RouteConfig([
	            { path: '/Another2', component: LoginPanel_1.LoginPanel, as: 'Route3' },
	            { path: '/Another3', component: ForgotPass_1.ForgotPass, as: 'Route4' },
	            { path: '/ForgotPass', component: ForgotPass_1.ForgotPass, as: 'ForgotPass' },
	            { path: '/Login', component: LoginPanel_1.LoginPanel, as: 'Login', useAsDefault: true }
	        ]),
	        core_1.Component({
	            providers: [LoginPanel_1.LoginPanel],
	            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink],
	            selector: 'EntryPanel',
	            template: "<router-outlet></router-outlet>"
	        }), 
	        __metadata('design:paramtypes', [router_2.RouteParams, CommBroker_1.CommBroker])
	    ], EntryPanel);
	    return EntryPanel;
	})();
	exports.EntryPanel = EntryPanel;


/***/ },
/* 773 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var router_2 = __webpack_require__(14);
	__webpack_require__(115);
	__webpack_require__(44);
	__webpack_require__(292);
	__webpack_require__(183);
	__webpack_require__(293);
	__webpack_require__(297);
	__webpack_require__(24);
	__webpack_require__(21);
	var Lib_1 = __webpack_require__(126);
	var ForgotPass = (function () {
	    function ForgotPass() {
	        this.clickStream = new core_1.EventEmitter();
	        this.disableButton = false;
	        this.forgotPassInit();
	    }
	    ForgotPass.prototype.forgotPassInit = function () {
	        var _this = this;
	        var doubleClickStream = this.clickStream.buffer(this.clickStream.throttleTime(450)).map(function (e) {
	            return e.length;
	        }).filter(function (e) {
	            Lib_1.Lib.log('total clicks ' + e);
	            if (e == 2)
	                _this.disableButton = true;
	            return e == 2;
	        }).delay(2000);
	        doubleClickStream.subscribe(function (e) {
	            Lib_1.Lib.log('double click');
	            _this.disableButton = false;
	        });
	    };
	    ForgotPass.prototype.onForgotPass = function (event) {
	        this.clickStream.next('click');
	    };
	    ForgotPass = __decorate([
	        core_1.Component({
	            providers: [ForgotPass],
	            selector: 'ForgotPass',
	            template: "\n                <div>\n                  <form class=\"form-signin\" role=\"form\">\n                    <h2 class=\"form-signin-heading\"></h2>\n                    <button id=\"forgotPassButton\" [disabled]=\"disableButton\" (click)=\"onForgotPass($event)\" class=\"btn btn-lg btn-primary btn-block\">\n                      Forgot password\n                    </button>\n                    <hr class=\"hrThin\"/>\n                    <a [routerLink]=\"['/Login', {id: 'demo_user'}, 'Login']\">Back to login screen</a><br/>\n                    <small>(auto fill user by passing router args)</small>\n                    <div id=\"languageSelectionLogin\"></div>\n                  </form>\n                </div>\n                <!-- <a [routerLink]=\"['/App1']\">And back to Test1</a> -->\n                <br/>\n                <small>ForgotPass component and I am inside EntryPanel</small>",
	            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ForgotPass);
	    return ForgotPass;
	})();
	exports.ForgotPass = ForgotPass;


/***/ },
/* 774 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(bootbox) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var router_2 = __webpack_require__(14);
	var CommBroker_1 = __webpack_require__(7);
	var Conts_1 = __webpack_require__(11);
	var router_3 = __webpack_require__(14);
	__webpack_require__(115);
	__webpack_require__(44);
	__webpack_require__(29);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(296);
	__webpack_require__(21);
	__webpack_require__(291);
	var Subject_1 = __webpack_require__(19);
	var BehaviorSubject_1 = __webpack_require__(188);
	var Observable_1 = __webpack_require__(3);
	var User = (function () {
	    function User(obj) {
	        this.id = obj && obj.id || Math.random();
	        this.name = obj && obj.name || 'anonymous';
	        this.pass = obj && obj.pass || '';
	        this.gender = obj && obj.gender || 'male';
	    }
	    return User;
	})();
	exports.User = User;
	var LoginPanel = (function () {
	    function LoginPanel(router, commBroker) {
	        this.myRouter = router;
	        var user = commBroker.getValue(Conts_1.Consts.Values().USER_NAME);
	        this.user = user || '';
	        this.pass = user || '';
	    }
	    LoginPanel.prototype.exampleRx1 = function () {
	        var userStream = new BehaviorSubject_1.BehaviorSubject(null);
	        userStream.do(function (e) { return console.log(e); });
	        userStream.filter(function (user) {
	            return user && user.gender == 'male';
	        }).subscribe(function (user) {
	            console.log('male gender ' + user.name);
	        });
	        userStream.subscribe(function (user) {
	            if (user == null)
	                return;
	            console.log("user registered " + user.name + " " + user.id);
	        });
	        userStream.next(new User({ name: 'Sean' }));
	        userStream.next(new User({ name: 'John' }));
	        userStream.next(new User({ name: 'Nelly', pass: 'aaa', gender: 'female' }));
	        userStream.next(new User({ name: 'Nadine', pass: 'bbb', gender: 'female' }));
	        var usersStream = new Observable_1.Observable(function (observer) {
	            console.log(observer);
	        });
	        usersStream.subscribe(function (e) { return console.log(e); });
	        var source = userStream.scan(function (acc, x) {
	            return acc + x;
	        }, []);
	        source.subscribe(function (x) { return console.log("scan " + x); });
	    };
	    LoginPanel.prototype.exampleRx2 = function () {
	        var userStream1 = new Subject_1.Subject(null);
	        var userStream2 = new Subject_1.Subject(null);
	        userStream1.subscribe(userStream2);
	        userStream2.subscribe(function (x) {
	            console.log(x);
	        });
	        var userStream3 = Observable_1.Observable.create(function (observer) {
	            observer.next(new User({ name: 'Peggy', gender: 'female' }));
	        });
	        userStream1.next(new User({ name: 'Sean' }));
	        userStream1.next(new User({ name: 'Larry' }));
	        userStream3.subscribe(userStream2);
	        var userObject = { 'new_user': new User() };
	    };
	    LoginPanel.prototype.onLogin = function (event) {
	        var _this = this;
	        console.log("doing some fake async auth for " + this.user);
	        bootbox.dialog({
	            closeButton: false,
	            title: "Please wait, Authenticating...",
	            message: " "
	        });
	        setTimeout(function (e) {
	            _this.myRouter.navigate(['/AppManager']);
	            bootbox.hideAll();
	        }, 2000);
	        event.preventDefault();
	        return false;
	    };
	    Object.defineProperty(LoginPanel.prototype, "loginName", {
	        set: function (name) {
	            this.user = name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    LoginPanel.prototype.toString = function () {
	    };
	    LoginPanel = __decorate([
	        core_1.Injectable(),
	        core_1.Component({
	            selector: 'LoginPanel',
	            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink],
	            template: __webpack_require__(462)
	        }), 
	        __metadata('design:paramtypes', [router_3.Router, CommBroker_1.CommBroker])
	    ], LoginPanel);
	    return LoginPanel;
	})();
	exports.LoginPanel = LoginPanel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)))

/***/ },
/* 775 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Filemenu_1 = __webpack_require__(325);
	var FilemenuItem = (function () {
	    function FilemenuItem(fileMenu) {
	        this.m_fileMenu = fileMenu;
	        this.m_fileMenu.addFileMenuItem(this);
	    }
	    FilemenuItem.prototype.ngAfterViewInit = function () {
	    };
	    FilemenuItem = __decorate([
	        core_1.Component({
	            selector: 'FilemenuItem',
	            inputs: ['title:title', 'app:app'],
	            template: ""
	        }), 
	        __metadata('design:paramtypes', [Filemenu_1.Filemenu])
	    ], FilemenuItem);
	    return FilemenuItem;
	})();
	exports.FilemenuItem = FilemenuItem;


/***/ },
/* 776 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Observable_1 = __webpack_require__(3);
	__webpack_require__(44);
	__webpack_require__(82);
	__webpack_require__(21);
	__webpack_require__(117);
	__webpack_require__(24);
	var Logo = (function () {
	    function Logo(elementRef) {
	        this.elementRef = elementRef;
	        this.listenMouse();
	    }
	    Logo.prototype.listenMouse = function () {
	        var _this = this;
	        var over = Observable_1.Observable.fromEvent(this.elementRef.nativeElement, 'mouseover').map(function (e) {
	            return Observable_1.Observable.of(1);
	        });
	        var out = Observable_1.Observable.fromEvent(this.elementRef.nativeElement, 'mouseout').map(function (e) {
	            return Observable_1.Observable.of(0);
	        });
	        over.merge(out).distinctUntilChanged().subscribe(function (events) {
	            if (events.value) {
	                jQuery(_this.elementRef.nativeElement).find('.flipcard').addClass('flipped');
	            }
	            else {
	                jQuery(_this.elementRef.nativeElement).find('.flipcard').removeClass('flipped');
	            }
	        });
	    };
	    Logo = __decorate([
	        core_1.Component({
	            selector: 'Logo',
	            template: "\n            <div id=\"logoContainer\" class=\"reshid flip\">\n              <div class=\"flipcard\">\n                <div class=\"face front\">\n                  <img class=\"img-responsive\" src=\"assets/logo_s.png\"/>\n                </div>\n                <div class=\"face back\">\n                  <img class=\"img-responsive\" src=\"assets/logo_b.png\"/>\n                </div>\n              </div>\n            </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], Logo);
	    return Logo;
	})();
	exports.Logo = Logo;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 777 */
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var LocalStorage = (function () {
	    function LocalStorage() {
	    }
	    LocalStorage.prototype.getItem = function (key, defaultValue) {
	        if (localStorage.getItem(key)) {
	            return JSON.parse(localStorage.getItem(key));
	        }
	        else {
	            return defaultValue;
	        }
	    };
	    LocalStorage.prototype.setItem = function (key, value) {
	        localStorage.setItem(key, JSON.stringify(value));
	    };
	    LocalStorage.prototype.removeItem = function (key) {
	        localStorage.removeItem(key);
	    };
	    LocalStorage = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], LocalStorage);
	    return LocalStorage;
	})();
	exports.LocalStorage = LocalStorage;


/***/ },
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var contributors_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var RefreshTheme_1 = __webpack_require__(28);
	var ng2_bootstrap_1 = __webpack_require__(85);
	var Help = (function (_super) {
	    __extends(Help, _super);
	    function Help(contributors) {
	        _super.call(this);
	    }
	    Help = __decorate([
	        core_1.Component({
	            selector: 'Help',
	            providers: [contributors_1.Contributors],
	            directives: [ng2_bootstrap_1.Alert, ng2_bootstrap_1.Rating],
	            template: " <small>I am Help component and using <a href=\"https://github.com/valor-software/ng2-bootstrap\" target=\"_blank\">ng2-bootstrap</a></small>\n                <br/>\n                <alert type=\"info\">Welcome to Angular2 Bootstrap starter pack!</alert>\n                <rating [(ngModel)]=\"rate\" [max]=\"max\" [readonly]=\"isReadonly\" [titles]=\"['one','two','three']\" ></rating>\n                <ng-content></ng-content>\n                "
	        }), 
	        __metadata('design:paramtypes', [contributors_1.Contributors])
	    ], Help);
	    return Help;
	})(RefreshTheme_1.RefreshTheme);
	exports.Help = Help;


/***/ },
/* 824 */,
/* 825 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Sliderpanel_1 = __webpack_require__(16);
	var TodoStatsModel_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var Todo2 = (function () {
	    function Todo2(sliderPanel, todoStatModel) {
	        this.todoStatModel = todoStatModel;
	        this.sliderPanel = sliderPanel;
	    }
	    Todo2.prototype.onPrev = function (event) {
	        this.sliderPanel.slideToPage('todo1', 'right');
	    };
	    Todo2 = __decorate([
	        core_1.Component({
	            selector: 'Todo2',
	            styles: [__webpack_require__(__webpack_module_template_argument_1__)],
	            template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                    </button>\n                    <small>I am todo2 component</small>\n                    <ng-content></ng-content>\n                    <div class=\"container\">\n                        <div class=\"row\">\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split\"><i class=\"fa fa-refresh\"></i></div>\n                                <div class=\"update-text\">Total To-Do updates from server: {{todoStatModel.updates}}</div>\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split update-info\"><i class=\"fa fa-folder-open\"></i></div>\n                                <div class=\"update-text\">Total To-Do reads from server: {{todoStatModel.reads}}</div>\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split update-success\"><i class=\"fa fa-leaf\"></i></div>\n                                <div class=\"update-text\">Total To-Do creates from server: {{todoStatModel.creates}}</div>\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split update-danger\"><i class=\"fa fa-warning-sign\"></i></div>\n                                <div class=\"update-text\">Total To-Do deletes from server: {{todoStatModel.deletes}}</div>\n                              </div>\n                            </div>\n\n                        </div>\n                    </div>\n                    "
	        }), 
	        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, TodoStatsModel_1.default])
	    ], Todo2);
	    return Todo2;
	})();
	exports.Todo2 = Todo2;


/***/ },
/* 826 */,
/* 827 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(17);
	var Lib_1 = __webpack_require__(126);
	__webpack_require__(83);
	var TodoStatsModel_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var url = 'http://secure.digitalsignage.com';
	var TodoItemModel = (function () {
	    function TodoItemModel(text, id) {
	        this.task = text;
	        this.id = id || Lib_1.Lib.guid();
	    }
	    Object.defineProperty(TodoItemModel.prototype, "text", {
	        get: function () {
	            console.log('getting value for task', this.task);
	            return this.task;
	        },
	        set: function (value) {
	            this.task = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TodoItemModel.prototype.getTask = function () {
	        return this.task;
	    };
	    return TodoItemModel;
	})();
	exports.TodoItemModel = TodoItemModel;
	var TodosService = (function () {
	    function TodosService(_http, todoStatsModel) {
	        this._http = _http;
	        this.todoStatsModel = todoStatsModel;
	        var self = this;
	        this.m_dataStore = { todos: [] };
	        this.loadTodos();
	    }
	    TodosService.prototype.addItem = function (newItem) {
	        var todo = new TodoItemModel(newItem);
	        this.m_dataStore.todos.push(todo);
	        this.createTodo(todo);
	    };
	    TodosService.prototype.removeItem = function (item) {
	        var index = this.m_dataStore.todos.indexOf(item);
	        this.m_dataStore.todos.splice(index, 1);
	        this.deleteTodo(item);
	    };
	    TodosService.prototype.editItem = function (item) {
	        var index = this.m_dataStore.todos.indexOf(item);
	        this.m_dataStore.todos[index].text = item.getTask();
	        this.updateTodo(item);
	    };
	    TodosService.prototype.getDataStore = function () {
	        return this.m_dataStore;
	    };
	    TodosService.prototype.loadTodos = function () {
	        var self = this;
	        this.todoStatsModel.reads++;
	        var channel = this._http.get(url + "/todos").map(function (response) { return response.json(); }).subscribe(function (data) {
	            try {
	                data = JSON.parse(data);
	            }
	            catch (e) {
	                channel.unsubscribe();
	                return;
	            }
	            for (var i in data) {
	                var todoItem = new TodoItemModel(data[i].task, data[i].id);
	                self.m_dataStore.todos.push(todoItem);
	            }
	            channel.unsubscribe();
	        }, function (error) { return console.log("Could not load todos " + error); });
	    };
	    TodosService.prototype.createTodo = function (todo) {
	        this.todoStatsModel.creates++;
	        var sendData = JSON.stringify(todo);
	        var channel = this._http.post(url + "/todos", sendData)
	            .map(function (response) { return response.json(); }).subscribe(function (sendData) {
	            channel.unsubscribe();
	        }, function (error) { return console.log('Could not create todo.'); });
	    };
	    TodosService.prototype.updateTodo = function (todo) {
	        this.todoStatsModel.updates++;
	        var channel = this._http.put(url + "/todos/" + todo.id, JSON.stringify(todo))
	            .map(function (response) { return response.json(); }).subscribe(function (data) {
	            channel.unsubscribe();
	        }, function (error) { return console.log('Could not update todo.'); });
	    };
	    TodosService.prototype.deleteTodo = function (todo) {
	        var _this = this;
	        this.todoStatsModel.deletes++;
	        var channel = this._http.delete(url + "/todos/" + todo.id).subscribe(function (response) {
	            _this.m_dataStore.todos.forEach(function (t, index) {
	                if (t.id === todo.id) {
	                    _this.m_dataStore.todos.splice(index, 1);
	                }
	            });
	            channel.unsubscribe();
	        }, function (error) { return console.log('Could not delete todo.'); });
	    };
	    TodosService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, TodoStatsModel_1.default])
	    ], TodosService);
	    return TodosService;
	})();
	exports.TodosService = TodosService;


/***/ },
/* 828 */,
/* 829 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Sliderpanel_1 = __webpack_require__(16);
	var ModalDialog_1 = __webpack_require__(36);
	var CommBroker_1 = __webpack_require__(7);
	var NotesBase_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var Myip_1 = __webpack_require__(204);
	var Notes2 = (function (_super) {
	    __extends(Notes2, _super);
	    function Notes2(sliderPanel, commBroker) {
	        _super.call(this, sliderPanel, commBroker);
	        this.sliderPanel = sliderPanel;
	        this.commBroker = commBroker;
	        this.me = this;
	        this.slideLeft = 'notes3';
	        this.slideRight = 'notes1';
	    }
	    Notes2 = __decorate([
	        core_1.Component({
	            selector: 'Notes2',
	            providers: [Myip_1.MyIp],
	            directives: [ModalDialog_1.ModalDialog, Myip_1.MyIp],
	            template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes2 component</small>\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  <button (click)=\"openModal()\" type=\"button\" class=\"btn btn-default\">Open Modal</button>\n                </div>\n                <ModalDialog title=\"My owner is Notes2\" content=\"I am here to serve Notes2\" [owner]=\"me\">\n                </ModalDialog>\n                <MyIp></MyIp>\n                <ng-content></ng-content>"
	        }), 
	        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
	    ], Notes2);
	    return Notes2;
	})(NotesBase_1.NotesBase);
	exports.Notes2 = Notes2;


/***/ },
/* 830 */,
/* 831 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Sliderpanel_1 = __webpack_require__(16);
	var CommBroker_1 = __webpack_require__(7);
	var NotesBase_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var Notes3 = (function (_super) {
	    __extends(Notes3, _super);
	    function Notes3(sliderPanel, commBroker) {
	        _super.call(this, sliderPanel, commBroker);
	        this.sliderPanel = sliderPanel;
	        this.commBroker = commBroker;
	        this.me = this;
	        this.slideLeft = 'notes4';
	        this.slideRight = 'notes2';
	    }
	    Notes3 = __decorate([
	        core_1.Component({
	            selector: 'Notes3',
	            template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes3 component</small>\n                <ng-content></ng-content>"
	        }), 
	        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
	    ], Notes3);
	    return Notes3;
	})(NotesBase_1.NotesBase);
	exports.Notes3 = Notes3;


/***/ },
/* 832 */,
/* 833 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Sliderpanel_1 = __webpack_require__(16);
	var CommBroker_1 = __webpack_require__(7);
	var NotesBase_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var Notes4 = (function (_super) {
	    __extends(Notes4, _super);
	    function Notes4(sliderPanel, commBroker) {
	        _super.call(this, sliderPanel, commBroker);
	        this.sliderPanel = sliderPanel;
	        this.commBroker = commBroker;
	        this.me = this;
	        this.slideLeft = 'notes5';
	        this.slideRight = 'notes3';
	    }
	    Notes4 = __decorate([
	        core_1.Component({
	            selector: 'Notes4',
	            template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes4 component</small>\n                <ng-content></ng-content>"
	        }), 
	        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
	    ], Notes4);
	    return Notes4;
	})(NotesBase_1.NotesBase);
	exports.Notes4 = Notes4;


/***/ },
/* 834 */,
/* 835 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Sliderpanel_1 = __webpack_require__(16);
	var CommBroker_1 = __webpack_require__(7);
	var NotesBase_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var Notes5 = (function (_super) {
	    __extends(Notes5, _super);
	    function Notes5(sliderPanel, commBroker) {
	        _super.call(this, sliderPanel, commBroker);
	        this.sliderPanel = sliderPanel;
	        this.commBroker = commBroker;
	        this.me = this;
	        this.slideRight = 'notes4';
	    }
	    Notes5 = __decorate([
	        core_1.Component({
	            selector: 'Notes5',
	            template: "<button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                </button>\n                <hr/>\n                <small>I am notes5 component</small>\n                <ng-content></ng-content>"
	        }), 
	        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
	    ], Notes5);
	    return Notes5;
	})(NotesBase_1.NotesBase);
	exports.Notes5 = Notes5;


/***/ },
/* 836 */,
/* 837 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Conts_1 = __webpack_require__(11);
	var CommBroker_1 = __webpack_require__(7);
	var Notes1Props_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var Properties = (function () {
	    function Properties(commBroker) {
	        this.commBroker = commBroker;
	        this.commBroker.setService(Conts_1.Consts.Services().Properties, this);
	    }
	    Properties.prototype.setPropView = function (value) {
	        this.value = value;
	    };
	    Properties.prototype.ngOnDestroy = function () {
	    };
	    Properties = __decorate([
	        core_1.Component({
	            selector: 'Properties',
	            directives: [Notes1Props_1.Notes1Props],
	            template: "\n                <h4>Properties</h4>\n                <hr/>\n                 <ul [ngSwitch]=\"value\">\n                  <li *ngSwitchWhen=\"'notes1'\">\n                    <Notes1Props></Notes1Props>\n                  </li>\n                  <li *ngSwitchWhen=\"'notes2'\"><h1>Notes 2</h1></li>\n                  <li *ngSwitchWhen=\"'notes3'\"><h1>Notes 3</h1></li>\n                  <li *ngSwitchWhen=\"'notes4'\"><h1>Notes 4</h1></li>\n                  <li *ngSwitchWhen=\"'notes5'\"><h1>Notes 5</h1></li>\n                  <li *ngSwitchWhen=\"'Digg'\"><h1>Digg</h1></li>\n                  <li *ngSwitchWhen=\"'Weather'\"><h1>Weather</h1></li>\n                  <li *ngSwitchWhen=\"'Contact'\"><h1>Contact</h1></li>\n                  <li *ngSwitchWhen=\"'Logout'\"><h1>Logout</h1></li>\n                </ul>\n                <ng-content></ng-content>\n              "
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
	    ], Properties);
	    return Properties;
	})();
	exports.Properties = Properties;


/***/ },
/* 838 */,
/* 839 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Conts_1 = __webpack_require__(11);
	var WeatherService_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var SortableHeader_1 = __webpack_require__(__webpack_module_template_argument_1__);
	var common_1 = __webpack_require__(12);
	var OrderBy_1 = __webpack_require__(207);
	var common_2 = __webpack_require__(12);
	__webpack_require__(24);
	__webpack_require__(118);
	__webpack_require__(45);
	__webpack_require__(116);
	__webpack_require__(21);
	__webpack_require__(24);
	var CommBroker_1 = __webpack_require__(7);
	var Weather = (function () {
	    function Weather(weatherService, commBroker) {
	        this.weatherService = weatherService;
	        this.commBroker = commBroker;
	        this.zipControl = new common_1.Control();
	        this.sort = { field: null, desc: false };
	        this.listenWeatherInput();
	        this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('Weather');
	    }
	    Weather.prototype.ngAfterViewInit = function () {
	        this.zipControl.updateValue('91301');
	    };
	    Weather.prototype.listenWeatherInput = function () {
	        var _this = this;
	        return this.weatherItems = this.zipControl.valueChanges
	            .debounceTime(400)
	            .distinctUntilChanged()
	            .filter(function (zip) {
	            return zip.length > 3;
	        }).switchMap(function (zip) {
	            return _this.weatherService.search(zip + "/1");
	        });
	    };
	    Weather = __decorate([
	        core_1.Component({
	            selector: 'Weather',
	            providers: [WeatherService_1.WeatherService, SortableHeader_1.SortableHeader],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPushObserve,
	            pipes: [OrderBy_1.OrderBy],
	            directives: [common_2.COMMON_DIRECTIVES, SortableHeader_1.SortableHeader],
	            styles: ["input {margin: 20px; width: 50%}"],
	            template: "\n    <small>I am a weather component</small>\n    <input type=\"text\" class=\"form-control\" placeholder=\"enter city or zip code\" [ngFormControl]=\"zipControl\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>day</th>\n          <th>icon</th>\n          <th sortableHeader=\"maxtempF\" [sort]=\"sort\">high</th>\n          <th sortableHeader=\"mintempF\" [sort]=\"sort\">low</th>\n        </tr>\n      </thead>\n      <tbody>\n      <!-- no need to subscribe to observable since async does this for us -->\n        <tr *ngFor=\"#item of weatherItems | async | OrderBy:sort.field:sort.desc\">\n          <td>{{ item.day }}</td>\n          <td><img src=\"{{ item.iconPath }}\" style=\"width: 40px; height: 40px\"/></td>\n          <td>{{ item.maxtempF }}</td>\n          <td>{{ item.mintempF }}</td>\n          <!-- <td [innerHtml]=\"item.day\"></td> -->\n        </tr>\n      </tbody>\n    </table>\n  ",
	        }), 
	        __metadata('design:paramtypes', [WeatherService_1.WeatherService, CommBroker_1.CommBroker])
	    ], Weather);
	    return Weather;
	})();
	exports.Weather = Weather;


/***/ },
/* 840 */,
/* 841 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var film_actions_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var film_selection_view_1 = __webpack_require__(__webpack_module_template_argument_1__);
	var film_view_1 = __webpack_require__(__webpack_module_template_argument_2__);
	var CommBroker_1 = __webpack_require__(7);
	var Consts = __webpack_require__(__webpack_module_template_argument_3__);
	var FilmsComponent = (function () {
	    function FilmsComponent(commBroker, _filmActions) {
	        this.commBroker = commBroker;
	        this._filmActions = _filmActions;
	        this.currentFilm = null;
	        this.isFetchingCurrentFilm = false;
	        var self = this;
	        this._appStore = commBroker.getService(Consts.APP_STORE);
	        this._appStore.subscribe(function (state) {
	            self.filmsCount = state.films.count;
	            self.currentFilm = state.films.currentFilm;
	            self.isFetchingCurrentFilm = state.films.isFetchingFilm;
	        });
	        this._appStore.dispatch(_filmActions.fetchFilms());
	    }
	    FilmsComponent.prototype.setCurrentFilm = function (index) {
	        this._appStore.dispatch(this._filmActions.setCurrentFilm(index));
	        this._appStore.dispatch(this._filmActions.fetchFilm(index));
	    };
	    FilmsComponent = __decorate([
	        core_1.Component({
	            selector: 'films-component',
	            template: "\n        <h3>Films</h3>\n        <film-selection [count]=\"filmsCount\" (current)=\"setCurrentFilm($event)\"></film-selection>\n        <div [ngClass]=\"{'text-muted':isFetchingCurrentFilm,'text-primary':!isFetchingCurrentFilm}\" style=\"margin-top:20px;\">\n            <film [data]=\"currentFilm\" [loading]=\"isFetchingCurrentFilm\"></film>\n        </div>\n\n    ",
	            directives: [film_selection_view_1.FilmSelectionView, film_view_1.FilmView]
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker, film_actions_1.FilmActions])
	    ], FilmsComponent);
	    return FilmsComponent;
	})();
	exports.FilmsComponent = FilmsComponent;


/***/ },
/* 842 */,
/* 843 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var cart_actions_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var part_actions_1 = __webpack_require__(__webpack_module_template_argument_1__);
	var parts_view_1 = __webpack_require__(__webpack_module_template_argument_2__);
	var cart_view_1 = __webpack_require__(__webpack_module_template_argument_3__);
	var add_part_view_1 = __webpack_require__(__webpack_module_template_argument_4__);
	var reselect_1 = __webpack_require__(33);
	var CommBroker_1 = __webpack_require__(7);
	var Consts = __webpack_require__(__webpack_module_template_argument_5__);
	var partsInCartSelector = reselect_1.createSelector(function (state) { return state.cart; }, function (state) { return state.parts; }, function (cart, parts) {
	    var partsById = parts.reduce(function (map, part) { return (map[part.id] = part) && map; }, {});
	    return cart.map(function (id) { return partsById[id]; });
	});
	var ShoppingComponent = (function () {
	    function ShoppingComponent(commBroker, partActions, cartActions) {
	        var _this = this;
	        this.parts = [];
	        this.partsInCart = [];
	        this.appStore = commBroker.getService(Consts.APP_STORE);
	        this.addPart = partActions.createDispatcher(this.appStore, partActions.addPart);
	        this.addPartToCart = cartActions.createDispatcher(this.appStore, cartActions.addToCart);
	        this.removePartFromCart = cartActions.createDispatcher(this.appStore, cartActions.removeFromCart);
	        this.appStore.subscribe(function (state) {
	            _this.parts = state.parts;
	            _this.partsInCart = partsInCartSelector(state);
	        });
	        ShoppingComponent.createInitialSetOfParts(this.appStore, partActions);
	    }
	    ShoppingComponent.createInitialSetOfParts = function (appStore, partActions) {
	        appStore.dispatch(partActions.addPart("Lightsaber"));
	        appStore.dispatch(partActions.addPart("X-wing diecast"));
	    };
	    ShoppingComponent = __decorate([
	        core_1.Component({
	            selector: 'shopping',
	            template: "\n        <h3>Parts</h3>\n        <add-part (add)=\"addPart($event)\"></add-part>\n        <parts [parts]=\"parts\" [partsInCart]=\"partsInCart\" (addToCart)=\"addPartToCart($event)\"></parts>\n        <hr/>\n        <h3>Cart</h3>\n        <cart [parts]=\"partsInCart\" (removeFromCart)=\"removePartFromCart($event)\"></cart>\n    ",
	            directives: [parts_view_1.PartsView, cart_view_1.CartView, add_part_view_1.AddPartsView]
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker, part_actions_1.PartActions, cart_actions_1.CartActions])
	    ], ShoppingComponent);
	    return ShoppingComponent;
	})();
	exports.ShoppingComponent = ShoppingComponent;


/***/ },
/* 844 */,
/* 845 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var CartActions = __webpack_require__(__webpack_module_template_argument_0__);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (state, action) {
	    if (state === void 0) { state = []; }
	    if (action === void 0) { action = {}; }
	    switch (action.type) {
	        case CartActions.ADD_TO_CART:
	            return state.concat([action.id]);
	        case CartActions.REMOVE_FROM_CART:
	            return state.filter(function (id) { return id !== action.id; });
	        default:
	            return state;
	    }
	};


/***/ },
/* 846 */,
/* 847 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var FilmActions = __webpack_require__(__webpack_module_template_argument_0__);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (state, action) {
	    if (state === void 0) { state = []; }
	    if (action === void 0) { action = {}; }
	    switch (action.type) {
	        case FilmActions.REQUEST_FILMS:
	            return Object.assign({}, state, { isFetchingFilms: true });
	        case FilmActions.RECEIVE_FILMS:
	            return Object.assign({}, state, { isFetchingFilms: false, list: action.films });
	        case FilmActions.REQUEST_FILM:
	            return Object.assign({}, state, { isFetchingFilm: true });
	        case FilmActions.RECEIVE_FILM:
	            return Object.assign({}, state, { isFetchingFilm: false, currentFilm: action.film });
	        case FilmActions.RECEIVE_NUMBER_OF_FILMS:
	            return Object.assign({}, state, { count: action.count });
	        case FilmActions.CURRENT_FILMS:
	            return Object.assign({}, state, { current: action.currentIndex });
	        default:
	            return state;
	    }
	};


/***/ },
/* 848 */,
/* 849 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var PartActions = __webpack_require__(__webpack_module_template_argument_0__);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (state, action) {
	    if (state === void 0) { state = {}; }
	    if (action === void 0) { action = {}; }
	    switch (action.type) {
	        case PartActions.ADD_PART:
	            return { id: action.id, name: action.name };
	        default:
	            return state;
	    }
	};


/***/ },
/* 850 */,
/* 851 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var PartActions = __webpack_require__(__webpack_module_template_argument_0__);
	var part_reducer_1 = __webpack_require__(__webpack_module_template_argument_1__);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (state, action) {
	    if (state === void 0) { state = []; }
	    if (action === void 0) { action = {}; }
	    switch (action.type) {
	        case PartActions.ADD_PART:
	            return state.concat([part_reducer_1.default(null, action)]);
	        default:
	            return state;
	    }
	};


/***/ },
/* 852 */,
/* 853 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var UserActions = __webpack_require__(__webpack_module_template_argument_0__);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (state, action) {
	    if (state === void 0) { state = {}; }
	    if (action === void 0) { action = {}; }
	    switch (action.type) {
	        case UserActions.REQUEST_USERS:
	            return Object.assign({}, state, { isFetching: true });
	        case UserActions.RECEIVE_USERS:
	            return Object.assign({}, state, { isFetching: false, list: action.users, updated: action.updated });
	        case UserActions.CURRENT_USER:
	            return Object.assign({}, state, { current: action.current });
	        case UserActions.SET_FILM_FILTER:
	            return Object.assign({}, state, { filmFilter: action.filmFilter });
	        default:
	            return state;
	    }
	};


/***/ },
/* 854 */,
/* 855 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__, __webpack_module_template_argument_6__, __webpack_module_template_argument_7__, __webpack_module_template_argument_8__, __webpack_module_template_argument_9__, __webpack_module_template_argument_10__, __webpack_module_template_argument_11__, __webpack_module_template_argument_12__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var redux_1 = __webpack_require__(182);
	var thunk = __webpack_require__(181);
	var parts_reducer_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var cart_reducer_1 = __webpack_require__(__webpack_module_template_argument_1__);
	var films_reducer_1 = __webpack_require__(__webpack_module_template_argument_2__);
	var users_reducer_1 = __webpack_require__(__webpack_module_template_argument_3__);
	var angular2_redux_util_1 = __webpack_require__(20);
	var shopping_component_1 = __webpack_require__(__webpack_module_template_argument_4__);
	var CommBroker_1 = __webpack_require__(7);
	var part_actions_1 = __webpack_require__(__webpack_module_template_argument_5__);
	var cart_actions_1 = __webpack_require__(__webpack_module_template_argument_6__);
	var Consts = __webpack_require__(__webpack_module_template_argument_7__);
	var admin_component_1 = __webpack_require__(__webpack_module_template_argument_8__);
	var films_component_1 = __webpack_require__(__webpack_module_template_argument_9__);
	var user_actions_1 = __webpack_require__(__webpack_module_template_argument_10__);
	var film_actions_1 = __webpack_require__(__webpack_module_template_argument_11__);
	var appStoreFactory = function () {
	    var reducers = redux_1.combineReducers({ parts: parts_reducer_1.default, cart: cart_reducer_1.default, films: films_reducer_1.default, users: users_reducer_1.default });
	    var middlewareEnhancer = redux_1.applyMiddleware(thunk, angular2_redux_util_1.LoggerMiddleware);
	    var isDebug = window.devToolsExtension;
	    var applyDevTools = function () { return isDebug ? window.devToolsExtension() : function (f) { return f; }; };
	    var enhancers = redux_1.compose(middlewareEnhancer, applyDevTools());
	    var createStoreWithEnhancers = enhancers(redux_1.createStore);
	    var reduxAppStore = createStoreWithEnhancers(reducers);
	    return new angular2_redux_util_1.AppStore(reduxAppStore);
	};
	var Newsboard = (function () {
	    function Newsboard(commBroker) {
	        this.commBroker = commBroker;
	        var reduxAppStore = appStoreFactory();
	        this.commBroker.setService(Consts.APP_STORE, reduxAppStore);
	    }
	    Newsboard = __decorate([
	        core_1.Component({
	            selector: 'Newsboard',
	            directives: [shopping_component_1.ShoppingComponent, admin_component_1.AdminComponent, films_component_1.FilmsComponent],
	            template: __webpack_require__(__webpack_module_template_argument_12__),
	            providers: [part_actions_1.PartActions, cart_actions_1.CartActions, part_actions_1.PartActions, user_actions_1.UserActions, film_actions_1.FilmActions]
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
	    ], Newsboard);
	    return Newsboard;
	})();
	exports.Newsboard = Newsboard;


/***/ },
/* 856 */,
/* 857 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var user_actions_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var users_view_1 = __webpack_require__(__webpack_module_template_argument_1__);
	var user_view_1 = __webpack_require__(__webpack_module_template_argument_2__);
	var reselect_1 = __webpack_require__(33);
	var CommBroker_1 = __webpack_require__(7);
	var Consts = __webpack_require__(__webpack_module_template_argument_3__);
	var AdminComponent = (function () {
	    function AdminComponent(commBroker, userActions) {
	        this.usersToShow = null;
	        this.currentUser = null;
	        this.filmFilter = null;
	        var self = this;
	        var appStore = commBroker.getService(Consts.APP_STORE);
	        this.setCurrentUser = userActions.createDispatcher(appStore, userActions.setCurrentUser);
	        this.setFilmFilter = userActions.createDispatcher(appStore, userActions.setFilmFilter);
	        var usersToShowSelector = AdminComponent.createUsersToShowSelector();
	        appStore.subscribe(function (state) {
	            self.usersToShow = usersToShowSelector(state);
	            self.currentUser = state.users.current;
	            self.filmFilter = state.users.filmFilter;
	        });
	        appStore.dispatch(userActions.fetchUsers());
	    }
	    AdminComponent.createUsersToShowSelector = function () {
	        var currentFilmSelector = reselect_1.createSelector(function (state) { return state.users.filmFilter; }, function (state) { return state.films.currentFilm; }, function (filmFilter, currentFilm) { return filmFilter && currentFilm ? currentFilm : null; });
	        return reselect_1.createSelector(function (state) { return state.users.list; }, currentFilmSelector, function (users, currentFilm) { return currentFilm ? users.filter(AdminComponent.getFilter(currentFilm)) : users; });
	    };
	    ;
	    AdminComponent.getFilter = function (film) {
	        var ids = film.characters
	            .map(function (url) { return AdminComponent.getId(url); })
	            .reduce(function (idsMap, id) { return (idsMap[id] = true) && idsMap; }, {});
	        return function (user) { return ids[AdminComponent.getId(user.url)]; };
	    };
	    ;
	    AdminComponent.getId = function (url) {
	        return url.replace(/[a-z\/\.\:]*/g, "");
	    };
	    ;
	    AdminComponent = __decorate([
	        core_1.Component({
	            selector: 'admin',
	            template: __webpack_require__(__webpack_module_template_argument_4__),
	            directives: [users_view_1.UsersView, user_view_1.UserView]
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker, user_actions_1.UserActions])
	    ], AdminComponent);
	    return AdminComponent;
	})();
	exports.AdminComponent = AdminComponent;


/***/ },
/* 858 */,
/* 859 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	/* WEBPACK VAR INJECTION */(function(bootbox) {var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Sliderpanel_1 = __webpack_require__(16);
	var ModalDialog_1 = __webpack_require__(36);
	var CommBroker_1 = __webpack_require__(7);
	var Conts_1 = __webpack_require__(11);
	var NotesBase_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var MailModel_1 = __webpack_require__(65);
	var CharCount_1 = __webpack_require__(206);
	var common_1 = __webpack_require__(12);
	var StartCapValidator_1 = __webpack_require__(209);
	var NameTakenValidator_1 = __webpack_require__(208);
	var Notes1 = (function (_super) {
	    __extends(Notes1, _super);
	    function Notes1(fb, sliderPanel, commBroker) {
	        _super.call(this, sliderPanel, commBroker);
	        this.sliderPanel = sliderPanel;
	        this.commBroker = commBroker;
	        this.slideLeft = 'notes2';
	        this.notesForm = fb.group({
	            'userName': ['', common_1.Validators.required],
	            'phone': ['(xxx)-xxxx-xxx', common_1.Validators.minLength(10)],
	            'notesTextArea': ['enter text here',
	                common_1.Validators.compose([
	                    common_1.Validators.required,
	                    StartCapValidator_1.default])],
	            'login': ['',
	                common_1.Validators.compose([
	                    common_1.Validators.required,
	                    StartCapValidator_1.default]), NameTakenValidator_1.default]
	        });
	        this.notesTextArea = this.notesForm.controls['notesTextArea'];
	        this.userName = this.notesForm.controls['userName'];
	        this.login = this.notesForm.controls['login'];
	        this.phone = this.notesForm.controls['phone'];
	        this.model = new MailModel_1.MailModel(0, '', true, '', '');
	        this.mapModel = new Map();
	        this.mapModel.set('my name', 'Lion Demo');
	        this.observeNameChange();
	        this.observeFormChange();
	        this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('notes1');
	    }
	    Notes1.prototype.observeNameChange = function () {
	        this.userName.valueChanges.debounceTime(100).subscribe(function (value) {
	            console.log('name changed, notified via observable: ', value);
	        });
	    };
	    Notes1.prototype.observeFormChange = function () {
	        this.notesForm.valueChanges.debounceTime(100).subscribe(function (value) {
	            console.log('forum changed, notified via observable: ', value);
	        });
	    };
	    Notes1.prototype.onSubmit = function (event) {
	        bootbox.alert("sent " + event.notesTextArea);
	    };
	    Notes1.prototype.onChange = function (event) {
	        if (event.target.value.length < 3)
	            console.log('text too short for subject');
	    };
	    Notes1 = __decorate([
	        core_1.Component({
	            selector: 'Notes1',
	            directives: [ModalDialog_1.ModalDialog, common_1.FORM_DIRECTIVES],
	            pipes: [CharCount_1.CharCount],
	            styles: [__webpack_require__(__webpack_module_template_argument_1__)],
	            template: __webpack_require__(__webpack_module_template_argument_2__)
	        }), 
	        __metadata('design:paramtypes', [common_1.FormBuilder, Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
	    ], Notes1);
	    return Notes1;
	})(NotesBase_1.NotesBase);
	exports.Notes1 = Notes1;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)))

/***/ },
/* 860 */,
/* 861 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var TodoRemote_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var Observable_1 = __webpack_require__(3);
	__webpack_require__(44);
	__webpack_require__(82);
	__webpack_require__(21);
	__webpack_require__(117);
	__webpack_require__(24);
	var TodoItem = (function () {
	    function TodoItem(elementRef) {
	        this.elementRef = elementRef;
	        this.editMode = false;
	        this.done = new core_1.EventEmitter();
	        this.edit = new core_1.EventEmitter();
	        this.listenMouse();
	    }
	    TodoItem.prototype.listenMouse = function () {
	        var _this = this;
	        var vm = this;
	        var clk = Observable_1.Observable.fromEvent(this.elementRef.nativeElement, 'click').map(function (e) {
	            vm.editMode = !vm.editMode;
	            return Observable_1.Observable.of(vm.editMode);
	        });
	        clk.distinctUntilChanged().subscribe(function (events) {
	            console.log("events");
	            console.log(events);
	            if (events.value) {
	                jQuery(_this.elementRef.nativeElement).find('.flipcard_100').addClass('flipped');
	            }
	            else {
	                jQuery(_this.elementRef.nativeElement).find('.flipcard_100').removeClass('flipped');
	            }
	        });
	    };
	    TodoItem.prototype.doneClicked = function ($event) {
	        $event.stopPropagation();
	        console.log("doneClicked($event) { ... ");
	        console.log("$event");
	        console.log($event);
	        this.done.next(this.item);
	    };
	    TodoItem.prototype.editClicked = function () {
	        this.editMode = !this.editMode;
	        if (this.editMode)
	            return;
	        this.edit.next(this.item);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', TodoRemote_1.TodoItemModel)
	    ], TodoItem.prototype, "item", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], TodoItem.prototype, "done", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], TodoItem.prototype, "edit", void 0);
	    TodoItem = __decorate([
	        core_1.Component({
	            selector: '.todo-item',
	            template: __webpack_require__(__webpack_module_template_argument_1__),
	            styles: [__webpack_require__(__webpack_module_template_argument_2__)],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], TodoItem);
	    return TodoItem;
	})();
	exports.TodoItem = TodoItem;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */,
/* 899 */,
/* 900 */,
/* 901 */,
/* 902 */,
/* 903 */,
/* 904 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var contributors_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var RefreshTheme_1 = __webpack_require__(28);
	var ng2_bootstrap_1 = __webpack_require__(85);
	var Help = (function (_super) {
	    __extends(Help, _super);
	    function Help(contributors) {
	        _super.call(this);
	    }
	    Help = __decorate([
	        core_1.Component({
	            selector: 'Help',
	            providers: [contributors_1.Contributors],
	            directives: [ng2_bootstrap_1.Alert, ng2_bootstrap_1.Rating],
	            template: " <small>I am Help component and using <a href=\"https://github.com/valor-software/ng2-bootstrap\" target=\"_blank\">ng2-bootstrap</a></small>\n                <br/>\n                <alert type=\"info\">Welcome to Angular2 Bootstrap starter pack!</alert>\n                <rating [(ngModel)]=\"rate\" [max]=\"max\" [readonly]=\"isReadonly\" [titles]=\"['one','two','three']\" ></rating>\n                <ng-content></ng-content>\n                "
	        }), 
	        __metadata('design:paramtypes', [contributors_1.Contributors])
	    ], Help);
	    return Help;
	})(RefreshTheme_1.RefreshTheme);
	exports.Help = Help;


/***/ },
/* 905 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Sliderpanel_1 = __webpack_require__(16);
	var TodoStatsModel_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var Todo2 = (function () {
	    function Todo2(sliderPanel, todoStatModel) {
	        this.todoStatModel = todoStatModel;
	        this.sliderPanel = sliderPanel;
	    }
	    Todo2.prototype.onPrev = function (event) {
	        this.sliderPanel.slideToPage('todo1', 'right');
	    };
	    Todo2 = __decorate([
	        core_1.Component({
	            selector: 'Todo2',
	            styles: [__webpack_require__(__webpack_module_template_argument_1__)],
	            template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                    </button>\n                    <small>I am todo2 component</small>\n                    <ng-content></ng-content>\n                    <div class=\"container\">\n                        <div class=\"row\">\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split\"><i class=\"fa fa-refresh\"></i></div>\n                                <div class=\"update-text\">Total To-Do updates from server: {{todoStatModel.updates}}</div>\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split update-info\"><i class=\"fa fa-folder-open\"></i></div>\n                                <div class=\"update-text\">Total To-Do reads from server: {{todoStatModel.reads}}</div>\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split update-success\"><i class=\"fa fa-leaf\"></i></div>\n                                <div class=\"update-text\">Total To-Do creates from server: {{todoStatModel.creates}}</div>\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <div class=\"update-nag\">\n                                <div class=\"update-split update-danger\"><i class=\"fa fa-warning-sign\"></i></div>\n                                <div class=\"update-text\">Total To-Do deletes from server: {{todoStatModel.deletes}}</div>\n                              </div>\n                            </div>\n\n                        </div>\n                    </div>\n                    "
	        }), 
	        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, TodoStatsModel_1.default])
	    ], Todo2);
	    return Todo2;
	})();
	exports.Todo2 = Todo2;


/***/ },
/* 906 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(17);
	var Lib_1 = __webpack_require__(126);
	__webpack_require__(83);
	var TodoStatsModel_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var url = 'http://secure.digitalsignage.com';
	var TodoItemModel = (function () {
	    function TodoItemModel(text, id) {
	        this.task = text;
	        this.id = id || Lib_1.Lib.guid();
	    }
	    Object.defineProperty(TodoItemModel.prototype, "text", {
	        get: function () {
	            console.log('getting value for task', this.task);
	            return this.task;
	        },
	        set: function (value) {
	            this.task = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TodoItemModel.prototype.getTask = function () {
	        return this.task;
	    };
	    return TodoItemModel;
	})();
	exports.TodoItemModel = TodoItemModel;
	var TodosService = (function () {
	    function TodosService(_http, todoStatsModel) {
	        this._http = _http;
	        this.todoStatsModel = todoStatsModel;
	        var self = this;
	        this.m_dataStore = { todos: [] };
	        this.loadTodos();
	    }
	    TodosService.prototype.addItem = function (newItem) {
	        var todo = new TodoItemModel(newItem);
	        this.m_dataStore.todos.push(todo);
	        this.createTodo(todo);
	    };
	    TodosService.prototype.removeItem = function (item) {
	        var index = this.m_dataStore.todos.indexOf(item);
	        this.m_dataStore.todos.splice(index, 1);
	        this.deleteTodo(item);
	    };
	    TodosService.prototype.editItem = function (item) {
	        var index = this.m_dataStore.todos.indexOf(item);
	        this.m_dataStore.todos[index].text = item.getTask();
	        this.updateTodo(item);
	    };
	    TodosService.prototype.getDataStore = function () {
	        return this.m_dataStore;
	    };
	    TodosService.prototype.loadTodos = function () {
	        var self = this;
	        this.todoStatsModel.reads++;
	        var channel = this._http.get(url + "/todos").map(function (response) { return response.json(); }).subscribe(function (data) {
	            try {
	                data = JSON.parse(data);
	            }
	            catch (e) {
	                channel.unsubscribe();
	                return;
	            }
	            for (var i in data) {
	                var todoItem = new TodoItemModel(data[i].task, data[i].id);
	                self.m_dataStore.todos.push(todoItem);
	            }
	            channel.unsubscribe();
	        }, function (error) { return console.log("Could not load todos " + error); });
	    };
	    TodosService.prototype.createTodo = function (todo) {
	        this.todoStatsModel.creates++;
	        var sendData = JSON.stringify(todo);
	        var channel = this._http.post(url + "/todos", sendData)
	            .map(function (response) { return response.json(); }).subscribe(function (sendData) {
	            channel.unsubscribe();
	        }, function (error) { return console.log('Could not create todo.'); });
	    };
	    TodosService.prototype.updateTodo = function (todo) {
	        this.todoStatsModel.updates++;
	        var channel = this._http.put(url + "/todos/" + todo.id, JSON.stringify(todo))
	            .map(function (response) { return response.json(); }).subscribe(function (data) {
	            channel.unsubscribe();
	        }, function (error) { return console.log('Could not update todo.'); });
	    };
	    TodosService.prototype.deleteTodo = function (todo) {
	        var _this = this;
	        this.todoStatsModel.deletes++;
	        var channel = this._http.delete(url + "/todos/" + todo.id).subscribe(function (response) {
	            _this.m_dataStore.todos.forEach(function (t, index) {
	                if (t.id === todo.id) {
	                    _this.m_dataStore.todos.splice(index, 1);
	                }
	            });
	            channel.unsubscribe();
	        }, function (error) { return console.log('Could not delete todo.'); });
	    };
	    TodosService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, TodoStatsModel_1.default])
	    ], TodosService);
	    return TodosService;
	})();
	exports.TodosService = TodosService;


/***/ },
/* 907 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Sliderpanel_1 = __webpack_require__(16);
	var ModalDialog_1 = __webpack_require__(36);
	var CommBroker_1 = __webpack_require__(7);
	var NotesBase_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var Myip_1 = __webpack_require__(204);
	var Notes2 = (function (_super) {
	    __extends(Notes2, _super);
	    function Notes2(sliderPanel, commBroker) {
	        _super.call(this, sliderPanel, commBroker);
	        this.sliderPanel = sliderPanel;
	        this.commBroker = commBroker;
	        this.me = this;
	        this.slideLeft = 'notes3';
	        this.slideRight = 'notes1';
	    }
	    Notes2 = __decorate([
	        core_1.Component({
	            selector: 'Notes2',
	            providers: [Myip_1.MyIp],
	            directives: [ModalDialog_1.ModalDialog, Myip_1.MyIp],
	            template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes2 component</small>\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  <button (click)=\"openModal()\" type=\"button\" class=\"btn btn-default\">Open Modal</button>\n                </div>\n                <ModalDialog title=\"My owner is Notes2\" content=\"I am here to serve Notes2\" [owner]=\"me\">\n                </ModalDialog>\n                <MyIp></MyIp>\n                <ng-content></ng-content>"
	        }), 
	        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
	    ], Notes2);
	    return Notes2;
	})(NotesBase_1.NotesBase);
	exports.Notes2 = Notes2;


/***/ },
/* 908 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Sliderpanel_1 = __webpack_require__(16);
	var CommBroker_1 = __webpack_require__(7);
	var NotesBase_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var Notes3 = (function (_super) {
	    __extends(Notes3, _super);
	    function Notes3(sliderPanel, commBroker) {
	        _super.call(this, sliderPanel, commBroker);
	        this.sliderPanel = sliderPanel;
	        this.commBroker = commBroker;
	        this.me = this;
	        this.slideLeft = 'notes4';
	        this.slideRight = 'notes2';
	    }
	    Notes3 = __decorate([
	        core_1.Component({
	            selector: 'Notes3',
	            template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes3 component</small>\n                <ng-content></ng-content>"
	        }), 
	        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
	    ], Notes3);
	    return Notes3;
	})(NotesBase_1.NotesBase);
	exports.Notes3 = Notes3;


/***/ },
/* 909 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Sliderpanel_1 = __webpack_require__(16);
	var CommBroker_1 = __webpack_require__(7);
	var NotesBase_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var Notes4 = (function (_super) {
	    __extends(Notes4, _super);
	    function Notes4(sliderPanel, commBroker) {
	        _super.call(this, sliderPanel, commBroker);
	        this.sliderPanel = sliderPanel;
	        this.commBroker = commBroker;
	        this.me = this;
	        this.slideLeft = 'notes5';
	        this.slideRight = 'notes3';
	    }
	    Notes4 = __decorate([
	        core_1.Component({
	            selector: 'Notes4',
	            template: " <button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                </button>\n                <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes4 component</small>\n                <ng-content></ng-content>"
	        }), 
	        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
	    ], Notes4);
	    return Notes4;
	})(NotesBase_1.NotesBase);
	exports.Notes4 = Notes4;


/***/ },
/* 910 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Sliderpanel_1 = __webpack_require__(16);
	var CommBroker_1 = __webpack_require__(7);
	var NotesBase_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var Notes5 = (function (_super) {
	    __extends(Notes5, _super);
	    function Notes5(sliderPanel, commBroker) {
	        _super.call(this, sliderPanel, commBroker);
	        this.sliderPanel = sliderPanel;
	        this.commBroker = commBroker;
	        this.me = this;
	        this.slideRight = 'notes4';
	    }
	    Notes5 = __decorate([
	        core_1.Component({
	            selector: 'Notes5',
	            template: "<button type=\"button\" (click)=\"onPrev($event)\" class=\"btn btn-default btn-sm\">\n                    <span class=\"fa fa-arrow-left \"></span>\n                </button>\n                <hr/>\n                <small>I am notes5 component</small>\n                <ng-content></ng-content>"
	        }), 
	        __metadata('design:paramtypes', [Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
	    ], Notes5);
	    return Notes5;
	})(NotesBase_1.NotesBase);
	exports.Notes5 = Notes5;


/***/ },
/* 911 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Conts_1 = __webpack_require__(11);
	var CommBroker_1 = __webpack_require__(7);
	var Notes1Props_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var Properties = (function () {
	    function Properties(commBroker) {
	        this.commBroker = commBroker;
	        this.commBroker.setService(Conts_1.Consts.Services().Properties, this);
	    }
	    Properties.prototype.setPropView = function (value) {
	        this.value = value;
	    };
	    Properties.prototype.ngOnDestroy = function () {
	    };
	    Properties = __decorate([
	        core_1.Component({
	            selector: 'Properties',
	            directives: [Notes1Props_1.Notes1Props],
	            template: "\n                <h4>Properties</h4>\n                <hr/>\n                 <ul [ngSwitch]=\"value\">\n                  <li *ngSwitchWhen=\"'notes1'\">\n                    <Notes1Props></Notes1Props>\n                  </li>\n                  <li *ngSwitchWhen=\"'notes2'\"><h1>Notes 2</h1></li>\n                  <li *ngSwitchWhen=\"'notes3'\"><h1>Notes 3</h1></li>\n                  <li *ngSwitchWhen=\"'notes4'\"><h1>Notes 4</h1></li>\n                  <li *ngSwitchWhen=\"'notes5'\"><h1>Notes 5</h1></li>\n                  <li *ngSwitchWhen=\"'Digg'\"><h1>Digg</h1></li>\n                  <li *ngSwitchWhen=\"'Weather'\"><h1>Weather</h1></li>\n                  <li *ngSwitchWhen=\"'Contact'\"><h1>Contact</h1></li>\n                  <li *ngSwitchWhen=\"'Logout'\"><h1>Logout</h1></li>\n                </ul>\n                <ng-content></ng-content>\n              "
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
	    ], Properties);
	    return Properties;
	})();
	exports.Properties = Properties;


/***/ },
/* 912 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Conts_1 = __webpack_require__(11);
	var WeatherService_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var SortableHeader_1 = __webpack_require__(__webpack_module_template_argument_1__);
	var common_1 = __webpack_require__(12);
	var OrderBy_1 = __webpack_require__(207);
	var common_2 = __webpack_require__(12);
	__webpack_require__(24);
	__webpack_require__(118);
	__webpack_require__(45);
	__webpack_require__(116);
	__webpack_require__(21);
	__webpack_require__(24);
	var CommBroker_1 = __webpack_require__(7);
	var Weather = (function () {
	    function Weather(weatherService, commBroker) {
	        this.weatherService = weatherService;
	        this.commBroker = commBroker;
	        this.zipControl = new common_1.Control();
	        this.sort = { field: null, desc: false };
	        this.listenWeatherInput();
	        this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('Weather');
	    }
	    Weather.prototype.ngAfterViewInit = function () {
	        this.zipControl.updateValue('91301');
	    };
	    Weather.prototype.listenWeatherInput = function () {
	        var _this = this;
	        return this.weatherItems = this.zipControl.valueChanges
	            .debounceTime(400)
	            .distinctUntilChanged()
	            .filter(function (zip) {
	            return zip.length > 3;
	        }).switchMap(function (zip) {
	            return _this.weatherService.search(zip + "/1");
	        });
	    };
	    Weather = __decorate([
	        core_1.Component({
	            selector: 'Weather',
	            providers: [WeatherService_1.WeatherService, SortableHeader_1.SortableHeader],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPushObserve,
	            pipes: [OrderBy_1.OrderBy],
	            directives: [common_2.COMMON_DIRECTIVES, SortableHeader_1.SortableHeader],
	            styles: ["input {margin: 20px; width: 50%}"],
	            template: "\n    <small>I am a weather component</small>\n    <input type=\"text\" class=\"form-control\" placeholder=\"enter city or zip code\" [ngFormControl]=\"zipControl\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>day</th>\n          <th>icon</th>\n          <th sortableHeader=\"maxtempF\" [sort]=\"sort\">high</th>\n          <th sortableHeader=\"mintempF\" [sort]=\"sort\">low</th>\n        </tr>\n      </thead>\n      <tbody>\n      <!-- no need to subscribe to observable since async does this for us -->\n        <tr *ngFor=\"#item of weatherItems | async | OrderBy:sort.field:sort.desc\">\n          <td>{{ item.day }}</td>\n          <td><img src=\"{{ item.iconPath }}\" style=\"width: 40px; height: 40px\"/></td>\n          <td>{{ item.maxtempF }}</td>\n          <td>{{ item.mintempF }}</td>\n          <!-- <td [innerHtml]=\"item.day\"></td> -->\n        </tr>\n      </tbody>\n    </table>\n  ",
	        }), 
	        __metadata('design:paramtypes', [WeatherService_1.WeatherService, CommBroker_1.CommBroker])
	    ], Weather);
	    return Weather;
	})();
	exports.Weather = Weather;


/***/ },
/* 913 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var film_actions_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var film_selection_view_1 = __webpack_require__(__webpack_module_template_argument_1__);
	var film_view_1 = __webpack_require__(__webpack_module_template_argument_2__);
	var CommBroker_1 = __webpack_require__(7);
	var Consts = __webpack_require__(__webpack_module_template_argument_3__);
	var FilmsComponent = (function () {
	    function FilmsComponent(commBroker, _filmActions) {
	        this.commBroker = commBroker;
	        this._filmActions = _filmActions;
	        this.currentFilm = null;
	        this.isFetchingCurrentFilm = false;
	        var self = this;
	        this._appStore = commBroker.getService(Consts.APP_STORE);
	        this._appStore.subscribe(function (state) {
	            self.filmsCount = state.films.count;
	            self.currentFilm = state.films.currentFilm;
	            self.isFetchingCurrentFilm = state.films.isFetchingFilm;
	        });
	        this._appStore.dispatch(_filmActions.fetchFilms());
	    }
	    FilmsComponent.prototype.setCurrentFilm = function (index) {
	        this._appStore.dispatch(this._filmActions.setCurrentFilm(index));
	        this._appStore.dispatch(this._filmActions.fetchFilm(index));
	    };
	    FilmsComponent = __decorate([
	        core_1.Component({
	            selector: 'films-component',
	            template: "\n        <h3>Films</h3>\n        <film-selection [count]=\"filmsCount\" (current)=\"setCurrentFilm($event)\"></film-selection>\n        <div [ngClass]=\"{'text-muted':isFetchingCurrentFilm,'text-primary':!isFetchingCurrentFilm}\" style=\"margin-top:20px;\">\n            <film [data]=\"currentFilm\" [loading]=\"isFetchingCurrentFilm\"></film>\n        </div>\n\n    ",
	            directives: [film_selection_view_1.FilmSelectionView, film_view_1.FilmView]
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker, film_actions_1.FilmActions])
	    ], FilmsComponent);
	    return FilmsComponent;
	})();
	exports.FilmsComponent = FilmsComponent;


/***/ },
/* 914 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var cart_actions_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var part_actions_1 = __webpack_require__(__webpack_module_template_argument_1__);
	var parts_view_1 = __webpack_require__(__webpack_module_template_argument_2__);
	var cart_view_1 = __webpack_require__(__webpack_module_template_argument_3__);
	var add_part_view_1 = __webpack_require__(__webpack_module_template_argument_4__);
	var reselect_1 = __webpack_require__(33);
	var CommBroker_1 = __webpack_require__(7);
	var Consts = __webpack_require__(__webpack_module_template_argument_5__);
	var partsInCartSelector = reselect_1.createSelector(function (state) { return state.cart; }, function (state) { return state.parts; }, function (cart, parts) {
	    var partsById = parts.reduce(function (map, part) { return (map[part.id] = part) && map; }, {});
	    return cart.map(function (id) { return partsById[id]; });
	});
	var ShoppingComponent = (function () {
	    function ShoppingComponent(commBroker, partActions, cartActions) {
	        var _this = this;
	        this.parts = [];
	        this.partsInCart = [];
	        this.appStore = commBroker.getService(Consts.APP_STORE);
	        this.addPart = partActions.createDispatcher(this.appStore, partActions.addPart);
	        this.addPartToCart = cartActions.createDispatcher(this.appStore, cartActions.addToCart);
	        this.removePartFromCart = cartActions.createDispatcher(this.appStore, cartActions.removeFromCart);
	        this.appStore.subscribe(function (state) {
	            _this.parts = state.parts;
	            _this.partsInCart = partsInCartSelector(state);
	        });
	        ShoppingComponent.createInitialSetOfParts(this.appStore, partActions);
	    }
	    ShoppingComponent.createInitialSetOfParts = function (appStore, partActions) {
	        appStore.dispatch(partActions.addPart("Lightsaber"));
	        appStore.dispatch(partActions.addPart("X-wing diecast"));
	    };
	    ShoppingComponent = __decorate([
	        core_1.Component({
	            selector: 'shopping',
	            template: "\n        <h3>Parts</h3>\n        <add-part (add)=\"addPart($event)\"></add-part>\n        <parts [parts]=\"parts\" [partsInCart]=\"partsInCart\" (addToCart)=\"addPartToCart($event)\"></parts>\n        <hr/>\n        <h3>Cart</h3>\n        <cart [parts]=\"partsInCart\" (removeFromCart)=\"removePartFromCart($event)\"></cart>\n    ",
	            directives: [parts_view_1.PartsView, cart_view_1.CartView, add_part_view_1.AddPartsView]
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker, part_actions_1.PartActions, cart_actions_1.CartActions])
	    ], ShoppingComponent);
	    return ShoppingComponent;
	})();
	exports.ShoppingComponent = ShoppingComponent;


/***/ },
/* 915 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var CartActions = __webpack_require__(__webpack_module_template_argument_0__);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (state, action) {
	    if (state === void 0) { state = []; }
	    if (action === void 0) { action = {}; }
	    switch (action.type) {
	        case CartActions.ADD_TO_CART:
	            return state.concat([action.id]);
	        case CartActions.REMOVE_FROM_CART:
	            return state.filter(function (id) { return id !== action.id; });
	        default:
	            return state;
	    }
	};


/***/ },
/* 916 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var FilmActions = __webpack_require__(__webpack_module_template_argument_0__);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (state, action) {
	    if (state === void 0) { state = []; }
	    if (action === void 0) { action = {}; }
	    switch (action.type) {
	        case FilmActions.REQUEST_FILMS:
	            return Object.assign({}, state, { isFetchingFilms: true });
	        case FilmActions.RECEIVE_FILMS:
	            return Object.assign({}, state, { isFetchingFilms: false, list: action.films });
	        case FilmActions.REQUEST_FILM:
	            return Object.assign({}, state, { isFetchingFilm: true });
	        case FilmActions.RECEIVE_FILM:
	            return Object.assign({}, state, { isFetchingFilm: false, currentFilm: action.film });
	        case FilmActions.RECEIVE_NUMBER_OF_FILMS:
	            return Object.assign({}, state, { count: action.count });
	        case FilmActions.CURRENT_FILMS:
	            return Object.assign({}, state, { current: action.currentIndex });
	        default:
	            return state;
	    }
	};


/***/ },
/* 917 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var PartActions = __webpack_require__(__webpack_module_template_argument_0__);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (state, action) {
	    if (state === void 0) { state = {}; }
	    if (action === void 0) { action = {}; }
	    switch (action.type) {
	        case PartActions.ADD_PART:
	            return { id: action.id, name: action.name };
	        default:
	            return state;
	    }
	};


/***/ },
/* 918 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var PartActions = __webpack_require__(__webpack_module_template_argument_0__);
	var part_reducer_1 = __webpack_require__(__webpack_module_template_argument_1__);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (state, action) {
	    if (state === void 0) { state = []; }
	    if (action === void 0) { action = {}; }
	    switch (action.type) {
	        case PartActions.ADD_PART:
	            return state.concat([part_reducer_1.default(null, action)]);
	        default:
	            return state;
	    }
	};


/***/ },
/* 919 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var UserActions = __webpack_require__(__webpack_module_template_argument_0__);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (state, action) {
	    if (state === void 0) { state = {}; }
	    if (action === void 0) { action = {}; }
	    switch (action.type) {
	        case UserActions.REQUEST_USERS:
	            return Object.assign({}, state, { isFetching: true });
	        case UserActions.RECEIVE_USERS:
	            return Object.assign({}, state, { isFetching: false, list: action.users, updated: action.updated });
	        case UserActions.CURRENT_USER:
	            return Object.assign({}, state, { current: action.current });
	        case UserActions.SET_FILM_FILTER:
	            return Object.assign({}, state, { filmFilter: action.filmFilter });
	        default:
	            return state;
	    }
	};


/***/ },
/* 920 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__, __webpack_module_template_argument_6__, __webpack_module_template_argument_7__, __webpack_module_template_argument_8__, __webpack_module_template_argument_9__, __webpack_module_template_argument_10__, __webpack_module_template_argument_11__, __webpack_module_template_argument_12__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var redux_1 = __webpack_require__(182);
	var thunk = __webpack_require__(181);
	var parts_reducer_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var cart_reducer_1 = __webpack_require__(__webpack_module_template_argument_1__);
	var films_reducer_1 = __webpack_require__(__webpack_module_template_argument_2__);
	var users_reducer_1 = __webpack_require__(__webpack_module_template_argument_3__);
	var angular2_redux_util_1 = __webpack_require__(20);
	var shopping_component_1 = __webpack_require__(__webpack_module_template_argument_4__);
	var CommBroker_1 = __webpack_require__(7);
	var part_actions_1 = __webpack_require__(__webpack_module_template_argument_5__);
	var cart_actions_1 = __webpack_require__(__webpack_module_template_argument_6__);
	var Consts = __webpack_require__(__webpack_module_template_argument_7__);
	var admin_component_1 = __webpack_require__(__webpack_module_template_argument_8__);
	var films_component_1 = __webpack_require__(__webpack_module_template_argument_9__);
	var user_actions_1 = __webpack_require__(__webpack_module_template_argument_10__);
	var film_actions_1 = __webpack_require__(__webpack_module_template_argument_11__);
	var appStoreFactory = function () {
	    var reducers = redux_1.combineReducers({ parts: parts_reducer_1.default, cart: cart_reducer_1.default, films: films_reducer_1.default, users: users_reducer_1.default });
	    var middlewareEnhancer = redux_1.applyMiddleware(thunk, angular2_redux_util_1.LoggerMiddleware);
	    var isDebug = window.devToolsExtension;
	    var applyDevTools = function () { return isDebug ? window.devToolsExtension() : function (f) { return f; }; };
	    var enhancers = redux_1.compose(middlewareEnhancer, applyDevTools());
	    var createStoreWithEnhancers = enhancers(redux_1.createStore);
	    var reduxAppStore = createStoreWithEnhancers(reducers);
	    return new angular2_redux_util_1.AppStore(reduxAppStore);
	};
	var Newsboard = (function () {
	    function Newsboard(commBroker) {
	        this.commBroker = commBroker;
	        var reduxAppStore = appStoreFactory();
	        this.commBroker.setService(Consts.APP_STORE, reduxAppStore);
	    }
	    Newsboard = __decorate([
	        core_1.Component({
	            selector: 'Newsboard',
	            directives: [shopping_component_1.ShoppingComponent, admin_component_1.AdminComponent, films_component_1.FilmsComponent],
	            template: __webpack_require__(__webpack_module_template_argument_12__),
	            providers: [part_actions_1.PartActions, cart_actions_1.CartActions, part_actions_1.PartActions, user_actions_1.UserActions, film_actions_1.FilmActions]
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
	    ], Newsboard);
	    return Newsboard;
	})();
	exports.Newsboard = Newsboard;


/***/ },
/* 921 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var user_actions_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var users_view_1 = __webpack_require__(__webpack_module_template_argument_1__);
	var user_view_1 = __webpack_require__(__webpack_module_template_argument_2__);
	var reselect_1 = __webpack_require__(33);
	var CommBroker_1 = __webpack_require__(7);
	var Consts = __webpack_require__(__webpack_module_template_argument_3__);
	var AdminComponent = (function () {
	    function AdminComponent(commBroker, userActions) {
	        this.usersToShow = null;
	        this.currentUser = null;
	        this.filmFilter = null;
	        var self = this;
	        var appStore = commBroker.getService(Consts.APP_STORE);
	        this.setCurrentUser = userActions.createDispatcher(appStore, userActions.setCurrentUser);
	        this.setFilmFilter = userActions.createDispatcher(appStore, userActions.setFilmFilter);
	        var usersToShowSelector = AdminComponent.createUsersToShowSelector();
	        appStore.subscribe(function (state) {
	            self.usersToShow = usersToShowSelector(state);
	            self.currentUser = state.users.current;
	            self.filmFilter = state.users.filmFilter;
	        });
	        appStore.dispatch(userActions.fetchUsers());
	    }
	    AdminComponent.createUsersToShowSelector = function () {
	        var currentFilmSelector = reselect_1.createSelector(function (state) { return state.users.filmFilter; }, function (state) { return state.films.currentFilm; }, function (filmFilter, currentFilm) { return filmFilter && currentFilm ? currentFilm : null; });
	        return reselect_1.createSelector(function (state) { return state.users.list; }, currentFilmSelector, function (users, currentFilm) { return currentFilm ? users.filter(AdminComponent.getFilter(currentFilm)) : users; });
	    };
	    ;
	    AdminComponent.getFilter = function (film) {
	        var ids = film.characters
	            .map(function (url) { return AdminComponent.getId(url); })
	            .reduce(function (idsMap, id) { return (idsMap[id] = true) && idsMap; }, {});
	        return function (user) { return ids[AdminComponent.getId(user.url)]; };
	    };
	    ;
	    AdminComponent.getId = function (url) {
	        return url.replace(/[a-z\/\.\:]*/g, "");
	    };
	    ;
	    AdminComponent = __decorate([
	        core_1.Component({
	            selector: 'admin',
	            template: __webpack_require__(__webpack_module_template_argument_4__),
	            directives: [users_view_1.UsersView, user_view_1.UserView]
	        }), 
	        __metadata('design:paramtypes', [CommBroker_1.CommBroker, user_actions_1.UserActions])
	    ], AdminComponent);
	    return AdminComponent;
	})();
	exports.AdminComponent = AdminComponent;


/***/ },
/* 922 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	/* WEBPACK VAR INJECTION */(function(bootbox) {var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Sliderpanel_1 = __webpack_require__(16);
	var ModalDialog_1 = __webpack_require__(36);
	var CommBroker_1 = __webpack_require__(7);
	var Conts_1 = __webpack_require__(11);
	var NotesBase_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var MailModel_1 = __webpack_require__(65);
	var CharCount_1 = __webpack_require__(206);
	var common_1 = __webpack_require__(12);
	var StartCapValidator_1 = __webpack_require__(209);
	var NameTakenValidator_1 = __webpack_require__(208);
	var Notes1 = (function (_super) {
	    __extends(Notes1, _super);
	    function Notes1(fb, sliderPanel, commBroker) {
	        _super.call(this, sliderPanel, commBroker);
	        this.sliderPanel = sliderPanel;
	        this.commBroker = commBroker;
	        this.slideLeft = 'notes2';
	        this.notesForm = fb.group({
	            'userName': ['', common_1.Validators.required],
	            'phone': ['(xxx)-xxxx-xxx', common_1.Validators.minLength(10)],
	            'notesTextArea': ['enter text here',
	                common_1.Validators.compose([
	                    common_1.Validators.required,
	                    StartCapValidator_1.default])],
	            'login': ['',
	                common_1.Validators.compose([
	                    common_1.Validators.required,
	                    StartCapValidator_1.default]), NameTakenValidator_1.default]
	        });
	        this.notesTextArea = this.notesForm.controls['notesTextArea'];
	        this.userName = this.notesForm.controls['userName'];
	        this.login = this.notesForm.controls['login'];
	        this.phone = this.notesForm.controls['phone'];
	        this.model = new MailModel_1.MailModel(0, '', true, '', '');
	        this.mapModel = new Map();
	        this.mapModel.set('my name', 'Lion Demo');
	        this.observeNameChange();
	        this.observeFormChange();
	        this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('notes1');
	    }
	    Notes1.prototype.observeNameChange = function () {
	        this.userName.valueChanges.debounceTime(100).subscribe(function (value) {
	            console.log('name changed, notified via observable: ', value);
	        });
	    };
	    Notes1.prototype.observeFormChange = function () {
	        this.notesForm.valueChanges.debounceTime(100).subscribe(function (value) {
	            console.log('forum changed, notified via observable: ', value);
	        });
	    };
	    Notes1.prototype.onSubmit = function (event) {
	        bootbox.alert("sent " + event.notesTextArea);
	    };
	    Notes1.prototype.onChange = function (event) {
	        if (event.target.value.length < 3)
	            console.log('text too short for subject');
	    };
	    Notes1 = __decorate([
	        core_1.Component({
	            selector: 'Notes1',
	            directives: [ModalDialog_1.ModalDialog, common_1.FORM_DIRECTIVES],
	            pipes: [CharCount_1.CharCount],
	            styles: [__webpack_require__(__webpack_module_template_argument_1__)],
	            template: __webpack_require__(__webpack_module_template_argument_2__)
	        }), 
	        __metadata('design:paramtypes', [common_1.FormBuilder, Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
	    ], Notes1);
	    return Notes1;
	})(NotesBase_1.NotesBase);
	exports.Notes1 = Notes1;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)))

/***/ },
/* 923 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var TodoRemote_1 = __webpack_require__(__webpack_module_template_argument_0__);
	var Observable_1 = __webpack_require__(3);
	__webpack_require__(44);
	__webpack_require__(82);
	__webpack_require__(21);
	__webpack_require__(117);
	__webpack_require__(24);
	var TodoItem = (function () {
	    function TodoItem(elementRef) {
	        this.elementRef = elementRef;
	        this.editMode = false;
	        this.done = new core_1.EventEmitter();
	        this.edit = new core_1.EventEmitter();
	        this.listenMouse();
	    }
	    TodoItem.prototype.listenMouse = function () {
	        var _this = this;
	        var vm = this;
	        var clk = Observable_1.Observable.fromEvent(this.elementRef.nativeElement, 'click').map(function (e) {
	            vm.editMode = !vm.editMode;
	            return Observable_1.Observable.of(vm.editMode);
	        });
	        clk.distinctUntilChanged().subscribe(function (events) {
	            console.log("events");
	            console.log(events);
	            if (events.value) {
	                jQuery(_this.elementRef.nativeElement).find('.flipcard_100').addClass('flipped');
	            }
	            else {
	                jQuery(_this.elementRef.nativeElement).find('.flipcard_100').removeClass('flipped');
	            }
	        });
	    };
	    TodoItem.prototype.doneClicked = function ($event) {
	        $event.stopPropagation();
	        console.log("doneClicked($event) { ... ");
	        console.log("$event");
	        console.log($event);
	        this.done.next(this.item);
	    };
	    TodoItem.prototype.editClicked = function () {
	        this.editMode = !this.editMode;
	        if (this.editMode)
	            return;
	        this.edit.next(this.item);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', TodoRemote_1.TodoItemModel)
	    ], TodoItem.prototype, "item", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], TodoItem.prototype, "done", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], TodoItem.prototype, "edit", void 0);
	    TodoItem = __decorate([
	        core_1.Component({
	            selector: '.todo-item',
	            template: __webpack_require__(__webpack_module_template_argument_1__),
	            styles: [__webpack_require__(__webpack_module_template_argument_2__)],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], TodoItem);
	    return TodoItem;
	})();
	exports.TodoItem = TodoItem;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }
]);
//# sourceMappingURL=app.js.map