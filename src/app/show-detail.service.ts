import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { toDo } from './toDoInterface';
import { toDos } from './toDoData';

@Injectable({
  providedIn: 'root',
})
export class ShowDetailService {
  private currentTodoItem = new BehaviorSubject<toDo>(toDos[0]);
  currenttoDo = this.currentTodoItem.asObservable();

  changeToDo(newToDo: toDo) {
    this.currentTodoItem.next(newToDo);
    console.log(newToDo);
  }
}
