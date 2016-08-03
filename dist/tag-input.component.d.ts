import { NgControl } from 'angular2/common';
export declare class TagInputComponent {
    private _ngControl;
    placeholder: string;
    ngModel: string[];
    delimiterCode: string;
    addOnBlur: boolean;
    addOnEnter: boolean;
    addOnPaste: boolean;
    allowedTagsPattern: RegExp;
    isFocussed: any;
    tagsList: string[];
    inputValue: string;
    delimiter: number;
    selectedTag: number;
    constructor(_ngControl: NgControl);
    ngOnInit(): void;
    inputChanged(event: any): void;
    inputBlurred(event: any): void;
    inputFocused(event: any): void;
    inputPaste(event: any): void;
    private _splitString(tagString);
    private _isTagValid(tagString);
    private _addTags(tags);
    private _removeTag(tagIndexToRemove);
    private _handleBackspace();
    private _resetSelected();
    private _resetInput();
    /** Implemented as part of ControlValueAccessor. */
    onChange: (value) => any;
    onTouched: () => any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
