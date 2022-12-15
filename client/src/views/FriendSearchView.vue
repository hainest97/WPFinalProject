<script setup lang="ts">
import session from '../stores/session';
import LoginForm from '../components/LoginForm.vue';
import FriendSearch from '../components/FriendSearch.vue';
import { RouterLink } from 'vue-router';


</script>

<template>
  <div v-if="session.user != null">
    <h1>Hello World</h1>
    <FriendSearch></FriendSearch>
  </div>
  <div v-else>
    <LoginForm></LoginForm>
  </div>
</template>

<style scoped></style>
