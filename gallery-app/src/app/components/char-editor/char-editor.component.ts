import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CharInfoService } from 'src/app/services/char-info.service';

@Component({
  selector: 'app-char-editor',
  templateUrl: './char-editor.component.html',
  styleUrls: ['./char-editor.component.scss']
})

export class CharEditorComponent implements OnInit {

  charId:number;
  charDetails:any;
  constructor(aroute: ActivatedRoute,private _charServ: CharInfoService) {
    this.charId = aroute.snapshot.params.id;
    this._charServ.getUserWithId(this.charId).subscribe(res  =>{
      this.charDetails = res;
      this.edit();
    });

  }
  profileForm:any;
  ngOnInit(): void {
  }

  edit(){

    this.profileForm = new FormGroup({
      characterName: new FormControl(this.charDetails['characterName']),
      id: new FormControl(this.charDetails['id']),
      characterPet: new FormControl(this.charDetails['characterPet']),
      characterType: new FormControl(this.charDetails['characterType']),
      characterDetails: new FormControl(this.charDetails['characterDetails']),
      characterWand: new FormControl(this.charDetails['characterWand']),
      characterBday: new FormControl(this.charDetails['characterBday']),
      characterImg:new FormControl(this.charDetails['characterImg']),
    });
  }


  onSubmit(value:any){
    this._charServ.updateUser(value.value).subscribe(res  =>{
      console.log(res);
    })
    alert("updated");
  }

}

