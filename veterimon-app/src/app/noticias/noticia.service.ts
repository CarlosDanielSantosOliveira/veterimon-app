import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from './interfaceNoticia/noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  baseUrl = "http://localhost:3001/duvidas"

  constructor(private http: HttpClient) { }

  showMessage(msg: string): void {
    console.log(msg);
  }

  create(noticia: Noticia): Observable<Noticia> {
    return this.http.post<Noticia>(this.baseUrl, noticia)
  }
}