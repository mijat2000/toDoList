import { Component, OnInit, Input } from '@angular/core';
import { toDo } from '../toDoInterface';
import { ShowDetailService } from '../show-detail.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent implements OnInit {
  @Input() toDoItem: any;
//probaaaa
  constructor(private data: ShowDetailService) {}
  changeDetail() {
    this.data.changeToDo(this.toDoItem);
  }
  ngOnInit(): void {}
}
