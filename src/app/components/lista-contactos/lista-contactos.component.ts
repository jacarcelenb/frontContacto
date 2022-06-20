import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto';
import { ContactoService } from 'src/app/service/contacto.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {
  listContactos: Contacto[] = [];
  constructor(private _contactoService: ContactoService , private toast: ToastrService) { }
  ngOnInit(): void {
    this.obtenerContactos();
  }


  obtenerContactos() {
    this._contactoService.getContactos().subscribe(data => {
      console.log(data);
      this.listContactos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarContacto(id: any) {
    this._contactoService.eliminarContacto(id).subscribe(data => {
      this.toast.error('El contacto fue eliminado con exito!', 'Contacto Eliminado!');
      this.obtenerContactos();
      
    }, error => {
      console.log(error);
    })
  }

}
