import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharInfoService } from 'src/app/services/char-info.service';


@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.scss']
})
export class CharDetailsComponent implements OnInit {
  charId:number;

  constructor(aroute: ActivatedRoute,private _charServ: CharInfoService) {
    this.charId = aroute.snapshot.params.id;
  }
  charDetails:any;
  ngOnInit(): void {
    this._charServ.getUsers().subscribe(res  =>{
      this.charDetails = res.filter(
        (char:any) => char.id == this.charId);
        //console.log(this.charDetails)
        this.charDetails = this.charDetails[0];
    });

  }

}
