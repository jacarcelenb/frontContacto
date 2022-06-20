import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url = 'https://contact-agenda-api.herokuapp.com/contactos/';
  constructor(private http: HttpClient) { }

  getContactos(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarContacto(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarContacto(contacto: Contacto): Observable<any> {
    return this.http.post(this.url, contacto);
  }

  obtenerContacto(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
