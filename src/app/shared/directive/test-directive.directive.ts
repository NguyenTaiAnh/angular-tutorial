import { Directive, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appTestDirective]',
})
export class TestDirectiveDirective implements OnInit {

  @Input() title:string =''
  @Input() dataObj?: {tt1: string, tt2: string}
  @Output() dataChange = new EventEmitter();

  constructor() { }
  @HostListener('click') clickMe(){
    alert('click me');
  }
  ngOnInit(): void {
    console.log("tile test: ", this.title);
    console.log("dataObj dataObj: ", this.dataObj);
    console.log("vao trong directive test");
    this.dataChange.emit("data return from directive");
  }
}
