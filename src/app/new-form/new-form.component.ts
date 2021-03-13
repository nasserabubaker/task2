
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student, StudentServes } from '../student/student.service';

@Component({
    selector: 'new-form',
    templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css'],
})
export class newForm implements OnInit{
  @Input('s') students: Student[];
  studentForm: FormGroup;
  constructor(private studentserves: StudentServes,private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: [ '', Validators.requiredTrue],
      id: [ Validators.required],
      gpa: [ Validators.required],
      birth: [ '',Validators.required]
    });
  }
  getdata() {

    let namevalue = this.name.value;
    let idvalue = this.id.value;
    let gpavalue = this.gpa.value;
    let birthdayvalue = (this.birth.value);
    birthdayvalue = new Date(birthdayvalue);
    let reg = new Date();
    let sstd: Student = {
      name: namevalue, id: idvalue, gpa: gpavalue ,date:birthdayvalue,regester:reg
    };

      this.studentserves
      .insertStudent(sstd)
      .subscribe(hero => sstd);
      window.location.reload();
  }
  get name() {
    return this.studentForm.get("name");
  }
  get id() {
    return this.studentForm.get("id");
  }
  get gpa() {
    return this.studentForm.get("gpa");
  }
  get birth() {
    return this.studentForm.get("birth");
  }


  }