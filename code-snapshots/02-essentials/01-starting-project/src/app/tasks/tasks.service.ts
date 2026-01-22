class TasksService {
  getTasks() {
   private tasks = [
  { id: 't1', userId: 'u1', title: 'Finish the Angular course', summary: 'Complete all modules', dueDate: '2026-02-28' },
  { id: 't2', userId: 'u2', title: 'Go for a walk', summary: 'Morning exercise', dueDate: '2026-01-25' },
  { id: 't3', userId: 'u3', title: 'Read a book', summary: 'Finish current book', dueDate: '2026-02-15' },
];

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }
  }