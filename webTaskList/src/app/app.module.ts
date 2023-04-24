import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GenerateComponent } from './generate/generate.component';
import { ListTodoComponent } from './list-todo/list-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    GenerateComponent,
    ListTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
