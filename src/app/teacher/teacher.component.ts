import { Component, OnInit } from '@angular/core';
import { Tutor } from '../tutor';
import { TeacherService } from '../teacher.service';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  teachers: Tutor[];
  students: Tutor[];
  constructor(private teacherService: TeacherService, private studentService: StudentService) { }

  ngOnInit() {
    this.getTeachers();
    this.getStudents();
  }
  getTeachers(): void {
    this.teacherService.getTeachers().subscribe(teachers => this.teachers = teachers);
  }
  getStudents() {
    this.studentService.getStudents().subscribe(students => this.students = students);
  }
  addTeacher(name,infor) {
    this.teacherService.addTeacher({class: 'teacher', name, infor}).subscribe();
    this.getTeachers();
  }

}
