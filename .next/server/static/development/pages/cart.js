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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
      discountPercentage: 0,
      amount_discounted: 0
    };
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleClick() {
    const basePrice = this.props.basePrice;
    const {
      dispatch
    } = this.props;
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
        }, () => {
          dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_3__["setDiscount"])(this.state.discountPercentage)), dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_3__["setAmountDiscounted"])(this.state.amount_discounted));
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
      onClick: e => this.handleClick(e),
      className: "jsx-3536665263" + " " + "button"
    }), __jsx("p", {
      className: "jsx-3536665263"
    }, this.state.validationCodeMessage), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3536665263"
    }, ".button.jsx-3536665263{width:5em;height:4em;color:beige;font-weight:bold;background-color:#157be4;border-color:#157be4;border-width:0;}.couponValidationForm.jsx-3536665263{height:4em;border-width:1px;padding:0 0 0 1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3p4bHRybi9Eb2N1bWVudHMvY29kZS9jb3Vyc2VpdC9lY29tbWVyY2UvY29tcG9uZW50cy9kaXNjb3VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRFMsQUFHdUIsQUFTQyxVQVJBLENBU00sVUFSTCxPQVNNLEtBUkQsYUFTbkIsSUFSMkIseUJBQ0oscUJBQ04sZUFDakIiLCJmaWxlIjoiL2hvbWUvenhsdHJuL0RvY3VtZW50cy9jb2RlL2NvdXJzZWl0L2Vjb21tZXJjZS9jb21wb25lbnRzL2Rpc2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHNldERpc2NvdW50LCBzZXRBbW91bnREaXNjb3VudGVkIH0gZnJvbSAnLi4vc3RvcmUnO1xuXG5cbmNsYXNzIERpc2NvdW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0OiBcIlwiLFxuICAgICAgdmFsaWRhdGlvbkNvZGU6IGZhbHNlLFxuICAgICAgdmFsaWRhdGlvbkNvZGVNZXNzYWdlOiBcIlwiLFxuICAgICAgZGlzY291bnRQZXJjZW50YWdlOiAwLFxuICAgICAgYW1vdW50X2Rpc2NvdW50ZWQ6IDBcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dDogZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG4gIFxuICBoYW5kbGVDbGljaygpIHtcbiAgICBjb25zdCBiYXNlUHJpY2UgPSB0aGlzLnByb3BzLmJhc2VQcmljZTtcbiAgICBjb25zdCB7ZGlzcGF0Y2h9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnNvbGUubG9nKGJhc2VQcmljZSwgXCJiYXNlUHJpY2VcIik7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmlucHV0KSB7XG4gICAgICBjYXNlIFwiY291cnNlaXQyMDE5XCI6XG4gICAgICAgIC8vY2hhbmdlIHRoZSBoYXJkY29kZWQgMTAgaW4gYW1vdW50X2Rpc2NvdW50ZWQgdG8gcmVjZWl2ZSBkeW5hbWljIHZhbHVlc1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkaXNjb3VudFBlcmNlbnRhZ2U6IDEwLFxuICAgICAgICAgIHZhbGlkYXRpb25Db2RlTWVzc2FnZTogXCJDw7NkaWdvIGFwbGljYWRvIVwiLFxuICAgICAgICAgIHZhbGlkYXRpb25Db2RlOiB0cnVlLFxuICAgICAgICAgIGFtb3VudF9kaXNjb3VudGVkOiAxMCAqIGJhc2VQcmljZSAvIDEwMCxcbiAgICAgICAgICBmaW5hbF9wcmljZTogYmFzZVByaWNlIC0gdGhpcy5zdGF0ZS5hbW91bnRfZGlzY291bnRlZFxuICAgICAgICB9LCAoKSA9PiB7ZGlzcGF0Y2goc2V0RGlzY291bnQodGhpcy5zdGF0ZS5kaXNjb3VudFBlcmNlbnRhZ2UpKSwgZGlzcGF0Y2goc2V0QW1vdW50RGlzY291bnRlZCh0aGlzLnN0YXRlLmFtb3VudF9kaXNjb3VudGVkKSl9KVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdmFsaWRhdGlvbkNvZGVNZXNzYWdlOiBcIkRlYmVzIGVzY3JpYmlyIHVuIGPDs2RpZ29cIixcbiAgICAgICAgICB2YWxpZGF0aW9uQ29kZTogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2YWxpZGF0aW9uQ29kZU1lc3NhZ2U6IFwiQ8OzZGlnbyBpbnbDoWxpZG9cIixcbiAgICAgICAgICB2YWxpZGF0aW9uQ29kZTogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjb3Vwb25WYWxpZGF0aW9uRm9ybVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkPDs2RpZ28gZGUgZGVzY3VlbnRvXCIgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlKX0gLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdGl0bGU9XCJBcGxpY2FyXCIgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9IC8+XG4gICAgICAgICAgPHA+e3RoaXMuc3RhdGUudmFsaWRhdGlvbkNvZGVNZXNzYWdlfTwvcD5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDVlbTtcbiAgICAgICAgICAgIGhlaWdodDogNGVtO1xuICAgICAgICAgICAgY29sb3I6IGJlaWdlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU3YmU0O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTU3YmU0O1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY291cG9uVmFsaWRhdGlvbkZvcm17XG4gICAgICAgICAgICBoZWlnaHQ6IDRlbTtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICA8L3N0eWxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKXtcbiAgcmV0dXJuIHtcbiAgICBiYXNlUHJpY2U6IHN0YXRlLnByb2R1Y3RDYXJ0LmJhc2VfcHJpY2VcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRGlzY291bnQpOyJdfQ== */\n/*@ sourceURL=/home/zxltrn/Documents/code/courseit/ecommerce/components/discount.js */"));
  }

}

