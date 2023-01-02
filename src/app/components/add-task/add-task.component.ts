import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;

  constructor() {}

  onSubmit() {
    if (!this.text || !this.day) {
      alert('Please fill all fields...');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // RESET FORM
    this.text = '';
    this.day = '';
    this.reminder = false;
    // EMIT EVENT TO PARENT
    this.onAddTask.emit(newTask);
  }
}
