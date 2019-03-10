import { Injectable } from '@angular/core';
import { Tutor } from './tutor';
import { INFOR } from './mock';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  getStudents() {
    return of(INFOR.filter(item => item.class === 'student'));
  }
  addStudent(infor: any): Observable<any> {
    console.log(infor);
    return of(INFOR.push(infor));
  }
}
