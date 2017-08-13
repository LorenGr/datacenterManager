webpackJsonp([1],{

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactJss = __webpack_require__(49);

var _reactJss2 = _interopRequireDefault(_reactJss);

var _servercanvas = __webpack_require__(606);

var _servercanvas2 = _interopRequireDefault(_servercanvas);

var _servercreator = __webpack_require__(608);

var _servercreator2 = _interopRequireDefault(_servercreator);

var _appinstcreator = __webpack_require__(605);

var _appinstcreator2 = _interopRequireDefault(_appinstcreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    container: {
        margin: 0,
        fontFamily: 'Open Sans',
        color: 'white',
        marginTop: 40
    },
    aside: {
        color: 'white',
        width: 200,
        marginLeft: 40,
        backgroundColor: 'dimgrey',
        position: 'fixed',
        top: 0,
        height: '100%'
    },
    asideTitle: {
        fontSize: 13,
        margin: 20,
        display: 'block',
        paddingTop: 22
    },
    section: {
        marginLeft: 278
    }
};

//App Components


var DataCenter = function DataCenter(_ref) {
    var classes = _ref.classes;
    return _react2.default.createElement(
        'div',
        { className: classes.container },
        _react2.default.createElement(
            'aside',
            { className: classes.aside },
            _react2.default.createElement(
                'nav',
                null,
                _react2.default.createElement(_servercreator2.default, null),
                _react2.default.createElement(
                    'small',
                    { className: classes.asideTitle },
                    'Available apps'
                ),
                _react2.default.createElement(_appinstcreator2.default, null)
            )
        ),
        _react2.default.createElement(
            'section',
            { className: classes.section },
            _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    ' DataCenter Management'
                )
            ),
            _react2.default.createElement(_servercanvas2.default, null)
        )
    );
};

exports.default = (0, _reactJss2.default)(styles)(DataCenter);

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\datacenterManager\\src\\components\\datacenter.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\datacenterManager\\src\\components\\datacenter.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reducers = undefined;

var _redux = __webpack_require__(71);

var _datacenter = __webpack_require__(610);

var _datacenter2 = _interopRequireDefault(_datacenter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = exports.reducers = (0, _redux.combineReducers)({
    datacenter: _datacenter2.default
});

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\datacenterManager\\src\\reducers\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\datacenterManager\\src\\reducers\\index.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppInstContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(43);

var _reactJss = __webpack_require__(49);

var _reactJss2 = _interopRequireDefault(_reactJss);

var _timeagoReact = __webpack_require__(155);

var _timeagoReact2 = _interopRequireDefault(_timeagoReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    container: {
        height: '100%',
        textAlign: 'center',
        lineHeight: '30px'
    },
    partitionedContainer: {
        width: '50%',
        height: '100%',
        display: 'inline-block',
        textAlign: 'center',
        verticalAlign: 'top',
        lineHeight: '30px'
    },
    appName: {
        fontSize: 11,
        margin: 0,
        lineHeight: '20px'

    },
    appShortName: {
        marginTop: 3,
        marginBottom: 4,
        fontSize: 50
    },
    created: {
        fontSize: 8,
        color: 'black'
    },
    createdDate: {
        marginLeft: 3
    },
    deleteButton: {
        background: 'none',
        border: '1px solid white',
        padding: '6px 10px',
        marginTop: 7,
        color: 'white',
        fontWeight: 'bold',
        marginRight: 7,
        borderRadius: 14,
        cursor: 'pointer',
        opacity: 0.4,
        '&:hover': {
            opacity: 1
        }
    },
    deleteButtonContainer: {
        textAlign: 'right'
    }

};

var AppInstanceContent = function AppInstanceContent(_ref) {
    var app = _ref.app,
        classes = _ref.classes;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h2',
            { className: classes.appName },
            app.application.label
        ),
        _react2.default.createElement(
            'h1',
            { className: classes.appShortName },
            app.application.short
        ),
        _react2.default.createElement(
            'small',
            { className: classes.created },
            'Added',
            _react2.default.createElement(_timeagoReact2.default, { className: classes.createdDate, live: false, datetime: app.created })
        )
    );
};

