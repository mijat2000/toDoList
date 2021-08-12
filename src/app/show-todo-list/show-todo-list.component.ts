import { Component, OnInit } from '@angular/core';
import { toDos } from '../toDoData';
import { toDo } from '../toDoInterface';
@Component({
  selector: 'app-show-todo-list',
  templateUrl: './show-todo-list.component.html',
  styleUrls: ['./show-todo-list.component.css'],
})
export class ShowTodoListComponent implements OnInit {
  todos: toDo[] = toDos;

  
  constructor() {}

  ngOnInit(): void {}
}
