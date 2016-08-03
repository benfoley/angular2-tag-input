"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var lang_1 = require('angular2/src/facade/lang');
var tag_input_item_component_1 = require('./tag-input-item.component');
var TagInputComponent = (function () {
    function TagInputComponent(_ngControl) {
        this._ngControl = _ngControl;
        this.placeholder = 'Add a tag';
        this.delimiterCode = '188';
        this.addOnBlur = true;
        this.addOnEnter = true;
        this.addOnPaste = true;
        this.allowedTagsPattern = /.+/;
        this.tagsList = [];
        this.inputValue = '';
        /** Implemented as part of ControlValueAccessor. */
        this.onChange = function () { };
        this.onTouched = function () { };
        this._ngControl.valueAccessor = this;
    }
    TagInputComponent.prototype.ngOnInit = function () {
        if (this.ngModel)
            this.tagsList = this.ngModel;
        this.onChange(this.tagsList);
        this.delimiter = parseInt(this.delimiterCode);
    };
    TagInputComponent.prototype.inputChanged = function (event) {
        var key = event.keyCode;
        switch (key) {
            case 8:
                this._handleBackspace();
                break;
            case 13:
                this.addOnEnter && this._addTags([this.inputValue]);
                event.preventDefault();
                break;
            case this.delimiter:
                this._addTags([this.inputValue]);
                event.preventDefault();
                break;
            default:
                this._resetSelected();
                break;
        }
    };
    TagInputComponent.prototype.inputBlurred = function (event) {
        this.addOnBlur && this._addTags([this.inputValue]);
        this.isFocussed = false;
    };
    TagInputComponent.prototype.inputFocused = function (event) {
        this.isFocussed = true;
    };
    TagInputComponent.prototype.inputPaste = function (event) {
        var _this = this;
        var clipboardData = event.clipboardData || (event.originalEvent && event.originalEvent.clipboardData);
        var pastedString = clipboardData.getData('text/plain');
        var tags = this._splitString(pastedString);
        var tagsToAdd = tags.filter(function (tag) { return _this._isTagValid(tag); });
        this._addTags(tagsToAdd);
        setTimeout(function () { return _this.inputValue = ''; }, 3000);
    };
    TagInputComponent.prototype._splitString = function (tagString) {
        tagString = tagString.trim();
        var tags = tagString.split(String.fromCharCode(this.delimiter));
        return tags.filter(function (tag) { return !!tag; });
    };
    TagInputComponent.prototype._isTagValid = function (tagString) {
        return this.allowedTagsPattern.test(tagString);
    };
    TagInputComponent.prototype._addTags = function (tags) {
        var _this = this;
        var validTags = tags.filter(function (tag) { return _this._isTagValid(tag); });
        this.tagsList = this.tagsList.concat(validTags);
        this._resetSelected();
        this._resetInput();
        this.onChange(this.tagsList);
    };
    TagInputComponent.prototype._removeTag = function (tagIndexToRemove) {
        this.tagsList.splice(tagIndexToRemove, 1);
        this._resetSelected();
        this.onChange(this.tagsList);
    };
    TagInputComponent.prototype._handleBackspace = function () {
        if (!this.inputValue.length && this.tagsList.length) {
            if (!lang_1.isBlank(this.selectedTag)) {
                this._removeTag(this.selectedTag);
            }
            else {
                this.selectedTag = this.tagsList.length - 1;
            }
        }
    };
    TagInputComponent.prototype._resetSelected = function () {
        this.selectedTag = null;
    };
    TagInputComponent.prototype._resetInput = function () {
        this.inputValue = '';
    };
    TagInputComponent.prototype.writeValue = function (value) { };
    TagInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TagInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TagInputComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TagInputComponent.prototype, "ngModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TagInputComponent.prototype, "delimiterCode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TagInputComponent.prototype, "addOnBlur", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TagInputComponent.prototype, "addOnEnter", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TagInputComponent.prototype, "addOnPaste", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', RegExp)
    ], TagInputComponent.prototype, "allowedTagsPattern", void 0);
    __decorate([
        core_1.HostBinding('class.ng2-tag-input-focus'), 
        __metadata('design:type', Object)
    ], TagInputComponent.prototype, "isFocussed", void 0);
    TagInputComponent = __decorate([
        core_1.Component({
            selector: 'tag-input',
            template: "<tag-input-item\n    [text]=\"tag\"\n    [index]=\"index\"\n    [selected]=\"selectedTag === index\"\n    (tagRemoved)=\"_removeTag($event)\"\n    *ngFor=\"#tag of tagsList; #index = index\">\n  </tag-input-item>\n  <input\n    class=\"ng2-tag-input-field\"\n    type=\"text\"\n    [placeholder]=\"placeholder\"\n    [(ngModel)]=\"inputValue\"\n    (paste)=\"inputPaste($event)\"\n    (keydown)=\"inputChanged($event)\"\n    (blur)=\"inputBlurred($event)\"\n    (focus)=\"inputFocused()\"\n    #tagInputRef>",
            styles: ["\n    :host {\n      display: block;\n      box-shadow: 0 1px #ccc;\n      padding: 5px 0;\n    }\n\n    :host.ng2-tag-input-focus {\n      box-shadow: 0 2px #0d8bff;\n    }\n\n    .ng2-tag-input-field {\n      display: inline-block;\n      width: auto;\n      box-shadow: none;\n      border: 0;\n    }\n  "],
            directives: [tag_input_item_component_1.TagInputItemComponent]
        }), 
        __metadata('design:paramtypes', [common_1.NgControl])
    ], TagInputComponent);
    return TagInputComponent;
}());
exports.TagInputComponent = TagInputComponent;
