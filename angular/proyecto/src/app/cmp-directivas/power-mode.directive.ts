import {Directive, ElementRef, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPowerMode]'
})
export class PowerModeDirective {
  @HostBinding('style.color') color: string;
  @HostBinding('style.marginTop') margTo: string;
  @HostBinding('style.marginLeft') margLe: string;

  constructor() { 
  }
  
  @HostListener('input') oninput() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    this.color = `rgb(${r},${g},${b})`;

    this.margLe = '6px'; this.margTo = '6px';
    setTimeout(()=>{ this.margLe = '0px'; this.margTo = '0px'; }, 100);
  }

}
