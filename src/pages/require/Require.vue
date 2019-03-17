<template>
  <div>
    <h4>需求信息</h4>
    <el-table :data="selectBeforeFiveTip" stripe style="width: 100%;float:right;">
      <el-table-column prop="requireId" label="需求编号" width="180">
      </el-table-column>
      <el-table-column prop="requireCourse" label="辅助科目" width="180">
      </el-table-column>
      <el-table-column prop="requireSex" label="性别要求">
      </el-table-column>
      <el-table-column prop="requirePrice" label="费用">
      </el-table-column>
      <el-table-column prop="requireAddress" label="授课地点">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    computed: {
      // requires() {
      //   return this.$store.state.requires;
      // },
      selectBeforeFiveTip(){
        return this.$store.getters.beforeFiveTip
      },
    },
  }

</script>
