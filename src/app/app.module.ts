import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListsAndTablesComponent } from './components/lists-and-tables/lists-and-tables.component';
import {NgOptimizedImage} from "@angular/common";
import { FormsInputComponent } from './components/forms-input/forms-input.component';
import {FormsModule} from "@angular/forms";
import { ReadsProductsComponent } from './components/reads-read-delete-update-create-products/reads-products.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListsAndTablesComponent,
    FormsInputComponent,
    ReadsProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
