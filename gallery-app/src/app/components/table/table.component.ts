import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as $ from 'jquery';
import { CharInfoService } from 'src/app/services/char-info.service';
import { data } from './data.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  hp:any;
  constructor(private _charServ: CharInfoService) {
    // console.log('inside constructor')
    this._charServ.getUsers().subscribe(res  =>{
      this.hp = res;
    })
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.hp[0].characterPet, 'Pet updated to this')
  }


  ngOnInit(): void {

  }
  public val:string='';



  rotate():void{
    $(".card").addClass("rotate")
  }

  onNotify(name:string):void{
    this.hp[0].characterPet = name;
  }
  delete(id:number){
    if(confirm("Want to delte Me")){
      this._charServ.deleteUser(id).subscribe(res  =>{
        console.log(res);
      })
    }

  }
}
