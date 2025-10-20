<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">

      <sticky :z-index="10" :class-name="'sub-navbar '+postForm.status">
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">
          Save
        </el-button>
        <el-button v-loading="loading" type="warning" @click="draftForm">
          Cancel
        </el-button>
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <el-card shadow="hover" class="rounded-2xl">
              <template #header>
                <span class="text-lg font-semibold">🩺 1. ព័ត៌មានអ្នកជំងឺ</span>
              </template>

              <!-- Name -->
              <el-form-item label="ឈ្មោះ (Name)" prop="name">
                <el-input v-model="postForm.name" placeholder="បញ្ចូលឈ្មោះ" />
              </el-form-item>

              <!-- Age -->
              <el-form-item label="អាយុ (Age)" prop="age">
                <el-input-number v-model="postForm.age" :min="0" />
              </el-form-item>

              <!-- Gender -->
              <el-form-item label="ភេទ (Gender)" prop="gender">
                <el-select v-model="postForm.gender" placeholder="ជ្រើសរើសភេទ">
                  <el-option label="ប្រុស (Male)" value="Male" />
                  <el-option label="ស្រី (Female)" value="Female" />
                </el-select>
              </el-form-item>

              <!-- Weight -->
              <el-form-item label="ទម្ងន់ (Weight)" prop="weight">
                <el-input-number :min="0" :step="0.1" />
                <span class="ml-2 text-gray-500">kg</span>
              </el-form-item>

              <!-- Address -->
              <el-form-item label="ទីតាំងរស់នៅ (Address)" prop="address">
                <el-input placeholder="បញ្ចូលទីតាំង" />
              </el-form-item>

              <!-- Illness -->
              <el-form-item label="ប្រភេទជំងឺ (Illness)" prop="illness">
                <el-select v-model="postForm.illness" placeholder="ជ្រើសរើសភេទ">
                  <el-option label="ជំងឺបេះដូង" value="Male" />
                  <el-option label="ជំងឺមហារីក" value="Female" />
                  <el-option label="ជំងឺទឹកនោមផ្អែម" value="Female" />
                </el-select>
              </el-form-item>

              <!-- Appointment Date -->
              <el-form-item label="កាលបរិច្ឆេទជួបគ្រូពេទ្យ (Appointment)" prop="appointmentDate">
                <el-date-picker
                  type="date"
                  placeholder="ជ្រើសរើសកាលបរិច្ឆេទ"
                  format="YYYY-MM-DD"
                  value-format="YYYY-MM-DD"
                />
              </el-form-item>

              <!-- Preview -->
              <!-- <el-divider />
              <div v-if="submitted" class="mt-4">
                <h3 class="font-semibold mb-2">📋 Submitted Data:</h3>
                <el-alert type="success" show-icon :closable="false">
                  <pre>{{ postForm }}</pre>
                </el-alert>
              </div> -->
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky' // 粘性header组件
import { validURL } from '@/utils/validate'
import { fetchArticle } from '@/api/article'
import { searchUser } from '@/api/remote-search'

const defaultForm = {
  status: 'draft',
  title: '', // 文章题目
  content: '', // 文章内容
  content_short: '', // 文章摘要
  source_uri: '', // 文章外链
  image_uri: '', // 文章图片
  display_time: undefined, // 前台展示时间
  id: undefined,
  platforms: ['a-platform'],
  comment_disabled: false,
  importance: 0
}

export default {
  name: 'PatientForm',
  components: { Sticky },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.field + '为必传项',
          type: 'error'
        })
        callback(new Error(rule.field + '为必传项'))
      } else {
        callback()
      }
    }
    const validateSourceUri = (rule, value, callback) => {
      if (value) {
        if (validURL(value)) {
          callback()
        } else {
          this.$message({
            message: '外链url填写不正确',
            type: 'error'
          })
          callback(new Error('外链url填写不正确'))
        }
      } else {
        callback()
      }
    }
    return {
      postForm: Object.assign({}, defaultForm),
      loading: false,
      userListOptions: [],
      rules: {
        name: [{ validator: validateRequire }],
        age: [{ validator: validateRequire }],
        content: [{ validator: validateRequire }],
        source_uri: [{ validator: validateSourceUri, trigger: 'blur' }]
      },
      tempRoute: {}
    }
  },
  computed: {
    contentShortLength() {
      return this.postForm.content_short.length
    },
    displayTime: {
      // set and get is useful when the data
      // returned by the back end api is different from the front end
      // back end return => "2013-06-25 06:59:25"
      // front end need timestamp => 1372114765000
      get() {
        return (+new Date(this.postForm.display_time))
      },
      set(val) {
        this.postForm.display_time = new Date(val)
      }
    }
  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(id)
    }

    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    fetchData(id) {
      fetchArticle(id).then(response => {
        this.postForm = response.data

        // just for test
        this.postForm.title += `   Article Id:${this.postForm.id}`
        this.postForm.content_short += `   Article Id:${this.postForm.id}`

        // set tagsview title
        this.setTagsViewTitle()

        // set page title
        this.setPageTitle()
      }).catch(err => {
        console.log(err)
      })
    },
    setTagsViewTitle() {
      const title = 'Edit Article'
      const route = Object.assign({}, this.tempRoute, { title: `${title}-${this.postForm.id}` })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    },
    setPageTitle() {
      const title = 'Edit Article'
      document.title = `${title} - ${this.postForm.id}`
    },
    submitForm() {
      console.log(this.postForm)
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$notify({
            title: 'Save Data',
            message: 'dd',
            type: 'success',
            duration: 2000
          })
          this.postForm.status = 'published'
          this.loading = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    draftForm() {
      if (this.postForm.content.length === 0 || this.postForm.title.length === 0) {
        this.$message({
          message: '请填写必要的标题和内容',
          type: 'warning'
        })
        return
      }
      this.$message({
        message: '保存成功',
        type: 'success',
        showClose: true,
        duration: 1000
      })
      this.postForm.status = 'draft'
    },
    getRemoteUserList(query) {
      searchUser(query).then(response => {
        if (!response.data.items) return
        this.userListOptions = response.data.items.map(v => v.name)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.createPost-container {
  position: relative;

  .createPost-main-container {
    padding: 40px 45px 20px 50px;

    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;

      .postInfo-container-item {
        float: left;
      }
    }
  }

  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
}

.article-textarea ::v-deep {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}
</style>
