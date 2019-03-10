import { Injectable } from '@angular/core';
import { INFOR } from './mock';
import { of, Observable } from 'rxjs';
import { Tutor } from './tutor';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }
  getTeachers() {
    return of(INFOR.filter(item => item.class === 'teacher'));
  }
  addTeacher(infor) {
    return of(INFOR.push(infor));
  }
}
