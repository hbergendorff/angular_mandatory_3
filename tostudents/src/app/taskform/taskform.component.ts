import { Component, Input, Output, EventEmitter } from '@angular/core';
import {StatusType} from "../constants";

@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {
  @Input() showForm;
  task = {title:null, description:null};
  @Output() saveInput: EventEmitter <any> = new EventEmitter();

  constructor() {}

  saveValue(){
    this.saveInput.emit(this.task);
    this.resetForm();
  }

  resetForm(){
    this.task = {title:null, description:null};
  }
}
