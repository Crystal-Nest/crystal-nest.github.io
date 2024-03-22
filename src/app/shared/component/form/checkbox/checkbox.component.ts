import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCheckbox, MatCheckboxChange, MatCheckboxModule} from '@angular/material/checkbox';

import {CnControlValueAccessor} from '../cva/control-value-accessor';

/**
 * Crystal Nest checkbox component.
 *
 * @export
 * @class CnCheckboxComponent
 * @typedef {CheckboxComponent}
 * @extends {CnControlValueAccessor<boolean>}
 */
@Component({
  selector: 'cn-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCheckboxModule],
  templateUrl: 'checkbox.component.html',
  styleUrl: 'checkbox.component.scss'
})
export class CheckboxComponent extends CnControlValueAccessor<boolean> {
  /**
   * Whether the checkbox is in the indeterminate state.
   *
   * @public
   * @type {boolean}
   */
  @Input()
  public indeterminate = false;

  @Output()
  public readonly checked: EventEmitter<boolean> = new EventEmitter();

  /**
   * `MatCheckbox` child element.
   *
   * @public
   * @type {!MatCheckbox}
   */
  @ViewChild('checkbox', {read: MatCheckbox})
  public checkbox?: MatCheckbox;

  /**
   * Handles the checkbox change event.
   *
   * @public
   * @param {MatCheckboxChange} event
   */
  public change(event: MatCheckboxChange) {
    const {checked} = event;
    this.checked.emit(checked);
    this.onChange(checked);
    this.onTouched();
  }
}
