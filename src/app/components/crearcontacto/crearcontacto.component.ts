import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactoService } from 'src/app/service/contacto.service';
import { Contacto } from 'src/app/models/contacto';

@Component({
  selector: 'app-crearcontacto',
  templateUrl: './crearcontacto.component.html',
  styleUrls: ['./crearcontacto.component.css']
})
export class CrearcontactoComponent implements OnInit {
  listContactos: Contacto[] = [];
  contactoForm: FormGroup;
  titulo = 'Crear Contacto';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _contactoService: ContactoService,
              private aRouter: ActivatedRoute) { 
    this.contactoForm = this.fb.group({
      nombres: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  obtenerContactos() {
    this._contactoService.getContactos().subscribe(data => {
      console.log(data);
      this.listContactos = data;
    }, error => {
      console.log(error);
    })
  }

  agregarContacto() {

    const CONTACTO: Contacto= {
      nombres: this.contactoForm.get('nombres')?.value,
      telefono: this.contactoForm.get('telefono')?.value,
      correo: this.contactoForm.get('correo')?.value,
    }

    this._contactoService.guardarContacto(CONTACTO).subscribe(data => {
      if (this.id !== null) {
        this.toastr.warning('El contacto fue actualizado con exito!', 'Contacto Actualizado!');
      } else {
        this.toastr.success('El contacto fue registrado con exito!', 'Contacto Registrado!');
      }
      
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.contactoForm.reset();
    })

  
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar Contacto';
      console.log(this.id)
      this._contactoService.obtenerContacto(this.id).subscribe(data => {
        console.log(data.correo)
        console.log(data.telefono)
        this.contactoForm.setValue({
          nombres: 'jjj',
          telefono: data.telefono,
          correo: data.correo,
        })
      })
    }
  }

}


