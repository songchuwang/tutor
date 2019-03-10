import { Component, OnInit } from '@angular/core';
import { Tutor } from '../tutor';
import { StudentService } from '../student.service';
import { TeacherService } from '../teacher.service';
import { INFOR } from '../mock';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students: Tutor[];
  teachers: Tutor[];
  // teachers: Teacher[];

  constructor(private studentService: StudentService, private teacherService: TeacherService) { }

  ngOnInit() {
    this.getStudents();
    this.getTeachers();
  }
  getStudents(): void {
    // 因为observable返回的是一个值--数组形式的值，所有订阅的回调函数的值也是一个数组。
    this.studentService.getStudents().subscribe(students => this.students = students);
  }
  getTeachers() {
    this.teacherService.getTeachers().subscribe(teachers => this.teachers = teachers);
  }
  addInfor(name, infor): void {
    infor = infor.trim();
    this.studentService.addStudent({class: 'student', name, infor}).subscribe();
    // this.studentService.getStudents().subscribe(students => this.students = students);
    this.getStudents();
    console.log(INFOR);
  }
}
