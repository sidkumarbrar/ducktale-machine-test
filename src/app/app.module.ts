import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CreateToDoComponentComponent } from './components/create-to-do-component/create-to-do-component.component';
import { DoneListComponentComponent } from './components/done-list-component/done-list-component.component';
import { ToDoListComponentComponent } from './components/to-do-list-component/to-do-list-component.component';
import { MaterialModule } from './shared/modules/material.module';

const pages: Array<any> = [
  AppComponent,
  CreateToDoComponentComponent,
  ToDoListComponentComponent,
  DoneListComponentComponent,
];
@NgModule({
  declarations: pages,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
