import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { baseUrl } from '../environment';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }

  getDataEmp() {
    return this.http.get<any>(`${baseUrl}employees`).pipe(
      map(data => {
        return data;
      }),
    );
  }

  login(username:String,password:String) {
    return this.http.post(`${baseUrl}login?username=${username}&password=${password}`,null)
  }
}
