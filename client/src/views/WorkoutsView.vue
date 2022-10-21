<script setup lang="ts">
import session from '../stores/session';
import Workouts from '../components/Workouts.vue';
import LoginForm from '../components/LoginForm.vue';
</script>

<template>
  <div v-if="session.user != null">
    <Workouts></Workouts>
  </div>
  <div v-else>
    <LoginForm></LoginForm>
  </div>
</template>
