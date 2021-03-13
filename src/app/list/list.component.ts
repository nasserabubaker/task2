
import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student/student.service';
@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class List{
  @Input('s') students: Student[];
  getindex(e) {
    
    return (this.students.indexOf(e)) +1;
  }
  }