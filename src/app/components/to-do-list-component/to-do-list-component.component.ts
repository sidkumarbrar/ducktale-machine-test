import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from '../../shared/models/task';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponentComponent implements OnChanges {
  @Input() tasks: Task[];
  completedTasks: Task[];
  constructor(
    private cdRef: ChangeDetectorRef,
    private matSnackBar: MatSnackBar
  ) {
    this.tasks = new Array<Task>();
    this.completedTasks = new Array<Task>();
  }

  ngOnChanges() {
    this.cdRef.detectChanges();
  }

  markAsDone(task: Task) {
    this.tasks.splice(
      this.tasks.findIndex((x) => x.id === task.id),
      1
    );
    this.matSnackBar.open('Task marked as done!', 'Close', {
      duration: 3000,
    });
    this.completedTasks = [...this.completedTasks, task];
  }

  getRevertedUndoneTasks(task: Task) {
    this.tasks.push(task);
  }
}
