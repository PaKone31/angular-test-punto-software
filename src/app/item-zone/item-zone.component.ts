import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ActivitiesService } from '../services/activities.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-item-zone',
  templateUrl: './item-zone.component.html',
  styleUrls: ['./item-zone.component.css']
})
export class ItemZoneComponent implements OnInit {
  checkoutForm;
  title;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private activitiesService: ActivitiesService
  ) { }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      name: ''
    });

    this.route.paramMap.subscribe(params => {
      if (params.get('itemId') == 'new') {
        this.title = 'Crear';

      } else {
        this.title = 'Editar';

        this.activitiesService.getItem(params.get('itemId'), 'zones')
          .subscribe(data => {
            this.checkoutForm = this.formBuilder.group(data);
          });
      }
    });
  }

  onSubmit(itemData) {
    if (this.checkoutForm.valid) {
      if (itemData.id) {
        this.activitiesService.updateItem(itemData, 'zones')
          .subscribe(data => {
            Swal.fire('¡Guardado correctamente!', '', 'success');
            this.router.navigate(['/item-list']);
          });
      } else {
        this.activitiesService.createItem(itemData, 'zones')
          .subscribe(data => {
            Swal.fire('¡Guardado correctamente!', '', 'success');
            this.router.navigate(['/item-list']);
          });
      }
    } else {
      Swal.fire('¡Error!', 'Asegurate de ingresar toda la información.', 'error');
    }
  }

  cancelItem() {
    Swal.fire({
      title: '¿Deseas cancelar?',
      text: 'Al cancelar, regresaras a la pantalla anterior sin guardar.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, cancelar',
      cancelButtonText: 'No, seguire editando',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/item-list']);
      }
    });
  }

}
