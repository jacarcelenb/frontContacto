import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearcontactoComponent } from './components/crearcontacto/crearcontacto.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';

const routes: Routes = [
  { path: '', component: ListaContactosComponent },
  { path: 'crear-contacto', component: CrearcontactoComponent },
  { path: 'editar-contacto/:id', component: CrearcontactoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
