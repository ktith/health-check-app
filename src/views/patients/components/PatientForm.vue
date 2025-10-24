<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">
      <sticky :z-index="10" :class-name="'sub-navbar '+postForm.status">
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">
          {{ isEdit ? 'Update' : 'Add Patient' }}
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
                <span class="text-lg font-semibold">ចុះឈ្មោះអ្នកជំងឺ</span>
              </template>

              <!-- Patient Information -->
              <el-divider content-position="left">ព័ត៌មានអ្នកជំងឺ (Patient Information)</el-divider>
              <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="6">
                  <el-form-item label="ឈ្មោះ (Name)" prop="name">
                    <el-input v-model="postForm.name" placeholder="បញ្ចូលឈ្មោះ" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6">
                  <el-form-item label="អាយុ (Age)" prop="age">
                    <el-input v-model="postForm.age" type="number" min="0" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6">
                  <el-form-item label="ភេទ (Gender)" prop="gender">
                    <el-select v-model="postForm.gender" placeholder="ជ្រើសរើស">
                      <el-option label="ប្រុស (Male)" value="male" />
                      <el-option label="ស្រី (Female)" value="female" />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="6">
                  <el-form-item label="ទម្ងន់ (Weight)" prop="weight">
                    <el-input v-model="postForm.weight" placeholder="kg" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8">
                  <el-form-item label="កាលបរិច្ឆេទជួបគ្រូពេទ្យ (Appointment)">
                    <el-date-picker v-model="displayTime" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="Select date and time" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="24">
                  <el-form-item label="ទីតាំងរស់នៅ (Address)">
                    <el-input v-model="postForm.address" type="textarea" placeholder="បញ្ចូលទីតាំង" />
                  </el-form-item>
                </el-col>

              </el-row>

              <!-- Disease Type -->
              <el-divider content-position="left">ជ្រើសរើសប្រភេទនៃជំងឺ (Select Disease Type)</el-divider>
              <el-collapse>
                <el-collapse-item title="Cardiovascular diseases (ជំងឺបេះដូង)">
                  <el-checkbox-group v-model="postForm.diseases.cardiovascular">
                    <el-checkbox label="heart attacks" />
                    <el-checkbox label="stroke" />
                    <el-checkbox label="hypertension" />
                  </el-checkbox-group>
                </el-collapse-item>

                <el-collapse-item title="Chronic respiratory diseases (ជំងឺសួត)">
                  <el-checkbox-group v-model="postForm.diseases.respiratory">
                    <el-checkbox label="COPD" />
                    <el-checkbox label="asthma" />
                  </el-checkbox-group>
                </el-collapse-item>

                <el-collapse-item title="Cancers (ជំងឺមហារីក)">
                  <el-checkbox-group v-model="postForm.diseases.cancer">
                    <el-checkbox label="lung cancer" />
                    <el-checkbox label="breast cancer" />
                    <el-checkbox label="liver cancer" />
                    <el-checkbox label="cervical cancer" />
                  </el-checkbox-group>
                </el-collapse-item>

                <el-collapse-item title="Diabetes (ជំងឺទឹកនោមផ្អែម)">
                  <el-checkbox-group v-model="postForm.diseases.diabetes">
                    <el-checkbox label="type 1" />
                    <el-checkbox label="type 2" />
                  </el-checkbox-group>
                </el-collapse-item>

                <el-collapse-item title="Mental & neurological disorders (ជំងឺផ្លូវចិត្ត)">
                  <el-checkbox-group v-model="postForm.diseases.mental">
                    <el-checkbox label="Depression" />
                  </el-checkbox-group>
                </el-collapse-item>

                <el-collapse-item title="Musculoskeletal disorders (ជំងឺសាច់ដុំនិងឆ្អឹង)">
                  <el-checkbox-group v-model="postForm.diseases.musculoskeletal">
                    <el-checkbox label="arthritis" />
                    <el-checkbox label="osteoporosis" />
                  </el-checkbox-group>
                </el-collapse-item>

                <el-collapse-item title="Chronic kidney disease">
                  <el-checkbox-group v-model="postForm.diseases.kidney">
                    <el-checkbox label="chronic kidney disease" />
                  </el-checkbox-group>
                </el-collapse-item>
              </el-collapse>

              <!-- Vital Signs -->
              <el-divider content-position="left">ការយកសញ្ញាជីវិត ៥ (Vital Signs)</el-divider>
              <el-row :gutter="20">
                <el-col v-for="(label, key) in vitalLabels" :key="key" :xs="24" :sm="12" :md="6">
                  <el-form-item :label="label">
                    <el-input v-model="postForm.vitals[key]" placeholder="បញ្ចូលតម្លៃ" />
                  </el-form-item>
                </el-col>
              </el-row>

              <!-- Blood Sugar -->
              <el-form-item label="កម្រិតជាតិស្ករ (If diabetic)">
                <el-input v-model="postForm.vitals.bloodSugar" placeholder="mg/dL" />
              </el-form-item>

              <!-- Consultation -->
              <el-divider content-position="left">Consultation with Doctors</el-divider>
              <el-form-item label="ពិគ្រោះជាមួយវេជ្ជបណ្ឌិត">
                <el-input v-model="postForm.consultation" type="textarea" placeholder="សរសេរព័ត៌មានពិគ្រោះ" />
              </el-form-item>

              <!-- Advice -->
              <el-divider content-position="left">Give Advice (ដំបូន្មាន)</el-divider>
              <el-form-item label="ដំបូន្មានដល់អ្នកជំងឺ">
                <el-input v-model="postForm.adviceText" type="textarea" placeholder="សរសេរដំបូន្មាន" />
              </el-form-item>

              <el-form-item label="Video អប់រ (Educational Video)">
                <el-input v-model="postForm.adviceVideo" placeholder="Video URL" />
              </el-form-item>

              <!-- Reminder -->
              <el-divider content-position="left">Reminder for Patients</el-divider>
              <el-checkbox-group v-model="postForm.reminders">
                <el-checkbox label="ពេលហាត់ប្រាណ (Exercise time)" />
                <el-checkbox label="ញុំាបាយ (Meal time)" />
                <el-checkbox label="ពេលវេលាលេបថ្នាំ (Medication time)" />
              </el-checkbox-group>

            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>