var AppInstanceDelete = function AppInstanceDelete(_ref2) {
    var onClick = _ref2.onClick,
        app = _ref2.app,
        classes = _ref2.classes;
    return _react2.default.createElement(
        'div',
        { className: classes.deleteButtonContainer },
        _react2.default.createElement(
            'button',
            { onClick: onClick, className: classes.deleteButton },
            '-'
        )
    );
};

var AppInstContainer = exports.AppInstContainer = function (_React$Component) {
    _inherits(AppInstContainer, _React$Component);

    function AppInstContainer(props) {
        _classCallCheck(this, AppInstContainer);

        return _possibleConstructorReturn(this, (AppInstContainer.__proto__ || Object.getPrototypeOf(AppInstContainer)).call(this, props));
    }

    _createClass(AppInstContainer, [{
        key: 'deleteInstance',
        value: function deleteInstance(instance) {
            this.props.dispatch({
                type: 'DESTROY_APP_INST',
                app: instance.application,
                instance: instance
            });
        }
    }, {
        key: 'render',
        value: function render(props) {
            var _this2 = this;

            var classes = this.props.classes;
            return this.props.partitioned ? _react2.default.createElement(
                'div',
                { style: { backgroundColor: this.props.app.application.color },
                    className: classes.partitionedContainer },
                _react2.default.createElement(AppInstanceDelete, _extends({ onClick: function onClick() {
                        return _this2.deleteInstance(_this2.props.app);
                    } }, this.props)),
                _react2.default.createElement(AppInstanceContent, this.props)
            ) : _react2.default.createElement(
                'div',
                { style: { backgroundColor: this.props.app.application.color }, className: classes.container },
                _react2.default.createElement(AppInstanceDelete, _extends({ onClick: function onClick() {
                        return _this2.deleteInstance(_this2.props.app);
                    } }, this.props)),
                _react2.default.createElement(AppInstanceContent, this.props)
            );
        }
    }]);

    return AppInstContainer;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)()((0, _reactJss2.default)(styles)(AppInstContainer));

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\datacenterManager\\src\\components\\appinstcontainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\datacenterManager\\src\\components\\appinstcontainer.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppInstCreator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(43);

var _reactJss = __webpack_require__(49);

