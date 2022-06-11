import { Injectable } from '@angular/core';
import { Role } from '../models/role.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, catchError, throwError, } from 'rxjs';
import { tap } from 'rxjs/operators';

const URL = environment.API_ROL;

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private refresh = new Subject<void>();

  get reload(){
    return this.refresh;
  }

  constructor(private http:HttpClient) { }

  getRoles():Observable<Role[]>{
    return this.http.get<Role[]>(URL)
    .pipe(
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

}
