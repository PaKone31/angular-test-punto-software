import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  onSubmit(loginData) {
    // if (this.checkoutForm.valid) {
    //   if (loginData.username != "app@pruebas.com.mx") {
    //     Swal.fire('¡Error!', 'USERNAME incorrecto.', 'error');
    //   } else if (loginData.password != "app2019") {
    //     Swal.fire('¡Error!', 'PASSWORD incorrecto.', 'error');
    //   } else {
        Swal.fire('¡Acceso existoso!', '', 'success');
        this.router.navigate(['/item-list']);
    //   }
    // } else {
    //   Swal.fire('¡Error!', 'Ingresa USERNAME y PASSWORD.', 'error');
    // }
  }
}
