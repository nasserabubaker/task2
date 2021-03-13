import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student, StudentServes } from './student/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  studentForm: FormGroup;
  constructor(private studentserves: StudentServes, private fb: FormBuilder) { }
  students: Student[];
  ngOnInit(): void {
    this.getstudents();
    this.studentForm = this.fb.group({
      name: [ '', Validators.required],
      id: [ '',Validators.required],
      gpa: [ '',Validators.required]
    });
    

  }
  getstudents() {
      this.studentserves.getAllStudents()
        .subscribe(std => (this.students = std));
  }     

}
