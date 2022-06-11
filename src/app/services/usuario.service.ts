import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, catchError, throwError, } from 'rxjs';
import { tap } from 'rxjs/operators';

const URL = environment.API_USUARIO;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private refresh = new Subject<void>();

  get reload(){
    return this.refresh;
  }

  constructor(private http:HttpClient) { }

  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(URL)
    .pipe(
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

  getUsuario(id:BigInt):Observable<Usuario>{
    return this.http.get<Usuario>(URL+"/"+id)
    .pipe(
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

  saveUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(URL,usuario)
    .pipe(
      tap(()=>{
        this.refresh.next();
      }),
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

  updateUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(URL+"/"+usuario.id,usuario)
    .pipe(
      tap(()=>{
        this.refresh.next();
      }),
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

  deleteUsuario(id:BigInt):Observable<{}>{
    return this.http.delete<Usuario>(URL+"/"+id)
    .pipe(
      tap(()=>{
        this.refresh.next();
      }),
      catchError(error=>{
        console.log(error);
        return throwError(error);
      })
    );
  }

}
