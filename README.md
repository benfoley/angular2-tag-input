# angular2-tag-input
Tag input component for Angular 2.
Updated for Angular2 2.0.0-rc.3.

## Demo & Examples
[View Plunker](http://plnkr.co/edit/uVGOm8yA0zA0OKhgWpvq?p=preview)

## Quick Start
```
npm install angular2-tag-input --save
```

```
// In one of your application components, eg home.ts
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TagInputComponent} from 'angular2-tag-input';

@Component({
    template: `<tag-input [(ngModel)]="items">tags</tag-input>`,
    directives: [TagInputComponent]
})
export class HomePage {
  items: any;
  constructor(private navCtrl: NavController) {
    this.items = ['Pizza', 'Pasta', 'Parmesan'];
  }
}
```

## API
### Inputs
- `ngModel` : `string[]` - **Required** Property to store the resulting tag list in.
- `placeholder` : `string` - **Default**: ``'Add a tag'`` - Placeholder for the `<input>` tag.
- `delimiterCode` : `string` - **Default**: ``'188'`` - ASCII keycode to split tags on. Defaults to comma.
- `addOnBlur` : `boolean` - **Default**: `true` - Whether to attempt to add a tag when the input loses focus.
- `addOnEnter` : `boolean` - **Default**: `true` - Whether to attempt to add a tag when the user presses enter.
- `addOnPaste` : `boolean` - **Default**: `true` - Whether to attempt to add a tags when the user pastes their clipboard contents.
- `allowedTagsPattern` : `RegExp` - **Default**: `/.+/` - RegExp that must match for a tag to be added.
