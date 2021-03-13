
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student, StudentServes } from '../student/student.service';

@Component({
    selector: 'edit-form',
    templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
  providers: [StudentServes]

})
export class EditForm implements OnInit{

  @Input('s') students: Student[];
  studentForm: FormGroup;
  constructor(private studentserves: StudentServes,private fb: FormBuilder) {
    
  }
  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      gpa: ['', Validators.required],
      oldid: ['', Validators.required],
      date:['',Validators.required]
    });
  }
  
  getdata() {


    let newname = this.name.value;
    let oldid = this.oldid.value;
    let newgpa = this.gpa.value;

    let newid = this.id.value;
    let newdate = new Date(this.date.value);
    let updated = 0;
    let std: Student;
    this.students.forEach(element => {
      if (element.id == oldid && !updated) {
        updated = 1;
        element.id = newid;
        element.name = newname;
        element.gpa = newgpa;
        element.date = newdate;
        std = element;
        
      }

    });
    let sstd = {
      name: std.name,
      id: std.id,
      gpa: std.gpa,
      oldidd: oldid,
      date:newdate
    }
    if (updated==0) {
      alert("student Not found");
    }
    else{
      this.studentserves.updateStudent(sstd)
        .subscribe();
    }

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
  get oldid() {
    return this.studentForm.get("oldid");
  }
  get date() {
    return this.studentForm.get("date");
  }

  }