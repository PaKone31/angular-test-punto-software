import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ActivitiesService } from '../services/activities.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit {
  checkoutForm;
  title;
  zones;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private activitiesService: ActivitiesService
  ) { }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      zoneId: '',
      isActive: ''
    });
    
    this.route.paramMap.subscribe(params => {
      if (params.get('itemId') == 'new') {
        this.title = 'Crear';

      } else {
        this.title = 'Editar';

        this.activitiesService.getItem(params.get('itemId'), 'tables')
          .subscribe(data => {
            this.checkoutForm = this.formBuilder.group(data);
          });
      }
    });

    this.activitiesService.getZones()
      .subscribe(data => {
        this.zones = data;
      });
  }

  onSubmit(itemData) {
    if (this.checkoutForm.valid) {
      if (itemData.id) {
        this.activitiesService.updateItem(itemData, 'tables')
          .subscribe(data => {
            Swal.fire('¡Guardado correctamente!', '', 'success');
            this.router.navigate(['/item-list']);
          });
      } else {
        this.activitiesService.createItem(itemData, 'tables')
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
