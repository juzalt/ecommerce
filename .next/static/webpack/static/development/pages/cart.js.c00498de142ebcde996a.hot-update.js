webpackHotUpdate("static/development/pages/cart.js",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
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
/* harmony import */ var _components_discount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/discount */ "./components/discount.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var Cart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Cart, _React$Component);

  function Cart() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cart);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cart).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cart, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
        className: "jsx-368272231" + " " + "cartContainer"
      }, __jsx("div", {
        className: "jsx-368272231" + " " + "cartUpperSection"
      }, __jsx("img", {
        src: this.props.product.thumbnail,
        alt: "Product image thumbnail",
        className: "jsx-368272231" + " " + "productThumbnail"
      }), __jsx("p", {
        className: "jsx-368272231" + " " + "productTitle"
      }, this.props.product.title), __jsx("div", {
        className: "jsx-368272231" + " " + "productPrice"
      }, this.props.product.base_price)), __jsx("div", {
        className: "jsx-368272231" + " " + "cartLowerSection"
      }, __jsx("p", {
        className: "jsx-368272231" + " " + "productPrice"
      }, "Producto ", this.props.product.base_price), __jsx("p", {
        className: "jsx-368272231" + " " + "discountApplied"
      }, "Discount: ", this.props.discountPercentage, " %"), __jsx("p", {
        className: "jsx-368272231" + " " + "totalPrice"
      }, "Total ", this.props.finalPrice)), __jsx(_components_discount__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "368272231"
      }, ".cartContainer.jsx-368272231{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;background-color:white;width:80vw;height:90vh;}.cartUpperSection.jsx-368272231{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3p4bHRybi9Eb2N1bWVudHMvY29kZS9jb3Vyc2VpdC9lY29tbWVyY2UvcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQm9CLEFBRzBCLEFBV0EsMEVBVlMsQUFXeEIsOEVBVnFCLDZGQUNJLG1HQUNQLGdCQUNPLHVCQUNaLFdBQ0MsWUFDZCIsImZpbGUiOiIvaG9tZS96eGx0cm4vRG9jdW1lbnRzL2NvZGUvY291cnNlaXQvZWNvbW1lcmNlL3BhZ2VzL2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IERpc2NvdW50IGZyb20gJy4uL2NvbXBvbmVudHMvZGlzY291bnQnO1xuXG5jbGFzcyBDYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRDb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRVcHBlclNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZHVjdFRodW1ibmFpbFwiIHNyYz17dGhpcy5wcm9wcy5wcm9kdWN0LnRodW1ibmFpbH0gYWx0PVwiUHJvZHVjdCBpbWFnZSB0aHVtYm5haWxcIi8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0VGl0bGVcIj57dGhpcy5wcm9wcy5wcm9kdWN0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFByaWNlXCI+e3RoaXMucHJvcHMucHJvZHVjdC5iYXNlX3ByaWNlfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydExvd2VyU2VjdGlvblwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdFByaWNlXCI+UHJvZHVjdG8ge3RoaXMucHJvcHMucHJvZHVjdC5iYXNlX3ByaWNlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc2NvdW50QXBwbGllZFwiPkRpc2NvdW50OiB7dGhpcy5wcm9wcy5kaXNjb3VudFBlcmNlbnRhZ2V9ICU8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b3RhbFByaWNlXCI+VG90YWwge3RoaXMucHJvcHMuZmluYWxQcmljZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPERpc2NvdW50IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNhcnRDb250YWluZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiA5MHZoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJ0VXBwZXJTZWN0aW9ue1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpe1xuICByZXR1cm4ge1xuICAgIHByb2R1Y3Q6IHN0YXRlLnByb2R1Y3RDYXJ0LFxuICAgIGRpc2NvdW50UGVyY2VudGFnZTogc3RhdGUuZGlzY291bnRQZXJjZW50YWdlLFxuICAgIGJhc2VQcmljZTogc3RhdGUucHJvZHVjdENhcnQuYmFzZV9wcmljZSxcbiAgICBhbW91bnREaXNjb3VudGVkOiBzdGF0ZS5hbW91bnREaXNjb3VudGVkLFxuICAgIGZpbmFsX3ByaWNlOiB0aGlzLnByb3BzLmJhc2VQcmljZSAtIHRoaXMucHJvcHMuYW1vdW50RGlzY291bnRlZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDYXJ0KSJdfQ== */\n/*@ sourceURL=/home/zxltrn/Documents/code/courseit/ecommerce/pages/cart.js */"));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function mapStateToProps(state) {
  return {
    product: state.productCart,
    discountPercentage: state.discountPercentage,
    basePrice: state.productCart.base_price,
    amountDiscounted: state.amountDiscounted,
    final_price: this.props.basePrice - this.props.amountDiscounted
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(Cart));

/***/ })

})
//# sourceMappingURL=cart.js.c00498de142ebcde996a.hot-update.js.map