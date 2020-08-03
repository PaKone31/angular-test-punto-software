import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActivitiesService } from '../services/activities.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  zones: any = [];

  constructor(
    private router: Router,
    private activitiesService: ActivitiesService
  ) { }

  ngOnInit() {
    this.getContent();
  }

  getContent() {
    this.activitiesService.getZonesAndTables()
      .subscribe(data => {
        this.zones = data;
      });
  }

  deleteItem(itemId, itemType) {
    Swal.fire({
      title: '¿Deseas continuar?',
      text: 'Al eliminar, no podras recuperar el elemento.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cambie de opinion',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.activitiesService.deleteItem(itemId, itemType)
        .subscribe(data => {
          this.getContent();
        });
      }
    });
  }

  changeStatus(item) {
    item.isActive = !item.isActive;
    this.activitiesService.updateItem(item, 'tables')
    .subscribe(data => {
      this.getContent();
    });
  }

}
