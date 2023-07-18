import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      usuario:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(){

    const formData = this.loginForm.value;
    // const usuario = formData.usuario;
    // const password = formData.password;

    if(this.loginForm.valid){
      sessionStorage.setItem('formData', JSON.stringify(formData));
      sessionStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/main'])
    }
  }

}
