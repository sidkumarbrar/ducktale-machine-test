import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../shared/models/task';

@Component({
  selector: 'app-create-to-do-component',
  templateUrl: './create-to-do-component.component.html',
  styleUrls: ['./create-to-do-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateToDoComponentComponent implements OnInit {
  tasks: Task[];
  form: FormGroup;
  private taskCounter: number;
  constructor(private cdRef: ChangeDetectorRef) {
    this.tasks = new Array<Task>();
    this.taskCounter = 0;
    this.resetForm();
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      this.cdRef.detectChanges();
      this.submit();
    });
  }

  resetForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      repeating: new FormControl(null, [Validators.required]),
      done: new FormControl(false),
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    this.taskCounter = this.taskCounter + 1;
    this.tasks = [...this.tasks, { ...this.form.value, id: this.taskCounter }];
    this.form.reset();
  }
}
