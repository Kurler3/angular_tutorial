import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskServiceService } from 'src/app/services/task-service.service';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task;
  // ON DELETE
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  // ON TOGGLE REMINDER
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor(private taskService:TaskServiceService ) {}

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleTask.emit(task);
  }
}
