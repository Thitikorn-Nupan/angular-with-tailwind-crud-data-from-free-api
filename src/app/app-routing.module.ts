import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ListsAndTablesComponent} from "./components/lists-and-tables/lists-and-tables.component";
import {FormsInputComponent} from "./components/forms-input/forms-input.component";
import {ReadsProductsComponent} from "./components/reads-read-delete-update-create-products/reads-products.component";

const routes: Routes = [
  {path: 'lists-and-tables', component: ListsAndTablesComponent},
  {path: 'forms-input', component: FormsInputComponent},
  {path: 'reads-read-delete-update-create-products', component: ReadsProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
