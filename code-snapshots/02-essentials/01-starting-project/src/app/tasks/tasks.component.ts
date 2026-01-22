import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  isAddingTask = false;


get SelectedUserTasks() {
  return this.tasks.filter(task => task.userId === this.userId);
}

  trackById(index: number, task: { id: string }) {
    return task.id;
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onCreateTask(data: { title: string; summary: string; dueDate: string }) {
    const newTask = {
      id: 't' + Math.random().toString(36).slice(2, 9),
      userId: this.userId,
      title: data.title,
      summary: data.summary,
      dueDate: data.dueDate
    };
    this.tasks = [...this.tasks, newTask];
    this.isAddingTask = false;
  }
}