// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  selectedFilter: string = 'all';

  addTask(task: string) {
    this.tasks.push({ name: task, completed: false });
    this.applyFilter(this.selectedFilter);
  }

  applyFilter(filter: string) {
    this.selectedFilter = filter;
    if (filter === 'all') {
      this.filteredTasks = this.tasks;
    } else if (filter === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (filter === 'uncompleted') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    }
  }

  onFilterChange(filter: string) {
    this.applyFilter(filter);
  }
}

interface Task {
  name: string;
  completed: boolean;
}
