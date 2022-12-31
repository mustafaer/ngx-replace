# Angular Twitter Timeline
Embed Twitter Timeline in Angular application.

Supported version:
```
Angular 15
```

## Installation

To install this library, run:

```bash
npm i ngx-replace
```

## Usage

Import in your Angular app:


```typescript
// Import ngx-replace
import {NgxReplacePipe} from "ngx-replace";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NgxReplacePipe,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

```
```angular2html
<p>{{'My name is %name' | ngxReplace: '%name' : 'Mustafa'}}</p>
```