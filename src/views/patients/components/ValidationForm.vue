<template>
  <div class="app-container">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="120px">
      <!-- Name Field -->
      <el-form-item label="Name" prop="name">
        <el-input v-model="form.name" placeholder="Enter your name" />
      </el-form-item>

      <!-- Age Field -->
      <el-form-item label="Age" prop="age">
        <el-input
          v-model="form.age"
          placeholder="Enter your age"
          type="number"
        />
      </el-form-item>

      <!-- Gender -->
      <el-form-item label="Gender" prop="gender">
        <el-select v-model="form.gender" placeholder="Select gender">
          <el-option label="Male" value="male" />
          <el-option label="Female" value="female" />
        </el-select>
      </el-form-item>

      <!-- Submit Button -->
      <el-form-item>
        <el-button type="primary" @click="submitForm">Submit</el-button>
        <el-button @click="resetForm">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ValidationForm',
  data() {
    return {
      form: {
        name: '',
        age: '',
        gender: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input name', trigger: 'blur' },
          {
            min: 3,
            message: 'Name must be at least 3 characters',
            trigger: 'blur'
          }
        ],
        age: [
          { required: true, message: 'Please input age', trigger: 'blur' },
          {
            type: 'number',
            message: 'Age must be a number',
            trigger: 'blur',
            transform(value) {
              return Number(value)
            }
          }
        ],
        gender: [
          {
            required: true,
            message: 'Please select gender',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          this.$message.success('Form submitted successfully!')
        } else {
          this.$message.error('Please correct the errors!')
          return false
        }
      })
    },
    resetForm() {
      this.$refs.formRef.resetFields()
    }
  }
}
</script>

