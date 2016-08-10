/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	function resizeTop(){
		document.getElementById('top-content').style.minHeight = (window.innerHeight-130-165)+'px';
	}
	window.addEventListener('resize', function(){
		resizeTop();
	});
	resizeTop();

	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	if(isMobile){
		document.getElementById('video').style.display = "none";
		document.getElementById('gif').style.display = "block";
	}

	function setInstalled(){
		$('.install-btn').html('Thundertick Installed');
	}
	if(chrome && chrome.app){
		if(chrome.app.isInstalled){
			setInstalled();
		}
	}
	$('.install-btn').on('click', function(e){
		if(chrome && chrome.webstore){
			try{
				chrome.webstore.install("https://chrome.google.com/webstore/detail/fjlfmlponipgmabidmcmijicbbfnbnnj",function(){
					setInstalled();
				}, function(){})
			} catch(e){
				console.error(e);
				window.top.location = "https://chrome.google.com/webstore/detail/fjlfmlponipgmabidmcmijicbbfnbnnj/";
			}
		} else if(navigator.userAgent.toLowerCase().indexOf('firefox')) {
			window.top.location = "https://addons.mozilla.org/en-GB/firefox/addon/thundertick/";
		} else {
			window.top.location = "https://chrome.google.com/webstore/detail/fjlfmlponipgmabidmcmijicbbfnbnnj/";
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);