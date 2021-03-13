
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student,StudentServes } from '../student/student.service';

@Component({
    selector: 'delete-form',
    templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.css'],
  providers: [StudentServes]

})
export class DeleteForm implements OnInit{

  @Input('s') students: Student[];
  studentForm: FormGroup;
  constructor(private studentserves: StudentServes, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
    });
  }
  
  getdata() {
    let delid = this.name.value;
    this.studentserves
    .deleteStudent(delid)
      .subscribe();
      window.location.reload();
  }


  get name() {
    return this.studentForm.get("name");
  }

  }