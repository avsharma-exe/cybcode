import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges {

  constructor() { }

  // @Input() petName: string | undefined;

  @Output() notify: EventEmitter<string> = new EventEmitter();

  name:any = '';
  onClick():void{
    if($('#petName').val()){
      this.name = $('#petName').val();
      this.notify.emit(this.name);
    }else{
      console.log('Enter a Name')
    }

  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.name, 'Pet updated to this')
  }

}
