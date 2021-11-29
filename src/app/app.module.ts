import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { DynamicTableComponent } from './pages/components/dynamic-table/dynamic-table.component';

import { PipeCurrency } from './pages/pipes/pipe-currency.pipe';
import { PipeNumeber } from './pages/pipes/pipe-number.pipe ';
import { PipeNumeberLiter } from './pages/pipes/pipe-number-liter.pipe ';
import { PipeNumeberKilogram } from './pages/pipes/pipe-number-kilogram.pipe ';
import { PipeNumeberUnity } from './pages/pipes/pipe-number-unity.pipe ';
import { PipeDate } from './pages/pipes/pipe-date.pipe ';

import { MenuSidebarComponent } from './pages/components/menu-sidebar/menu-sidebar.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DynamicTableComponent,
    PipeCurrency,
    PipeNumeber,
    PipeNumeberLiter,
    PipeNumeberKilogram,
    PipeNumeberUnity,
    PipeDate,
    MenuSidebarComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    InputMaskModule,
    InputNumberModule,
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
