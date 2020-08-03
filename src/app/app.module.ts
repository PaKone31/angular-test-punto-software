import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemTableComponent } from './item-table/item-table.component';
import { ItemZoneComponent } from './item-zone/item-zone.component';

//Services
import { ActivitiesService } from './services/activities.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemListComponent,
    ItemTableComponent,
    ItemZoneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'item-list', component: ItemListComponent },
      { path: 'item-table/:itemId', component: ItemTableComponent },
      { path: 'item-zone/:itemId', component: ItemZoneComponent }
    ])
  ],
  providers: [ActivitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
