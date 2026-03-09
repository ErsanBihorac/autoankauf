import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownOption } from '../../interfaces/dropdown-option.interface';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.html',
  styleUrl: './scss/dropdown.scss',
})
export class Dropdown {
@Input() options: DropdownOption[] = [];
@Output() selectedOption = new EventEmitter<DropdownOption>();
open = false;
selected: DropdownOption | null = null;

toggle() {
  this.open = !this.open;
}

select(option: DropdownOption, event: Event) {
  event.stopPropagation();
  this.selected = option;
  if (this.selected){
    this.selectedOption.emit(this.selected);
    console.log(this.selected);
  } 
  this.open = false;
}
}
