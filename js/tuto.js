var DISPLAY = (function(module){
	
	module.displayDate = function(resultObject) {
		resultObject.prepend(Date() + '<br/>');
	};
	
	return module;
}(DISPLAY || {}));