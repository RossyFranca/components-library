import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  private readonly validTypes = ['password', 'text', 'number', 'month', 'date', 'datetime'];
  @Input() type = 'text';
  @Input() label: string;



  ngOnInit() {
    if (this.validTypes.indexOf(this.type) === -1) throw new Error('Tipo ' + this.type + 'inválido');
  }
  public getType(): string {

    if (this.type === 'number') return 'number';
    if (this.type === 'password') return 'password';

    return 'text';
  }



}
