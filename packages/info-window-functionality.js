/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["domReady"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************************************!*\
  !*** ./src/info-window-functionality.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  function positionInfoWindows() {
    const elementsAsInfoWindowBounds = document.getElementsByClassName('is-info-window-bounds');

    for (const key in elementsAsInfoWindowBounds) {
      if (Object.hasOwnProperty.call(elementsAsInfoWindowBounds, key)) {
        const boundingElement = elementsAsInfoWindowBounds[key];
        const {
          x: boundingElementX,
          y: boundingElementY,
          width: boundingElementWidth,
          height: boundingElementHeight
        } = boundingElement.getBoundingClientRect();
        const boundingElementCenter = {
          cx: boundingElementWidth / 2 + boundingElementX,
          cy: boundingElementHeight / 2 + boundingElementY
        };
        const childrenWithInfoWindow = boundingElement.getElementsByClassName('has-info-window');

        for (const key in childrenWithInfoWindow) {
          if (Object.hasOwnProperty.call(childrenWithInfoWindow, key)) {
            const childElement = childrenWithInfoWindow[key];
            const {
              x: childElementX,
              y: childElementY,
              width: childElementWidth,
              height: childElementHeight
            } = childElement.getBoundingClientRect();
            const childElementCenter = {
              cx: childElementWidth / 2 + childElementX,
              cy: childElementHeight / 2 + childElementY
            };
            const infoWindow = document.getElementById(`info-window-for-${childElement.id}`);
            const {
              width: infoWindowWidth,
              height: infoWindowHeight
            } = infoWindow.getBoundingClientRect();

            if (childElementCenter.cy > boundingElementCenter.cy) {
              infoWindow.style.bottom = boundingElementY + boundingElementHeight - childElementCenter.cy + "px";
            } else {
              infoWindow.style.top = childElementCenter.cy - boundingElementY + "px";
            }

            if (childElementCenter.cx > boundingElementCenter.cx) {
              infoWindow.style.left = childElementCenter.cx - boundingElementX - infoWindowWidth + "px";
            } else {
              infoWindow.style.left = childElementCenter.cx - boundingElementX + "px";
            }
          }
        }
      }
    }
  }

  positionInfoWindows();
  window.addEventListener('resize', positionInfoWindows);
  const elementsWithInfoWindow = document.getElementsByClassName('has-info-window');

  function showInfoWindow(id) {
    const infoWindow = document.getElementById(`info-window-for-${id}`);

    if (infoWindow) {
      infoWindow.classList.remove('screen-reader-text');
    }
  }

  function hideInfoWindow(id) {
    const infoWindow = document.getElementById(`info-window-for-${id}`);

    if (infoWindow) {
      infoWindow.classList.add('screen-reader-text');
    }
  }

  for (const key in elementsWithInfoWindow) {
    if (Object.hasOwnProperty.call(elementsWithInfoWindow, key)) {
      const element = elementsWithInfoWindow[key];
      element.addEventListener("mouseenter", e => {
        showInfoWindow(element.id);
      });
      element.addEventListener("mouseleave", e => {
        hideInfoWindow(element.id);
      });
    }
  }
});
}();
/******/ })()
;
//# sourceMappingURL=info-window-functionality.js.map