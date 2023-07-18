import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit { 
  editForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private estudiantesService: EstudiantesService,
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<EditarComponent>
  ){
    this.editForm = this.fb.group({
      nombres:['', Validators.required],
      apellidos:['', Validators.required],
      celular:['', Validators.required],
      correo:['', Validators.required],
      linkedin:['', Validators.required],
      github:['', Validators.required]
    })
  }
  
  ngOnInit(): void {
    const estudiante = this.data.estudiante;
    this.estudiantesService.consultarEstudiante(estudiante).subscribe({
      next: (response: any) => {
        const estudianteData = response.data[0];
        this.editForm = this.fb.group({
          nombres:[estudianteData.estudiante_nombres, Validators.required],
          apellidos:[estudianteData.estudiante_apellidos, Validators.required],
          celular:[estudianteData.estudiante_celular, Validators.required],
          correo:[estudianteData.estudiante_correo, Validators.required],
          linkedin:[estudianteData.estudiante_linkedin, Validators.required],
          github:[estudianteData.estudiante_github, Validators.required]
        })
      },
      error: (error: any) =>{

      }
    })
  }
  onSubmit(): void {
    console.log(this.editForm.value)
    if(this.editForm.valid) {
      const estudiante = {
        nombres: this.editForm.value.nombres,
        apellidos: this.editForm.value.apellidos,
        celular: Number(this.editForm.value.celular),
        correo: this.editForm.value.correo,
        linkedin: this.editForm.value.linkedin,
        github: this.editForm.value.github
      }

      this.estudiantesService.actualizarEstudiante(this.data.estudiante, estudiante).subscribe({
        next: (response: any)=>{
          this.dialogRef.close();
        },
        error: (error: any)=>{
          console.log(error)
        }
      })
    }
  }
}
