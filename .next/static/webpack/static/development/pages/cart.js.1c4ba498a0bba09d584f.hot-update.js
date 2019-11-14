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

  function Cart(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cart).call(this, props));

    _this.setState({
      final_price: _this.props.basePrice - _this.props.amountDiscounted
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

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
      }, "Producto ", this.props.product.base_price), __jsx("button", {
        onClick: function onClick() {
          return _this2.handleClick();
        },
        className: "jsx-368272231"
      }), __jsx("p", {
        className: "jsx-368272231" + " " + "discountApplied"
      }, "Discount: ", this.props.discountPercentage, " %"), __jsx("p", {
        className: "jsx-368272231" + " " + "totalPrice"
      }, "Total ", this.props.final_price)), __jsx(_components_discount__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "368272231"
      }, ".cartContainer.jsx-368272231{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;background-color:white;width:80vw;height:90vh;}.cartUpperSection.jsx-368272231{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3p4bHRybi9Eb2N1bWVudHMvY29kZS9jb3Vyc2VpdC9lY29tbWVyY2UvcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Qm9CLEFBRzBCLEFBV0EsMEVBVlMsQUFXeEIsOEVBVnFCLDZGQUNJLG1HQUNQLGdCQUNPLHVCQUNaLFdBQ0MsWUFDZCIsImZpbGUiOiIvaG9tZS96eGx0cm4vRG9jdW1lbnRzL2NvZGUvY291cnNlaXQvZWNvbW1lcmNlL3BhZ2VzL2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IERpc2NvdW50IGZyb20gJy4uL2NvbXBvbmVudHMvZGlzY291bnQnO1xuXG5jbGFzcyBDYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbmNvbnN0cnVjdG9yKHByb3BzKXtcbiAgc3VwZXIocHJvcHMpO1xuXG4gIHRoaXMuc2V0U3RhdGUoe1xuICAgIGZpbmFsX3ByaWNlOiB0aGlzLnByb3BzLmJhc2VQcmljZSAtIHRoaXMucHJvcHMuYW1vdW50RGlzY291bnRlZFxuICB9KVxufVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydENvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydFVwcGVyU2VjdGlvblwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9kdWN0VGh1bWJuYWlsXCIgc3JjPXt0aGlzLnByb3BzLnByb2R1Y3QudGh1bWJuYWlsfSBhbHQ9XCJQcm9kdWN0IGltYWdlIHRodW1ibmFpbFwiLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3RUaXRsZVwiPnt0aGlzLnByb3BzLnByb2R1Y3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0UHJpY2VcIj57dGhpcy5wcm9wcy5wcm9kdWN0LmJhc2VfcHJpY2V9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0TG93ZXJTZWN0aW9uXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0UHJpY2VcIj5Qcm9kdWN0byB7dGhpcy5wcm9wcy5wcm9kdWN0LmJhc2VfcHJpY2V9PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCl9IC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNjb3VudEFwcGxpZWRcIj5EaXNjb3VudDoge3RoaXMucHJvcHMuZGlzY291bnRQZXJjZW50YWdlfSAlPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG90YWxQcmljZVwiPlRvdGFsIHt0aGlzLnByb3BzLmZpbmFsX3ByaWNlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RGlzY291bnQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY2FydENvbnRhaW5lcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwdmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcnRVcHBlclNlY3Rpb257XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSl7XG4gIGNvbnNvbGUubG9nKHN0YXRlLmZpbmFsUHJpY2UsIFwiZmluYWwgcHJpY2UgYXQgY2FydFwiKVxuICByZXR1cm4ge1xuICAgIHByb2R1Y3Q6IHN0YXRlLnByb2R1Y3RDYXJ0LFxuICAgIGRpc2NvdW50UGVyY2VudGFnZTogc3RhdGUuZGlzY291bnRQZXJjZW50YWdlLFxuICAgIGJhc2VQcmljZTogc3RhdGUucHJvZHVjdENhcnQuYmFzZV9wcmljZSxcbiAgICBhbW91bnREaXNjb3VudGVkOiBzdGF0ZS5hbW91bnREaXNjb3VudGVkXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENhcnQpIl19 */\n/*@ sourceURL=/home/zxltrn/Documents/code/courseit/ecommerce/pages/cart.js */"));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function mapStateToProps(state) {
  console.log(state.finalPrice, "final price at cart");
  return {
    product: state.productCart,
    discountPercentage: state.discountPercentage,
    basePrice: state.productCart.base_price,
    amountDiscounted: state.amountDiscounted
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(Cart));

/***/ })

})
//# sourceMappingURL=cart.js.1c4ba498a0bba09d584f.hot-update.js.map