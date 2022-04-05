// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"i9Xmx":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d31edf90ff7a114e";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"crMo7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _fetchCuiRecipes = require("./fetchCuiRecipes");
var _fetchCuiRecipesDefault = parcelHelpers.interopDefault(_fetchCuiRecipes);
var _createCuisineList = require("./createCuisineList");
var _createCuisineListDefault = parcelHelpers.interopDefault(_createCuisineList);
//array with cuisines;
const cuisineList = [
    "African",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    `Middle Eastern`,
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese"
];
_createCuisineListDefault.default(cuisineList);
// reference save of user input
let inputAuthor = document.getElementById('author');
let inputTags = document.getElementById('tags');
let inputTitle = document.getElementById('title');
let inputNumber = document.getElementById("numberMax");
let inputCuiString = '';
const formSubmit = document.getElementById('on-submit-cuisine');
const buttonStart = document.getElementById("buttonStart");
// buttonDisplay for nextPage display
const buttonDisp = document.getElementById("button-place");
let buttonTag = document.createElement("button");
buttonTag.setAttribute("id", "buttonNext");
buttonTag.textContent = "+";
buttonDisp.appendChild(buttonTag);
// initialize input search field value in message text.
let inputSearching = "";
// event listner user input
formSubmit.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log('submit', e.target);
    // put input of cuisines marked in string
    handleCheckbox();
    // keep input search field value in message text
    inputSearching = `${inputAuthor.value} ${inputTags.value}  ${inputTitle.value} ${inputNumber.value}
        ${inputCuiString}`;
    if (inputSearching > "") {
        // if (inputNumber = 0) {inputNumber = 5 };
        console.log('string', inputSearching);
        _fetchCuiRecipesDefault.default(inputAuthor.value, inputTags.value, inputTitle.value, inputNumber.value, inputCuiString).then();
    }
});
function handleCheckbox() {
    // If the checkbox is checked, display the output text
    let selCui = 0;
    let selectCui = [];
    for(let i = 0; i < cuisineList.length; i++){
        // Get the checkbox
        selCui = `sel-cui-${i}`;
        selectCui[i] = document.getElementById(selCui);
    }
    const selectCuiF = selectCui.filter((selcuiItem)=>{
        return selcuiItem.checked === true;
    });
    inputCuiString = ",";
    for(let i1 = 0; i1 < selectCuiF.length; i1++){
        inputCuiString += selectCuiF[i1].value;
        inputCuiString += ",";
    }
    console.log('inputcuistring', inputCuiString);
}

},{"./fetchCuiRecipes":"32peC","./createCuisineList":"99kzu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"32peC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _createListLines = require("./createListLines");
var _createListLinesDefault = parcelHelpers.interopDefault(_createListLines);
var _fetchDetails = require("./fetchDetails");
var _fetchDetailsDefault = parcelHelpers.interopDefault(_fetchDetails);
// intialize page message and number of lines on each page
const messageText = document.getElementById("message-text");
messageText.textContent = "";
const pagenumberOfLines = 5;
let newPageSet = true;
let selectRecipe = [];
// function to fetch data
async function fetchCuiRecipes(inputAuthor, inputTags, inputTitle, inputNumber, inputCuisine) {
    try {
        //  receive the fetched data in response
        const response = await _axiosDefault.default.get("https://api.spoonacular.com/recipes/complexSearch", {
            params: {
                apiKey: "dbfe72f1a5bd47d9bea64ca490667395",
                // apiKey: "e7fbe0c19f1f4db7b20523c1dba4b282",
                cuisine: inputCuisine,
                author: inputAuthor,
                tags: inputTags,
                titleMatch: inputTitle,
                number: inputNumber
            },
            headers: {
                "Content-Type": "application/json"
            }
        });
        // save result constant
        const { results: foundRecipes  } = response.data;
        const recipesLength = foundRecipes.length;
        // create a list with maximum number of lines that uses array of all found
        let firstLine = 0;
        let lastLine = pagenumberOfLines;
        let arrayDisplay = foundRecipes.slice(firstLine, lastLine);
        // initialize first page
        newPageSet = true;
        _createListLinesDefault.default(arrayDisplay);
        // reset the userInput
        inputAuthor.value = '';
        inputTags.value = '';
        inputTitle.value = '';
        // inputNumber.value = 15;
        // listen to button id="buttonNext" to display next page
        const buttonNext = document.getElementById("buttonNext");
        buttonNext.addEventListener("click", (e)=>{
            e.preventDefault();
            // check display next page possible
            if (lastLine < recipesLength) {
                // add-up the slice cake and crate next page
                firstLine += pagenumberOfLines;
                lastLine += pagenumberOfLines;
                arrayDisplay = foundRecipes.slice(firstLine, lastLine);
                // initialize first page
                newPageSet = true;
                _createListLinesDefault.default(arrayDisplay);
                // reset the userInput
                inputAuthor.value = '';
                inputTags.value = '';
                inputTitle.value = '';
            // inputNumber.value = 15;
            } else {
                let firstLine = 0;
                let lastLine = pagenumberOfLines;
            }
        });
        // event listner select display detail
        const formSubmitDetail = document.getElementById('recipe-list');
        const buttonDetail = document.getElementById("buttonDetail");
        formSubmitDetail.addEventListener("submit", (e)=>{
            e.preventDefault();
            console.log('submitdetail', e.target);
            // check which radiobutton filled
            const selRec = handleradio();
            // if radio button checked and data then fetch the details via id found in function handle radio
            if (selRec) {
                // new page actions are performed in handle radio
                newPageSet = false;
                _fetchDetailsDefault.default(selRec.value).then();
                //     initialize selRec.checked after display, to make sure details are only once displayed
                selRec.checked = false;
            }
        });
    } catch (e) {
        console.error(e);
        // fill message text
        messageText.textContent = `For this input no data found.`;
    }
}
exports.default = fetchCuiRecipes;
// If the checkbox is checked, display the output text
function handleradio() {
    if (newPageSet) {
        let selRec = 0;
        selectRecipe = [];
        for(let i = 0; i < pagenumberOfLines; i++){
            // Get the checkbox
            selRec = `selRec${i}`;
            selectRecipe[i] = document.getElementById(selRec);
        }
    }
    const selectRecipeF = selectRecipe.find((selRecItem)=>{
        if (selRecItem) return selRecItem.checked === true;
    });
    console.log('sel', selectRecipeF);
    return selectRecipeF;
}

},{"axios":"jo6P5","./createListLines":"a6p3L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./fetchDetails":"bBbOH"}],"a6p3L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function createListLines(recipes) {
    const recipeList = document.getElementById('recipe-list');
    // intialize page message and number of lines on each page
    const messageText = document.getElementById("message-text");
    messageText.textContent = "";
    const numberOfLines = 5;
    // Zorg ervoor dat na elke zoekopdracht en dat er altijd het gewenste zoekresultaat op de pagina staat;
    recipeList.replaceChildren();
    if (recipes.length < numberOfLines) messageText.textContent = `Last data found. Press Start to go to first page.`;
    else messageText.textContent = ` `;
    // reference save of user input
    const inputAuthor = document.getElementById('author');
    const inputTags = document.getElementById('tags');
    const inputTitle = document.getElementById('title');
    const inputNumber = document.getElementById('numberMax');
    const inputIngredients = document.getElementById('ingredients');
    let selRec = "selRec-0";
    let i = 0;
    let recipeButton = document.createElement('button');
    recipeButton.setAttribute('id', 'buttonDetail');
    recipeButton.setAttribute('type', 'submit');
    recipeButton.setAttribute('form', 'recipe-list');
    recipeButton.setAttribute("name", 'buttonDetail');
    recipeButton.textContent = "Details";
    // one or more recipe lines are possible
    recipes.map((recipe, number)=>{
        /* ------------------------------------ */ //   use create element method to fill the DOM tree
        /* ------------------------------------ */ i = number;
        let recipeLabel = document.createElement('label');
        selRec = `selRec${i}`;
        recipeLabel.setAttribute("for", selRec);
        // create container element for recipe line in input
        let recipeInput = document.createElement('input');
        recipeInput.setAttribute("id", selRec);
        recipeInput.setAttribute("type", "radio");
        recipeInput.setAttribute("name", "select");
        recipeInput.setAttribute("value", recipe.id);
        /* ------------------------------------ */ //   use create element method to fill the DOM tree
        /* ------------------------------------ */ // create container element for recipe line in label
        // Create IMG element
        // create container element for recipe line in div
        let recipeDivLine = document.createElement('div');
        recipeDivLine.setAttribute('class', 'recipe-line');
        // Create IMG element
        let recipeImg = document.createElement('img');
        recipeImg.setAttribute('class', 'img-p');
        recipeImg.setAttribute('src', `${recipe.image}`);
        // create container element for recipe line in div
        let recipeDivText = document.createElement('div');
        recipeDivText.setAttribute('class', 'column');
        // Create het titel-element
        const recipeTitle = document.createElement('p');
        //  fill titel-element
        recipeTitle.textContent = recipe.title;
        recipeTitle.setAttribute('class', 'font-p');
        // Create extra-element to show ingredients when searching on ingredients
        const recipeExtra = document.createElement('p');
        if (inputIngredients) {
            //  fill extra elemenent
            let extra = "Ingredients:";
            recipe.usedIngredients.map((ingredient)=>{
                extra += ingredient.name;
            });
            recipeExtra.textContent = extra;
            recipeExtra.setAttribute('class', 'font-p');
        }
        const recipeId = document.createElement("p");
        recipeId.textContent = recipe.id;
        // put elements in container div
        recipeDivLine.appendChild(recipeImg);
        recipeDivText.appendChild(recipeTitle);
        recipeDivText.appendChild(recipeExtra);
        recipeDivLine.appendChild(recipeDivText);
        recipeLabel.appendChild(recipeInput);
        // put elements in container List
        recipeList.appendChild(recipeLabel);
        recipeList.appendChild(recipeDivLine);
        recipeList.appendChild(recipeId);
        i++;
    });
    recipeList.appendChild(recipeButton);
}
exports.default = createListLines;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"99kzu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function createCuisineList(cuisines) {
    const cuisineList = document.getElementById('cuisine-list');
    // Zorg ervoor dat na elke zoekopdracht en dat er altijd het gewenste zoekresultaat op de pagina staat;
    cuisineList.replaceChildren();
    // one or more recipe lines are possible
    // cuisines.map((cuisine) => {
    /* ------------------------------------ */ //   use create element method to fill the DOM tree
    /* ------------------------------------ */ let selCui = "sel-cui-0";
    for(let i = 0; i < cuisines.length; i++){
        // create container element for recipe line in div
        let cuisineLabel = document.createElement('label');
        selCui = `sel-cui-${i}`;
        cuisineLabel.setAttribute('for', selCui);
        // Create input element
        let cuisineInput = document.createElement('input');
        cuisineInput.setAttribute('type', 'checkbox');
        cuisineInput.setAttribute("id", selCui);
        cuisineInput.setAttribute("value", `${cuisines[i]}`);
        cuisineInput.setAttribute("text", `${cuisines[i]}`);
        // cuisineLabel.textContent = `${cuisines[i]}`;
        // put elements in container input
        cuisineLabel.appendChild(cuisineInput);
        cuisineInput.after(`${cuisines[i]}`);
        // put elements in container label
        cuisineList.appendChild(cuisineLabel);
    }
}
exports.default = createCuisineList;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["i9Xmx","crMo7"], "crMo7", "parcelRequiree541")

//# sourceMappingURL=menuCuisine.ff7a114e.js.map
