import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-cv',
  templateUrl: './cmp-cv.component.html',
  styleUrls: ['./cmp-cv.component.css']
})
export class CmpCvComponent implements OnInit {
  @Input() nombreRecogido: string = '';
  @Input() apellidoRecogido: string = '';
  @Input() correoRecogido: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
