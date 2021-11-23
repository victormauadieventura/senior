import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./pages/add-product/add-product.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'adicionar',
    component: AddProductComponent
  }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
