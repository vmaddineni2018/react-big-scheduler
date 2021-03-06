'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _profileImage = require('./assets/profile.jpeg')

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourceView = (_temp = _class = function (_Component) {
    _inherits(ResourceView, _Component);

    function ResourceView(props) {
        _classCallCheck(this, ResourceView);

        return _possibleConstructorReturn(this, (ResourceView.__proto__ || Object.getPrototypeOf(ResourceView)).call(this, props));
    }

    _createClass(ResourceView, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                schedulerData = _props.schedulerData,
                contentScrollbarHeight = _props.contentScrollbarHeight,
                slotClickedFunc = _props.slotClickedFunc,
                slotItemTemplateResolver = _props.slotItemTemplateResolver;
            var renderData = schedulerData.renderData;


            var width = schedulerData.getResourceTableWidth() - 2;
            var paddingBottom = contentScrollbarHeight;
            var resourceList = renderData.map(function (item) {
                var a = slotClickedFunc != undefined ? _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                            slotClickedFunc(schedulerData, item);
                        } },
                    _react2.default.createElement('span', { className: 'expander-space' }),
                    item.slotName
                ) : _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement('span', { className: 'expander-space' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        item.slotName
                    )
                );
                var slotItem2 = _react2.default.createElement(
                    'div',
                    { title: item.slotName,className: 'overflow-text header2-text', style: { textAlign: "left" }  },
                    _react2.default.createElement(
                        'span',null,
                        _react2.default.createElement('span', { className: 'expander-space' }),
                        _react2.default.createElement(
                            'img', {src: _profileImage, style: {width: "30px", height: "30px"}}
                        ),
                        _react2.default.createElement('span', { className: 'expander-space' }),
                        _react2.default.createElement(
                            'span',
                            null,
                            item.slotName
                        )
                    )
                    
                );
                var slotItem = _react2.default.createElement(
                    'div',
                    { title: item.slotName, className: 'overflow-text header2-text', style: { textAlign: "left" } },
                    a
                );
                if (!!slotItemTemplateResolver) {
                    var temp = slotItemTemplateResolver(schedulerData, item, slotClickedFunc, width, "overflow-text header2-text");
                    if (!!temp) slotItem = temp;
                }

                return _react2.default.createElement(
                    'tr',
                    { key: item.slotId },
                    _react2.default.createElement(
                        'td',
                        { 'data-resource-id': item.slotId, style: { height: item.rowHeight,backgroundColor:'#FFFFFF',color:'#000000' } },
                        slotItem2
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { style: { paddingBottom: paddingBottom } },
                _react2.default.createElement(
                    'table',
                    { className: 'resource-table' },
                    _react2.default.createElement(
                        'tbody',
                        null,
                        resourceList
                    )
                )
            );
        }
    }]);

    return ResourceView;
}(_react.Component), _class.propTypes = {
    schedulerData: _propTypes.PropTypes.object.isRequired,
    contentScrollbarHeight: _propTypes.PropTypes.number.isRequired,
    slotClickedFunc: _propTypes.PropTypes.func,
    slotItemTemplateResolver: _propTypes.PropTypes.func
}, _temp);
exports.default = ResourceView;
