/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
// PolymerTS API can be found here => https://github.com/nippur72/PolymerTS
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MyCard = (function (_super) {
    __extends(MyCard, _super);
    function MyCard() {
        _super.call(this);
        this._n = '42';
    }
    MyCard.prototype.ready = function () {
        console.log('element is READY!');
    };
    MyCard.prototype.nameChanged = function () {
        if (this.name === '') {
            this.name = 'Me';
        }
    };
    MyCard.prototype.displayName = function (name, _42) {
        if (_42 === true) {
            return name + this._n;
        }
        else {
            return name;
        }
    };
    __decorate([
        property({ type: Boolean, value: false }), 
        __metadata('design:type', Boolean)
    ], MyCard.prototype, "_42", void 0);
    __decorate([
        property({ type: String, value: 'Me', notify: true }), 
        __metadata('design:type', String)
    ], MyCard.prototype, "name", void 0);
    __decorate([
        listen('name-changed'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MyCard.prototype, "nameChanged", null);
    __decorate([
        computed(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', void 0)
    ], MyCard.prototype, "displayName", null);
    MyCard = __decorate([
        /// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />
        component('my-card'), 
        __metadata('design:paramtypes', [])
    ], MyCard);
    return MyCard;
})(polymer.Base);
MyCard.register();
//# sourceMappingURL=my-card.js.map