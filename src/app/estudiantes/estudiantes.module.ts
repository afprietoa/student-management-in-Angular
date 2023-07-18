import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import {MatTableModule } from '@angular/material/table';
import { RegistroComponent } from './registro/registro.component'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EditarComponent } from './editar/editar.component';
import { VerComponent } from './ver/ver.component';
import { InhabilitarComponent } from './inhabilitar/inhabilitar.component';
@NgModule({
  declarations: [
    ConsultaComponent,
    RegistroComponent,
    EditarComponent,
    VerComponent,
    InhabilitarComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
  ]
})
export class EstudiantesModule { }
