<template>
  <div>
    <HomeStudent></HomeStudent>
    <HomeTeacher></HomeTeacher>
    <!-- <HomeRegister></HomeRegister>
    <HomePost></HomePost> -->

  </div>
</template>
<script>
  import HomeStudent from './components/student'
  import HomeTeacher from './components/teacher'
  import HomeRegister from './components/register'
  import HomePost from './components/post'

  import axios from 'axios'
  export default {
    components: {
      HomeStudent,
      HomeTeacher,
      HomeRegister,
      HomePost
    },
    data() {
      return {
        students: [],
        requires: [],
        teachers: [],
        register: [],
        post: []
      }
    },
    methods: {
      getData() {

      }
    },
    mounted() {
      this.students = this.$store.state.students;
      this.requires = this.$store.state.requires;
      this.teachers = this.$store.state.teachers;

    },
    created() {

    },
    activated() {

    },
  }

</script>
