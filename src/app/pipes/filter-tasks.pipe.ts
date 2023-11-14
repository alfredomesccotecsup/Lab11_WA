import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTasks'
})
export class FilterTasksPipe implements PipeTransform {
  transform(tasks: any[], filter: string): any {
    if (filter === 'all') {
      return tasks;
    } else if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    } else if (filter === 'uncompleted') {
      return tasks.filter(task => !task.completed);
    }
    return tasks;
  }
}
