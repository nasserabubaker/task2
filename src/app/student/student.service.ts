import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

export interface Student {
  name: string,
  id: number,
  gpa: number,
  date: Date,
  regester:Date
}

@Injectable()
export class StudentServes {
  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {    
    return this.http.get<Student[]>('http://localhost:8000/api/students/');
  }

    getStudent(name: string): Observable<Student[]> {
        let url = 'http://localhost:8000/api/students/' + name;
        console.log(url);
      return this.http.get<Student[]>(url);
  }

  insertStudent(std: Student): Observable<Student[]> {
    return this.http.post<Student[]>('http://localhost:8000/api/students', std) 
  }

  updateStudent(std: any): Observable<void> {
    return this.http.put<void>(
      'http://localhost:8000/api/students/' + std.name,std
    )
  }

  deleteStudent(id: string) {
    let url = "http://localhost:8000/api/students/" + id;
    return this.http.delete(url)
  }
}