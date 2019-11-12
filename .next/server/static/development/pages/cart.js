module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/discount.js":
/*!********************************!*\
  !*** ./components/discount.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./store.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Discount extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      validationCode: false,
      validationCodeMessage: "",
      discountPercentage: 0
    };
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleClick() {
    switch (this.state.input) {
      case "courseit2019":
        this.setState({
          validationCodeMessage: "Código aplicado!",
          validationCode: true,
          discountPercentage: 10
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

  render() {
    const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("label", {
      className: "jsx-3536665263"
    }, __jsx("input", {
      type: "text",
      name: "name",
      placeholder: "C\xF3digo de descuento",
      onChange: e => this.handleChange(e),
      className: "jsx-3536665263" + " " + "couponValidationForm"
    })), __jsx("button", {
      title: "Aplicar",
      onClick: e => this.handleClick(e) && dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_3__["setDiscount"])(state.discountPercentage)),
      className: "jsx-3536665263" + " " + "button"
    }), __jsx("p", {
      className: "jsx-3536665263"
    }, this.state.validationCodeMessage), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3536665263"
    }, ".button.jsx-3536665263{width:5em;height:4em;color:beige;font-weight:bold;background-color:#157be4;border-color:#157be4;border-width:0;}.couponValidationForm.jsx-3536665263{height:4em;border-width:1px;padding:0 0 0 1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3p4bHRybi9Eb2N1bWVudHMvY29kZS9jb3Vyc2VpdC9lY29tbWVyY2UvY29tcG9uZW50cy9kaXNjb3VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRFMsQUFHdUIsQUFTQyxVQVJBLENBU00sVUFSTCxPQVNNLEtBUkQsYUFTbkIsSUFSMkIseUJBQ0oscUJBQ04sZUFDakIiLCJmaWxlIjoiL2hvbWUvenhsdHJuL0RvY3VtZW50cy9jb2RlL2NvdXJzZWl0L2Vjb21tZXJjZS9jb21wb25lbnRzL2Rpc2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzZXREaXNjb3VudCB9IGZyb20gJy4uL3N0b3JlJztcblxuXG5jbGFzcyBEaXNjb3VudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnB1dDogXCJcIixcbiAgICAgIHZhbGlkYXRpb25Db2RlOiBmYWxzZSxcbiAgICAgIHZhbGlkYXRpb25Db2RlTWVzc2FnZTogXCJcIixcbiAgICAgIGRpc2NvdW50UGVyY2VudGFnZTogMFxuICAgIH1cbiAgfVxuXG4gIFxuICBcbiAgaGFuZGxlQ2hhbmdlKGUpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuICBcbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmlucHV0KSB7XG4gICAgICBjYXNlIFwiY291cnNlaXQyMDE5XCI6XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZhbGlkYXRpb25Db2RlTWVzc2FnZTogXCJDw7NkaWdvIGFwbGljYWRvIVwiLFxuICAgICAgICAgIHZhbGlkYXRpb25Db2RlOiB0cnVlLFxuICAgICAgICAgIGRpc2NvdW50UGVyY2VudGFnZTogMTBcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiXCI6XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZhbGlkYXRpb25Db2RlTWVzc2FnZTogXCJEZWJlcyBlc2NyaWJpciB1biBjw7NkaWdvXCIsXG4gICAgICAgICAgdmFsaWRhdGlvbkNvZGU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdmFsaWRhdGlvbkNvZGVNZXNzYWdlOiBcIkPDs2RpZ28gaW52w6FsaWRvXCIsXG4gICAgICAgICAgdmFsaWRhdGlvbkNvZGU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICByZXR1cm4oXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNvdXBvblZhbGlkYXRpb25Gb3JtXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiQ8OzZGlnbyBkZSBkZXNjdWVudG9cIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUpfSAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0aXRsZT1cIkFwbGljYXJcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVDbGljayhlKSAmJiBkaXNwYXRjaChzZXREaXNjb3VudChzdGF0ZS5kaXNjb3VudFBlcmNlbnRhZ2UpKSB9IC8+XG4gICAgICAgICAgPHA+e3RoaXMuc3RhdGUudmFsaWRhdGlvbkNvZGVNZXNzYWdlfTwvcD5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDVlbTtcbiAgICAgICAgICAgIGhlaWdodDogNGVtO1xuICAgICAgICAgICAgY29sb3I6IGJlaWdlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU3YmU0O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTU3YmU0O1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY291cG9uVmFsaWRhdGlvbkZvcm17XG4gICAgICAgICAgICBoZWlnaHQ6IDRlbTtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICA8L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBEaXNjb3VudDsiXX0= */\n/*@ sourceURL=/home/zxltrn/Documents/code/courseit/ecommerce/components/discount.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Discount);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_discount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/discount */ "./components/discount.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Cart extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  handleClick() {
    console.log(this.props.discountPercentage);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
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
      onClick: () => this.handleClick(),
      className: "jsx-368272231"
    }), __jsx("p", {
      className: "jsx-368272231" + " " + "discountApplied"
    }, "Discount: ", this.props.discountPercentage), __jsx("p", {
      className: "jsx-368272231" + " " + "totalPrice"
    }, "Total ", this.props.product.base_price)), __jsx(_components_discount__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "368272231"
    }, ".cartContainer.jsx-368272231{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;background-color:white;width:80vw;height:90vh;}.cartUpperSection.jsx-368272231{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3p4bHRybi9Eb2N1bWVudHMvY29kZS9jb3Vyc2VpdC9lY29tbWVyY2UvcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQm9CLEFBRzBCLEFBV0EsMEVBVlMsQUFXeEIsOEVBVnFCLDZGQUNJLG1HQUNQLGdCQUNPLHVCQUNaLFdBQ0MsWUFDZCIsImZpbGUiOiIvaG9tZS96eGx0cm4vRG9jdW1lbnRzL2NvZGUvY291cnNlaXQvZWNvbW1lcmNlL3BhZ2VzL2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IERpc2NvdW50IGZyb20gJy4uL2NvbXBvbmVudHMvZGlzY291bnQnO1xuXG5jbGFzcyBDYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBoYW5kbGVDbGljaygpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZGlzY291bnRQZXJjZW50YWdlKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0Q29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0VXBwZXJTZWN0aW9uXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2R1Y3RUaHVtYm5haWxcIiBzcmM9e3RoaXMucHJvcHMucHJvZHVjdC50aHVtYm5haWx9IGFsdD1cIlByb2R1Y3QgaW1hZ2UgdGh1bWJuYWlsXCIvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdFRpdGxlXCI+e3RoaXMucHJvcHMucHJvZHVjdC50aXRsZX08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RQcmljZVwiPnt0aGlzLnByb3BzLnByb2R1Y3QuYmFzZV9wcmljZX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRMb3dlclNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3RQcmljZVwiPlByb2R1Y3RvIHt0aGlzLnByb3BzLnByb2R1Y3QuYmFzZV9wcmljZX08L3A+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soKX0gLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc2NvdW50QXBwbGllZFwiPkRpc2NvdW50OiB7dGhpcy5wcm9wcy5kaXNjb3VudFBlcmNlbnRhZ2V9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG90YWxQcmljZVwiPlRvdGFsIHt0aGlzLnByb3BzLnByb2R1Y3QuYmFzZV9wcmljZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPERpc2NvdW50IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNhcnRDb250YWluZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiA5MHZoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJ0VXBwZXJTZWN0aW9ue1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpe1xuICByZXR1cm4ge1xuICAgIHByb2R1Y3Q6IHN0YXRlLnByb2R1Y3RDYXJ0LFxuICAgIGRpc2NvdW50UGVyY2VudGFnZTogc3RhdGUuZGlzY291bnRQZXJjZW50YWdlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENhcnQpIl19 */\n/*@ sourceURL=/home/zxltrn/Documents/code/courseit/ecommerce/pages/cart.js */"));
  }

}

function mapStateToProps(state) {
  return {
    product: state.productCart,
    discountPercentage: state.discountPercentage
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Cart));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, addToCart, setDiscount, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDiscount", function() { return setDiscount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);




const initialState = {
  lastUpdate: 0,
  light: false,
  productCart: {},
  discountPercentage: 0
};
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  SET_DISCOUNT: 'SET_DISCOUNT'
}; // REDUCERS

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        productCart: action.product
      });

    case actionTypes.SET_DISCOUNT:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        discountPercentage: action.discountPercentage
      });

    default:
      return state;
  }
}; // ACTIONS

const addToCart = product => dispatch => {
  return dispatch({
    type: actionTypes.ADD_TO_CART,
    product
  });
};
const setDiscount = discountPercentage => dispatch => {
  return dispatch({
    type: actionTypes.SET_DISCOUNT,
    discountPercentage
  });
};
function initializeStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a)));
}

/***/ }),

/***/ 5:
/*!*****************************!*\
  !*** multi ./pages/cart.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/zxltrn/Documents/code/courseit/ecommerce/pages/cart.js */"./pages/cart.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=cart.js.map