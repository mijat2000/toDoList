import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowTodoListComponent } from './show-todo-list/show-todo-list.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ShowTodoListComponent, ToDoItemComponent, ToDoDetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