var _reactJss2 = _interopRequireDefault(_reactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var applications = [{ id: 0, label: "Hadoop", short: "Hd", color: 'pink' }, { id: 1, label: "Rails", short: "Rl", color: 'orange' }, { id: 2, label: "Chronos", short: "Ch", color: 'red' }, { id: 3, label: "Storm", short: "St", color: 'blue' }, { id: 4, label: "Spark", short: "Sp", color: 'green' }];

var styles = {
    ul: {
        margin: 0,
        padding: 0,
        marginBottom: 50
    },
    li: {
        listStyle: 'none',
        width: 200,
        clear: 'right',
        borderLeftStyle: 'solid',
        borderLeftWidth: 4,
        height: 40,
        lineHeight: '37px',
        textIndent: 16,
        marginTop: 1,
        backgroundColor: 'grey'

    },
    buttonsContainer: {
        display: 'inline-block',
        float: 'right',
        right: -18,
        position: 'relative'
    },
    button: {
        border: '2px solid darkgrey',
        background: 'none',
        color: 'darkgrey',
        width: 26,
        height: 27,
        cursor: 'pointer',
        borderRadius: 20,
        marginRight: 7,
        fontWeight: 'bold',
        '&:hover': {
            border: '2px solid white',
            color: 'white'
        }
    },
    creatorButton: {
        border: 'none',
        color: 'white'
    },
    amount: {
        color: 'darkgrey',
        fontSize: 12,
        marginLeft: 7,
        fontWeight: 'bold'
    }

};

var AppInstCreator = exports.AppInstCreator = function (_React$Component) {
    _inherits(AppInstCreator, _React$Component);

    _createClass(AppInstCreator, [{
        key: 'createAppInstance',
        value: function createAppInstance(app) {
            this.props.dispatch({
                type: 'ADD_APP_INST', app: app
            });
        }
    }, {
        key: 'destroyAppInstance',
        value: function destroyAppInstance(app) {
            this.props.dispatch({
                type: 'DESTROY_APP_INST', app: app
            });
        }
    }]);

    function AppInstCreator(props) {
        _classCallCheck(this, AppInstCreator);

        var _this = _possibleConstructorReturn(this, (AppInstCreator.__proto__ || Object.getPrototypeOf(AppInstCreator)).call(this, props));

        _this.createAppInstance = _this.createAppInstance.bind(_this);
        _this.destroyAppInstance = _this.destroyAppInstance.bind(_this);
        return _this;
    }

    _createClass(AppInstCreator, [{
        key: 'render',
        value: function render(props) {
            var _this2 = this;

            var classes = this.props.classes;
            return _react2.default.createElement(
                'ul',
                { className: classes.ul },
                applications.map(function (app) {
                    var appInstancesAmount = _this2.props.apps[app.id] && _this2.props.apps[app.id].length;
                    return _react2.default.createElement(
                        'li',
                        { style: { borderLeftColor: app.color },
                            className: classes.li, key: app.id },
                        app.label,
                        appInstancesAmount > 0 ? _react2.default.createElement(
                            'span',
                            { className: classes.amount },
                            '(',
                            appInstancesAmount,
                            ')'
                        ) : _react2.default.createElement('span', null),
                        _react2.default.createElement(
                            'div',
                            { className: classes.buttonsContainer },
                            _react2.default.createElement(
                                'button',
                                { className: classes.button, onClick: function onClick() {
                                        _this2.destroyAppInstance(app);
                                    } },
                                '-'
                            ),
                            _react2.default.createElement(
                                'button',
                                { style: { background: app.color }, className: [classes.button, classes.creatorButton].join(' '), onClick: function onClick() {
                                        _this2.createAppInstance(app);
                                    } },
                                '+'
                            )
                        )
                    );
                })
            );
        }
    }]);

    return AppInstCreator;
}(_react2.default.Component);

;

function mapStateToProps(state) {
    return {
        apps: state.datacenter.apps
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactJss2.default)(styles)(AppInstCreator));

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\datacenterManager\\src\\components\\appinstcreator.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\datacenterManager\\src\\components\\appinstcreator.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ServerCanvas = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(43);

var _reactJss = __webpack_require__(49);

var _reactJss2 = _interopRequireDefault(_reactJss);

var _servercontainer = __webpack_require__(607);

var _servercontainer2 = _interopRequireDefault(_servercontainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Application Components


var styles = {
    canvas: {
        backgroundColor: 'black'
    }
};

var ServerCanvas = exports.ServerCanvas = function (_React$Component) {
    _inherits(ServerCanvas, _React$Component);

    function ServerCanvas(props) {
        _classCallCheck(this, ServerCanvas);

        var _this = _possibleConstructorReturn(this, (ServerCanvas.__proto__ || Object.getPrototypeOf(ServerCanvas)).call(this, props));

        for (var i = 0; i < 4; i++) {
            setTimeout(function () {
                _this.props.dispatch({ type: 'ADD_SERVER' });
            }, i * 150);
        }
        return _this;
    }

    _createClass(ServerCanvas, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var classes = this.props.classes;
            return _react2.default.createElement(
                'div',
                { className: classes.canvas },
                Object.keys(this.props.servers).map(function (key) {
                    var server = _this2.props.servers[key];
                    return _react2.default.createElement(_servercontainer2.default, { key: server.id, server: server });
                })
            );
        }
    }]);

    return ServerCanvas;
}(_react2.default.Component);

function mapStateToProps(state) {
    return {
        servers: state.datacenter.servers
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactJss2.default)(styles)(ServerCanvas));

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\datacenterManager\\src\\components\\servercanvas.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\datacenterManager\\src\\components\\servercanvas.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ServerContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(43);

var _reactJss = __webpack_require__(49);

var _reactJss2 = _interopRequireDefault(_reactJss);

var _reactTransitionGroup = __webpack_require__(154);

var _appinstcontainer = __webpack_require__(604);

