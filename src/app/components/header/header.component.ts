import { Component, Input } from '@angular/core';


var menuItems = './menu.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toggleMenu = false;
  toggleSubmenu = false;
  @Input() items: object[] = [];
  @Input() subitems: object[] = [];
  public menu;

  constructor() { }


  onToggleMenu() {
    if (this.toggleMenu === true) {
      this.toggleMenu = false;
      this.subitems = undefined;
      console.log('fechou')
    } else {
      this.toggleMenu = true;
      console.log('abriu')
    }
  }
  getSubMenu(item: any) {
    if (this.toggleSubmenu === true) {
      this.toggleSubmenu = false;
      this.subitems = undefined;

    } else {
      this.toggleSubmenu = true;
      this.subitems = item.children;

    }
  }
  confirmaSubMenu(item: any) {
    alert('OK' + item.label)
  }

}
