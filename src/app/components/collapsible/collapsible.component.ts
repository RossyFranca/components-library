import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent {
  toggle = false;
  isOpen = false;

  @Input() label: string;
  @Input() desc?: string;


  @ViewChild('content') content;

  public onToggle() {
    this.isOpen ? this.close() : this.open();
  }


  public open() {

    const content: HTMLDivElement = this.content.nativeElement;
    content.style.maxHeight = `${content.scrollHeight}px`;
    this.isOpen = true;
    console.log('vai', content)
  }

  public close() {
    const content: HTMLDivElement = this.content.nativeElement;
    content.style.maxHeight = "0px";
    this.isOpen = false;
    console.log('volta', content)
  }

}