function mapStateToProps(state) {
  return {
    basePrice: state.productCart.base_price
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Discount));

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
  constructor(props) {
    super(props);
    this.state = {
      final_price: this.props.basePrice - this.props.amountDiscounted
    };
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
    }, "Producto ", this.props.product.base_price), __jsx("p", {
      className: "jsx-368272231" + " " + "discountApplied"
    }, "Discount: ", this.props.discountPercentage, " %"), __jsx("p", {
      className: "jsx-368272231" + " " + "totalPrice"
    }, "Total ", this.state.final_price)), __jsx(_components_discount__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "368272231"
    }, ".cartContainer.jsx-368272231{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:10px;background-color:white;width:80vw;height:90vh;}.cartUpperSection.jsx-368272231{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3p4bHRybi9Eb2N1bWVudHMvY29kZS9jb3Vyc2VpdC9lY29tbWVyY2UvcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Qm9CLEFBRzBCLEFBV0EsMEVBVlMsQUFXeEIsOEVBVnFCLDZGQUNJLG1HQUNQLGdCQUNPLHVCQUNaLFdBQ0MsWUFDZCIsImZpbGUiOiIvaG9tZS96eGx0cm4vRG9jdW1lbnRzL2NvZGUvY291cnNlaXQvZWNvbW1lcmNlL3BhZ2VzL2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IERpc2NvdW50IGZyb20gJy4uL2NvbXBvbmVudHMvZGlzY291bnQnO1xuXG5jbGFzcyBDYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbmNvbnN0cnVjdG9yKHByb3BzKXtcbiAgc3VwZXIocHJvcHMpO1xuXG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgZmluYWxfcHJpY2U6IHRoaXMucHJvcHMuYmFzZVByaWNlIC0gdGhpcy5wcm9wcy5hbW91bnREaXNjb3VudGVkXG4gIH1cbn1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRDb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRVcHBlclNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZHVjdFRodW1ibmFpbFwiIHNyYz17dGhpcy5wcm9wcy5wcm9kdWN0LnRodW1ibmFpbH0gYWx0PVwiUHJvZHVjdCBpbWFnZSB0aHVtYm5haWxcIi8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0VGl0bGVcIj57dGhpcy5wcm9wcy5wcm9kdWN0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFByaWNlXCI+e3RoaXMucHJvcHMucHJvZHVjdC5iYXNlX3ByaWNlfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydExvd2VyU2VjdGlvblwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdFByaWNlXCI+UHJvZHVjdG8ge3RoaXMucHJvcHMucHJvZHVjdC5iYXNlX3ByaWNlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc2NvdW50QXBwbGllZFwiPkRpc2NvdW50OiB7dGhpcy5wcm9wcy5kaXNjb3VudFBlcmNlbnRhZ2V9ICU8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b3RhbFByaWNlXCI+VG90YWwge3RoaXMuc3RhdGUuZmluYWxfcHJpY2V9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxEaXNjb3VudCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jYXJ0Q29udGFpbmVye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICAgIGhlaWdodDogOTB2aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FydFVwcGVyU2VjdGlvbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKXtcbiAgcmV0dXJuIHtcbiAgICBwcm9kdWN0OiBzdGF0ZS5wcm9kdWN0Q2FydCxcbiAgICBkaXNjb3VudFBlcmNlbnRhZ2U6IHN0YXRlLmRpc2NvdW50UGVyY2VudGFnZSxcbiAgICBiYXNlUHJpY2U6IHN0YXRlLnByb2R1Y3RDYXJ0LmJhc2VfcHJpY2UsXG4gICAgYW1vdW50RGlzY291bnRlZDogc3RhdGUuYW1vdW50RGlzY291bnRlZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDYXJ0KSJdfQ== */\n/*@ sourceURL=/home/zxltrn/Documents/code/courseit/ecommerce/pages/cart.js */"));
  }

}

function mapStateToProps(state) {
  return {
    product: state.productCart,
    discountPercentage: state.discountPercentage,
    basePrice: state.productCart.base_price,
    amountDiscounted: state.amountDiscounted
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Cart));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, addToCart, setDiscount, setFinalPrice, setAmountDiscounted, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDiscount", function() { return setDiscount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFinalPrice", function() { return setFinalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAmountDiscounted", function() { return setAmountDiscounted; });
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
  discountPercentage: 0,
  finalPrice: 0,
  amountDiscounted: 0
};
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  SET_DISCOUNT: 'SET_DISCOUNT',
  SET_FINAL_PRICE: 'SET_FINAL_PRICE',
  SET_AMOUNT_DISCOUNTED: 'SET_AMOUNT_DISCOUNTED'
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

    case actionTypes.SET_FINAL_PRICE:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        finalPrice: action.finalPrice
      });

    case actionTypes.SET_AMOUNT_DISCOUNTED:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        amountDiscounted: action.amountDiscounted
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
const setFinalPrice = finalPrice => dispatch => {
  return dispatch({
    type: actionTypes.SET_FINAL_PRICE,
    finalPrice
  });
};
const setAmountDiscounted = amountDiscounted => dispatch => {
  return dispatch({
    type: actionTypes.SET_AMOUNT_DISCOUNTED,
    amountDiscounted
  });
};
function initializeStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a)));
}

/***/ }),

/***/ 3:
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