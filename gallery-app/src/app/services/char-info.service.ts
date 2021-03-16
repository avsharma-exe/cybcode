import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharInfoService {

  constructor(private http: HttpClient) { }
  charUrl = 'http://localhost:3000/data';
  getUsers():Observable<any>{
    return this.http.get<any>(this.charUrl);
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.charUrl, user)
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.charUrl}/${id}`;
    return this.http.delete(url);
  }
  updateUser(user:any): Observable<any> {
    return this.http.put<any>(`${this.charUrl}/${user.id}`, user)
  }
  getUserWithId(id:number): Observable<any>{
    return this.http.get<any>(`${this.charUrl}/${id}`);
  }
}
