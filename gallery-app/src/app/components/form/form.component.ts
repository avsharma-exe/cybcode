import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CharInfoService } from 'src/app/services/char-info.service';
import { IImage } from '../iimage';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  newChar = {characterDetails:"", characterName:'',characterBday:'',characterImg:'',characterPet:'',
  characterType:'',characterWand:''};
  constructor(private _charServ:CharInfoService) { }

  ngOnInit(): void {

  }

  onSubmit(formData:NgForm):void{
    this._charServ.addUser(this.newChar).subscribe(res  =>{
      console.log(res)
    })
    alert('char added' + this.newChar.characterName);
  }
}
