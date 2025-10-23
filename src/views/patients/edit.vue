<template>
  <patient-form :is-edit="true" />
</template>

<script>
import PatientForm from './components/PatientForm'

export default {
  name: 'EditPatient',
  components: { PatientForm }
}
</script>

