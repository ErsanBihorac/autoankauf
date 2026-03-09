import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownOption } from '../../interfaces/dropdown-option.interface';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.html',
  styleUrl: './scss/dropdown.scss',
})
export class Dropdown implements OnChanges {
  @Input() options: DropdownOption[] = [];
  @Input() disabled = false;
  @Output() selectedArrayIndex = new EventEmitter<number>();
  open = false;
  selected: DropdownOption | undefined = undefined;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options'] && !changes['options'].firstChange) {
      this.selected = undefined;
      this.open = false;
    }

    if (changes['disabled']?.currentValue) {
      this.open = false;
    }
  }

  toggle() {
    if (this.disabled) {
      return;
    }
    this.open = !this.open;
  }

  select(option: DropdownOption, event: Event, i: number) {
    if (this.disabled) {
      return;
    }
    event.stopPropagation();
    this.selected = option;
    if (this.selected) {
      this.selectedArrayIndex.emit(i);
    }
    this.open = false;
  }
}