import Sticky from '@/components/Sticky'
import { fetchPatient, addPatients } from '@/api/patient'

const vitalLabels = {
  bloodPressure: 'សម្ពាធឈាម (Blood Pressure)',
  pulse: 'ជីពចរ (Pulse)',
  oxygen: 'អុកសុីសែនក្នុងឈាម (Oxygen)',
  respiration: 'ចង្វាក់ដង្ហើម (Respiration)',
  temperature: 'សុីត្ហភាព (Temperature)'
}

const defaultForm = {
  name: '',
  age: '',
  gender: '',
  weight: '',
  address: '',
  illness: '',
  appointment_date: '',
  diseases: {
    cardiovascular: [],
    respiratory: [],
    cancer: [],
    diabetes: [],
    mental: [],
    musculoskeletal: [],
    kidney: []
  },
  vitals: {
    bloodPressure: '',
    pulse: '',
    oxygen: '',
    respiration: '',
    temperature: '',
    bloodSugar: ''
  },
  consultation: '',
  adviceText: '',
  adviceVideo: '',
  reminders: []
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
        callback(new Error(rule.field + ' is required'))
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
        gender: [{ validator: validateRequire }]
      },
      tempRoute: {},
      vitalLabels: vitalLabels
    }
  },
  computed: {
    displayTime: {
      // set and get is useful when the data
      // returned by the back end api is different from the front end
      // back end return => "2013-06-25 06:59:25"
      // front end need timestamp => 1372114765000
      get() {
        return (+new Date(this.postForm.appointment_date))
      },
      set(val) {
        this.postForm.appointment_date = new Date(val)
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
      fetchPatient(id).then(response => {
        if (response) {
          this.postForm = response
        } else {
          this.$notify.error({
            title: 'Error',
            message: 'Patient not found'
          })
          this.$router.push({ name: 'PatientList' })
        }
      }).catch(error => {
        console.error('Error fetching patient data:', error)
        this.$notify.error({
          title: 'Error',
          message: 'Failed to fetch patient data'
        })
        this.$router.push({ name: 'PatientList' })
      })
    },
    draftForm() {
      console.log('Draft cancelled')
      this.$router.push({ name: 'PatientList' })
    },
    submitForm() {
      // console.log(this.postForm)
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          addPatients(this.postForm).then(() => {
            this.$notify({
              title: 'Successfully!',
              message: 'Record has been saved.',
              type: 'success',
              duration: 2000
            })
            this.loading = false
            this.$router.push({ name: 'PatientList' })
          }).catch(error => {
            console.error('Error adding patient:', error)
            this.$notify.error({
              title: 'Error',
              message: 'Failed to save record'
            })
          })
        } else {
          console.log('error submit!!')
          return false
        }
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
    padding: 20px 10px;

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

  .el-divider__text{
    font-size: 15px !important;
    font-weight: 600 !important;
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
