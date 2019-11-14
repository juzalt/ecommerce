webpackHotUpdate("static/development/pages/cart.js",{

/***/ "./components/discount.js":
/*!********************************!*\
  !*** ./components/discount.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./store.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var Discount =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Discount, _React$Component);

  function Discount(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Discount);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Discount).call(this, props));
    _this.state = {
      input: "",
      validationCode: false,
      validationCodeMessage: "",
      discountPercentage: 0,
      final_price: 0,
      amount_discounted: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Discount, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        input: e.target.value
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _this2 = this;

      var basePrice = this.props.basePrice;
      var dispatch = this.props.dispatch;

      switch (this.state.input) {
        case "courseit2019":
          //change the hardcoded 10 in amount_discounted to receive dynamic values
          this.setState({
            discountPercentage: 10,
            validationCodeMessage: "Código aplicado!",
            validationCode: true,
            amount_discounted: 10 * basePrice / 100,
            final_price: basePrice - this.state.amount_discounted
          }, function () {
            dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_8__["setDiscount"])(_this2.state.discountPercentage)), dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_8__["setFinalPrice"])(_this2.state.final_price)), console.log(_this2.state, "whole state");
          });
          break;

        case "":
          this.setState({
            validationCodeMessage: "Debes escribir un código",
            validationCode: false
          });
          break;

        default:
          this.setState({
            validationCodeMessage: "Código inválido",
            validationCode: false
          });
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("label", {
        className: "jsx-3536665263"
      }, __jsx("input", {
        type: "text",
        name: "name",
        placeholder: "C\xF3digo de descuento",
        onChange: function onChange(e) {
          return _this3.handleChange(e);
        },
        className: "jsx-3536665263" + " " + "couponValidationForm"
      })), __jsx("button", {
        title: "Aplicar",
        onClick: function onClick(e) {
          return _this3.handleClick(e);
        },
        className: "jsx-3536665263" + " " + "button"
      }), __jsx("p", {
        className: "jsx-3536665263"
      }, this.state.validationCodeMessage), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3536665263"
      }, ".button.jsx-3536665263{width:5em;height:4em;color:beige;font-weight:bold;background-color:#157be4;border-color:#157be4;border-width:0;}.couponValidationForm.jsx-3536665263{height:4em;border-width:1px;padding:0 0 0 1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3p4bHRybi9Eb2N1bWVudHMvY29kZS9jb3Vyc2VpdC9lY29tbWVyY2UvY29tcG9uZW50cy9kaXNjb3VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRFMsQUFHdUIsQUFTQyxVQVJBLENBU00sVUFSTCxPQVNNLEtBUkQsYUFTbkIsSUFSMkIseUJBQ0oscUJBQ04sZUFDakIiLCJmaWxlIjoiL2hvbWUvenhsdHJuL0RvY3VtZW50cy9jb2RlL2NvdXJzZWl0L2Vjb21tZXJjZS9jb21wb25lbnRzL2Rpc2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHNldERpc2NvdW50LCBzZXRGaW5hbFByaWNlIH0gZnJvbSAnLi4vc3RvcmUnO1xuXG5cbmNsYXNzIERpc2NvdW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0OiBcIlwiLFxuICAgICAgdmFsaWRhdGlvbkNvZGU6IGZhbHNlLFxuICAgICAgdmFsaWRhdGlvbkNvZGVNZXNzYWdlOiBcIlwiLFxuICAgICAgZGlzY291bnRQZXJjZW50YWdlOiAwLFxuICAgICAgZmluYWxfcHJpY2U6IDAsXG4gICAgICBhbW91bnRfZGlzY291bnRlZDogMFxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0OiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cbiAgXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIGNvbnN0IGJhc2VQcmljZSA9IHRoaXMucHJvcHMuYmFzZVByaWNlO1xuICAgIGNvbnN0IHtkaXNwYXRjaH0gPSB0aGlzLnByb3BzXG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmlucHV0KSB7XG4gICAgICBjYXNlIFwiY291cnNlaXQyMDE5XCI6XG4gICAgICAgIC8vY2hhbmdlIHRoZSBoYXJkY29kZWQgMTAgaW4gYW1vdW50X2Rpc2NvdW50ZWQgdG8gcmVjZWl2ZSBkeW5hbWljIHZhbHVlc1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkaXNjb3VudFBlcmNlbnRhZ2U6IDEwLFxuICAgICAgICAgIHZhbGlkYXRpb25Db2RlTWVzc2FnZTogXCJDw7NkaWdvIGFwbGljYWRvIVwiLFxuICAgICAgICAgIHZhbGlkYXRpb25Db2RlOiB0cnVlLFxuICAgICAgICAgIGFtb3VudF9kaXNjb3VudGVkOiAxMCAqIGJhc2VQcmljZSAvIDEwMCxcbiAgICAgICAgICBmaW5hbF9wcmljZTogYmFzZVByaWNlIC0gdGhpcy5zdGF0ZS5hbW91bnRfZGlzY291bnRlZFxuICAgICAgICB9LCAoKSA9PiB7ZGlzcGF0Y2goc2V0RGlzY291bnQodGhpcy5zdGF0ZS5kaXNjb3VudFBlcmNlbnRhZ2UpKSwgZGlzcGF0Y2goc2V0RmluYWxQcmljZSh0aGlzLnN0YXRlLmZpbmFsX3ByaWNlKSksIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUsIFwid2hvbGUgc3RhdGVcIil9KVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdmFsaWRhdGlvbkNvZGVNZXNzYWdlOiBcIkRlYmVzIGVzY3JpYmlyIHVuIGPDs2RpZ29cIixcbiAgICAgICAgICB2YWxpZGF0aW9uQ29kZTogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2YWxpZGF0aW9uQ29kZU1lc3NhZ2U6IFwiQ8OzZGlnbyBpbnbDoWxpZG9cIixcbiAgICAgICAgICB2YWxpZGF0aW9uQ29kZTogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjb3Vwb25WYWxpZGF0aW9uRm9ybVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkPDs2RpZ28gZGUgZGVzY3VlbnRvXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlKX0gLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdGl0bGU9XCJBcGxpY2FyXCIgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9IC8+XG4gICAgICAgICAgPHA+e3RoaXMuc3RhdGUudmFsaWRhdGlvbkNvZGVNZXNzYWdlfTwvcD5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDVlbTtcbiAgICAgICAgICAgIGhlaWdodDogNGVtO1xuICAgICAgICAgICAgY29sb3I6IGJlaWdlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU3YmU0O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTU3YmU0O1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY291cG9uVmFsaWRhdGlvbkZvcm17XG4gICAgICAgICAgICBoZWlnaHQ6IDRlbTtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICA8L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKXtcbiAgcmV0dXJuIHtcbiAgICBiYXNlUHJpY2U6IHN0YXRlLnByb2R1Y3RDYXJ0LmJhc2VfcHJpY2VcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRGlzY291bnQpOyJdfQ== */\n/*@ sourceURL=/home/zxltrn/Documents/code/courseit/ecommerce/components/discount.js */"));
    }
  }]);

  return Discount;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function mapStateToProps(state) {
  return {
    basePrice: state.productCart.base_price
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(Discount));

/***/ })

})
//# sourceMappingURL=cart.js.e00d0587a510505f26b2.hot-update.js.map