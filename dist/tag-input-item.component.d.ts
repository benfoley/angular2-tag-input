import { EventEmitter } from '@angular/core';
export declare class TagInputItemComponent {
    selected: boolean;
    text: string;
    index: number;
    tagRemoved: EventEmitter<number>;
    constructor();
    removeTag(): void;
}
