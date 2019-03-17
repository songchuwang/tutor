export default {
  getParam(state, Object) {
    state.students = Object.students;
    state.requires = Object.requires;
    console.log(state.requires);
    state.teachers = Object.teachers;
    state.login = Object.login;
  },
  SET_STUDENTDINFO(state,data){
    console.log(data);

  }
}
