webpackHotUpdate("static/development/pages/product.js",{

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_addToCartButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/addToCartButton */ "./components/addToCartButton.js");







var _jsxFileName = "/home/zxltrn/Documents/code/courseit/ecommerce/pages/product.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




var Product =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Product, _React$Component);

  function Product(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Product);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Product).call(this, props));
    _this.state = {
      productImg: [],
      title: "",
      base_price: "",
      sold_quantity: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Product, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1559232595" + " " + "productInfoContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("img", {
        src: this.props.product.productImg,
        alt: "Product image.",
        className: "jsx-1559232595" + " " + "productImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1559232595" + " " + "productDescription",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-1559232595" + " " + "sold_quantity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.props.product.sold_quantity, " vendidos"), __jsx("p", {
        className: "jsx-1559232595" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.props.product.title), __jsx("p", {
        className: "jsx-1559232595" + " " + "base_price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.props.product.base_price), __jsx("addToCartButton", {
        product: this.props.product,
        className: "jsx-1559232595",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4126770290",
        __self: this
      }, ".productInfoContainer.jsx-1559232595{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;background-color:white;}.productImage.jsx-1559232595{margin-right:1em;}.productDescription.jsx-1559232595{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3p4bHRybi9Eb2N1bWVudHMvY29kZS9jb3Vyc2VpdC9lY29tbWVyY2UvcGFnZXMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q29CLEFBRzBCLEFBT0ksQUFJSixpQkFIZix5REFQeUIsQUFXRCw4RUFDeEIscUJBWGtCLGdCQUNPLHVCQUN6QiIsImZpbGUiOiIvaG9tZS96eGx0cm4vRG9jdW1lbnRzL2NvZGUvY291cnNlaXQvZWNvbW1lcmNlL3BhZ2VzL3Byb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBhZGRUb0NhcnRCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9hZGRUb0NhcnRCdXR0b24nO1xuXG5jbGFzcyBQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwcm9kdWN0SW1nOiBbXSxcbiAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgYmFzZV9wcmljZTogXCJcIixcbiAgICAgIHNvbGRfcXVhbnRpdHk6IFwiXCJcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtyZXEsIHF1ZXJ5fSkge1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLm1lcmNhZG9saWJyZS5jb20vaXRlbXMvTUxBNzczMjc0NTMwJylcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9kdWN0OiB7XG4gICAgICAgIHByb2R1Y3RJbWc6IHJlc3BvbnNlLmRhdGEucGljdHVyZXNbMF0udXJsLFxuICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS50aXRsZSxcbiAgICAgICAgYmFzZV9wcmljZTogcmVzcG9uc2UuZGF0YS5iYXNlX3ByaWNlLFxuICAgICAgICBzb2xkX3F1YW50aXR5OiByZXNwb25zZS5kYXRhLnNvbGRfcXVhbnRpdHlcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0SW5mb0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZHVjdEltYWdlXCIgc3JjPXt0aGlzLnByb3BzLnByb2R1Y3QucHJvZHVjdEltZ30gYWx0PVwiUHJvZHVjdCBpbWFnZS5cIi8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0RGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNvbGRfcXVhbnRpdHlcIj57dGhpcy5wcm9wcy5wcm9kdWN0LnNvbGRfcXVhbnRpdHl9IHZlbmRpZG9zPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy5wcm9kdWN0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJhc2VfcHJpY2VcIj57dGhpcy5wcm9wcy5wcm9kdWN0LmJhc2VfcHJpY2V9PC9wPlxuICAgICAgICAgICAgPGFkZFRvQ2FydEJ1dHRvbiBwcm9kdWN0PXt0aGlzLnByb3BzLnByb2R1Y3R9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnByb2R1Y3RJbmZvQ29udGFpbmVye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcm9kdWN0SW1hZ2Uge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByb2R1Y3REZXNjcmlwdGlvbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlYmViO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0OyJdfQ== */\n/*@ sourceURL=/home/zxltrn/Documents/code/courseit/ecommerce/pages/product.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1913357352",
        __self: this
      }, "body{margin:0;background-color:#ecebeb;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3p4bHRybi9Eb2N1bWVudHMvY29kZS9jb3Vyc2VpdC9lY29tbWVyY2UvcGFnZXMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGEsQUFHMEIsU0FDZ0IseUJBQzNCIiwiZmlsZSI6Ii9ob21lL3p4bHRybi9Eb2N1bWVudHMvY29kZS9jb3Vyc2VpdC9lY29tbWVyY2UvcGFnZXMvcHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGFkZFRvQ2FydEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2FkZFRvQ2FydEJ1dHRvbic7XG5cbmNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHByb2R1Y3RJbWc6IFtdLFxuICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICBiYXNlX3ByaWNlOiBcIlwiLFxuICAgICAgc29sZF9xdWFudGl0eTogXCJcIlxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3JlcSwgcXVlcnl9KSB7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkubWVyY2Fkb2xpYnJlLmNvbS9pdGVtcy9NTEE3NzMyNzQ1MzAnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgcHJvZHVjdEltZzogcmVzcG9uc2UuZGF0YS5waWN0dXJlc1swXS51cmwsXG4gICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLnRpdGxlLFxuICAgICAgICBiYXNlX3ByaWNlOiByZXNwb25zZS5kYXRhLmJhc2VfcHJpY2UsXG4gICAgICAgIHNvbGRfcXVhbnRpdHk6IHJlc3BvbnNlLmRhdGEuc29sZF9xdWFudGl0eVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RJbmZvQ29udGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9kdWN0SW1hZ2VcIiBzcmM9e3RoaXMucHJvcHMucHJvZHVjdC5wcm9kdWN0SW1nfSBhbHQ9XCJQcm9kdWN0IGltYWdlLlwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3REZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic29sZF9xdWFudGl0eVwiPnt0aGlzLnByb3BzLnByb2R1Y3Quc29sZF9xdWFudGl0eX0gdmVuZGlkb3M8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLnByb2R1Y3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmFzZV9wcmljZVwiPnt0aGlzLnByb3BzLnByb2R1Y3QuYmFzZV9wcmljZX08L3A+XG4gICAgICAgICAgICA8YWRkVG9DYXJ0QnV0dG9uIHByb2R1Y3Q9e3RoaXMucHJvcHMucHJvZHVjdH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucHJvZHVjdEluZm9Db250YWluZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByb2R1Y3RJbWFnZSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJvZHVjdERlc2NyaXB0aW9ue1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2ViZWI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7Il19 */\n/*@ sourceURL=/home/zxltrn/Documents/code/courseit/ecommerce/pages/product.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, query, response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('https://api.mercadolibre.com/items/MLA773274530');

              case 3:
                response = _context.sent;
                return _context.abrupt("return", {
                  product: {
                    productImg: response.data.pictures[0].url,
                    title: response.data.title,
                    base_price: response.data.base_price,
                    sold_quantity: response.data.sold_quantity
                  }
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ })

})
//# sourceMappingURL=product.js.efa292ed4190c7a79fb0.hot-update.js.map