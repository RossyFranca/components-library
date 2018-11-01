import { Component, Input } from '@angular/core';


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
      // this.subitems = undefined;
      console.log('fechou')
    } else {
      this.toggleMenu = true;
      console.log('abriu')
    }
  }
  getSubMenu(item: any) {
    var menu = item.label;
    if (this.toggleSubmenu === false ) {
      this.subitems = item.children;
      this.toggleSubmenu = true;
      console.log("abre sub menu")
    } else {
      this.toggleSubmenu = false;
      this.subitems = undefined;
      console.log('fechou sub menu')
    }

  }
  confirmaSubMenu(item: any) {
    alert('OK' + item.label)
  }

}
