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
      console.log(basePrice, "basePrice");

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
      }, ".button.jsx-3536665263{width:5em;height:4em;color:beige;font-weight:bold;background-color:#157be4;border-color:#157be4;border-width:0;}.couponValidationForm.jsx-3536665263{height:4em;border-width:1px;padding:0 0 0 1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3p4bHRybi9Eb2N1bWVudHMvY29kZS9jb3Vyc2VpdC9lY29tbWVyY2UvY29tcG9uZW50cy9kaXNjb3VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRVMsQUFHdUIsQUFTQyxVQVJBLENBU00sVUFSTCxPQVNNLEtBUkQsYUFTbkIsSUFSMkIseUJBQ0oscUJBQ04sZUFDakIiLCJmaWxlIjoiL2hvbWUvenhsdHJuL0RvY3VtZW50cy9jb2RlL2NvdXJzZWl0L2Vjb21tZXJjZS9jb21wb25lbnRzL2Rpc2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHNldERpc2NvdW50LCBzZXRGaW5hbFByaWNlIH0gZnJvbSAnLi4vc3RvcmUnO1xuXG5cbmNsYXNzIERpc2NvdW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0OiBcIlwiLFxuICAgICAgdmFsaWRhdGlvbkNvZGU6IGZhbHNlLFxuICAgICAgdmFsaWRhdGlvbkNvZGVNZXNzYWdlOiBcIlwiLFxuICAgICAgZGlzY291bnRQZXJjZW50YWdlOiAwLFxuICAgICAgZmluYWxfcHJpY2U6IDAsXG4gICAgICBhbW91bnRfZGlzY291bnRlZDogMFxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0OiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cbiAgXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIGNvbnN0IGJhc2VQcmljZSA9IHRoaXMucHJvcHMuYmFzZVByaWNlO1xuICAgIGNvbnN0IHtkaXNwYXRjaH0gPSB0aGlzLnByb3BzXG4gICAgY29uc29sZS5sb2coYmFzZVByaWNlLCBcImJhc2VQcmljZVwiKTtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuaW5wdXQpIHtcbiAgICAgIGNhc2UgXCJjb3Vyc2VpdDIwMTlcIjpcbiAgICAgICAgLy9jaGFuZ2UgdGhlIGhhcmRjb2RlZCAxMCBpbiBhbW91bnRfZGlzY291bnRlZCB0byByZWNlaXZlIGR5bmFtaWMgdmFsdWVzXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRpc2NvdW50UGVyY2VudGFnZTogMTAsXG4gICAgICAgICAgdmFsaWRhdGlvbkNvZGVNZXNzYWdlOiBcIkPDs2RpZ28gYXBsaWNhZG8hXCIsXG4gICAgICAgICAgdmFsaWRhdGlvbkNvZGU6IHRydWUsXG4gICAgICAgICAgYW1vdW50X2Rpc2NvdW50ZWQ6IDEwICogYmFzZVByaWNlIC8gMTAwLFxuICAgICAgICAgIGZpbmFsX3ByaWNlOiBiYXNlUHJpY2UgLSB0aGlzLnN0YXRlLmFtb3VudF9kaXNjb3VudGVkXG4gICAgICAgIH0sICgpID0+IHtkaXNwYXRjaChzZXREaXNjb3VudCh0aGlzLnN0YXRlLmRpc2NvdW50UGVyY2VudGFnZSkpLCBkaXNwYXRjaChzZXRGaW5hbFByaWNlKHRoaXMuc3RhdGUuZmluYWxfcHJpY2UpKSwgY29uc29sZS5sb2codGhpcy5zdGF0ZSwgXCJ3aG9sZSBzdGF0ZVwiKX0pXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIlwiOlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2YWxpZGF0aW9uQ29kZU1lc3NhZ2U6IFwiRGViZXMgZXNjcmliaXIgdW4gY8OzZGlnb1wiLFxuICAgICAgICAgIHZhbGlkYXRpb25Db2RlOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZhbGlkYXRpb25Db2RlTWVzc2FnZTogXCJDw7NkaWdvIGludsOhbGlkb1wiLFxuICAgICAgICAgIHZhbGlkYXRpb25Db2RlOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNvdXBvblZhbGlkYXRpb25Gb3JtXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiQ8OzZGlnbyBkZSBkZXNjdWVudG9cIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUpfSAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0aXRsZT1cIkFwbGljYXJcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVDbGljayhlKX0gLz5cbiAgICAgICAgICA8cD57dGhpcy5zdGF0ZS52YWxpZGF0aW9uQ29kZU1lc3NhZ2V9PC9wPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5idXR0b257XG4gICAgICAgICAgICB3aWR0aDogNWVtO1xuICAgICAgICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgICAgICAgICBjb2xvcjogYmVpZ2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTdiZTQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMxNTdiZTQ7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb3Vwb25WYWxpZGF0aW9uRm9ybXtcbiAgICAgICAgICAgIGhlaWdodDogNGVtO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAxZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpe1xuICByZXR1cm4ge1xuICAgIGJhc2VQcmljZTogc3RhdGUucHJvZHVjdENhcnQuYmFzZV9wcmljZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShEaXNjb3VudCk7Il19 */\n/*@ sourceURL=/home/zxltrn/Documents/code/courseit/ecommerce/components/discount.js */"));
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
//# sourceMappingURL=cart.js.f2c98d928229b013d31b.hot-update.js.map