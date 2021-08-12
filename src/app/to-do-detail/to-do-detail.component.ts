import { Component, OnInit, ɵsetCurrentInjector } from '@angular/core';
import { toDo } from '../toDoInterface';
import { ShowDetailService } from '../show-detail.service';

@Component({
  selector: 'app-to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.css'],
})
export class ToDoDetailComponent implements OnInit {
  todo: any;

  constructor(private data: ShowDetailService) {}

  ngOnInit(): void {
    this.data.currenttoDo.subscribe((current) => (this.todo = current));
  }
}
