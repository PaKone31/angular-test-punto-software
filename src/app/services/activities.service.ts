import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private apiUrl = "http://localhost:3000/api/";

  constructor(
    private http: HttpClient
  ) { }

  getZones() {
    const apiReq = this.apiUrl + "zones";
    return this.http.get(apiReq);
  }

  getZonesAndTables() {
    const apiReq = this.apiUrl + "zones?filter=%7B%22include%22%3A%20%22tables%22%7D";
    return this.http.get(apiReq);
  }

  getItem(id, itemType) {
    const apiReq = this.apiUrl + itemType + "/" + id;
    return this.http.get(apiReq);
  }

  createItem(item, itemType) {
    const apiReq = this.apiUrl + itemType;
    return this.http.post(apiReq, item);
  }

  updateItem(newItem, itemType) {
    const apiReq = this.apiUrl + itemType + "/" + newItem.id;
    return this.http.patch(apiReq, newItem);
  }

  deleteItem(id, itemType) {
    const apiReq = this.apiUrl + itemType + "/" + id;
    return this.http.delete(apiReq);
  }

}
