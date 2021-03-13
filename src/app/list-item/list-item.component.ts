
import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student/student.service';
@Component({
    selector: 'list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItem{
  @Input('s') student: Student;
  
  }