var _appinstcontainer2 = _interopRequireDefault(_appinstcontainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Application Components


var styles = {
    container: {
        backgroundColor: 'darkGray',
        width: 200,
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        display: 'inline-block',
        height: 150,
        verticalAlign: 'top'
    },
    emptyContainer: {
        opacity: 0.3
    },

    aniEnter: {
        opacity: 0,
        scale: 0.5
    },
    aniEnterActive: {
        opacity: 1,
        scale: 1,
        transition: 'all 1500ms ease-in'
    }
};

var ServerContainer = exports.ServerContainer = function (_React$Component) {
    _inherits(ServerContainer, _React$Component);

    function ServerContainer(props) {
        _classCallCheck(this, ServerContainer);

        return _possibleConstructorReturn(this, (ServerContainer.__proto__ || Object.getPrototypeOf(ServerContainer)).call(this, props));
    }

    _createClass(ServerContainer, [{
        key: 'render',
        value: function render(props) {

            var classes = this.props.classes;
            var app_instances = void 0;
            var apps = this.props.server.apps;

            if (!apps.length) {
                app_instances = _react2.default.createElement('div', { key: 0, className: [classes.container, classes.emptyContainer].join(' ') });
            }

            if (apps.length === 1) {
                app_instances = _react2.default.createElement(
                    'div',
                    { key: 1, className: classes.container },
                    _react2.default.createElement(_appinstcontainer2.default, { partitioned: false, app: apps[0] })
                );
            }

            if (apps.length === 2) {
                app_instances = _react2.default.createElement(
                    'div',
                    { key: 2, className: classes.container },
                    _react2.default.createElement(_appinstcontainer2.default, { partitioned: true, app: apps[0] }),
                    _react2.default.createElement(_appinstcontainer2.default, { partitioned: true, app: apps[1] })
                );
            }

            return _react2.default.createElement(
                _reactTransitionGroup.CSSTransitionGroup,
                {
                    transitionName: 'slots',
                    transitionLeave: false,
                    transitionAppear: false,
                    transitionEnter: true,
                    transitionEnterTimeout: 200 },
                app_instances
            );
        }
    }]);

    return ServerContainer;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)()((0, _reactJss2.default)(styles)(ServerContainer));

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\datacenterManager\\src\\components\\servercontainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\datacenterManager\\src\\components\\servercontainer.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ServerCreator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(43);

var _reactJss = __webpack_require__(49);

var _reactJss2 = _interopRequireDefault(_reactJss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    button: {
        border: '2px solid darkgrey',
        background: 'none',
        color: 'darkgrey',
        width: 43,
        height: 44,
        fontSize: 30,
        cursor: 'pointer',
        borderRadius: 20,
        marginRight: 7,
        fontWeight: 'bold',
        '&:hover': {
            border: '2px solid white',
            color: 'white'
        }
    },
    buttonLabel: {
        marginTop: 20,
        display: 'block',
        fontSize: 11,
        margin: 8
    },
    col: {
        display: 'inline-block'
    },

    container: {
        marginTop: 40,
        marginBottom: 20,
        textAlign: 'center',
        height: 70
    }
};

var ServerCreator = exports.ServerCreator = function (_React$Component) {
    _inherits(ServerCreator, _React$Component);

    function ServerCreator(props) {
        _classCallCheck(this, ServerCreator);

        var _this = _possibleConstructorReturn(this, (ServerCreator.__proto__ || Object.getPrototypeOf(ServerCreator)).call(this, props));

        _this.addServer = _this.addServer.bind(_this);
        _this.destroyServer = _this.destroyServer.bind(_this);
        return _this;
    }

    _createClass(ServerCreator, [{
        key: 'addServer',
        value: function addServer() {
            this.props.dispatch({ type: 'ADD_SERVER' });
        }
    }, {
        key: 'destroyServer',
        value: function destroyServer() {
            this.props.dispatch({ type: 'DESTROY_SERVER' });
        }
    }, {
        key: 'render',
        value: function render() {
            var classes = this.props.classes;
            return _react2.default.createElement(
                'div',
                { className: classes.container },
                _react2.default.createElement(
                    'div',
                    { className: classes.col },
                    _react2.default.createElement(
                        'button',
                        { className: classes.button,
                            onClick: this.addServer },
                        '+'
                    ),
                    _react2.default.createElement(
                        'label',
                        { className: classes.buttonLabel },
                        'Add Server'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: classes.col },
                    _react2.default.createElement(
                        'button',
                        { className: classes.button,
                            onClick: this.destroyServer },
                        '-'
                    ),
                    _react2.default.createElement(
                        'label',
                        { className: classes.buttonLabel },
                        'Destroy'
                    )
                )
            );
        }
    }]);

    return ServerCreator;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)()((0, _reactJss2.default)(styles)(ServerCreator));

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\datacenterManager\\src\\components\\servercreator.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\datacenterManager\\src\\components\\servercreator.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(79);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(71);

var _reactRedux = __webpack_require__(43);

var _index = __webpack_require__(283);

var _datacenter = __webpack_require__(282);

var _datacenter2 = _interopRequireDefault(_datacenter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Redux
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

//App Components

var store = (0, _redux.createStore)(_index.reducers);

_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_datacenter2.default, null)
), document.getElementById('datacenter_container'));

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\datacenterManager\\src\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\datacenterManager\\src\\index.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = datacenter;

