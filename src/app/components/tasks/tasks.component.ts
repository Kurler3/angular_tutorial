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

  deleteTask(task: Task) {
    this.taskServiceService.deleteTask(task).subscribe((task) => {
      const findIndex = this.tasks.findIndex((taskInState) => taskInState.id === task.id);

      this.tasks.splice(findIndex, 1);
    });
  }


  onToggleTask(task: Task) {
    this.taskServiceService.updateTaskReminder(task).subscribe((task) => {
      const findIndex = this.tasks.findIndex((taskInState) => taskInState.id === task.id);
      this.tasks[findIndex] = task;
    })
  }

  // ADD TASK
  onAddTask(newTask: Task) {
    this.taskServiceService.createTask(newTask).subscribe((task) => {
      this.tasks.unshift(task);
    })
  }
}
