import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { MenuSidebarComponent } from './pages/components/menu-sidebar/menu-sidebar.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuSidebarComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    routing,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