var _lodash = __webpack_require__(153);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function datacenter() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        servers: {}, apps: {}
    };
    var action = arguments[1];

    var new_state = JSON.parse(JSON.stringify(state));
    var generateID = function generateID() {
        return new Date().getTime();
    },
        findIndexAndRemove = function findIndexAndRemove(arr, callback) {
        arr.splice(arr.findIndex(callback), 1);
    };
    var unique_id = void 0;

    var getNextAvailableServer = function getNextAvailableServer() {
        var sorted_servers = (0, _lodash2.default)(new_state.servers, 'created').reverse();
        var availableServer = false;
        var getFirstServerWith = function getFirstServerWith(amount) {
            //Find empty servers
            sorted_servers.map(function (server) {
                if (server.apps.length === amount) {
                    availableServer = server.id;
                    return false;
                }
            });
            return availableServer;
        };
        return getFirstServerWith(0) || getFirstServerWith(1);
    };

    switch (action.type) {
        case "ADD_SERVER":
            unique_id = generateID();
            new_state.servers[unique_id] = {
                'created': unique_id,
                'id': unique_id,
                'apps': []
            };
            return new_state;

        case "DESTROY_SERVER":
            if (!Object.keys(new_state.servers).length) return new_state;

            //Find last server created
            var sorted_servers = (0, _lodash2.default)(new_state.servers, 'created').reverse();

            //Extract applications from server to be killed
            var purgedAppInstances = new_state.servers[sorted_servers[0].id].apps;

            //Kill server
            delete new_state.servers[sorted_servers[0].id];

            if (purgedAppInstances.length) {
                purgedAppInstances.forEach(function (instance) {
                    var nextServer = getNextAvailableServer();

                    if (nextServer) {
                        //Point extraced application instances to a new server
                        instance.server = nextServer;
                        new_state.servers[nextServer].apps.push(instance);
                        new_state.apps[instance.application.id].forEach(function (appInstance) {
                            if (appInstance.id === instance.id) appInstance.server = nextServer;
                        });
                    } else {
                        //No server to point to, therefore kill application instances
                        findIndexAndRemove(new_state.apps[instance.application.id], function (appInstance) {
                            return appInstance.id === instance.id;
                        });
                    }
                });
            }
            return new_state;

        case "ADD_APP_INST":
            if (!Object.keys(new_state.servers).length) return new_state;
            var server = getNextAvailableServer();
            if (!server) return new_state;
            unique_id = generateID();
            var app = {
                'created': unique_id,
                'id': unique_id,
                'application': action.app,
                server: server
            };
            //Add new application instance
            if (!new_state.apps[action.app.id]) new_state.apps[action.app.id] = [];
            new_state.apps[action.app.id].push(app);
            new_state.servers[server].apps.push(app);
            return new_state;

        case 'DESTROY_APP_INST':
            if (!new_state.apps[action.app.id] || !new_state.apps[action.app.id].length) return new_state;

            //If an instance not specified then delete last one created
            var lastInstance = action.instance || new_state.apps[action.app.id].pop();

            //If an instance specified then delete it
            if (action.instance) {
                findIndexAndRemove(new_state.apps[action.app.id], function (appInstance) {
                    return appInstance.id === lastInstance.id;
                });
            }

            //Delete application reference on server instance
            findIndexAndRemove(new_state.servers[lastInstance.server].apps, function (app) {
                return app.id === lastInstance.id;
            });
            return new_state;

        default:
            return state;
    }
}

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\datacenterManager\\src\\reducers\\datacenter.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\datacenterManager\\src\\reducers\\datacenter.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

},[609]);