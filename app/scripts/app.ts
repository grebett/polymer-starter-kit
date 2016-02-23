'use strict';

// app is an Element for now... but may be another inteface later
let app = document.querySelector('#app');

app['baseUrl'] = '/';

app.addEventListener('dom-change', () => {
	console.info('Our app is ready to rock!');
});

window.addEventListener('WebComponentsReady', () => {
	console.info('Ok, all WebComponents ready!');
});
