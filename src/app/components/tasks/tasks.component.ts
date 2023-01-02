import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskServiceService: TaskServiceService) {}
  
  // SUBSCRIBE TO THE OBSERVABLE
  ngOnInit(): void {
    this.taskServiceService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onDelete(task: Task) {
    if(task.id) {
      this.taskServiceService.deleteTask(task.id);
    }
   
  }
}
