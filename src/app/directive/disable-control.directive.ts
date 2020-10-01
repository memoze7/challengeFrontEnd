import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[disableControl]'
})
export class DisableControlDirective {


  @Input() disableControl: boolean;

  constructor(private ngControl: NgControl) { }

  ngOnChanges() {
    if (this.disableControl) {
      this.ngControl.control.disable();
    } else {
      this.ngControl.control.enable();
    }

  }
}
