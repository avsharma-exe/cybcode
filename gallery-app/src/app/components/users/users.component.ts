import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private _userServ:UserInfoService) { }
  user:any;
  ngOnInit(): void {
    this._userServ.getUsers().subscribe(res  =>{
       this.user = res.data
    })
  }

}
