(function(document) {
	'use strict';

	var app = document.querySelector('#app');

	app.baseUrl = '/';
	app.addEventListener('dom-change', function() {
		console.info('Our app is ready to rock!');
	});

	window.addEventListener('WebComponentsReady', function() {
		console.info('Ok, all WebComponents ready!');
	});
})(document);
