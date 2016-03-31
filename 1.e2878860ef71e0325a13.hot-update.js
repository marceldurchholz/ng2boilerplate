webpackHotUpdate(1,{

/***/ 904:
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

/***/ 905:
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

/***/ 906:
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

/***/ 907:
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
	var Myip_1 = __webpack_require__(207);
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

/***/ 908:
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

/***/ 909:
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

/***/ 910:
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

/***/ 911:
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

/***/ 912:
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
	var OrderBy_1 = __webpack_require__(210);
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

/***/ 913:
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

/***/ 914:
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

/***/ 915:
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

/***/ 916:
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

/***/ 917:
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

/***/ 918:
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

/***/ 919:
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

/***/ 920:
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
	var redux_1 = __webpack_require__(185);
	var thunk = __webpack_require__(184);
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

/***/ 921:
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

/***/ 922:
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
	var CharCount_1 = __webpack_require__(209);
	var common_1 = __webpack_require__(12);
	var StartCapValidator_1 = __webpack_require__(212);
	var NameTakenValidator_1 = __webpack_require__(211);
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

/***/ 923:
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

})
//# sourceMappingURL=1.e2878860ef71e0325a13.hot-update.js.map