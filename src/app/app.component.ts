import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public menuItems = [
    {
      "label": "Usuarios", "href": "", "children": [
        { "label": "submenu1", "father": "Usuarios", "type": "level2", "href": "" },
        { "label": "submenu1", "father": "Usuarios", "type": "level2", "href": "" },
        { "label": "submenu1", "father": "Usuarios", "type": "level2", "href": "" },
        { "label": "submenu1", "father": "Usuarios", "type": "level2", "href": "" }
      ]
    },
    {
      "label": "Mercadorias", "href": "", "children": [
        { "label": "submenu2", "father": "Mercadorias", "type": "level2", "href": "" },
        { "label": "submenu2", "father": "Mercadorias", "type": "level2", "href": "" },
        { "label": "submenu2", "father": "Mercadorias", "type": "level2", "href": "" },
        { "label": "submenu2", "father": "Mercadorias", "type": "level2", "href": "" }
      ]
    },
    {
      "label": "Diversão", "href": "", "children": [
        { "label": "submenu3", "father": "Diversão", "type": "level2", "href": "" },
        { "label": "submenu3", "father": "Diversão", "type": "level2", "href": "" },
        { "label": "submenu3", "father": "Diversão", "type": "level2", "href": "" },
        { "label": "submenu3", "father": "Diversão", "type": "level2", "href": "" }
      ]
    }

  ];


  public collapsibleItems = [
    { label: "New York", value: "ainda não fui" },
    { label: "São Paulo", value: "fui" },
    { label: "Minas Gerais", value: "fui" },
    { label: "Paris", value: "ainda não fui" },
    { label: "Londres", value: "ainda não fui" },
  ]

}


