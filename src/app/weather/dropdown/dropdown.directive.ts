import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class DropdownDirective {

  @Output()
  public clickOutside = new EventEmitter()

  constructor(private _elementRef: ElementRef) { }


  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: { id: string; }) {
    if (targetElement.id === "search") return
    const isClickedInside = this._elementRef.nativeElement.contains(targetElement)
    if (!isClickedInside) {
      this.clickOutside.emit(null)
    }
  }
}
