import { Component, OnInit } from '@angular/core';
import { MenuSidebarBrand } from 'src/app/core/models/menu-sidebar-brand';
import { MenuSidebarItems } from 'src/app/core/models/menu-sidebar-items';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {

  brand: MenuSidebarBrand = {
    url: 'assets/logo-senior-color.svg',
    text: 'Senior Logotipo',
    style: 'filter: brightness(0.44) sepia(0.9) hue-rotate(115deg) saturate(2.1);'
  }

  items: MenuSidebarItems[] = [
    {
      url: '/',
      icon: 'pi-home',
      label: 'Home'
    },
    {
      url: '/adicionar',
      icon: 'pi-plus',
      label: 'Adicionar'
    }
  ]

  menuSidebarOpen = false

  constructor() { }

  ngOnInit(): void {
  }

}
