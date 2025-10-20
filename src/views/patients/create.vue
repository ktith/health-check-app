<template>
  <patient-form :is-edit="false" />
</template>

<script>
import PatientForm from './components/PatientForm'

export default {
  name: 'CreateArticle',
  components: { PatientForm }
}
</script>

