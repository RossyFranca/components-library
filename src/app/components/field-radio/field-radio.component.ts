import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-field-radio',
  templateUrl: './field-radio.component.html',
  styleUrls: ['./field-radio.component.css']
})
export class FieldRadioComponent {

  private static _nextId = 0;
  private _model: string;

  @Input()
  get model() {
    return this._model;
  }
  set model(value: string) {
    this._model = value;
    this.modelChange.emit(this._model);
  }

  @Input() id: string = 'fieldradio' + (++FieldRadioComponent._nextId);
  @Input() label: string;
  @Input() disabled: boolean = false;
  @Input() value: string;
  @Input() name: string;

  @Output() modelChange = new EventEmitter<string>();


}
