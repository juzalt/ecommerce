webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");




var initialState = {
  lastUpdate: 0,
  light: false,
  productCart: {},
  discountPercentage: 0,
  finalPrice: 0
};
var actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  SET_DISCOUNT: 'SET_DISCOUNT',
  SET_FINAL_PRICE: 'SET_FINAL_PRICE',
  SET_AMOUNT_DISCOUNTED: 'SET_AMOUNT_DISCOUNTED'
}; // REDUCERS

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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

var addToCart = function addToCart(product) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.ADD_TO_CART,
      product: product
    });
  };
};
var setDiscount = function setDiscount(discountPercentage) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.SET_DISCOUNT,
      discountPercentage: discountPercentage
    });
  };
};
var setFinalPrice = function setFinalPrice(finalPrice) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.SET_FINAL_PRICE,
      finalPrice: finalPrice
    });
  };
};
var setAmountDiscounted = function setAmountDiscounted(amountDiscounted) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.SET_AMOUNT_DISCOUNTED,
      amountDiscounted: amountDiscounted
    });
  };
};
function initializeStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"])));
}

/***/ })

})
//# sourceMappingURL=_app.js.37f89df80e1046bf0d30.hot-update.js.map