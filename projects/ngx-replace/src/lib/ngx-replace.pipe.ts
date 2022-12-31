import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngx-replace'
})
export class NgxReplacePipe implements PipeTransform {

  transform(text: string, selector: string = '%s', to: string | number): any {
    if (!text) {
      return;
    }
    // replace 'selector' with 'to'
    return text.split(selector).join(to.toString());
  }

}

