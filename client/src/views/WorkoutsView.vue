<script setup lang="ts">
import session, {Users,Workouts,Exercises} from '../stores/session'
import LoginForm from '../components/LoginForm.vue'
</script>

<template>
  <div>
    <div v-if="session.user != null">
      <section>
      <h1 class="title">Workouts</h1>
      <h2 class="subtitle">
        {{ session.user.firstName }} {{session.user.lastName}}'s Workouts
      </h2>
    </section>
    </div>
    <div v-else>
      <LoginForm></LoginForm>
    </div>

  </div>
</template>



<style scoped>

</style>