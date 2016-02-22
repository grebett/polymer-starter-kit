/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
// PolymerTS API can be found here => https://github.com/nippur72/PolymerTS

@component('my-card')
class MyCard extends polymer.Base {
	private _n: string = '42';

	@property({type: Boolean, value: false})
	public _42: boolean;

	@property({type: String, value: 'Me', notify: true})
	public name: string;

	constructor() {
		super();
	}

	ready() {
		console.log('element is READY!');
	}

	@listen('name-changed')
	nameChanged() {
		if (this.name === '') {
			this.name = 'Me';
		}
	}

	@computed()
	displayName(name, _42) {
		if (_42 === true) {
			return name + this._n;
		} else {
			return name;
		}
	}
}

MyCard.register();