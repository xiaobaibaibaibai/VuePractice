<template>
  <div class="home">
    <label>Add A Task</label>
    <input
      autofocus
      placeholder="name a task"
      v-on:keyup.enter="addNewTask"
    >
    <br><br>
    <button @click="test">print</button>
    <br><br>
    <el-button type="primary" @click="test">按钮</el-button>
    <br><br>

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="活动名称">
        <el-upload
          class="upload-demo"
          action="http://localhost:5000/test/test1/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
          >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

    <ShowTasks />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowTasks from '@/components/ShowTasks.vue'
import { mapActions } from 'vuex';
import request from './request'

export default {
  name: 'TaskManagement',
  components: {
    ShowTasks
  },
  data() {
    return {
      form: {
        name: '',
      },
      fileList:[],
    }
  },
  methods: {
    ...mapActions([
      'fetchInitialData',
    ]),
    addNewTask(e) {
      const text = e.target.value;
      if (text.trim()) {
          this.$store.dispatch('addNewTask', text);
      }
      e.target.value = '';
    },
    onSubmit() {
      console.log('submit!');
    },
    test() {
      request({
        url: '/test/test1',
        method: 'post',
        data: {
          form: this.form
        }
      }).then(response => {
        console.log('in vue, response');
        console.log(response);
      })
    },


    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
  },
}
</script>
