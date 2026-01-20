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
tasks = [
  { id: 't1', userId: 'u1', title: 'Finish the Angular course', summary: 'Complete all modules', dueDate: '2026-02-28' },
  { id: 't2', userId: 'u2', title: 'Go for a walk', summary: 'Morning exercise', dueDate: '2026-01-25' },
  { id: 't3', userId: 'u3', title: 'Read a book', summary: 'Finish current book', dueDate: '2026-02-15' },
];

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
}