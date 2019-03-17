<template>
  <div>
    <div>
      <h4>最新注册教师</h4>
      <el-table :data="teachers" stripe style="width: 35%">
        <el-table-column prop="teacherName" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="teacherSchool" label="学校" width="180">
        </el-table-column>
        <el-table-column prop="teacherSex" label="性别">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    // props: {
    //   teachers: {
    //     type: Array,
    //     default () {
    //       return []
    //     }
    //   }
    // },
    data() {
      return {
        // teachers: []
      }
    },
    methods: {

    },
    created() {

    },
    computed: {
      teachers() {
        return this.$store.state.teachers;
      }
    },
    mounted() {
      // this.teachers = this.$store.state.teachers;
      // this.$store.commit('getTeachers',this.$store.state.teachers)
      // this.$nextTick(()=>{

      // })
      // this.$nextTick(function(){
      //   console.log(this.teachers);

      //   this.teachers = this.$store.state.teachers
      // })


    },
  }

</script>
