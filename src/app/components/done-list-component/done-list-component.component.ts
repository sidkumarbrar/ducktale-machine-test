import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges, Output
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from '../../shared/models/task';

@Component({
  selector: 'app-done-list-component',
  templateUrl: './done-list-component.component.html',
  styleUrls: ['./done-list-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoneListComponentComponent implements OnChanges {
  @Input()
  tasks: Task[];
  @Output()
  private taskToUndone: EventEmitter<Task>;
  constructor(
    private cdRef: ChangeDetectorRef,
    private matSnackBar: MatSnackBar
  ) {
    this.tasks = new Array<Task>();
    this.taskToUndone = new EventEmitter<Task>();
  }

  ngOnChanges() {
    this.cdRef.detectChanges();
  }

  markAsUndone(task: Task) {
    this.tasks.splice(
      this.tasks.findIndex((x) => x.id === task.id),
      1
    );
    this.matSnackBar.open('Task marked as undone!', 'Close', {
      duration: 3000,
    });
    this.taskToUndone.emit(task);
  }
}
